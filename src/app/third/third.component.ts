import { Component, OnInit } from '@angular/core';
import {NavigationService} from "../navigation/navigation.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit {

	private compName = 'ThirdComponent';

	constructor(private route: ActivatedRoute,
	            private navService: NavigationService) {
	}

	ngOnInit(): void {

	}

}
