import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Usuarios } from './interface/interface.usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {


  constructor(private httpClient: HttpClient
  ) {
    this.httpClient
  }


  getAll(): Promise<any> {
    return firstValueFrom(this.httpClient.get<any>('https://peticiones.online/api/users'));
  }

  create(form_value: any): Promise<any> {
    return firstValueFrom(this.httpClient.post<any>('https://peticiones.online/api/users', form_value));
  }


}
