import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CreatepostService {

  constructor(private http: HttpClient) { }
  getHeader() {
		let headers = new HttpHeaders()
        headers = headers.set('Content-Type', 'application/json; charset=UTF-8')
        return headers;
	  }
  get() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .pipe((res) => {
        return res
      });
  }
  post(data:any){
    data=JSON.stringify(data)
    return this.http.post('https://jsonplaceholder.typicode.com/posts',data,{ headers: this.getHeader() })
    .pipe((res) => {
     return res 
    });
  }
}
