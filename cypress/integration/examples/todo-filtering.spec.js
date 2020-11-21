/// <reference types="cypress" />

describe("todo actions", () => {
 it('should goto website', () => {
    cy.visit("https://aquin-todolist.netlify.app/");
  });

  it("should check for a list of Not-To-Dos", () => {
    cy.get(".tasksList").should("have.descendants", "div");
  });

  it('should filter "Familie" correctly', () => {
    cy.get("#cathegory").select("Familie");
    cy.get(".tasksList>div").should("have.length", 5);
  });

  it('should filter "Urlaub" correctly', () => {
    cy.get("#cathegory").select("Urlaub");
    cy.get(".tasksList>div").should("have.length", 3);
  });

  it('should filter "Haushalt" correctly', () => {
    cy.get("#cathegory").select("Haushalt");
    cy.get(".tasksList>div").should("have.length", 5);
  });

  it('should filter "Selbstoptimierung" correctly', () => {
    cy.get("#cathegory").select("Selbstoptimierung");
    cy.get(".tasksList>div").should("have.length", 3);
  });

  it('should filter "Lohnarbeit" correctly', () => {
    cy.get("#cathegory").select("Lohnarbeit");
    cy.get(".tasksList>div").should("have.length", 3);
  });

  it('should filter "Liebesleben" correctly', () => {
    cy.get("#cathegory").select("Liebesleben");
    cy.get(".tasksList>div").should("have.length", 4);
  });

  it('should filter "Freizeit" correctly', () => {
    cy.get("#cathegory").select("Freizeit");
    cy.get(".tasksList>div").should("have.length", 4);
  });

  it('should filter "Finanzen" correctly', () => {
    cy.get("#cathegory").select("Finanzen");
    cy.get(".tasksList>div").should("have.length", 3);
  });

  it('should filter "sonstso" correctly', () => {
    cy.get("#cathegory").select("sonstso");
    cy.get(".tasksList>div").should("have.length", 4);
  });

  it('should filter "all" correctly', () => {
    cy.get("#cathegory").select("keine Kategorie wählen");
    cy.get(".tasksList>div").should("have.length", 34);
  });
});
