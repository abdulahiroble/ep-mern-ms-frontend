Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe("Sign in user and logout", () => {
  it("passes", () => {

    // Visit the app root
    cy.visit("http://207.154.228.42/");
    cy.wait(2000);
    // navigate to login page
    cy.findByRole("link", {name: /login/i}).click();

    // fill in the form
    cy.findByRole("textbox", {name: /email/i}).type("a@a.dk");
    cy.findByLabelText(/password/i).type("a@a.dk");

    // submit the form
    cy.findByRole('button', {name: /log in/i}).click();

    // wait for the page to load
    cy.wait(5000);

    // logout
    cy.findByText(/logout/i).click()

  });
});
