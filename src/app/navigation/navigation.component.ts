import { Component, OnInit } from '@angular/core';
import {NavigationService} from './navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {


  constructor( private service: NavigationService) { }

  ngOnInit() {
  }

  get navigationService() : NavigationService {
    return this.service;
  }
}
