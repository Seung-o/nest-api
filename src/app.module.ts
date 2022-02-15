import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

@Module({
  imports: [],
  controllers: [MoviesController], // url을 가져오고 함수를 실행하는 역할 (express의 router)
  providers: [],
})
export class AppModule {}
