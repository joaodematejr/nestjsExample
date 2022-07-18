import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { PrintModule } from './print/print.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [CatModule, PrintModule, ChatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
