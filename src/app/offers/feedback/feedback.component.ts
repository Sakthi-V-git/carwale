import { Component, Input, OnInit } from '@angular/core';
import { customer } from 'src/app/customer.model';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  @Input() customer:customer;
  constructor() { }

  ngOnInit(): void {
  }

}
