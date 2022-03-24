import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BillsModule } from './bills/bill.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ BillsModule,MongooseModule.forRoot('mongodb+srv://damour:damour@100%@cluster0.vyoty.mongodb.net/templates?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
