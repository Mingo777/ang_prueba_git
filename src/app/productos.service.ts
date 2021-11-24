
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {



  constructor(private httpclient: HttpClient) {


  }

  getAll(): Promise<any> {
    return firstValueFrom(this.httpclient.get('https://peticiones.online/api/products'));
  }

}

