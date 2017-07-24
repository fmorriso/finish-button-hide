import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NavigationService} from "../navigation/navigation.service";

@Component({
  selector: 'app-sixth',
  templateUrl: './sixth.component.html',
  styleUrls: ['./sixth.component.scss']
})
export class SixthComponent implements OnInit {

	private compName = 'SixthComponent';

	constructor(private route: ActivatedRoute,
	            private navService: NavigationService) {
	}

	ngOnInit(): void {

	}

}
