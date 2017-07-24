import { Component, OnInit } from '@angular/core';
import {NavigationService} from "../navigation/navigation.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.scss']
})
export class FourthComponent implements OnInit {

	private compName = 'FourthComponent';

	constructor(private route: ActivatedRoute,
	            private navService: NavigationService) {
	}

	ngOnInit(): void {

	}

}
