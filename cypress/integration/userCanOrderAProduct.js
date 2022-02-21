describe("Order a product", () => {
    beforeEach(() => {
      cy.intercept("GET", "**/api/products", {
          fixture: "products.json",
      })
      cy.intercept("POST", "**/api/products", {
        fixture: "order.json",
      }).as("Orders.create");
      cy.visit("/");
      cy.get("[data-cy=products-list]")
        .children()
        .last()
        .within(() => {
          cy.get("[data-cy=order-button]").click();
        })
    });
    it("is expected to make a POST request", () => {
        cy.wait("@Orders.create").its("request.method").should("eq", "POST");
      });
    
      it("is expected to respond with a message", () => {
        cy.get('#message-box').should(
          "contain.text",
          "1 chicken wings was added to your order"
        );
    });
})
  