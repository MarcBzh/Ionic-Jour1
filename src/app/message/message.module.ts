import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MessagePageRoutingModule } from './message-routing.module';
import { MessagePage } from './message.page';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MessagesService } from './messages.service';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MessagePageRoutingModule,
    IonicStorageModule.forRoot({
        driverOrder: ['sqlite', 'websql','indexeddb']
    }),

],
  declarations: [MessagePage]
})
export class MessagePageModule {}
