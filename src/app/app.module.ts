import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventAdderComponent } from './pages/event-adder/event-adder.component';
import { TopnavComponent, InputedTagComponent } from './components';
import { SquareButtonDirective, TextInputDirective } from './directives';

@NgModule({
  declarations: [
    AppComponent,
    EventAdderComponent,
    SquareButtonDirective,
    TextInputDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TopnavComponent,
    InputedTagComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
