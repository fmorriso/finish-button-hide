import {Component, OnInit} from '@angular/core';
import {NavigationService} from "./navigation.service";
import {Router} from "@angular/router";

@Component({
	selector: 'app-navigation-buttons',
	templateUrl: './navigation-buttons.component.html',
	styleUrls: ['./navigation-buttons.component.scss']
})
export class NavigationButtonsComponent implements OnInit {

	firstPath: string;
	lastPath: string;

	constructor(public navService: NavigationService,
	            private router: Router) {
	}

	ngOnInit() {
		this.firstPath  = `/${this.navService.firstPath}`;
		this.lastPath  = `/${this.navService.lastPath}`;
	}



}
