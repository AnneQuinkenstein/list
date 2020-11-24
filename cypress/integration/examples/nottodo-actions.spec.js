/// <reference types="cypress" />

const {
  navigate,
  addTodo,
  deleteToDo,
  checkTodosList,
  editToDo,
} = require("../../page-objects/todo");

describe("todo actions", () => {
  beforeEach(() => {
    navigate();
  });

  it("should check for a list of Not-To-Dos", () => {
    checkTodosList();
  });

  it("should be able to add new Not-To-Do of Not-Todo App", () => {
    addTodo("Blumen in den Staub malen");
  });

  it("should be able to delete an existing Not-To-Do of Not-Todo App", () => {
    deleteToDo("nichts überlegen");
    deleteToDo("Mäusefalle nicht leeren");
  });

  it("should be able to edt an existing Not-To-Do of Not-Todo App", () => {
   editToDo("Saunagutschein weiterverschenken", " vor anderen"); 
   editToDo("Katze nicht füttern", " und tränken"); 
  });
});
