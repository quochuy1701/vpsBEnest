import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { FoodModule } from './food/food.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, FoodModule,
  ConfigModule.forRoot({isGlobal:true}),//cho phép tất cả đọc được dữ liệu trong env
  AuthModule,
  JwtModule.register({ global: true})

  ],// kêt nối đến food ,user
  controllers: [AppController], // nơi kêt nối các service và các controller lại với nhau và các module khác
  providers: [AppService],
})
export class AppModule {}
