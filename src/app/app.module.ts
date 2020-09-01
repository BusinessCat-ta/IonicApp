import { LogComponent } from './log/log.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Router } from '@angular/router';
import { CommonModule } from '@angular/common'
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { IonicStorageModule } from '@ionic/storage';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Calendar } from '@ionic-native/calendar/ngx';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


export function jwtOptionsFactory(storage) {
  return {
    tokenGetter: () => {
      return storage.get('token');
    },
    allowedDomains: ["http://localhost:8080/services"],
    disallowedRoutes: ["http://localhost:8100"]
  }
}


@NgModule({
  declarations: [AppComponent, LogComponent],
  entryComponents: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [IonicStorageModule]
      }
    }),
  ],
    
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    Calendar,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
