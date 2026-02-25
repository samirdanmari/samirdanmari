import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { MentorshipComponent } from './mentorship/mentorship.component';
import { NewpostComponent } from './blog/newpost/newpost.component';
// import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
  {
    path: 'home',
     component: HomeComponent},
  {path: 'AboutMe', component: AboutMeComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'mentorship', component: MentorshipComponent},
  {path: 'newPost',component: NewpostComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: Error}
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { 

// }
