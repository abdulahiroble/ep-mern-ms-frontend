Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe("Sign in user and search event by zipcode", () => {
  it("passes", () => {


    // Visit the app root
    cy.visit("http://207.154.228.42/");
    cy.wait(2000);
    // navigate to login page
    cy.findByRole("link", {name: /login/i}).click();

    // fill in the form
    cy.findByRole("textbox", {name: /email/i}).type("sejenu@gmail.com");
    cy.findByLabelText(/password/i).type("naruto123");

    // submit the form
    cy.findByRole('button', {name: /log in/i}).click();

    // wait for the page to load
    cy.wait(5000);

    // search for event by zipcode
    cy.findByRole('textbox').type("2610")

    // click on search button
    cy.findByRole('button', {name: /search/i}).click();

  });
});
