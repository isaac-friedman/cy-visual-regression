describe("Visual regression -- responsive login page", () => {
  before(() => {
    cy.visit("http://zero.webappsecurity.com/login.html");
    cy.get("#user_login").type("admin");
    cy.get("#user_password").type("password");
    cy.get("#user_remember_me").click();
  });

  it("checks desktop layout", () => {
    cy.setResolution([1280, 1024]);
    cy.matchImageSnapshot();
  });

  it("checks iphone-x layout", () => {
    cy.setResolution("iphone-x");
    cy.matchImageSnapshot();
  });

  it("checks macbook 15 inch layout", () => {
    cy.setResolution("macbook-15");
    cy.matchImageSnapshot();
  });

  it("checks samsung s10 layout because we don't like the Apple monopoly", () => {
    cy.setResolution("samsung-s10");
    cy.matchImageSnapshot();
  });
});
