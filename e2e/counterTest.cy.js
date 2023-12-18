describe('template spec', () => {
  it('incerment', () => {
    cy.visit('http://localhost:3000/');
    cy.get('h2');

    cy.get('#app > :nth-child(3)').click();
    
    cy.contains('h2', 11);
  }),

  it('click increment multiple times, assert & reset', () => {
    cy.visit('http://localhost:3000/');
    for(let n = 0; n < 10; n ++){
      
      cy.get('#app > :nth-child(3)').click()
    }
    cy.contains('h2', 20)
    cy.get('#app > :nth-child(4)').click();

    cy.contains('h2', 10);
  }),

  it('decerment', () => {
    cy.visit('http://localhost:3000/');
    
    cy.get('#app > :nth-child(5)').click();

    cy.contains('h2', 9);
  }),

  it('click decrement multiple times, assert & reset', () => {
    cy.visit('http://localhost:3000/');

    for(let n = 10; n > 0; n --){
      cy.get('#app > :nth-child(5)').click();
    }

    cy.contains('h2', 0),
    cy.get('#app > :nth-child(4)').click();

    cy.contains('h2', 10);
  });
});