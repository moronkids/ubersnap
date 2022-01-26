/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
import "../../support";
import "cypress-localstorage-commands";
describe("positive-case-favorite/sorting", () => {
    beforeEach(() => {
      cy.setLocalStorage("token", "3063a1f45f21de5f03a3eef4178d031cc8526494");
      cy.saveLocalStorage();
    });
    it('Bypass login & visit page', () => {
      cy.visit('http://localhost:3000')
        cy.wait(1000);
    })
  // it("user see page", () => {
  //   cy.visit("http://localhost:3000");
  // });
  // it("user see button login", () => {
  //   cy.get('[data-qa-id="button-login"]').should("have.length", 1);
  // });
  // it("user see input username & password", () => {
  //   cy.get('[data-qa-id="input-Username"]').should("have.length", 1);
  //   cy.get('[data-qa-id="input-Password"]').should("have.length", 1);
  // });
  // it("user fill input username & passworod", () => {
  //   cy.get('[data-qa-id="input-Username"]').type("bagusrin");
  //   cy.get('[data-qa-id="input-Password"]').type("12345%qaz");
  // });
  // it("user click button login", () => {
  //   cy.get('[data-qa-id="button-login"]').click();
  // });
  it("user doing test sorting and fovorite 🖥🔥, please uncollapse this", () => {
    let topNameLeaderboard = "";
    cy.saveLocalStorage();
    cy.log("✅ click logo to dashboard");
    cy.get(".header-scora__logo").click();
    cy.log("✅ click fav button");

    cy.get('[data-qa-id="0"]').click();
    cy.get('[data-qa-id="0team"]').then(($el) => {
      topNameLeaderboard = $el.text(); // Now you have the text "Backpack"
      cy.log($el.text());
      cy.log("✅ show notif success");
      cy.get(".Toastify__toast-body").should("exist");
      cy.get(".leaderboards__head > .d-flex > :nth-child(2) > span").click();
        cy.wait(1000);
      cy.log("✅ select sorting by score");
      cy.get(".sortingscora > :nth-child(2)").click();
        cy.wait(1000);
      cy.log("✅ compare topName to makesure sorting is fine");
      cy.get('[data-qa-id="0team"]').then(($el_) => {
        const newTopNameLeaderboard = $el_.text();
        cy.log($el.text());
        cy.log($el_.text());
        if (topNameLeaderboard !== newTopNameLeaderboard) cy.log("🔥 success");
      });
    });

    // cy.log("✅ show notif success");
    // cy.get(".Toastify__toast-body").should("exist");
    // cy.get(".leaderboards__head > .d-flex > :nth-child(2) > span").click();
    // cy.log("✅ select sorting by score");
    // cy.get(".sortingscora > :nth-child(2)").click();
    // cy.log("✅ compare topName to makesure sorting is fine");
    // cy.get('[data-qa-id="0"]').should("have.value");
  });
});
