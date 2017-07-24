import {Component, VERSION} from '@angular/core';
import {
	ActivatedRoute,
	Event,
	NavigationCancel,
	NavigationEnd,
	NavigationError,
	NavigationStart,
	Router
} from '@angular/router';

import {NavigationService} from "./navigation/navigation.service";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'app';
	version: string = VERSION.full;
	loading: boolean = true;
	private compName = 'AppComponent';

	constructor(private router: Router,
	            private route: ActivatedRoute,
	            private navigationService: NavigationService) {
		router.events
			.subscribe((routerEvent: Event) => {
				this.checkRouterEvent(routerEvent);
			});
	}

	private checkRouterEvent(routerEvent: Event): void {
		console.log(`${this.compName} checkRouterEvent - routerEvent=${routerEvent}`);
		let sn = this.route.snapshot;
		console.log(sn);
		if (routerEvent instanceof NavigationStart) {
			this.loading = true;
		}

		this.route.data.subscribe(data => {
			if (data && data['isLast']) {
				console.log(`${this.compName} ngOnInit - is last`);
			}
		});


		if (routerEvent instanceof NavigationEnd ||
			routerEvent instanceof NavigationCancel ||
			routerEvent instanceof NavigationError) {
			this.loading = false;
		}
	}
}
