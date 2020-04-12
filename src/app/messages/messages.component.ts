import { Component, OnInit } from '@angular/core';
import { MessagesService} from '../messages.service';
import { Messages} from '../messages';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: Messages[];
  constructor(private  _messageService: MessagesService) { }

  ngOnInit(): void {
    this._messageService.getMessages()
      .subscribe((data: Messages[]) => {
        this.messages = data;
        console.log(this.messages);
      });
  }

  deleteMessage(messages: Messages): void {
    this._messageService.deleteMessage(messages.id)
      .subscribe(data => {
        this.messages = this.messages.filter(u => u !== messages);
      });
  }

}
