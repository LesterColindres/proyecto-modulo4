import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface TrackingState {
  contadores: { [key: string]: number };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'Proyecto Módulo 4';
  contadores$: Observable<{ [key: string]: number }>;

  constructor(private store: Store<{ tracking: TrackingState }>) {
    this.contadores$ = this.store.select('tracking').pipe(
      map(state => state?.contadores || {})
    );
  }

  tieneContadores(contadores: any): boolean {
    return contadores && Object.keys(contadores).length > 0;
  }
}