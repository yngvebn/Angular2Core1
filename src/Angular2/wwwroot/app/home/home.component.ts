import {Component} from 'angular2/core';
import {MyService} from "../myService";

@Component({
    selector: 'home',
    templateUrl: '/app/home/home.tpl.html'
})
export class HomeComponent {
    greeting: string;
    service: MyService;

    constructor(service: MyService) {
        this.service = service;
    }


    getGreeting() {
        alert('Clicked');
    }
}