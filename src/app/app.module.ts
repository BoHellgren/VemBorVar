import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { MembersProvider } from '../providers/members/members';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyC1FttZvq19tbUtiRqRwkCeFokDb484J0A",
     authDomain: "mysubscriptiondb.firebaseapp.com",
     databaseURL: "https://mysubscriptiondb.firebaseio.com",
     projectId: "mysubscriptiondb",
     storageBucket: "",
     messagingSenderId: "170203061159"
 };

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {preloadModules: true}),
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MembersProvider
  ]
})
export class AppModule {}
