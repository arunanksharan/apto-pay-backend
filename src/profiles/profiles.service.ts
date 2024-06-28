import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateUserprofileDto } from './dto/update-profile.dto';

@Injectable()
export class UserprofilesService {
  create(createUserprofileDto: CreateProfileDto) {
    console.log(createUserprofileDto);
    return 'This action adds a new userprofile';
  }

  findAll() {
    return `This action returns all userprofiles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userprofile`;
  }

  update(id: number, updateUserprofileDto: UpdateUserprofileDto) {
    console.log(updateUserprofileDto);
    return `This action updates a #${id} userprofile`;
  }

  remove(id: number) {
    return `This action removes a #${id} userprofile`;
  }
}
