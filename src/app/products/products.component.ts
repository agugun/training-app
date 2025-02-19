import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ProducsService } from '../services/producs.service';
import { Product } from '../models/product.models';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements  OnInit, OnChanges, DoCheck, OnDestroy {

  productPrice: number = 7;
  noOfProducts: number = 3;
  imageUrl: string = 'https://images.everydayhealth.com/images/diet-nutrition/apples-101-about-1440x810.jpg?sfvrsn=f86f2644_5';

  prod_details: Product;
  prod_list: Product[] = [
    {
      product_id: 1, 
      product_name: "Apple", 
      product_price: 5, 
      product_desc: 'An apple is a round, edible fruit produced by an apple tree (Malus spp., among them the domestic or orchard apple; Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found. Apples have been grown for thousands of years in Eurasia and were introduced to North America by European colonists. Apples have religious and mythological significance in many cultures, including Norse, Greek, and European Christian tradition.',
      product_url: 'https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg?w=300'
    },
    {
      product_id: 2, 
      product_name: "Orange", 
      product_price: 5, 
      product_desc: 'The orange, also called sweet orange to distinguish it from the bitter orange (Citrus × aurantium), is the fruit of a tree in the family Rutaceae. Botanically, this is the hybrid Citrus × sinensis, between the pomelo (Citrus maxima) and the mandarin orange (Citrus reticulata). The chloroplast genome, and therefore the maternal line, is that of pomelo. There are many related hybrids including of mandarins and sweet orange. The sweet orange has had its full genome sequenced.',
      product_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Oranges_-_whole-halved-segment.jpg/1280px-Oranges_-_whole-halved-segment.jpg'
    },
    {
      product_id: 3, 
      product_name: "Banana", 
      product_price: 5, 
      product_desc: 'A banana is an elongated, edible fruit – botanically a berry[1] – produced by several kinds of large treelike herbaceous flowering plants in the genus Musa. In some countries, cooking bananas are called plantains, distinguishing them from dessert bananas. The fruit is variable in size, color and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a peel, which may have a variety of colors when ripe. It grows upward in clusters near the top of the plant. Almost all modern edible seedless (parthenocarp) cultivated bananas come from two wild species – Musa acuminata and Musa balbisiana, or hybrids of them.',
      product_url: 'https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2018/08/bananas-1354785_1920-768x512.jpg'
    },
    {
      product_id: 3, 
      product_name: "Mango", 
      product_price: 5, 
      product_desc: 'A mango is an edible stone fruit produced by the tropical tree Mangifera indica. It originated from the region between northwestern Myanmar, Bangladesh, and northeastern India.[1][2] M. indica has been cultivated in South and Southeast Asia since ancient times resulting in two types of modern mango cultivars: the "Indian type" and the "Southeast Asian type".[1][2] Other species in the genus Mangifera also produce edible fruits that are also called "mangoes", the majority of which are found in the Malesian ecoregion.',
      product_url: 'https://sukhis.com/app/uploads/2022/09/image4-1024x683.jpg'
    },
    {
      product_id: 3, 
      product_name: "Melon", 
      product_price: 5, 
      product_desc: 'A melon is any of various plants of the family Cucurbitaceae with sweet, edible, and fleshy fruit. It can also specifically refer to Cucumis melo, commonly known as the "true melon" or simply "melon". The term "melon" can apply to both the plant and its fruit. Botanically, a melon is a kind of berry, specifically a "pepo". The word melon derives from Latin melopepo,[1][2] which is the latinization of the Greek μηλοπέπων (mēlopepōn), meaning "melon",[3] itself a compound of μῆλον (mēlon), "apple", treefruit (of any kind)"[4] and πέπων (pepōn), amongst others "a kind of gourd or melon".[5] Many different cultivars have been produced, particularly of the true melon, such as the cantaloupe and honeydew.',
      product_url: 'https://cdn.felixinstruments.com/app/uploads/2022/09/25025809/All-about-melon-HEADER.jpg.webp'
    }
  ];
  skip_orange: boolean = true;

  constructor(prodDetail: ProducsService) {
    this.prod_details = prodDetail.getProductDetails(); 
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }
  ngDoCheck(): void {
    console.log('ngDoCheck')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges')
  }
  ngOnInit(): void {
    console.log('ngOnInit')
  }
  newProduct() {
    console.log("new product")
  }
  showProducts(msg: string) {
    console.log("refresh product " + msg)
  }
}
