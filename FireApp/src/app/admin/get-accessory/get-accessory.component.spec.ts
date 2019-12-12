import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAccessoryComponent } from './get-accessory.component';

describe('GetAccessoryComponent', () => {
  let component: GetAccessoryComponent;
  let fixture: ComponentFixture<GetAccessoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAccessoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAccessoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
