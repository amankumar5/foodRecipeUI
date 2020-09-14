import { FetchinfoService } from './fetchinfo.service';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private service: FetchinfoService) { }
  async ngOnInit(): Promise<void> {
    this.recipe = await this.service.fetchRecipe();
    this.recipeCopy=[...this.recipe];
    this.showModal=false
  }
  showModal:Boolean
  recipeCopy=[];
  title = 'hackedRecipe';
   recipe=[   {
    "id":0,
    "name":"Uthappizza",
    "image":"https://i.imgur.com/tDnjTXf.jpg",
    "category":"mains",
    "label":"Hot",
    "price":"4.99",
    "description":"A unique combination of Indian Uthappam (pancake) and Italian pizza"
 
},
 {
    "id":1,
    "name":"Zucchipakoda",
    "image":"https://i.imgur.com/xkUElXq.jpg",
    "category":"appetizer",
    "label":"",
    "price":"1.99",
    "description":"Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce"
 
},
 {
    "id":2,
    "name":"Vadonut",
    "image":"https://i.imgur.com/anUAlqF.jpg",
    "category":"appetizer",
    "label":"New",
    "price":"1.99",
    "description":"A quintessential ConFusion experience, is it a vada or is it a donut?"
 
},
 {
    "id":3,
    "name":"ElaiCheese Cake",
    "image":"https://i.imgur.com/c5hBTEW.jpg",
    "category":"dessert",
    "label":"",
    "price":"2.99",
    "description":"A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"
 
},
 {
    "id":4,
    "name":"Guntur chillies",
    "image":"https://i.imgur.com/Vc9JIXP.jpg",
    "category":"appetizer",
    "label":"Spicy",
    "price":"0.99",
    "description":"Assorted chillies from Guntur"
 
},
 {
    "id":5,
    "name":"Buffalo Paneer",
    "image":"https://i.imgur.com/pH2tkgk.jpg",
    "category":"appetizer",
    "label":"",
    "price":"5.99",
    "description":"A special type of Paneer made from Buffalo milk"
 
},
 {
    "id":6,
    "name":"Cherry Tomatoes",
    "image":"https://i.imgur.com/fRy8hjE.jpg",
    "category":"clone",
    "label":"clone",
    "price":"9.99",
    "description":"clone of cherry and tomato"
 
},
 {
    "id":7,
    "name":"Goat Milk",
    "image":"https://i.imgur.com/zFGPhrI.jpg",
    "category":"weird",
    "label":"weird",
    "price":"1.99",
    "description":"Medicinal Goat Milk"
 
},
 {
    "id":8,
    "name":"Rose breasted Grosbeak chicken",
    "image":"https://i.imgur.com/RYsqgoo.jpg",
    "category":"appetizer",
    "label":"New",
    "price":"7.99",
    "description":"Roasted rare bird"
 
},
 {
    "id":9,
    "name":"Toenail Zingy",
    "image":"https://i.imgur.com/IpG3YOT.jpg",
    "category":"appetizer",
    "label":"weird",
    "price":"0.99",
    "description":"Cooked Toenails of various animals"
 
}
]
public recipieTitles
public searchrecipieTitles=""
public recipieTitlesCopy
public searchKey=""
public noOfDiv=(this.recipe.length/4==0)? this.recipe.length/4:this.recipe.length/4+1;
Search()
{
  var search=this.searchrecipieTitles
  this.recipe = this.recipeCopy.filter(function (tag) {
    console.log(search);
    return RegExp(search.toString(), 'gi').test(tag['name']);
    
  });
}
highlight( value: string) {

  var dupkey = this.searchrecipieTitles
  if (this.searchrecipieTitles === '')
    return value;
  else
    return (value.replace(new RegExp(dupkey, 'gi'), '<span class="highlightedText">$&</span>'));

}
popupRec={};

showPopUp(rec)
{ 
  console.log(rec)
  this.showModal=true;
  this.popupRec=rec;
  console.log(this.popupRec);
  console.log(this.popupRec['image'])
}
public goBack()
{
 this.showModal=false;
}
}
