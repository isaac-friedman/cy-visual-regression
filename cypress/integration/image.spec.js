const pages = ["https://example.com"];
const sizes = ["iphone-x", "iphone-6", "ipad-2", [1280, 1024]];

describe("Demonstrates how to compare image snapshots", () => {
  sizes.forEach((size) => {
    pages.forEach((page) => {
      it("should compare a snapshot at each size", () => {
        cy.setResolution(size);
        cy.visit(page);
        cy.matchImageSnapshot();
      });
    });
  });
});

describe("Single element snapshot", () => {
  it("Snapshots a single element", () => {
    cy.visit("https://example.com");
    cy.get("h1").matchImageSnapshot();
  });
});
