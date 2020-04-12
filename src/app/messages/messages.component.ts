import { Component, OnInit } from '@angular/core';
import { MessagesService} from '../messages.service';
import { Messages} from '../messages';
import {NgForm} from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: Messages[];
  constructor(private  _messageService: MessagesService,
              private _messagesService: MessagesService,
              private router: Router) { }

  ngOnInit(): void {
    this._messageService.getMessages()
      .subscribe((data: Messages[]) => {
        this.messages = data;
        console.log(this.messages);
      });
  }
}
