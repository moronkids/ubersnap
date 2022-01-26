/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
import "cypress-localstorage-commands";
describe("positive-case-favorite/sorting", () => {
  beforeEach(() => {
    cy.setLocalStorage("token", "3063a1f45f21de5f03a3eef4178d031cc8526494");
    cy.saveLocalStorage();
    cy.visit("http://localhost:3000");
    cy.get('[data-qa-id="0team"]').click();
  });
  it("Bypass login & visit page", () => {});
  it("User click top team in leaderboard", () => {});
  it("User see detail team page", () => {
    cy.get(".leaderboards__head > .title").should("have.length", 1);
  });
  it("User see button scoring", () => {
    cy.get("[data-qa-id='btn-scoring']").should("exist");
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
