import {Component, OnInit} from '@angular/core';
import {NavigationService} from "../navigation/navigation.service";
import {ActivatedRoute} from "@angular/router";

@Component({
	selector: 'app-first',
	templateUrl: './first.component.html',
	styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

	private compName = 'FirstComponent';

	constructor(private route: ActivatedRoute,
	            private navService: NavigationService) {
	}

	ngOnInit(): void {
		// examine route data for optional {isLast: true} indicator so navigation service is aware
		this.route.data.subscribe(data => {
			if (data['isLast']) {
				this.navService.reachedLast = true;
			} else {
				this.navService.reachedLast = false;
			}
		});
	}

}
