import { Module } from '@nestjs/common';
import { Gr1Module } from './gr1/gr1.module';

@Module({
  imports: [Gr1Module],
})
export class AppModule {}
