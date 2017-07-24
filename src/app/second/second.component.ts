import { Component, OnInit } from '@angular/core';
import {NavigationService} from "../navigation/navigation.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

	private compName = 'SecondComponent';

	constructor(private route: ActivatedRoute,
	            private navService: NavigationService) {
	}

	ngOnInit(): void {

	}

}
