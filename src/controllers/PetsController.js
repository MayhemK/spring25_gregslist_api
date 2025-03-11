import BaseController from "../utils/BaseController.js";

export class PetsController extends BaseController {
  constructor() {
    super('api/pets')
    this.router.get('', this.test)
  }
  test() {
    console.log('test Success');

  }
}
