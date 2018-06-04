import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-state-dropdown',
  templateUrl: './confirm-state-dropdown.component.html',
  styleUrls: ['./confirm-state-dropdown.component.css']
})
export class ConfirmStateDropdownComponent implements OnInit {
  states = ['California', 'Florida', 'Georgia', 'New York', 'Texas', 'Arizona'];
  constructor() { }

  ngOnInit() {
  }

}
