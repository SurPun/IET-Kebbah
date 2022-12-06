describe("Navigate around website", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("includes all elements on navbar", () => {
    cy.get("h1").contains("Immersive Empathy Training");
  });

  it("should display IET logo image", () => {
    cy.get('img[alt="IET logo"]').should("be.visible");
  });

  it("should render a 'Start' btn", () => {
    cy.get('a').contains('Start')
  });

  it("should render a 'Start' btn", () => {
    cy.get('a').contains('Start')
  });
});
