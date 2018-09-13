import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { ComboComponent } from './combo/combo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RadiofieldComponent } from './radiofield/radiofield.component';
import { TextfieldComponent } from './textfield/textfield.component';
import { TextareaComponent } from './textarea/textarea.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ComboComponent,
    HeaderComponent,
    FooterComponent,
    RadiofieldComponent,
    TextfieldComponent,
    TextareaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
