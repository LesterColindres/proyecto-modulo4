import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { StoreModule } from '@ngrx/store';
import { trackingReducer } from './store/tracking.reducer';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [App], // Usa declarations porque ya no es standalone
      imports: [
        StoreModule.forRoot({ tracking: trackingReducer })
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});