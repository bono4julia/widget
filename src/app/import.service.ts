import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';

@Injectable()
export class ImportService {

  constructor(http: Http) { }
  
  getData(url: string){
    return [{id: 'w1'},{id: 'w2'}]
  }
}
