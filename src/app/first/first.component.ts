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


	}
}
