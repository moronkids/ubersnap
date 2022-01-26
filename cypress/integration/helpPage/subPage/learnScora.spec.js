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
    cy.wait(5000);
  });
  it("User click div Learn Scora", () => {
    cy.get("a > .list > h3").click();
    cy.wait(1000);
  });
  it("User in page help - Learn Scora", () => {
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/help/learn-scora");
    });
    cy.wait(1000);
  });
});
