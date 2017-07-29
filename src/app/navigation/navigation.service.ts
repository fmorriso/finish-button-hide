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
		console.log(`${this.compName} - init`);
		//let x = this.route.routeConfig;
		let routes: Routes = this.router.config;
		let i: number = 0;
		for(let r of routes){
			// console.log(`r=${JSON.stringify(r)}`);
			// ignore non-specific routes
			if(r.path.length === 0) {
				continue;
			}
			if(r.path === '**'){
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
			ni.previous = this.navigableItems[i-1].url;
		}
		console.log(`${this.compName} - init - navigableItems=${JSON.stringify(this.navigableItems)}`);
	}

	canActivate(route: ActivatedRouteSnapshot,
	            state: RouterStateSnapshot): boolean {
		console.log(`${this.compName} - canActivate`);
		this.nextPath = state.url;
		return true;
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
	set nextPath(relativePath: string){
		let currentPath: string = relativePath.replace('/','');
		let i: number = 0;
		let iNext: number = 0;
		let found: boolean = false;
		for(let x of this.router.config){
			let r: Route = <Route>x;
			if(r.path === currentPath){
				iNext = i + 1;
				if(iNext > 0 && iNext < this.router.config.length){
					this._nextPath = `/${this.router.config[iNext].path}`;
				} else {
					this._nextPath = '';
				}

				break;
			}
			i++;
		}


	}

}
