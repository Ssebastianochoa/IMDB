import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcordionMenuComponent } from './acordion-menu.component';

describe('AcordionMenuComponent', () => {
  let component: AcordionMenuComponent;
  let fixture: ComponentFixture<AcordionMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcordionMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcordionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
