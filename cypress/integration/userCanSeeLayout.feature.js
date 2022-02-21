describe("interface", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/api/products", {
      fixture: "products.json",
    }).as("getProducts");
    cy.visit("/");
  });
  it("successfully renders", () => {

    cy.get("[data-cy=header]").should("contain", "Nordens");
    cy.get("[data-cy=footer]").should("contain", "Slowfood");
  });
});