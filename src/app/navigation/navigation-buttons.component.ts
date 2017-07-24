import {Component, OnInit} from '@angular/core';
import {NavigationService} from "./navigation.service";

@Component({
	selector: 'app-navigation-buttons',
	templateUrl: './navigation-buttons.component.html',
	styleUrls: ['./navigation-buttons.component.scss']
})
export class NavigationButtonsComponent implements OnInit {

	constructor(private navService: NavigationService) {
	}

	ngOnInit() {
	}



}
