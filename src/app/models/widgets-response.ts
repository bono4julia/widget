import { Widget } from './widget';

export class WidgetsResponse {
  constructor(
    public widgets: Widget[],
    public data: any
  ) {}
}