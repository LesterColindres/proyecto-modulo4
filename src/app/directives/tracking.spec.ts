import { trackingReducer, initialState, TrackingState } from './tracking.reducer';
import * as Actions from './tracking.actions';

describe('Pruebas para el Reducer de Tracking (Requisito 8)', () => {
  it('debe retornar un nuevo estado con el contador incrementado', () => {
    const action = Actions.incrementarContador({ tag: 'test-tag' });
    const result = trackingReducer(initialState, action);

    // Verificamos que sea una función pura (no muta, retorna nuevo objeto)
    expect(result).not.toBe(initialState);
    expect(result.contadores['test-tag']).toBe(1);
  });

  it('debe mantener la inmutabilidad del estado', () => {
    const action = Actions.incrementarContador({ tag: 'test-tag' });
    const result = trackingReducer(initialState, action);
    
    // Verificar que el estado original no cambió
    expect(initialState.contadores['test-tag']).toBeUndefined();
    
    // Verificar que el nuevo estado tiene el valor correcto
    expect(result.contadores['test-tag']).toBe(1);
  });
});