import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;

  constructor(private router: Router) {}

  ngOnInit() {}

  /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
  submit() {
    let subject='Code Challenge - Sweta Lakhani'
    let mail = 'mailto:sweta.lakhani@hotmail.com?subject=' + subject;
    this.router.navigateByUrl('');
  }

}
