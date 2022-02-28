describe("Display products in order", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/api/products", {
      fixture: "products.json",
    }).as("getProducts");
    cy.intercept("GET", "**/api/orders/**", {
      fixture: "orderReview.json",
    }).as("getOrder");
    cy.visit("/");
  });

  describe("successfully", () => {
    beforeEach(() => {
      cy.get("[data-cy=show-order]").click();
    });

    it("is expected to show a list of products", () => {
      cy.get("[data-cy=order-list]").children().should("have.length", 3);
    });

    it("is expected to include a product name", () => {
      cy.get("[data-cy=order-list]")
        .children()
        .last()
        .within(() => {
          cy.contains("Avo salad").should("be.visible");
        });
    });

    it('is expected to include total cost', () => {
      cy.get("[data-cy=total-cost]").should("contain", "750")
    });
  });
});