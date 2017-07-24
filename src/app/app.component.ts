import {Component, OnInit, VERSION} from '@angular/core';
import {
	ActivatedRoute,
	Event,
	NavigationCancel,
	NavigationEnd,
	NavigationError,
	NavigationStart,
	Route, Router, Routes
} from '@angular/router';

import {NavigationService} from './navigation/navigation.service';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'app';
	version: string = VERSION.full;
	loading: boolean = true;
	private compName = 'AppComponent';

	constructor(private router: Router,
	            private route: ActivatedRoute,
	            private navService: NavigationService) {

		router.events
			.subscribe((routerEvent: Event) => {
				this.checkRouterEvent(routerEvent)
			});

	}

	ngOnInit(){
		let routes: Routes = this.router.config;
		routes.forEach((r: Route) => {
			if(r.data){

				if(r.data['isFirst'] === true){
					this.navService.firstPath = r.path;
				}

				if(r.data['isLast'] === true){
					this.navService.lastPath = r.path;
				}
			}
		});
	}

	private checkRouterEvent(routerEvent: Event): void {
		if (routerEvent instanceof NavigationStart) {
			this.loading = true;
			let r = routerEvent;
		}

		if (routerEvent instanceof NavigationEnd ||
			routerEvent instanceof NavigationCancel ||
			routerEvent instanceof NavigationError) {
			this.loading = false;
		}
	}

}
