import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { MessagesService} from '../messages.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private _messagesService: MessagesService,
              private router: Router) { }

  ngOnInit(): void {
  }

  myform = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  });

  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value )
  }
}
