import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  tipoUsuario: String = this.route.snapshot.params['tipoUsuario'];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
   
  }

}
