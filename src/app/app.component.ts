import { Component } from '@angular/core';

const productData={
	name:"Bobble Hat",
	image:"https://img.hutshopping.de/Giant-Bobble-Hat-by-McBURN.39929_f104.jpg",
	description: `Your new favourite hat.
	A comfy plait knit pattern in chunky, warm quality makes this soft ladies’
	cap by McBURN the optimum headgear for a cold winter’s day. The voluminous pompom will
	keep you warm in snowy and icy weather and gives the trendy bobble hat a sporty,
	carefree look.
	With a wide lined edge in fluffy fleece.`,
	price:{amount:"39.95",
	currency:"EUR"},
	brand:"McBURN",
	sku:"39929",
	properties:[
	{name:"Size",value:"One size (approx. 55-59 cm)"},
	{name:"Material",value:"70% polyacrylics; 30% wool"},
	{name:"Lining",value:"100% polyester (fleece)"},
	{name:"Colour",value:"Lavender"}
]
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public data = productData;
}