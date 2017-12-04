import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css'],
})
export class PasswordInputComponent implements OnInit {
  hide = true;
  password: string;

  constructor() {
  }

  ngOnInit() {
  }
}
