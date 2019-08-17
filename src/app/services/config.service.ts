import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private urlService:string;

  constructor() {  
  ///   this.urlService = 'http://localhost:8080';
     this.urlService = 'https://cadastrocontasjava.herokuapp.com';

   }

   getUrlService(): string {

    return this.urlService;
  }
}
