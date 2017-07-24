import { Component, OnInit } from '@angular/core';
import {NavigationService} from "../navigation/navigation.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.scss']
})
export class FifthComponent implements OnInit {

	private compName = 'FifthComponent';

	constructor(private route: ActivatedRoute,
	            private navService: NavigationService) {
	}

	ngOnInit(): void {
		// examine route data for optional {isLast: true} and/or {isFirst: true } indicators so navigation service is aware
		const data = this.route.snapshot.data;
		//console.log(`${this.compName} - ngOnInit - route.snapshot.data=${JSON.stringify(data)}`);
		this.navService.isFirst = data['isFirst'] ? true : false;
		this.navService.isLast = data['isLast'] ? true : false;
	}
}
