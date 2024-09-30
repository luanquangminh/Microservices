import { Module } from '@nestjs/common';
import { Gr1Controller } from './gr1.controller';
import { Gr1Service } from './gr1.service';

@Module({
  controllers: [Gr1Controller],
  providers: [Gr1Service],
})
export class Gr1Module {}
