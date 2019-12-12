import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyFireComponent } from './why-fire.component';

describe('WhyFireComponent', () => {
  let component: WhyFireComponent;
  let fixture: ComponentFixture<WhyFireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyFireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyFireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
