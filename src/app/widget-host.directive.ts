import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[app-widget-host]'
})
export class WidgetHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
