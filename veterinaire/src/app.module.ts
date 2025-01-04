/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StockModule } from './stock/stock.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AnimalModule } from './animal/animal.module';
import { OrdonnanceModule } from './ordonance/ordonance.module';
import { FacturationModule } from './facturation/facturation.module';


@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/veterinaire'),
    UserModule,
    AuthModule,
    StockModule,
    AnimalModule,
    OrdonnanceModule,
    FacturationModule,
  ],
  // providers: [FacturationService],
  // controllers: [FacturationController],
})
export class AppModule {}
