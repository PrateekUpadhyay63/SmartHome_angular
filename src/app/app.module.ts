import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { 
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { HttpConfigInterceptor } from './interceptor/httpConfig.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { OwlModule } from 'ngx-owl-carousel';  
//Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Date picker
import { Ionic4DatepickerModule } from    '@logisticinfotech/ionic4-datepicker';

//Tab widget with central fab
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    FormsModule, //Forms validation
    ReactiveFormsModule, //Forms validation
    AngularFireModule.initializeApp(environment.firebase), //Firebase
    AngularFirestoreModule, //Firebase
    AngularFireAuthModule, //Firebase
    Ionic4DatepickerModule,
    BrowserAnimationsModule,
    HttpClientModule,
    OwlModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AngularFireAuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
