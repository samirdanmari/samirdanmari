import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgForm, ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
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
import { environment } from '../environments/environment';
// firebase
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { providePerformance,getPerformance } from '@angular/fire/performance';

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
    FormsModule,
    //Material design imports
    MaterialModule,
    //carousel
    CarouselModule.forRoot(),
    // firebase
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    providePerformance(() => getPerformance()),
    provideStorage(() => getStorage()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
