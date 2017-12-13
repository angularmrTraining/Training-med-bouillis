import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowContactComponent } from './show-contact.component';

describe('ShowContactComponent', () => {
  let component: ShowContactComponent;
  let fixture: ComponentFixture<ShowContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
