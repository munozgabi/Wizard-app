import { Component, OnInit } from '@angular/core';
import { TurmaService } from './turmaService/turma.service';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.page.html',
  styleUrls: ['./turma.page.scss'],
})
export class TurmaPage implements OnInit{

  dados: any;

  constructor( private turmaService: TurmaService) {}

  ngOnInit(): void {
     console.log("Lista de usuários professores");
      this.turmaService.getDados().subscribe(data => {
      this.dados = data;
  });
  console.log(this.dados);
  }

}