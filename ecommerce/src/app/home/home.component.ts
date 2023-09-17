import { Component } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  categories: any[] = [];
  products: any[] = [];
  brands: any[] = [];


  constructor(private _Dataservice: DataService) {
    this.gatCategories();
    this.gatBrands()
    this.gatProducts()

  }


  gatCategories() {
    this._Dataservice.getData('categories').subscribe((respond) => {
      this.categories = respond.data.slice(0, 4);
    })

  }



  gatProducts() {
    this._Dataservice.getData('products').subscribe((respond) => {
      this.products = respond.data.slice(0, 4);
    })

  }




  gatBrands() {
    this._Dataservice.getData('brands').subscribe((respond) => {
      this.brands = respond.data.slice(0, 4);
    })

  }







}


