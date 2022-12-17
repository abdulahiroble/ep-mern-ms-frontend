Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Send message", () => {
    it("passes", () => {

        // Visit the app root
        cy.visit("http://207.154.228.42/");
        cy.wait(2000);

        cy.findByRole('link', {name: /kontakt/i}).click()

        cy.wait(2000);

        cy.findByRole('textbox', {name: /name/i}).type("abdulahi");

        cy.wait(2000);

        cy.findByRole('textbox', {name: /email/i}).type("abdulahi@hotmail.com");

        cy.wait(2000);

        cy.findByRole('textbox', {name: /text message/i}).type("hej med dig");

        cy.wait(2000);

        cy.findByText(/submit/i).click()

    });
});
