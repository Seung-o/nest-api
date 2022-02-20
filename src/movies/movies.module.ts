import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
  controllers: [MoviesController], // url을 가져오고 함수를 실행하는 역할 (express의 router)
  providers: [MoviesService],
})
export class MoviesModule {}
