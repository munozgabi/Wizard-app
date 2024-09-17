import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { HttpClientModule } from "@angular/common/http";
import { ComponentsModule } from "./components/components.module";

const firebaseConfig = {
  apiKey: "AIzaSyBEfS1d9YAqD-larl4SHdeozWsvr6uKzUI",
  authDomain: "minha-loc-teste-5295c.firebaseapp.com",
  databaseURL: "https://minha-loc-teste-5295c-default-rtdb.firebaseio.com",
  projectId: "minha-loc-teste-5295c",
  storageBucket: "minha-loc-teste-5295c.appspot.com",
  messagingSenderId: "743253111178",
  appId: "1:743253111178:web:559de36f29ac5c5b6a5873",
  measurementId: "G-DRPXFJ0GNB",
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    ComponentsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
