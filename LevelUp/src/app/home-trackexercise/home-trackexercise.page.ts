import { Component, OnInit } from '@angular/core';
import { Exercise, ExerciseType } from '../models/Exercise';

@Component({
  selector: 'app-home-trackexercise',
  templateUrl: './home-trackexercise.page.html',
  styleUrls: ['./home-trackexercise.page.scss'],
})
export class HomeTrackexercisePage implements OnInit {
  private exercises: Exercise[] = [];
  private addExerciseHidden: boolean = true;
  private exerciseType = ExerciseType;
  private selectedType: string;
  private duration: string;
  private calories: string;

  constructor() { }

  ngOnInit() {
  }

  exerciseTypes() : Array<string> {
    var keys = Object.keys(this.exerciseType);
    return keys.slice(keys.length / 2);
  }

  toggleAddExcersice() {
    this.addExerciseHidden = !this.addExerciseHidden
  }

  addExercise() {
    let exIds = this.exercises.map(g => g.id);
    let newId = 0;
    while (exIds.includes(newId)) {
        newId += 1;
    }
    let e: Exercise = {
      id: newId,
      type: this.exerciseType[this.selectedType],
      duration: +this.duration,
      calories: +this.calories
    }
    this.exercises.unshift(e);
  }
}
