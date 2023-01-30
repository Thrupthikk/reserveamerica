import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component'; 
import { SigninPageComponent } from './signin-page/signin-page.component';

const routes: Routes = [
  { path: 'home', component: ContentComponent},
  { path: '', redirectTo: 'home', pathMatch: "full"},
  { path: 'signin', component: SigninPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
