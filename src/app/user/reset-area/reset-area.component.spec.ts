import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetAreaComponent } from './reset-area.component';

describe('ResetAreaComponent', () => {
  let component: ResetAreaComponent;
  let fixture: ComponentFixture<ResetAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
