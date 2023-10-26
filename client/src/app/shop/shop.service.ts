import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pagination} from "../shared/models/pagination";
import {Product} from "../shared/models/product";
import {Brand} from "../shared/models/brand";
import {Type} from "../shared/models/type"

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = "https://localhost:7272/api/";

  constructor(private http: HttpClient) {
  }

  getProducts() {
    return this.http.get<Pagination<Product[]>>(this.baseUrl + 'products');
  }

  getBrands() {
    return this.http.get<Brand[]>(this.baseUrl + 'products/brands');
  }

  getTypes() {
    return this.http.get<Type[]>(this.baseUrl + 'products/types');
  }
}
