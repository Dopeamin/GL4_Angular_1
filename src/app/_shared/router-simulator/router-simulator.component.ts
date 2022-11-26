import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Route, Router } from '@angular/router';
import { ROUTES, ROUTESLABELS } from '../constants';

@Component({
  selector: 'app-router-simulator',
  templateUrl: './router-simulator.component.html',
  styleUrls: ['./router-simulator.component.css'],
})
export class RouterSimulator implements OnInit {
  routes: { path: string; label: string }[];
  selected: string;
  constructor(private router: Router) {
    this.routes = ROUTESLABELS;

    this.selected = this.router.url.replace('/', '');
    router.events.subscribe((routeEvent) => {
      if (routeEvent instanceof NavigationEnd)
        this.selected = routeEvent.url.replace('/', '');
    });
  }

  ngOnInit(): void {}

  onChange($event: any) {
    this.router.navigateByUrl(this.selected);
  }
}
