describe("Demonstrates how to compare image snapshots", () => {
  it("takes a snapshot the first time and compares to our existing one thereafter", () => {
    cy.visit("http://example.com")
    cy.matchImageSnapshot();
  })
})
