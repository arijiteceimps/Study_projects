import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GenericService {
  public baseUrl: any = 'http://18.215.17.207';
  public supplierApiSlug = this.baseUrl +'/supplierAppApi';
  public commonSlug = this.baseUrl +'/webAdmin';
  constructor(private http: HttpClient) { }
  adminLogin(param, apiObj ): Observable<any>{
    return this.http.post(`${this.baseUrl}/${apiObj}`, (param));
  }
}
