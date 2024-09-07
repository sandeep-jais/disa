import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyDetailComponent } from './pharmacy-detail.component';

describe('PharmacyDetailComponent', () => {
  let component: PharmacyDetailComponent;
  let fixture: ComponentFixture<PharmacyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PharmacyDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
