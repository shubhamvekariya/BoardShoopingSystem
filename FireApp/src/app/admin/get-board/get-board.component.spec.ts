import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBoardComponent } from './get-board.component';

describe('GetBoardComponent', () => {
  let component: GetBoardComponent;
  let fixture: ComponentFixture<GetBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
