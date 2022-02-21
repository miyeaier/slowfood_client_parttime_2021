describe("Display list of products", () => {
    beforeEach(() => {
      cy.intercept("GET", "**/api/products", {
          fixture: "products.json",
      })
      cy.intercept("POST", "**/api/orders", {
        fixture: "orderCreateResponse.json",
      }).as("Orders.create");
      cy.visit("/");
      cy.get("[data-cy=product-list]")
        .children()
        .first()
        .within(() => {
          cy.get("[data-cy=add-to-order-button]").click();
        })
    });
    it("is expected to make a POST request", () => {
        cy.wait("@Orders.create").its("request.method").should("eq", "POST");
      });
    
      it("is expected to respond with a message", () => {
        cy.get("[data-cy=message-box]").should(
          "contain.text",
          "1 chicken wings was added to your order"
        );
    });
})
  