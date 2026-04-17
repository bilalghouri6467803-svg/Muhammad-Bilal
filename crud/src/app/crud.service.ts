import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductComponent } from './product/product.component';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
url='https://crud-1-39209-default-rtdb.firebaseio.com/product.json'
  constructor(private http:HttpClient) { }
  saveproduct( product:any[]){
    // return this.http.post(, product)
    return this.http.post(this.url, product)
  }


  saveform(data: any){
    return this.http.put(
      'https://crud-1-39209-default-rtdb.firebaseio.com/ data.json',
      data
    );
  }
}
