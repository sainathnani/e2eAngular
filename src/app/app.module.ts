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
import { TableComponent } from './table/table.component';
import { CoursecardsComponent } from './coursecards/coursecards.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ComboComponent,
    HeaderComponent,
    FooterComponent,
    RadiofieldComponent,
    TextfieldComponent,
    TextareaComponent,
    TableComponent,
    CoursecardsComponent,
    BrowserAnimationsModule
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
