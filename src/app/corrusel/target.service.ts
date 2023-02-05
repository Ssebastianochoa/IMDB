import { Injectable } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Observable, Subject } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class TargetService {

  targetMovieSubject: Subject<Movie[]> = new Subject<Movie[]>;

    constructor() {}
}
