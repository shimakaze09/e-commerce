import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Pagination} from "../shared/models/pagination";
import {Product} from "../shared/models/product";
import {Brand} from "../shared/models/brand";
import {Type} from "../shared/models/type"
import {ShopParams} from "../shared/models/shopParams";

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = "https://localhost:7272/api/";

  constructor(private http: HttpClient) {
  }

  getProducts(shopParams:ShopParams) {
    let params = new HttpParams();

    if (shopParams.brandId) {
      params = params.append('brandId', shopParams.brandId.toString())
    }

    if (shopParams.typeId) {
      params = params.append('typeId', shopParams.typeId.toString())
    }

    if (shopParams.sort) {
      params = params.append('sort', shopParams.sort)
    }

    return this.http.get<Pagination<Product[]>>(this.baseUrl + 'products', {params});
  }

  getBrands() {
    return this.http.get<Brand[]>(this.baseUrl + 'products/brands');
  }

  getTypes() {
    return this.http.get<Type[]>(this.baseUrl + 'products/types');
  }
}
