import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {

  createRandomNumber () {
    return Math.random() * 100
  }

}