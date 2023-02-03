import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faArrowTurnUp, faFilm, faTv, faPhotoFilm, faUserGroup, faStar, faEarthEurope, faXmark} from '@fortawesome/free-solid-svg-icons';
import { Item } from './item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input() isOpened = false;
  @Output() close = new EventEmitter();
  
  faXmark = faXmark;
  items: Item[] = [
    {
      icon: faArrowTurnUp,
      title: 'Tendencias',
      subItems: [
        {
          path:'/',
          text: 'Las 250 películas mejor valoradas'
        },
        {
          path:'/',
          text: 'Películas más populares'
        },
        {
          path:'/',
          text: 'Las 250 series mejor valoradas'
        },
        {
          path:'/',
          text: 'Series más populares'
        },
        {
          path:'/',
          text: 'Los vídeos musicales más populares'
        },
        {
          path:'/',
          text: 'Los podcasts más populares'
        },
        
      ],
    },
    {
      icon: faTv,
      title: 'Series',
      subItems: [
        {
          path:'/',
          text: 'Que hay en la TV y en streaming'
        },
        {
          path:'/',
          text: 'Explorar series por género'
        },
        {
          path:'/',
          text: 'Noticias sobre TV'
        },
        {
          path:'/',
          text: 'Noticias destacadas de TV en India '
        },
      ],
    },
    {
      icon: faStar,
      title: 'Premios y Eventos',
      subItems: [
        {
          path:'/',
          text: 'Premios Oscar'
        },
        {
          path:'/',
          text: 'Ganadoras a la Mejor Película'
        },
        {
          path:'/',
          text: 'Emmy'
        },
        {
          path:'/',
          text: 'Premios STARmeter'
        },
        {
          path:'/',
          text: 'Comic-Con San Diego'
        },
        {
          path:'/',
          text: 'Comic-Con Nueva York'
        },
        {
          path:'/',
          text: 'Sundance'
        },
        {
          path:'/',
          text: 'Festivall Internacional de Cine de Toronto'
        },
        {
          path:'/',
          text: 'Central de Premios'
        },
        {
          path:'/',
          text: 'Central de Festivales'
        },
        {
          path:'/',
          text: 'Todos los eventos'
        },
      ],
    },
    {
      icon: faFilm,
      title: 'Peliculas',
      subItems: [
        {
          path:'/',
          text: 'Calendario de lanzamientos'
        },
        {
          path:'/',
          text: 'Explorar películas por género'
        },
        {
          path:'/',
          text: 'Películas más taquilleras'
        },
        {
          path:'/',
          text: 'Horarios y entradas'
        },
        {
          path:'/',
          text: 'Noticias sobre películas'
        },
        {
          path:'/',
          text: 'Noticias destacadas sobre películas en India'
        },
      ],
    },
    {
      icon: faPhotoFilm,
      title: 'Ver',
      subItems: [
        {
          path:'/',
          text: 'Qué ver'
        },
        {
          path:'/',
          text: 'Últimos tráilers'
        },
        {
          path:'/',
          text: 'Originales de IMDb'
        },
        {
          path:'/',
          text: 'Selecciones de IMDb'
        },
        {
          path:'/',
          text: 'Podcasts de IMDb'
        },
      ],
    },
   
    {
      icon: faEarthEurope,
      title: 'Comunidad',
      subItems: [
        {
          path:'/',
          text: 'Centro de ayuda'
        },
        {
          path:'/',
          text: 'Zona de colaboradores'
        },{
          path:'/',
          text: 'Encuestas'
        },
      ],
    },
    
    {
      icon: faUserGroup,
      title: 'Celebrities',
      subItems: [
        {
          path:'/',
          text: 'Nacidos hoy'
        },
        {
          path:'/',
          text: 'LAs celebrities más populares'
        },{
          path:'/',
          text: 'Noticias sobre Celebrities'
        },
      ],
    },
    
   
  ];

  closeMenu(){
    this.close.emit();
  }
}
