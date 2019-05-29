import { Component, OnInit } from '@angular/core';

import { Actor } from '../../models/actor.model';

@Component({
  selector: 'app-actorlist',
  templateUrl: './actorlist.component.html',
  styleUrls: ['./actorlist.component.css']
})
export class ActorlistComponent implements OnInit {

  actorList: Actor[];
  message: string;
  newName: string;
  newCity: string;
  newRating: number;
  selectedIndex: number;
  tempActor: Actor;

  constructor() { }

  ngOnInit() {
    this.actorList = [
      {name: 'Amitabh Bachhan', city: 'Mumbai', rating: 9.8},
      {name: 'Kamal Hasan', city: 'Chennai', rating: 7.5},
      {name: 'Aishwarya Rai Bachhan', city: 'Mumbai', rating: 8.0},
      {name: 'Rekha', city: 'Mumbai', rating: 8.0},
      {name: 'Rajnikant', city: 'Chennai', rating: 9.5, country: 'India'}
    ];
    this.message = 'Wow';
    this.newName = '';
    this.newCity = '';
    this.newRating = null;
    this.selectedIndex = -1;
    this.tempActor = null;
  }

  deleteActor(index: number) {
    const removedActors: Actor[] = this.actorList.splice(index, 1);
    console.log(removedActors[0]);
  }

  addActor() {
    const actor: Actor = {
      name: this.newName,
      city: this.newCity,
      rating: this.newRating
    };
    this.actorList.push(actor);
    this.newName = '';
    this.newCity = '';
    this.newRating = null;
  }

  checkKey(event) {
    const key: string = event.key;
    //console.log(event);
    // console.log(key.search(/[^0-9]/));
    if (!key.search(/[^0-9\.]/)) {
      event.preventDefault();
      return false;
    }
  }

  editActor(index: number) {
    this.selectedIndex = index;

    // Don't do this!!!
    // SHALLOW COPY PROBLEM
    // this.tempActor = this.actorList[index];

    // SOLUTION ==> DEEP COPY
    // Approach - 1 (Not recommended)

    // this.tempActor = {
    //   name: this.actorList[index].name,
    //   city: this.actorList[index].city,
    //   rating: this.actorList[index].rating
    // };

    // Approach - 2 (Recommended approach)
    this.tempActor = JSON.parse(JSON.stringify(this.actorList[index]));
  }

  saveActor(index: number) {
    this.selectedIndex = -1;
  }

  cancelEdit(index: number) {
    this.actorList[index] = this.tempActor;
    this.selectedIndex = -1;
  }

  handleKey(event: KeyboardEvent, index: number) {
    if (event.key === 'Escape') {
      this.cancelEdit(index);
    }
  }
}


