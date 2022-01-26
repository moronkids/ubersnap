/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
import "cypress-localstorage-commands";
describe("positive-case-favorite/sorting", () => {
  beforeEach(() => {
    cy.setLocalStorage("token", "3063a1f45f21de5f03a3eef4178d031cc8526494");
    cy.saveLocalStorage();
  });
  it("Bypass login & visit page", () => {
    cy.visit("http://localhost:3000/help");
  });
  it("User click div Contact Us", () => {
    cy.get(":nth-child(3) > h3").click()
  });
  it("User see pop up Contact Us", () => {
    cy.get(
      '[style="visibility: visible; opacity: 1;"] > .contact-us__popup > .box > .justify-content-end'
    ).should('exist')
  });
});
