import {Component} from 'angular2/core';
import {MyService} from './myService';
import {HomeComponent} from "./home/home.component";

@Component({
    selector: 'my-app',
    template: `<div>
                <h2>My menu</h2>
                <home></home>
                </div>`,
    directives: [HomeComponent],
    providers: [MyService]
})
export class AppComponent {

    constructor() {

    }
}