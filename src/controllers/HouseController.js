import BaseController from "../utils/BaseController.js";

export class HouseController extends BaseController {
  constructor() {
    super('api/houses')
    this.router.get('', this.test)
  }
  test() {
    console.log('test successs from homes');
  }
}