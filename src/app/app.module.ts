import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

import { AppComponent } from './app'; // Cambiar según tu nombre de archivo
import { MapaComponent } from './components/mapa/mapa';
import { AnimadoComponent } from './components/animado/animado';
import { TrackingDirective } from './directives/tracking.directive';
import { trackingReducer } from './store/tracking.reducer';

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    AnimadoComponent,
    TrackingDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoiZGV2ZWxvcGVyIiwiYSI6ImNsc2V4bG9odzA0bG0yaW10a3V3c2Nlc3cifQ.sampletoken'
    }),
    StoreModule.forRoot({ tracking: trackingReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }