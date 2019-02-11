import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoNg6LibComponent } from './demo-ng6-lib.component';

describe('DemoNg6LibComponent', () => {
  let component: DemoNg6LibComponent;
  let fixture: ComponentFixture<DemoNg6LibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoNg6LibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoNg6LibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
