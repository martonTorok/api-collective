import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesOnairComponent } from './movies-onair.component';

describe('MoviesOnairComponent', () => {
  let component: MoviesOnairComponent;
  let fixture: ComponentFixture<MoviesOnairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesOnairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesOnairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
