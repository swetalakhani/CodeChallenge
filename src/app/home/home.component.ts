import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div>
      <h1>Welcome to Home Page</h1>
      <p>Click on the Contact to go to the Contact Page.</p>
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
