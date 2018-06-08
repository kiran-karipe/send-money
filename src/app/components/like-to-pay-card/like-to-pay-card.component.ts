import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like-to-pay-card',
  templateUrl: './like-to-pay-card.component.html',
  styleUrls: ['./like-to-pay-card.component.css']
})
export class LikeToPayCardComponent implements OnInit {

  @Input() cardName: string;
  constructor() { }

  ngOnInit() {
  }

}
