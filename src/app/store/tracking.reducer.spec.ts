// src/app/store/tracking.reducer.spec.ts - ACTUALIZADO
import { trackingReducer, initialState, TrackingState } from './tracking.reducer';
import * as Actions from './tracking.actions';

describe('Tracking Reducer - Pruebas de Función Pura (Requisito 8)', () => {
  
  it('debe retornar el estado inicial cuando se usa una acción desconocida', () => {
    const action = { type: 'DESCONOCIDA' } as any;
    const state = trackingReducer(undefined, action);
    
    expect(state).toEqual(initialState);
    expect(state.contadores).toEqual({});
  });

  it('debe incrementar el contador de un tag específico sin mutar el estado original', () => {
    // Estado inicial con datos
    const existingState: TrackingState = {
      contadores: { 'test-existente': 5 }
    };
    
    const action = Actions.incrementarContador({ tag: 'test-existente' });
    const newState = trackingReducer(existingState, action);

    // Verificar que no mutó el estado original
    expect(existingState.contadores['test-existente']).toBe(5);
    expect(existingState).not.toBe(newState);
    
    // Verificar el nuevo estado
    expect(newState.contadores['test-existente']).toBe(6);
  });

  it('debe crear un nuevo contador si el tag no existe', () => {
    const action = Actions.incrementarContador({ tag: 'nuevo-tag' });
    const newState = trackingReducer(initialState, action);
    
    expect(newState.contadores['nuevo-tag']).toBe(1);
    expect(Object.keys(newState.contadores).length).toBe(1);
  });

  it('debe manejar múltiples tags diferentes correctamente', () => {
    let state = trackingReducer(initialState, Actions.incrementarContador({ tag: 'tag1' }));
    state = trackingReducer(state, Actions.incrementarContador({ tag: 'tag2' }));
    state = trackingReducer(state, Actions.incrementarContador({ tag: 'tag1' }));
    state = trackingReducer(state, Actions.incrementarContador({ tag: 'tag3' }));
    
    expect(state.contadores['tag1']).toBe(2);
    expect(state.contadores['tag2']).toBe(1);
    expect(state.contadores['tag3']).toBe(1);
    expect(Object.keys(state.contadores).length).toBe(3);
  });

  it('debe mantener la inmutabilidad usando el operador spread', () => {
    const action = Actions.incrementarContador({ tag: 'test' });
    const newState = trackingReducer(initialState, action);
    
    // Verificar que todas las referencias son nuevas
    expect(newState).not.toBe(initialState);
    expect(newState.contadores).not.toBe(initialState.contadores);
  });
});