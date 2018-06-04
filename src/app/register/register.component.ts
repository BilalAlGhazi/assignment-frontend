import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Participant } from '../participant-list/participant.model';
import { NGForm } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') signupForm;

  participant: Participant;
  constructor(private router: Router, private http: Http) {

  }

  ngOnInit() {
  }

  onSubmit(form: NGForm){
    this.participant = new Participant(
      this.signupForm.form.controls.firstName.value,
      this.signupForm.form.controls.lastName.value,
      this.signupForm.form.controls.email.value,
      this.signupForm.form.controls.activity.value,
      this.signupForm.form.controls.comments.value
    );
    this.register(this.participant).subscribe(() => {
      this.router.navigate(['/participants']);
    });
    //console.log(this.participant);

  }

  register(participantObj){
    const headers = new Headers({ 'Content-type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:5000/api/participants/', participantObj, options);
  }

}
