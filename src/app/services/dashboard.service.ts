import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  wyserUrl: string;

  constructor(private http: Http) {
    
      this.wyserUrl = `${environment.apiUrl}/wyser`;
   
  }

  pesquisar(codigo: number): Promise<any> {
      const params = new URLSearchParams();

      return this.http.get(`${this.wyserUrl}/${codigo}`)
        .toPromise()
        .then(response => {
          const responseJson = response.json();   
          return responseJson;
        });
    }
    
}
