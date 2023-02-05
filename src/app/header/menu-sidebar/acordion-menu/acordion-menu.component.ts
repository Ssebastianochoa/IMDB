import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../item';
import { MenuService } from '../../menu.service';

@Component({
  selector: 'app-acordion-menu',
  templateUrl: './acordion-menu.component.html',
  styleUrls: ['./acordion-menu.component.css']
})
export class AcordionMenuComponent implements OnInit {
  items: Item[] = [];

  constructor(private menuService: MenuService) {
  }

  ngOnInit(): void {
  this.menuService.menuItemsBehaviorSubject.subscribe((items) => {
    this.items = items; 
  });
    
  }
}
