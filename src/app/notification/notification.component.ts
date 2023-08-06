import { Component } from '@angular/core';
import { faL } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  displayNotification: boolean = false;

  closeNotification() {
    this.displayNotification = true;
  }
}
