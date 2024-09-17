import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { MenuComponent } from "./menu/menu.component";

@NgModule({
  imports: [
    RouterModule,
    HttpClientModule,
    CommonModule,
    BrowserModule,
    FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [MenuComponent],
  exports: [MenuComponent],
  providers: [],
})
export class ComponentsModule {}