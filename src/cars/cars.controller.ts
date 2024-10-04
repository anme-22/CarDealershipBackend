import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCardById(@Param('id') id: string) {
    const numericId = parseInt(id, 10); // Convierte el id a número
    return this.carsService.findOneById(numericId);
  }
}
