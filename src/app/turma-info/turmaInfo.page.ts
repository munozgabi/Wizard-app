import { Component, OnInit } from '@angular/core';
import { TurmaInfoService } from './turmaInfoService/turmaInfo.service';

@Component({
  selector: 'app-turmaInfo',
  templateUrl: './turmaInfo.page.html',
  styleUrls: ['./turmaInfo.page.scss'],
})
export class TurmaInfoPage implements OnInit{

  dados: any;

  constructor( private turmaInfoService: TurmaInfoService) {}

  ngOnInit(): void {
     console.log("Lista de usuários professores");
      this.turmaInfoService.getDados().subscribe(data => {
      this.dados = data;
  });
  console.log(this.dados);
  }

}