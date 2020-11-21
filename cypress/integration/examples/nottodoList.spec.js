/// <reference types="cypress" />

it("should navigate to the Not-Todo App", () => {
  cy.visit("http://localhost:3001/");
});

it("should be able to add new Not-To-Do to Not-Todo App", () => {
  cy.get(".inp-sit").type("paint flowers on dusty windows");
  cy.get(".btn-sit").click({ force: true });
});

it("should be able to delete an existing Not-To-Do to Not-Todo App", () => {
  cy.contains("nichts überlegen").within(() => {
    cy.get(".deleteButton").click({ force: true });
  }); 
  cy.contains("nichts überlegen").should('not.exist');
});
