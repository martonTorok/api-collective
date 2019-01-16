import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesNewsComponent } from './movies-news.component';

describe('MoviesNewsComponent', () => {
  let component: MoviesNewsComponent;
  let fixture: ComponentFixture<MoviesNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
