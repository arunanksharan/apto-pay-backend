import { Injectable } from '@nestjs/common';
import { CreateApikeyDto } from './dto/create-apikey.dto';
import { UpdateApikeyDto } from './dto/update-apikey.dto';

@Injectable()
export class ApikeyService {
  create(createApikeyDto: CreateApikeyDto) {
    return 'This action adds a new apikey';
  }

  findAll() {
    return `This action returns all apikey`;
  }

  findOne(id: number) {
    return `This action returns a #${id} apikey`;
  }

  update(id: number, updateApikeyDto: UpdateApikeyDto) {
    return `This action updates a #${id} apikey`;
  }

  remove(id: number) {
    return `This action removes a #${id} apikey`;
  }
}
