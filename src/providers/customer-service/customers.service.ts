import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CustomersService {
  http: Http;
customers: any;
customer:any;
   
  data: any;

  constructor(http: Http) {
    this.http = http;

    this.data = [
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
    ]
  }

  getOneCostumer(id){

   this.customer = this.data.find(item => item.id === id);
    
    // this.customer=this.data.forEach(item => {
    //      item.id == id;
    //   });
 

  //  this.customer=this.data.filter(item => {
  //              item.id == id;
  //              return item;
               
  //           });
        
  }

//     getCustomers(): Promise<Customer[]> {
//     return this.http.get(this.customerUrl)
//                .toPromise()
//                .then(response => response.json().data as Customer[])
//                .catch(this.handleError);
//   }


//   getCustomer(id: number): Promise<Customer> {
//     const url = '${this.customerUrl}/${id}';
//     return this.http.get(url)
//       .toPromise()
//       .then(response => response.json().data as Customer)
//       .catch(this.handleError);
//   }

//   delete(id: number): Promise<void> {
//     const url = '${this.customerUrl}/${id}';
//     return this.http.delete(url, {headers: this.headers})
//       .toPromise()
//       .then(() => null)
//       .catch(this.handleError);
//   }

//   create(name: string): Promise<Customer> {
//     return this.http
//       .post(this.customerUrl, JSON.stringify({name: name}), {headers: this.headers})
//       .toPromise()
//       .then(res => res.json().data as Customer)
//       .catch(this.handleError);
//   }

// private handleError(error: any): Promise<any> {
//     console.error('An error occurred', error); // for demo purposes only
//     return Promise.reject(error.message || error);
//  }

}
