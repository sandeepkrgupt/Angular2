import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-products',
  templateUrl: './add-new-products.component.html',
  styleUrls: ['./add-new-products.component.css']
})
export class AddNewProductsComponent implements OnInit {
	private productEntry : any = {};
	private productList : any[] = [{
		pdt_id : 1676765,
		pdt_name : 'Tata Tea',
		pdt_price : '45/100g',
		pdt_avail : 'In Stock',
		pdt_quantty : 50,
		pdt_discount : '10% on 2 pack'
	},
	{
		pdt_id : 25645645,
		pdt_name : 'detol',
		pdt_price : 40,
		pdt_avail : 'In Stock',
		pdt_quantty : 22,
		pdt_discount : '10% on 4 pieces'
	},
	{
		pdt_id : 356546456,
		pdt_name : 'Painteen',
		pdt_price : '220/100ml',
		pdt_avail : 'In Stock',
		pdt_quantty : 5,
		pdt_discount : '5% on each pack'

	},{
		pdt_id : 4546456546,
		pdt_name : 'Tata Salt',
		pdt_price : '45/1kg',
		pdt_avail : 'In Stock',
		pdt_quantty : 500,
		pdt_discount : 'No Discount',
		pdt_detail:{
			discount_lstdate : '12/12/2017',
			manu_date : '11/11/2016',
			expry_date : 'not Available'
		}
	}];

// adding new products
addNewPdt(){
	this.productList.push(this.productEntry);
	this.productEntry = {};
}
editPdt(y : any){
	this.productEntry = y;
}
updatePdt(){
	for(let i=0; i<this.productList.length; i++){
		if(this.productEntry.pdt_id == this.productList[i].pdt_id){
			this.productList[i] = this.productEntry;
		}
	}
}
deletePdt(y : any){
    for(let i = 0 ; i<this.productList.length ; i++){
		if(y.pdt_id == this.productList[i].pdt_id){
			this.productList.splice(i,1);
		}
    }
}
  constructor() { }

  ngOnInit() {
  }

}
