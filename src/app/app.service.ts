import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }


  get() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .pipe((res) => {
        return res
      });
  }
  getuser(Id: any) {
    const url = `https://jsonplaceholder.typicode.com/users?id=` + Id;
    return this.http.get(url)
      .pipe((res) => {
        return res
      });
  }
  // 
  getcomments(postId: any) {
    const url = `https://jsonplaceholder.typicode.com/posts/` + postId + `/comments`;
    return this.http.get(url)
      .pipe((res) => {
        return res
      });
  }
}
