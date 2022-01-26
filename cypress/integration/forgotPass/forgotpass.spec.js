/* eslint-disable no-undef */
describe("positive-case-forgotpass", () => {
  it("user can see page", () => {
    cy.visit("http://localhost:3000");
  });
  it("user can see forgot pass page", () => {
    cy.get("a > .mx-auto").click();
    cy.get(
      ".forgot-password__box > :nth-child(1) > .justify-content-center"
    ).should("have.length", 1);
  });
});
