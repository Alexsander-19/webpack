import _ from 'lodash';
import user from './modules/create';
import './styles/style.scss';

class Welcome {
  constructor(name) {
    this.name = name;
    this.colls1 = ['1', '2', '3'];
    this.colls2 = ['4', '5', '6'];
  }

  sayHi() {
    console.log(this.name);
  }

  concat() {
    const result = _.concat(this.colls1, this.colls2);
    return result;
  }
}

const welc = new Welcome(user.name);
welc.sayHi();
console.log(welc.concat());
