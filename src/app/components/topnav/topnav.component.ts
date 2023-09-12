import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
  standalone: true,
  imports: [NgFor],
})
export class TopnavComponent {
  router: { path: string; label: string }[] = [
    { path: '/add-event', label: 'Add Event' },
    { path: '/manage-events ', label: 'Manage Events' },
    { path: '/manage-users', label: 'Manage Users' },
    { path: '/logout', label: 'Logout' },
  ];
  // Add Event    | .  Manage Events  |  Manage Users  |  Logout
}
