import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-charges',
  templateUrl: './charges.component.html',
  styleUrls: ['./charges.component.css']
})
export class ChargesComponent implements OnInit {
  displayedColumns = ['name', 'charge', 'penalty', 'active'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor() { }

  ngOnInit() {
  }

}
export interface Element {
  name: string;
  charge: number;
  penalty: number;
  active:boolean;
}

const ELEMENT_DATA: Element[] = [
  
];


