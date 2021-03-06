import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StoreList } from '../../models/store-list'
import { PriceTypeList } from '../../models/price-type-list'
import { DepartmentList } from '../../models/departmens';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private urlShop = environment.apiUrl + 'wms/store/list/';
  private urlType = environment.apiUrl + 'wms/store/price/';
  private urlGetDepartment = environment.apiUrl + 'wms/store/department/';
 
  constructor(private http: HttpClient) { }

  getShops(): Observable<StoreList[]> {
    return this.http.post<StoreList[]>(`${this.urlShop}`, '1');
  }

  getTypes(): Observable<PriceTypeList[]> {
    return this.http.post<PriceTypeList[]>(`${this.urlType}`, '1');
  }
  
  getDepartmentList(): Observable<DepartmentList[]> {
    return this.http.post<DepartmentList[]>(`${this.urlGetDepartment}`, '');
  }
}