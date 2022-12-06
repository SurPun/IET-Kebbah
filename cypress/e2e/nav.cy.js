describe("Navigate around website", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("includes all elements on navbar", () => {
    cy.get("li").contains("Home");
    cy.get("li").contains("About");
  });

  // it("should display a image in element div with class image", () => {
  //   cy.get('[alt="IET logo"]').click();

  // });

  it("About tap should navigate to the about page", () => {
    cy.get("li").contains("Home").click();
    cy.url().should("include", "/");
  });

  it("About tap should navigate to the about page", () => {
    cy.get("li").contains("About").click();
    cy.url().should("include", "/about");
  });
});
