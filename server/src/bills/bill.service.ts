import { Injectable, NotAcceptableException, NotFoundException, NotImplementedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateBillDto } from './dto/create-bill.dto';
import { Model } from 'mongoose';
import { Bill, BillDocument } from './entities/bill.entity';
import { uuidv4 } from "uuid";
import { getDaysDifference } from 'src/utils/tokenValidation';
@Injectable()
export class BillService {

  constructor(
    @InjectModel(Bill.name)
    private templateModel: Model<BillDocument>
  ) { }
  async create(createBillDto: CreateBillDto) {
    
  const meter = await this.templateModel.findOne({ usernumber: createBillDto.usernumber });

  if (!meter)
    return new NotFoundException("Meter Not Found"),
  

  // Save Token in the database
  this.templateModel.create({
    token: uuidv4(), // new uuid
    usernumber: createBillDto.usernumber,
    amount: createBillDto.amount,
    status: "unused",
  })
    .then((data) => {
     return data;
    })
    .catch((err) => {
      return new NotAcceptableException(err.message || "Some error occurred while creating the Token.")
      })
     
  }

  async findToken(token: number) {
    const toke = await this.templateModel.findOne({ token: token })
    if (!this.isExipered(toke)) {
      return new NotAcceptableException("token is expired")
    }
    return { ...toke, remain: this.remain(toke) }
  }
  isExipered(token) {
    const remain = this.remain(token)
    if (remain > 0) {
      return true;
    } else {
      return false
    }
  }
  remain(token) {
    return Date.now() - new Date().setDate(new Date(token.token).getDate() + token.expiredat)
  }
   
  getMeterDetails = (token:number) => {
  
    this.templateModel.findOne({ token })
      .then((data) => {
        if (!data)
        return new NotFoundException("Not found Meter with number " + token)
          
        else return getDaysDifference(data.expired);
      })
      .catch((err) => {
        return new NotAcceptableException("Error retrieving Meter with number=" + token)
        });
      
  }
  findOne(userNumber: number) {
    this.templateModel.findOne({ usernumber: userNumber })
    .then((data) => {
      if (!data)
      return new NotFoundException("Not found Meter with number " + userNumber)
       
      else return data;
    })
    .catch((err) => {
      new NotAcceptableException("Error retrieving Meter with number=" + userNumber)
      })
  }
  delete(id: any) {
    this.templateModel.findOneAndDelete({ code: id }, { useFindAndModify: false })
      .then((data) => {
        if (!data) {

          return new NotFoundException("Could not delete Meter with number=" + id)
        } else {

          return "Meter was deleted successfully!"

        }
      })
      .catch((err) => {
        return new NotImplementedException("Could not delete Meter with number=" + id)
      });
  }

}
