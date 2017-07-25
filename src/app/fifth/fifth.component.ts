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

	}
}
