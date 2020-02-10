import { Component, OnInit } from '@angular/core';
import {MessagesService} from './messages.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
public messages: any;
  public sendMessageForm = new FormGroup({
    chatMessage: new FormControl('test1', Validators.compose([Validators.required])),
  });
  constructor(public message: MessagesService) { }
  ngOnInit() {
    this.loadMessages();
  }
  sendMessage() {
      console.log(`sendmessage ${this.sendMessageForm.value.chatMessage}`);
      this.message.sendMessage(
          this.sendMessageForm.value.chatMessage).then((res) => {
        console.log('result from service login', res);
      }).catch(err => {
        console.log('error from service login', err);
      });
    }
  loadMessages() {
    console.log('load messages');
    this.message.getMessages().then((res) => {
      this.messages = res.messages;
      console.log('result from service get messages', res);
    }).catch(err => {
      console.log('Error from service get messages', err);
    });
  }
}





