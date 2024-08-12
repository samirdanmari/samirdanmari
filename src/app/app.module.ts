import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgForm, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

//add firebase

//component
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule } from '@angular/cdk/drag-drop';
import { HomeComponent } from './home/home.component';
import { NewpostComponent } from './blog/newpost/newpost.component';

//Material Modules
import {MaterialModule} from './material/material.module';

//ngx-bootsrap
import {CarouselModule} from 'ngx-bootstrap/carousel';
import { BlogComponent } from './blog/blog.component';
import { MentorshipComponent } from './mentorship/mentorship.component';
import { FooterComponent } from './footer/footer.component'
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideStorage,getStorage } from '@angular/fire/storage';
@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    NavigationComponent,
    HomeComponent,
    BlogComponent,
    MentorshipComponent,
    FooterComponent,
    NewpostComponent,
   
    //
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DragDropModule,
    //Material design imports
    MaterialModule,
    //carousel
    CarouselModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    providePerformance(() => getPerformance()),
    provideStorage(() => getStorage()),
    //firebase 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
