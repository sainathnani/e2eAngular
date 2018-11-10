import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CoursecardsComponent } from './coursecards/coursecards.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppRoutingModule } from './/app-routing.module';
import {MatButtonModule, MatMenuModule, MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule,
  MatListModule, MatTableModule,  MatIconModule} from '@angular/material';
import { BlueStripComponent } from './blue-strip/blue-strip.component';
import { OnlineTrainingComponent } from './online-training/online-training.component';
import { ClrTrainingComponent } from './clr-training/clr-training.component';
import { CorTrainingComponent } from './cor-training/cor-training.component';
import { ItConsultComponent } from './it-consult/it-consult.component';
import { ItDevComponent } from './it-dev/it-dev.component';
import { HomeComponent } from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { CategoriesComponent } from './categories/categories.component';
import { BatchesComponent } from './batches/batches.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CoursecardsComponent,
    AboutUsComponent,
    BlueStripComponent,
    OnlineTrainingComponent,
    ClrTrainingComponent,
    CorTrainingComponent,
    ItConsultComponent,
    ItDevComponent,
    HomeComponent,
    ContactUsComponent,
    CoursedetailsComponent,
    CategoriesComponent,
    BatchesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatMenuModule,
    NgbModule,
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
