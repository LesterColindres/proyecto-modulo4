import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimadoComponent } from './animado';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('AnimadoComponent', () => {
  let component: AnimadoComponent;
  let fixture: ComponentFixture<AnimadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimadoComponent],
      imports: [NoopAnimationsModule]  // Solo animaciones, sin Store
    }).compileComponents();

    fixture = TestBed.createComponent(AnimadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debe tener estado inicial "original"', () => {
    expect(component.estado).toBe('original');
  });

  it('debe cambiar estado con toggleEstado', () => {
    component.toggleEstado();
    expect(component.estado).toBe('modificado');
  });
});