import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'experience', component: WorkExperienceComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
