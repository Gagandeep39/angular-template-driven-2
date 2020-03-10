import { Component, OnInit, ViewChild } from "@angular/core";
import { Product } from "../models/product.model";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"]
})
export class AddComponent implements OnInit {
  @ViewChild("form") formObject: NgForm;

  clickButton: string = "lol";
  product: Product;

  constructor() {
    this.product = new Product();
  }

  ngOnInit() {}

  addProduct() {
    console.log(this.formObject);
    this.storeList.forEach(element => {
      if (element.checked) this.product.inStores.push(element.item);
    });
    console.log(this.product);
    this.product = new Product();
    console.log(this.formObject);
    this.formObject.resetForm();
  }

  optionsList: string[] = ["Yes", "No"];
  categoryList: string[] = ["Grocery", "Mobile", "Electronics", "Clothes"];
  storeList = [
    { item: "Big Bazar", checked: false },
    { item: "D Mart", checked: false },
    { item: "Reliance", checked: false },
    { item: "Mega Store", checked: false }
  ];
}
