/* eslint-disable no-undef */
import "cypress-localstorage-commands";
describe("positive-case-profile", () => {
  //   beforeEach(() => {
  //     cy.setLocalStorage("token", "3063a1f45f21de5f03a3eef4178d031cc8526494");
  //     cy.saveLocalStorage();
  //   });
  it("user see page", () => {
    cy.visit("http://localhost:3000");
  });
  it("user see button login", () => {
    cy.get('[data-qa-id="button-login"]').should("have.length", 1);
  });
  it("user see input username & password", () => {
    cy.get('[data-qa-id="input-Username"]').should("have.length", 1);
    cy.get('[data-qa-id="input-Password"]').should("have.length", 1);
  });
  it("user fill input username & passworod", () => {
    cy.get('[data-qa-id="input-Username"]').type("bagusrin");
    cy.get('[data-qa-id="input-Password"]').type("12345%qaz");
  });
  it("user click button login", () => {
    cy.get('[data-qa-id="button-login"]').click();
  });

  it("User see profile icon and check email and username exist", () => {
    cy.get(".header-scora__profile").should("exist");
    cy.get(".header-scora__profile").click();
    cy.get(".account__identity-box > .p-0").should("have.length", 1);
    cy.get(".account__identity-box > h2").should("have.length", 1);
  });
});
