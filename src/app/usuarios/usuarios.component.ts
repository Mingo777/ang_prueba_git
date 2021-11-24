import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/interfaces/usuarios.interfaces';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  arrUsuarios: Usuario[]
  constructor() {
    this.arrUsuarios = []
  }

  ngOnInit(): void {
  }

}
