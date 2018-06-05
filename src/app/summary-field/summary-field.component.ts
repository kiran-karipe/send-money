import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-summary-field',
  templateUrl: './summary-field.component.html',
  styleUrls: ['./summary-field.component.css'],
  providers: [ DataService ]
})
export class SummaryFieldComponent implements OnInit {

  constructor(private dataService: DataService) { }
  data = 0;
  ngOnInit() {
    this.dataService.getAmount((data) => {
      this.data = data;
    });
    console.log("Data is: " + this.data);
  }

}
