import { Module } from '@nestjs/common';
import { UserprofilesService } from './profiles.service';
import { UserprofilesController } from './profiles.controller';

@Module({
  controllers: [UserprofilesController],
  providers: [UserprofilesService],
})
export class UserprofilesModule {}
