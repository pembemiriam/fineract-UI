import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-fundssummarypentaho',
  templateUrl: './fundssummarypentaho.component.html',
  styleUrls: ['./fundssummarypentaho.component.css']
})
export class FundssummarypentahoComponent implements OnInit {
  myControl = new FormControl('', [Validators.required]);

  currencies = [
    { name: 'US Dollar' },
    { name: 'All' }
  ];
  funds = [{ name: '-' },
  { name: 'All' },
  ];
  decimals = [
    { value: 'zero', viewValue: 'Zero decimal places' },
    { value: '4', viewValue: '4' },
    { value: '3', viewValue: '3' },
    { value: '2', viewValue: '2' },
    { value: '1', viewValue: '1' },
    { value: '0', viewValue: '0' },
  ];
  formats = [
    {value: 'Normal format', viewValue: 'Normal format'},
    {value: 'Excel format', viewValue: 'Excel format'},
    {value: 'Excel 2007 format', viewValue: 'Excel 2007 format'},
    {value: 'CSV format', viewValue: 'CSV format'},
    {value: 'PDF format', viewValue: 'PDF format '},
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
