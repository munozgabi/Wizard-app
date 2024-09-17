import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EuSouPage } from './euSou.page';

const routes: Routes = [
  {
    path: '',
    component: EuSouPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EuSouPageRoutingModule {}
