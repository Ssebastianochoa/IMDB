import { Component, Input, OnInit } from '@angular/core';
import { faStar, IconDefinition, faPlus, faPlay, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Movie } from '../movie';
import { TargetService } from '../target.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  
  movies: Movie[] = [];
  faCircleExclamation = faCircleExclamation;
  faStar = faStar;
  faPlus = faPlus;
  faPlay = faPlay;
  

 constructor(private targetService: TargetService) {
 }

 ngOnInit(): void {
  this.targetService.targetMovieSubject.subscribe((movies) => {
    this.movies = movies; 
  });
    
  }
};

