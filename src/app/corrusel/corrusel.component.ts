import { Component, Input, OnInit } from '@angular/core';
import { faStar, IconDefinition, faChevronRight, faGripLinesVertical, faPlus, faPlay, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Movie } from './movie';
import { TargetService } from './target.service';
import { HttpClient } from '@angular/common/http';
import { CardsComponent } from './cards/cards.component';
import { environment } from 'src/environments/environment.development';


@Component({
  selector: 'app-corrusel',
  templateUrl: './corrusel.component.html',
  styleUrls: ['./corrusel.component.css']
})
export class CorruselComponent implements OnInit {

  faChevronRight = faChevronRight;
  faGripLinesvertical = faGripLinesVertical;

  partes: any[][] = [];
  movies: Movie[] = [];

  faCircleExclamation = faCircleExclamation;
  faStar = faStar;
  faPlus = faPlus;
  faPlay = faPlay;


  constructor(private targetService: TargetService, private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http
    .get<Movie[]>(`${environment.apiUrl}/targetMovie`)
    .subscribe((data) => { 
      this.targetService.targetMovieSubject.next(data);
      console.log(data);
      for(let i = 0; i < data.length; i+= 6) {
        this.partes.push(data.slice(i, i + 6 ))
       }
       console.log(this.partes);
      
    }); 
    this.targetService.targetMovieSubject.subscribe((movies) => {
    this.movies = movies; 
     })
  };
};