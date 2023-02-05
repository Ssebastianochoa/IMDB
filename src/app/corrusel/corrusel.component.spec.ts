import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorruselComponent } from './corrusel.component';

describe('CorruselComponent', () => {
  let component: CorruselComponent;
  let fixture: ComponentFixture<CorruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorruselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
