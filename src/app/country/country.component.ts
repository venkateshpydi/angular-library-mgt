import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../models/country.model';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
 @Input() countries : Country[];
 selectedCountry : string;
 isCountrySelected : boolean = false;
  constructor() { }
  debugger;
  ngOnInit() {
  }
  loadStates(countrycode:string)
  {
    debugger
    this.selectedCountry = countrycode;
    this.isCountrySelected = (countrycode == "0") ? false : true;
   console.log(countrycode);
  }
  
}
