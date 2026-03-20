import { Directive, ElementRef, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { incrementarContador } from '../store/tracking.actions';

@Directive({ selector: '[appTracking]' })
export class TrackingDirective {
  // Requisito 5: Inyección de ElementRef
  constructor(private el: ElementRef, private store: Store) {}

  // Requisito 5: Suscripción a eventos del DOM
  @HostListener('click')
  onClick() {
    // Requisito 6: Leer tracking tags del DOM
    const tag = this.el.nativeElement.getAttribute('data-tracking');
    if (tag) {
      this.store.dispatch(incrementarContador({ tag }));
    }
  }
}