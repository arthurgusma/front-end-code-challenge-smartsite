// this test would work perfectly with the correct API Service,
// wich receveis form filter as param from the user and returns the filtered locations

describe('Form Submission Test', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
    cy.intercept('GET', 'https://test-frontend-developer.s3.amazonaws.com/data/locations.json').as('getLocations');
  });

  it('should be able to find closed locations', () => {
    cy.get('input[name="checkbox-option"]').check({ force: true });
    cy.get('button[type="submit"]').click();

    cy.wait('@getLocations').then(interception => {
      const { locations } = interception.response?.body; 
      if (locations && locations.length > 0) {
        cy.get('.card-location').should('have.length.greaterThan', 0);
      } else {
        cy.contains('Nenhuma unidade encontrada').should('be.visible');
      }
    });
  });

  it('should be able to submit the form with a radio period selected', () => {
    cy.get('input[name="radio-option"]').check('Tarde', { force: true });
    cy.get('button[type="submit"]').click();

    cy.wait('@getLocations').then(interception => {
      const { locations } = interception.response?.body; 
      if (locations && locations.length > 0) {
        cy.get('.card-location').should('have.length.greaterThan', 0);
      } else {
        cy.contains('Nenhuma unidade encontrada').should('be.visible'); 
      }
    });
  });
});
