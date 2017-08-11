import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-b',
  templateUrl: './widget-b.component.html',
  styleUrls: ['./widget-b.component.css']
})
export class WidgetBComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
