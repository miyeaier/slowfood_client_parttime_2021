describe("Display list of products", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("is expected to see a header", () => {
    cy.get("[data-cy=heard]").should("be.visible")
  });


  it("displays a list with 6 items", () => {
    cy.get("[data-cy=products-list]").should("have.length", 6)
  });

  it("the list items display the expected content", () => {
    cy.get("[data-cy=products-list]").first()
      .should('contain', 'chicken wings');
  });
});