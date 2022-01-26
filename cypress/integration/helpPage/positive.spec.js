/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
import "../../support";
import "cypress-localstorage-commands";
describe("positive-case-favorite/sorting", () => {
  beforeEach(() => {
    cy.setLocalStorage("token", "3063a1f45f21de5f03a3eef4178d031cc8526494");
    cy.saveLocalStorage();
  });
  it("Bypass login & visit page", () => {
    cy.visit("http://localhost:3000");
      cy.wait(4000);
  });
  it('User click help button',() => {
      cy.get("a.my-auto > .justify-content-end").click()
        cy.wait(1000);
  })
  it('User in page help', () => {
      cy.location().should((loc) => {
        expect(loc.pathname).to.eq("/help");
      });
        cy.wait(1000);
  })
});
