import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabIngresoSalidaComponent } from './tab-ingreso-salida.component';

describe('TabIngresoSalidaComponent', () => {
  let component: TabIngresoSalidaComponent;
  let fixture: ComponentFixture<TabIngresoSalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabIngresoSalidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabIngresoSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
