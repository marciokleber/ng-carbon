import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// carbon-components-angular default imports
import { UIShellModule, IconModule, ContainedListModule} from 'carbon-components-angular';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UIShellModule,
    IconModule,
    ContainedListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
