import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotqualifiedComponent } from './notqualified.component';

describe('NotqualifiedComponent', () => {
  let component: NotqualifiedComponent;
  let fixture: ComponentFixture<NotqualifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotqualifiedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotqualifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
