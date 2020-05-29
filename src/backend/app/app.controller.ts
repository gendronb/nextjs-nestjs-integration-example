import { Controller, Get } from "@nestjs/common";

import { AppService } from './app.service'

@Controller("randomNumber")
export class AppController {

  constructor(private appService: AppService) {}

  @Get()
  randomNumber() {
    return this.appService.createRandomNumber()
  }

}