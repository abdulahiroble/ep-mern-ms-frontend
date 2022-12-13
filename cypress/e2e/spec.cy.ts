describe("empty spec", () => {
  it("passes", () => {


    // login
    cy.visit("http://localhost:3000");
    // navigate to login page
    // wait 3 seconds
    cy.wait(2000);
    cy.findByRole("link", {name: /login/i}).click();
    cy.findByRole("textbox", {name: /email/i}).type("sejenu@gmail.com");
    cy.findByLabelText(/password/i).type("naruto123");
    cy.findByRole('button', {name: /log in/i}).click();
    cy.wait(5000);
    cy.findByRole('textbox').type("2610")
    cy.findByRole('button', {name: /search/i}).click();

  });
});
