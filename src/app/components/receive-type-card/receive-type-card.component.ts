import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-receive-type-card',
  templateUrl: './receive-type-card.component.html',
  styleUrls: ['./receive-type-card.component.css']
})
export class ReceiveTypeCardComponent implements OnInit {

  @Input() isSelected: boolean;
  setReceiveType: string;
  selectedReceiveType = false;

  constructor() { }

  ngOnInit() {
  }
}
