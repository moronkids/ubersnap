/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
import "cypress-localstorage-commands";

describe("positive-case-previous event", () => {
  beforeEach(() => {
    cy.setLocalStorage("token", "3063a1f45f21de5f03a3eef4178d031cc8526494");
    cy.saveLocalStorage();
  });
  it("Bypass login & visit page list-event", () => {
    cy.visit("http://localhost:3000/list-event");
      cy.wait(4000);
  });
  it("User text `Previous Event` and click it", () => {
    cy.get('[data-qa-id="prev-btn"]').click();
      cy.wait(1000);

  });
  it("User see tab Previous Event", () => {
    cy.get(":nth-child(2) > .border-tabs").should("have.length", 1);
      cy.wait(1000);

  });
  it("User click top event", () => {
    cy.get('[data-qa-id="prev0"]').click();
    cy.wait(2000);
  });
  it("User choose first phase", () => {
    cy.get('[data-qa-id="phase0"]').click();
    cy.wait(2000);
  });
});
