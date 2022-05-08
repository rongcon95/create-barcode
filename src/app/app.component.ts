import {Component, OnInit} from '@angular/core';
import * as JsBarcode from "jsbarcode";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'create-barcpde';

  form = new FormGroup({
    barcode: new FormControl(null),
  });

  ngOnInit(): void {
    JsBarcode("#barcode", "0888066072205");

    this.form.get('barcode')?.valueChanges.subscribe(val => {
      JsBarcode("#barcode", val);
    })
  }
}
