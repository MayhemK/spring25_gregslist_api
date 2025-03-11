import BaseController from "../utils/BaseController.js";

export class PetsController extends BaseController {
  constructor() {
    super('api/pets')
    this.router.get('',)
  }
  test() {
    console.log('test Success');

  }
}
