import { Component, OnInit } from '@angular/core';
import { InicioService } from './inicioService/inicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  dados: any;

  constructor(private inicioService: InicioService) { }

  ngOnInit() {
    console.log("Lista de usuários professores");
    this.inicioService.getDados().subscribe(data => {
      this.dados = data;
  });
  console.log(this.dados);
  }

}
