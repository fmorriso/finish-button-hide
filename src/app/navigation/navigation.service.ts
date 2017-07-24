import { Injectable } from '@angular/core';

@Injectable()
export class NavigationService {

  private _currentUrl: string;
  private _reachedLast: boolean = false;
  constructor() { }

  get reachedLast() : boolean {
    return this._reachedLast;
  }

  set reachedLast(value: boolean){
  	this._reachedLast = true;
  }

}
