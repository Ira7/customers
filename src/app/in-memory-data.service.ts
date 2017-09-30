import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const customers = [
      {id: 0, name: 'Dynarees', email: 'g@gmail.com', location: 'Dragonstone'},
      { id: 1, name: 'John', email: 'j@gmail.com', location: 'Dragonstone'},
      { id: 2, name: 'Sansa', email: 's@gmail.com', location: 'North' },
      { id: 3, name: 'Aria', email: 'a@gmail.com', location: 'North' },
      { id: 4, name: 'Tirion', email: 't@gmail.com', location: 'Westerose' },
      { id: 5, name: 'Dabos', email: 'd@gmail.com', location: 'Wall' },
      { id: 6, name: 'Jorah', email: 'jo@gmail.com', location: 'South' },
      { id: 7, name: 'Sam', email: 's@gmail.com', location: 'Wall' },
      { id: 8, name: 'Jamy', email: 'ja@gmail.com', location: 'Westerose' },
      { id: 9, name: 'Dragon', email: 'dr@gmail.com', location: 'Dragonstone' },
      { id: 10, name: 'Namiriya', email: 'n@gmail.com', location: 'North' }
    ];
    return {customers};
  }
}
