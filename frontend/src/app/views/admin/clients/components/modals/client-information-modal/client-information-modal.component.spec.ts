import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInformationModalComponent } from './client-information-modal.component';

describe('ClientInformationModalComponent', () => {
  let component: ClientInformationModalComponent;
  let fixture: ComponentFixture<ClientInformationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientInformationModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientInformationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
