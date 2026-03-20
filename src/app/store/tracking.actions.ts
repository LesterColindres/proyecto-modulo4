import { createAction, props } from '@ngrx/store';

export const incrementarContador = createAction(
  '[Tracking] Incrementar',
  props<{ tag: string }>()
);