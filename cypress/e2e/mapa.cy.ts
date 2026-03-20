/// <reference types="cypress" />

describe('Proyecto Angular - Tests de Requisitos', () => {
  beforeEach(() => {
    // Visitar la página antes de cada test
    cy.visit('http://localhost:4200'); // CORREGIDO: cy.visit, no cy.vistit
  });

  describe('Requisito 1 y 2: Mapa con markers y popups', () => {
    it('debe mostrar el mapa correctamente', () => {
      cy.get('app-mapa mgl-map').should('exist');
      cy.get('app-mapa mgl-marker').should('have.length.at.least', 2);
    });

    it('debe mostrar popup al hacer click en un marker', () => {
      // Click en el primer marker
      cy.get('app-mapa mgl-marker').first().click({ force: true });
      
      // Verificar que aparece el popup
      cy.get('mgl-popup').should('be.visible');
      cy.get('mgl-popup h4').should('be.visible');
      
      // Verificar que el popup tiene contenido
      cy.get('mgl-popup .popup-content').should('contain.text', 'ID:');
    });
  });

  describe('Requisito 3: Componente con animaciones', () => {
    it('debe tener animaciones definidas y cambiar estado', () => {
      // Seleccionar la caja animada y guardar referencia
      cy.get('app-animado .caja-animada').as('cajaAnimada');
      
      // Verificar estado inicial (azul)
      cy.get('@cajaAnimada').should('have.css', 'background-color', 'rgb(33, 150, 243)');
      
      // Click para activar animación
      cy.get('@cajaAnimada').click();
      
      // Verificar que cambió a rojo después de la animación
      cy.get('@cajaAnimada', { timeout: 1000 }).should('have.css', 'background-color', 'rgb(244, 67, 54)');
      
      // Segundo click para regresar a azul
      cy.get('@cajaAnimada').click();
      cy.get('@cajaAnimada', { timeout: 1000 }).should('have.css', 'background-color', 'rgb(33, 150, 243)');
    });
  });

  describe('Requisito 4-7: Directiva de Tracking y Redux', () => {
    it('debe trackear clicks en elementos con data-tracking', () => {
      // Verificar que el panel de tracking existe
      cy.get('.panel-tracking').should('exist');
      
      // Hacer click en varios elementos
      cy.get('[data-tracking="boton-animacion"]').click();
      cy.get('[data-tracking="marcador-mapa"]').click({ force: true });
      cy.get('[data-tracking="boton-reset"]').click();
      
      // Verificar que se actualizó el panel (debe haber al menos 1 elemento)
      cy.get('.panel-tracking li').should('have.length.at.least', 1);
    });

    it('debe incrementar contadores con múltiples clicks', () => {
      // Hacer 3 clicks en el mismo elemento
      cy.get('[data-tracking="boton-animacion"]').click();
      cy.get('[data-tracking="boton-animacion"]').click();
      cy.get('[data-tracking="boton-animacion"]').click();
      
      // Verificar que el contador se incrementó correctamente
      cy.get('.panel-tracking li').first().should('contain.text', 'boton-animacion: 3');
    });

    it('debe mostrar el panel de tracking con los contadores', () => {
      // Hacer algunos clicks
      cy.get('[data-tracking="boton-animacion"]').click();
      cy.get('[data-tracking="boton-animacion"]').click();
      
      // Verificar que el panel muestra los contadores
      cy.get('.panel-tracking').should('contain.text', 'boton-animacion');
      cy.get('.panel-tracking').should('contain.text', '2');
    });
  });

  describe('Requisito 9: Tests completos', () => {
    it('debe verificar que todos los componentes existen', () => {
      cy.get('app-mapa').should('exist');
      cy.get('app-animado').should('exist');
      cy.get('[appTracking]').should('have.length.at.least', 3);
    });
  });
});