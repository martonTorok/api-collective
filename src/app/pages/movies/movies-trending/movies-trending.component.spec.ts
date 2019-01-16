import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesTrendingComponent } from './movies-trending.component';

describe('MoviesTrendingComponent', () => {
  let component: MoviesTrendingComponent;
  let fixture: ComponentFixture<MoviesTrendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesTrendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesTrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
