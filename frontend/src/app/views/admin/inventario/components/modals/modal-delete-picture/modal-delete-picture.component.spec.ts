import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeletePictureComponent } from './modal-delete-picture.component';

describe('ModalDeletePictureComponent', () => {
  let component: ModalDeletePictureComponent;
  let fixture: ComponentFixture<ModalDeletePictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeletePictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeletePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
