describe("Visual regression - Data Tables", () => {
  before(() => {
    cy.visit('http://zero.webappsecurity.com/login.html')
    cy.get("#user_login").type("username"); //standard credentials for sandbox site
    cy.get("#user_password").type("password")
    cy.get("#user_remember_me").click()
    cy.get("input[name='submit']").click()
  })

  it("Should load account activity", () => {
    cy.get("#account_activity_tab").click()
  })

  it("Snapshots the data tables", () {
    cy.matchImageSnapshot()
  })
})
