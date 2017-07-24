import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

import {HomeComponent} from './home/home.component';
import {FirstComponent} from "./first/first.component";
import {SecondComponent} from "./second/second.component";
import {ThirdComponent} from "./third/third.component";
import {FourthComponent} from "./fourth/fourth.component";
import {FifthComponent} from "./fifth/fifth.component";
import {SixthComponent} from "./sixth/sixth.component";
import {SeventhComponent} from "./seventh/seventh.component";

const topLevelRoutes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'first', component: FirstComponent },
	{ path: 'second', component: SecondComponent },
	{ path: 'third', component: ThirdComponent },
	{ path: 'fourth', component: FourthComponent },
	{ path: 'fifth', component: FifthComponent },
	{ path: 'sixth', component: SixthComponent },
	{ path: 'seventh', component: SeventhComponent, data: {isLast: true}},
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full',
		data: { title: 'Redirect to default Page' }
	},
	{
		path: '**',
		component: PageNotFoundComponent
	}
];


const routeConfig = {
	enableTracing: false};

@NgModule({
  imports: [RouterModule.forRoot(topLevelRoutes, routeConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
