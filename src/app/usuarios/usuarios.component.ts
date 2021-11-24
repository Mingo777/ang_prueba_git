import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../interface/interface.usuarios';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  arrUsuarios: Usuarios[]
  constructor(private userServices: UsuariosService) {
    this.arrUsuarios = []
  }

  async ngOnInit() {
    try {
      const response = await this.userServices.getAll();
      this.arrUsuarios = response.data
    } catch (error) {
      console.log(error);

    }
  }

}
