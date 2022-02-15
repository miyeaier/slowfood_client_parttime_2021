describe("Display list of products", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/api/products", {
      fixture: "products.json",
    }).as("getProducts");
    cy.visit("/");
  });

  it("is expected to see a header", () => {
    cy.get("[data-cy=header]").should("be.visible");
  });

  it("displays a list with 3 items", () => {
    cy.get("[data-cy=products-list]").should("have.length", 1);
  });

  it("the list items display the expected content", () => {
    cy.get("[data-cy=products-list]").first().should("contain", "cerulean");
  });
});
