import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicflowComponent } from './picflow.component';

describe('PicflowComponent', () => {
  let component: PicflowComponent;
  let fixture: ComponentFixture<PicflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
