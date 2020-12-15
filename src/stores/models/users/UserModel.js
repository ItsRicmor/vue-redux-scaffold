import { BaseModel } from 'sjs-base-model';

export default class UserModel extends BaseModel {
  id = '';
  name = '';
  username = '';
  email = '';
  phone = '';
  website = '';

  constructor(data = {}) {
    super();
    if (!Object.keys(data).length) {
      this.id = null;
    }
    this.update(data);
  }
}
