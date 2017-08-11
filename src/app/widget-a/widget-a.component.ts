import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-a',
  templateUrl: './widget-a.component.html',
  styleUrls: ['./widget-a.component.css']
})
export class WidgetAComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
