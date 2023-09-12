import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventAdderComponent } from './pages/event-adder/event-adder.component';

const routes: Routes = [
  {
    path: '',
    component: EventAdderComponent,
  },
  { path: 'add-event', component: EventAdderComponent },
  { path: 'manage-events ', component: EventAdderComponent },
  { path: 'manage-users', component: EventAdderComponent },
  { path: 'logout', component: EventAdderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
