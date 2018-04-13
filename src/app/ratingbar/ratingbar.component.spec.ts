import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingbarComponent } from './ratingbar.component';

describe('RatingbarComponent', () => {
  let component: RatingbarComponent;
  let fixture: ComponentFixture<RatingbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
