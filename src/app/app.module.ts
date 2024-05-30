import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Tab1Page } from './tab1/tab1.page';
import { Tab2Page } from './tab2/tab2.page';
import { Tab3Page } from './tab3/tab3.page';
import { LoginPage } from './login/login.page';
import { TabsPage } from './tabs/tabs.page';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    Tab1Page,
    Tab2Page,
    Tab3Page,
    LoginPage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    NgbModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'eetuarolopputyo',
        appId: '1:1082540936907:web:8a9c03df66cd058520954e',
        storageBucket: 'eetuarolopputyo.appspot.com',
        apiKey: 'AIzaSyCPakuwO4jrtSbQe2gQo7cUfOO9cUPVrhw',
        authDomain: 'eetuarolopputyo.firebaseapp.com',
        messagingSenderId: '1082540936907',
      })
    ),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
