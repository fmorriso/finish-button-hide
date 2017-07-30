import {Component, OnInit} from '@angular/core';
import {NavigationService} from "./navigation.service";
import {Router} from "@angular/router";

@Component({
	selector: 'app-navigation-buttons',
	templateUrl: './navigation-buttons.component.html',
	styleUrls: ['./navigation-buttons.component.scss']
})
export class NavigationButtonsComponent implements OnInit {

	firstPath: string;
	lastPath: string;
	baseButtonSizeClass: string = 'col-md-1';
	baseButtonOffsetClass: string = 'col-md-offset-3';
	baseButtonClass: string = `${this.baseButtonSizeClass} btn btn-primary`;
	normalButtonClass: string = `${this.baseButtonClass} btn-extra-horizontal-spacing`;

	firstButtonClass: string = `${this.baseButtonClass} btn-extra-horizontal-spacing`;
	previousButtonClass: string = `${this.baseButtonClass}`;
	lastButtonClass: string = `${this.baseButtonClass}`;

	private compName: string = 'NavigationButtonsComponent';

	constructor(public navService: NavigationService,
	            private router: Router) {
	}

	get showFinish(): boolean {
		return this.navService.isLast;
	}

	private _finishButtonEnabledClass: string = `${this.baseButtonOffsetClass} ${this.baseButtonClass}`;
	get finishButtonEnabledClass(): string {
		return this._finishButtonEnabledClass;
	}
	get finishButtonDisabledClass(): string {
		return `${this._finishButtonEnabledClass} hidden`;
	}

	private _nextWithFinishButtonClass: string = this.normalButtonClass;
	get nextWithFinishButtonClass(): string {
		return this._nextWithFinishButtonClass;
	}

	private _nextWithoutFinishButtonClass: string = `${this.baseButtonOffsetClass} ${this.normalButtonClass}`;
	get nextWithoutFinishButtonClass(): string {
		return this._nextWithoutFinishButtonClass;
	}

	private _finishButtonClass: string = '';
	get finishButtonClass(): string {
		console.log(`${this.compName} - finishButtonClass - isLast=${this.navService.isLast}`);
		if (this.navService.isLast) {
			return 'col-md-2 btn btn-primary';
		}
		return 'col-md-2 btn btn-primary disabled';
	}

	ngOnInit() {
		this.firstPath = `/${this.navService.firstPath}`;
		this.lastPath = `/${this.navService.lastPath}`;
	}

	public isNextDisabled(): boolean {
		let l = this.navService.nextPath.length;
		let d: boolean = l <= 0;
		return d;
	}

	finish(): void {
		console.log(`${this.compName} - finish`);
	}

	first(): void {
		console.log(`${this.compName} - first`);
	}

	last(): void {
		console.log(`${this.compName} - last`);
	}

	next(): void {
		console.log(`${this.compName} - next`);
		this.navService.next();
	}

	previous(): void {
		console.log(`${this.compName} - previous`);
		this.navService.previous();
	}

	public getNextButtonClass(): string {
		let returnValue = '';
		if (this.isNextDisabled()) {
			returnValue = 'disabled';
		}
		return returnValue;
	}
}
