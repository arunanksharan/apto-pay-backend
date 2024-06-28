import { PartialType } from '@nestjs/mapped-types';
import { CreateProfileDto } from './create-profile.dto';

export class UpdateUserprofileDto extends PartialType(CreateProfileDto) {}
