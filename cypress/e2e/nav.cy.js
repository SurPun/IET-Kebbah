describe("Navigate around website", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("includes all elements on navbar", () => {
    cy.get("li").contains("Home");
    cy.get("li").contains("About");
  });
});
