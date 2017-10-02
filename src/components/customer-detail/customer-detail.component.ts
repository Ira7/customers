import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { CustomersService } from '../../providers/customer-service/customers.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customer:any;

  constructor(
     private customersService: CustomersService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  //  ngOnInit(): void {
  //   this.route.paramMap
  //     .switchMap((params: ParamMap) => this.customersService.getHero(+params.get('id')))
  //     .subscribe(hero => this.hero = hero);
  // }

  // save(): void {
  //   this.heroService.update(this.hero)
  //     .then(() => this.goBack());
  // }

  // goBack(): void {
  //   this.location.back();
  // }

  ngOnInit() {
    let id = null;
    this.route.params.subscribe((res)=>{
      id = res.id || null;
    });
    if(id === null){
      this.customer = [];
    }
    else{
      this.customer=this.customersService.getOneCostumer(Number(id));
    }
  //this.customer="Ira";
  }

}
