import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtbComponent } from './mtb.component';

describe('MtbComponent', () => {
  let component: MtbComponent;
  let fixture: ComponentFixture<MtbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
