import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-c',
  templateUrl: './widget-c.component.html',
  styleUrls: ['./widget-c.component.css']
})
export class WidgetCComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
