import 'reflect-metadata';
import '../polyfills';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';



// us
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImagesComponent } from './gallery/images/images.component';
// import { HttpClientModule } from '@angular/common/http';
import { SideBarComponent } from './gallery/side-bar/side-bar.component';
import { HeaderComponent } from './gallery/header/header.component';
// import { FormsModule } from '@angular/forms';
import { ProgressBarComponent } from './gallery/progress-bar/progress-bar.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { GroomComponent } from './gallery/groom/groom.component';
import { CheckboxDirective } from '../app/shared/directives/checkbox.directive';
import { RecycleBinComponent } from './gallery/recycle-bin/recycle-bin.component';

import { HomeComponent } from './home/home.component';
import { ToastrModule } from 'ngx-toastr';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [  AppComponent,
    GalleryComponent,
    ImagesComponent,
    SideBarComponent,
    HeaderComponent,
    ProgressBarComponent,
    GroomComponent,
    CheckboxDirective,
    RecycleBinComponent,
    HomeComponent,],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    // HomeModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  
  
    NgCircleProgressModule.forRoot({
      // "backgroundColor": "maroon",
      "radius": 50,
      "maxPercent": 100,
      "unitsColor": "#FFFFFF",
      "outerStrokeWidth": 5,
      "outerStrokeColor": "#FFFFFF",
      "innerStrokeColor": "#FFFFFF",
      "titleColor": "#FFFFFF",
      "subtitleColor": "#483500",
      "showSubtitle": false,
      "showInnerStroke": false,
      "startFromZero": false,

     
      // HttpClientModule,
      // CookieModule.forRoot()
    }),
    ToastrModule.forRoot(
      {
        positionClass: 'toast-top-center',
        tapToDismiss: true,
        progressBar: true,
        progressAnimation: 'increasing',
        maxOpened: 3,
        autoDismiss: true,
        preventDuplicates: true,
        resetTimeoutOnDuplicate: true,
        newestOnTop: false,
        timeOut: 5000,
        extendedTimeOut: 1500,
        enableHtml: true
      })
  ],
  providers: [ImagesComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
