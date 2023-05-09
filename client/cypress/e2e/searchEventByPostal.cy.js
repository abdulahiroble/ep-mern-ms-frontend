Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe("Search event by zip code", () => {
  it("passes", () => {

    // Visit the app root
    cy.visit("http://207.154.228.42/");
    cy.wait(2000);

    cy.findByRole('textbox').type("2610");
    cy.wait(2000);

    // click on search button
    cy.findByRole('button', {name: /search/i}).click();

  });
});
