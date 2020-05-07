import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './components/components.module';
import { Calendar } from '@ionic-native/calendar/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AppComponent],
  entryComponents:[ ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule, 
    ComponentsModule
  ],
  providers: [
    Calendar,
    StatusBar,
    SplashScreen,
    EmailComposer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
