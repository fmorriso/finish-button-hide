import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

import {HomeComponent} from './home/home.component';
import {FirstComponent} from "./first/first.component";
import {SecondComponent} from "./second/second.component";
import {ThirdComponent} from "./third/third.component";
import {FourthComponent} from "./fourth/fourth.component";
import {FifthComponent} from "./fifth/fifth.component";
import {SixthComponent} from "./sixth/sixth.component";
import {SeventhComponent} from "./seventh/seventh.component";
import {NavigationService} from "./navigation/navigation.service";

const topLevelRoutes: Routes = [
	{
		path: 'home',
		component: HomeComponent,
		canActivate: [NavigationService]
	},
	{
		path: 'first',
		component: FirstComponent, canActivate: [NavigationService], data: {isFirst: true}
	},
	{
		path: 'second',
		component: SecondComponent, canActivate: [NavigationService]
	},
	{path: 'third', component: ThirdComponent},
	{path: 'fourth', component: FourthComponent},
	{path: 'fifth', component: FifthComponent},
	{path: 'sixth', component: SixthComponent},
	{path: 'seventh', component: SeventhComponent, data: {isLast: true}},
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full',
		data: {title: 'Redirect to default Page'}
	},
	{
		path: '**',
		component: PageNotFoundComponent
	}
];


const routeConfig = {
	enableTracing: true
};

@NgModule({
	imports: [RouterModule.forRoot(topLevelRoutes, routeConfig)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
