import { LogComponent } from './log/log.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy} from '@angular/router';
import { CommonModule } from '@angular/common'
import { JwtModule } from '@auth0/angular-jwt';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Calendar } from '@ionic-native/calendar/ngx';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export function tokenGetter(){
  return localStorage.getItem('token');
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
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['192.168.178.101:8081'],
        disallowedRoutes: ["http://example.com/examplebadroute/"],
        throwNoTokenError: true
      },
    })
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
