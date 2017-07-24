import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NavigationService} from "../navigation/navigation.service";

@Component({
	selector: 'app-seventh',
	templateUrl: './seventh.component.html',
	styleUrls: ['./seventh.component.scss']
})
export class SeventhComponent implements OnInit {
	private compName: string = 'SeventhComponent';

	constructor(private route: ActivatedRoute,
	            private navService: NavigationService) {
	}

	ngOnInit(): void {
		this.route.data.subscribe(data => {
			if (data['isLast']) {
				console.log(`${this.compName} ngOnInit - is last`);
				this.navService.reachedLast = true;
			}
		});

	}

}
