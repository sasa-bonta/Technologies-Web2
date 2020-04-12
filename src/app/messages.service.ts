import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Messages} from './messages';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient) { }

  getMessages () {
    return this.http.get<Messages[]>('http://localhost/Technilogies-Web2/messlist.php');
  }

  deleteMessage(messages: Messages) {
    return this.http.delete<Messages[]>('http://localhost/Technilogies-Web2/messdel.php?id=' + messages.id);
  }
}
