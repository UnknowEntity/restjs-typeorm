import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    CacheModule.register({ ttl: 300 }),
  ],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
