import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarLedgerComponent } from './car-ledger.component';

describe('CarLedgerComponent', () => {
  let component: CarLedgerComponent;
  let fixture: ComponentFixture<CarLedgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarLedgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
