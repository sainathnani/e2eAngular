import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutUsComponent} from './about-us/about-us.component';
import {OnlineTrainingComponent} from './online-training/online-training.component';
import {ClrTrainingComponent} from './clr-training/clr-training.component';
import {CorTrainingComponent} from './cor-training/cor-training.component';
import {ItConsultComponent} from './it-consult/it-consult.component';
import {ItDevComponent} from './it-dev/it-dev.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: 'aboutus', component: AboutUsComponent},
  {path: 'onlinetr', component: OnlineTrainingComponent},
  {path: 'clrtr', component: ClrTrainingComponent},
  {path: 'cortr', component: CorTrainingComponent},
  {path: 'itcon', component: ItConsultComponent},
  {path: 'itdev', component: ItDevComponent},
  {path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }