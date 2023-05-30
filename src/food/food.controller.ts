import { ApiTags,ApiBearerAuth } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { FoodService } from './food.service';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
@ApiTags('food')
@ApiBearerAuth()

@UseGuards(AuthGuard("jwt"))//FE req kèm token mới  chạy qua file stragy.ts còn không sẽ không chạy và return về bảo mật  author
@Controller('food')
export class FoodController {
  constructor(
    private readonly foodService: FoodService,
    private jwtService: JwtService
  ) { }
  // @ApiParam()
  @Post()
  create(@Body() createFoodDto: CreateFoodDto) {
    return this.foodService.create(createFoodDto);
  }


  @Get("/getFood")
  findAll(@Req() req: Request) {

    let token = req.user;// token là dữ liệu đã được mã hóa từ accesstoken từ fe gửi lên , token nhận được từ jwt.stragy

    return token;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foodService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFoodDto: UpdateFoodDto) {
    return this.foodService.update(+id, updateFoodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.foodService.remove(+id);
  }
}
