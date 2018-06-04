import { Component, OnInit } from '@angular/core';
import { Participant } from './participant.model';
import { Http } from '@angular/http';
@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.css']
})
export class ParticipantListComponent implements OnInit {
  participants: Participant[] = [ ];

  constructor(private http: Http) { }

  ngOnInit() {
    this.getParticipants();
  }

  getParticipants(){
    this.http.get('http://localhost:5000/api/participants/').subscribe(response => {
      this.participants = response.json();
    })
  }

}
