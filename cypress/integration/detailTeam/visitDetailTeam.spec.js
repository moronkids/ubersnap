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
    cy.visit("http://localhost:3000");
    cy.wait(5000);
  });
  it("User click top team in leaderboard", () => {
    cy.get('[data-qa-id="0team"]').click();
    cy.wait(1000);
  });
  it("User see detail team page", () => {
    cy.get(".leaderboards__head > .title").should("have.length", 1);
    cy.wait(1000);
  });
  //   it("User click help button", () => {
  //     cy.get("a.my-auto > .justify-content-end").click();
  //   });
  //   it("User in page help", () => {
  //     cy.location().should((loc) => {
  //       expect(loc.pathname).to.eq("/help");
  //     });
  //   });
});
