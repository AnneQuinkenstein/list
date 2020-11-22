// <reference types="cypress" />

export const navigate = () => {
  cy.visit("https://aquin-todolist.netlify.app/");
};

export const checkTodosList = () => {
    cy.get(".tasksList").should("have.descendants", "div");
}

export const addTodo = (NotTodoText) => {
  cy.get(".inp-sit").type(NotTodoText);
  cy.get(".btn-sit").click({ force: true });
  cy.get(".visible").should("contain", NotTodoText);
};

export const deleteToDo = (NotTodoText) => {
  cy.contains(NotTodoText).within(() => {
    cy.get(".deleteButton").click({ force: true });
  });
  cy.contains(NotTodoText).should("not.exist");
};

export const filterToDos = (Cathegory, numbOfCath) => {
    cy.get("#cathegory").select(Cathegory);
    cy.get(".tasksList>div").should("have.length", numbOfCath);
}