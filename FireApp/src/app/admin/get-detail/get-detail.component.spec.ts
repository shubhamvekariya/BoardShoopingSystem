import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDetailComponent } from './get-detail.component';

describe('GetDetailComponent', () => {
  let component: GetDetailComponent;
  let fixture: ComponentFixture<GetDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
