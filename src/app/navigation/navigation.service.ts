import {Injectable, OnInit} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, Routes} from '@angular/router';

import {NavigableItem} from './navigable-item';

@Injectable()
export class NavigationService implements CanActivate, OnInit {


	private navigableItems: NavigableItem[] = [];

	constructor(private router: Router) {
	}

	ngOnInit(): void {
		// Use the router snapshot to perform a one-time build of the list of
		// navigable items that we can use to handle the Next/Previous/First/Last button actions.
	}
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
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
