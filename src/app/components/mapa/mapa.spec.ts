import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapaComponent } from './mapa';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { StoreModule } from '@ngrx/store';

describe('MapaComponent', () => {
  let component: MapaComponent;
  let fixture: ComponentFixture<MapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapaComponent],
      imports: [
        StoreModule.forRoot({}),
        NgxMapboxGLModule.withConfig({ accessToken: 'test-token' })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});