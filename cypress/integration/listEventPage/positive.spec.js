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
    cy.visit("http://localhost:3000/");
    cy.wait(1000);
  });
  it("User click button account then click button list event", () => {
    cy.get(".header-scora__profile").click();
    cy.wait(1000);
    cy.get('[href="/list-event"] > li').click();
    cy.wait(1000);
  });
  it("User see page list event", () => {
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/list-event");
    });
    cy.wait(1000);
  });
});
