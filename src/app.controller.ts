import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AzureADGuard } from './azure-ad.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AzureADGuard)
  getHello(): string {
    return this.appService.getHello();
  }
}
