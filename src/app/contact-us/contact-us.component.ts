import {Component, OnInit} from '@angular/core';
import {Queries} from '../models/queries';
import {FormGroup, FormControl, NgForm} from '@angular/forms';
import {Validators} from '@angular/forms';
import {ContactusService} from './contactus.service';
import {Baseresponse} from '../models/baseresponse';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  queryForm: FormGroup;
  query = new Queries();
  constructor(private contactusService: ContactusService) { }

  ngOnInit() {
    this.queryForm = new FormGroup({
      'name': new FormControl(this.query.name, [
        Validators.required,
        Validators.minLength(4)
      ]),
      'email': new FormControl(this.query.email, [
        Validators.required,
        Validators.email
        ]

      ),
      'mobile': new FormControl(this.query.mobile, [
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern(/[0-9]{10}/)
      ]),

      'message': new FormControl(this.query.message, [
        Validators.maxLength(255),
        Validators.required
      ])

    });
  }
  submitQuery(contactusForm: NgForm): void {
    console.log( this.queryForm.value);

    this.contactusService.putContactus(this.queryForm.value).subscribe(
      (res: Baseresponse) => {
        if (res.status === 'Success') {
          alert('Your query submitted successfully. You will be contacted shortly');
          contactusForm.resetForm();
        } else {
          alert(res.errorDesc);
        }
      },
      error1 => {
        console.log(error1);
        if (!error1.ok) {
          alert(error1.statusText + ' Please try again');
        }
      }
    );
  }
}
