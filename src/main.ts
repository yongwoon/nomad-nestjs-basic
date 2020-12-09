import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 허락된 파라미터 이외에는 받지 않는다.(자동 filtering)
      forbidNonWhitelisted: true, // 허락된 파라미터 이외에는 에러를 발생시킨다.
      transform: true, // 파라미터를 보고 실제로 우리가 쓸 타입으로 변환시켜준다.(자동타입 변환) ex. id: string -> number
    }),
  );
  await app.listen(3000);
}
bootstrap();
