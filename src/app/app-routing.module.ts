import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1/tab1.page';
import { Tab2Page } from './tab2/tab2.page';
import { Tab3Page } from './tab3/tab3.page';
import { LoginPage } from './login/login.page';

const routes: Routes = [
  { path: 'tab1', component: Tab1Page },
  { path: 'tab2', component: Tab2Page },
  { path: 'tab3', component: Tab3Page },
  { path: 'login', component: LoginPage },
  { path: '', redirectTo: 'tab1', pathMatch: 'full' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
