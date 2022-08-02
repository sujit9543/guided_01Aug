import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchentListComponent } from './merchent-list.component';

describe('MerchentListComponent', () => {
  let component: MerchentListComponent;
  let fixture: ComponentFixture<MerchentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
