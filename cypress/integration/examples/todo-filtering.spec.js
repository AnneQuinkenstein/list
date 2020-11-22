/// <reference types="cypress" />

const {
  navigate,
  checkTodosList,
  filterToDos,
} = require("../../page-objects/todo");

describe("todo actions", () => {
  it("should goto website", () => {
    navigate();
  });

  it("should check for a list of Not-To-Dos", () => {
    checkTodosList();
  });

  it('should filter "Familie" correctly', () => {
    filterToDos("Familie", 5);
  });

  it('should filter "Urlaub" correctly', () => {
    filterToDos("Urlaub", 3);
  });

  it('should filter "Haushalt" correctly', () => {
    filterToDos("Haushalt", 5);
  });

  it('should filter "Selbstoptimierung" correctly', () => {
    filterToDos("Selbstoptimierung", 3);
  });

  it('should filter "Lohnarbeit" correctly', () => {
    filterToDos("Lohnarbeit", 3);
  });

  it('should filter "Liebesleben" correctly', () => {
    filterToDos("Liebesleben", 4);
  });

  it('should filter "Freizeit" correctly', () => {
    filterToDos("Freizeit", 4);
  });

  it('should filter "Finanzen" correctly', () => {
    filterToDos("Finanzen", 3);
  });

  it('should filter "sonstso" correctly', () => {
    filterToDos("sonstso", 4);
  });

  it('should filter "all" correctly', () => {
    filterToDos("keine Kategorie wählen", 34);
  });
});
