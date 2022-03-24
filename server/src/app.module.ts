import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BillsModule } from './bills/bill.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ BillsModule,MongooseModule.forRoot('mongodb://mongo:27017/bill')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
