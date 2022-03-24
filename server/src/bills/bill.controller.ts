import { Controller, Get, Post, Body,  Param, NotFoundException,} from '@nestjs/common';
import { BillService } from './bill.service';
import { CreateBillDto } from './dto/create-bill.dto';

@Controller()
export class BillController {
  constructor(
    private readonly billService: BillService,
    ) {}

  @Post()
  create(@Body() createPostDto: CreateBillDto) {

        return this.billService.create(createPostDto);

  }


  @Get(':token')
  findOne(@Param('token') id: string) {
    return this.billService.findToken(+id);
  }
  @Get(':usernumber')
  findByNumber(@Param('usernumber') id: string) {
    return this.billService.findOne(+id);
  }
   
  
}
