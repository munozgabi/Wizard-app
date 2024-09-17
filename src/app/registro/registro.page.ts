import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Usuario } from '../models';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  tipoUsuario: string = this.route.snapshot.params['tipoUsuario'];
  nome: string;
  email: string;
  senha: string;
  tipo: string;

  constructor(private authSrv: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.tipoUsuario);
  }

  registrar() {
    const usr = new Usuario();
    usr.nome      = this.nome;
    usr.tipo = this.tipoUsuario;
    usr.email     = this.email;
    usr.senha     = this.senha;

    this.authSrv.registrarUsuario(usr).then (res => {
      this.router.navigate(['login/'+this.tipoUsuario]);
    });
  }
}
