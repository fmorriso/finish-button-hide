import {Injectable, OnInit} from '@angular/core';
import {
	ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot,
	Routes
} from '@angular/router';

import {NavigableItem} from './navigable-item';
import {formatDiagnostic} from "ts-node/dist";

@Injectable()
export class NavigationService implements CanActivate {

	private compName: string = 'NavigationService';
	private navigableItems: NavigableItem[] = [];

	constructor(private router: Router,
	            private route: ActivatedRoute) {
		console.log(`${this.compName} - constructor`);
		this.init();
	}

	private init(): void {
		// console.log(`${this.compName} - init`);
		let routes: Routes = this.router.config;
		let i: number = 0;
		// read the route configuration and start building the list of navigable items
		for(let r of routes){
			// console.log(`r=${JSON.stringify(r)}`);
			// ignore non-specific routes
			if(r.path.length === 0 || r.path.indexOf('*')!== -1) {
				continue;
			}

			let ni = new NavigableItem();
			ni.url = r.path;

			this.navigableItems.push(ni);
			// if this is not the first one ...
			if(i > 0){
				// ... tell previous item what its "next" property should be
				let previousItem: NavigableItem = this.navigableItems[i-1];
				previousItem.next = r.path;
			}
			i++;
		}
		// back-fill the "previous" entry now that we know the total number of navigable items we're dealing with
		for(i = this.navigableItems.length - 1; i > 0; i--){
			let ni: NavigableItem = this.navigableItems[i];
			// console.log(JSON.stringify(ni));
			let previousItem: NavigableItem = this.navigableItems[i-1];
			ni.previous = previousItem.url;
		}
		console.log(`${this.compName} - init - navigableItems=${JSON.stringify(this.navigableItems)}`);
	}

	canActivate(route: ActivatedRouteSnapshot,
	            state: RouterStateSnapshot): boolean {
		console.log(`${this.compName} - canActivate - state.url=${state.url}`);
		// pull off the leading /

		const pathToFind: string = state.url.replace('/', '');
		this.currentUrl = pathToFind;
		let found: NavigableItem = this.navigableItems.find(ni => ni.url === pathToFind);
		if(found){
			this.nextPath = found.next;
			this.previousPath = found.previous;
		}
		return true;
	}

	next() : void {
		if(this.nextPath && this.nextPath.length > 0){
			this.router.navigate([`/${this.nextPath}`]);
		}
	}

	previous() : void {
		if(this.previousPath && this.previousPath.length > 0){
			this.router.navigate([`/${this.previousPath}`]);
		}
	}

	private _isFirst: boolean = false;
	get isFirst(): boolean {
		return this._isFirst;
	}
	set isFirst(value: boolean) {
		this._isFirst = value;
	}

	private _isLast: boolean = false;
	get isLast(): boolean {
		return this._isLast;
	}
	set isLast(value: boolean) {
		this._isLast = value;
	}

	private _currentUrl: string = '';
	get currentUrl(): string {
		return this._currentUrl;
	}
	set currentUrl(value: string) {
		this._currentUrl = value;
	}

	private _firstPath: string = '';
	get firstPath(): string {
		return this._firstPath;
	}
	set firstPath(value: string){
		this._firstPath = value;
	}

	private _lastPath: string = '';
	get lastPath(): string {
		return this._lastPath;
	}
	set lastPath(value: string){
		this._lastPath = value;
	}

	private _nextPath: string = '';
	get nextPath(): string {
		return this._nextPath;
	}
	set nextPath(value: string){
		this._nextPath = value;
	}

	private _previousPath: string = '';
	get previousPath(): string {
		return this._previousPath;
	}
	set previousPath(value: string){
		this._previousPath = value;
	}

}
