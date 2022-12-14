describe("Click pagination number to show next event page", () => {
    it("passes", () => {


        // Visit the app root
        cy.visit("http://localhost:3000");
        cy.wait(2000);
        // navigate to login page

        cy.findByRole('listitem', {name: /2/i}).click();

        // wait for the page to load
        cy.wait(5000);

        cy.findByRole('listitem', {name: /3/i}).click();

        cy.wait(5000);

        cy.findByText(/5/i).click();

        cy.wait(5000);

        cy.findByText(/6/i).click();


    });
});