/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
import "cypress-localstorage-commands";
describe("positive-case-current event", () => {
  beforeEach(() => {
    cy.setLocalStorage("token", "715387906277f8887b9df64a31b64a8e57e77f36"); //mba ame
    // cy.setLocalStorage("token", "3063a1f45f21de5f03a3eef4178d031cc8526494");
    cy.saveLocalStorage();
  });
  it("Bypass login & visit page list-event", () => {
    cy.visit("http://localhost:3000/list-event");
    cy.wait(4000);
  });
  it("User text `Current Event` and click it", () => {
    cy.get('[data-qa-id="current-btn"]').click();
    cy.wait(1000);
  });
  it("User see tab Current Event", () => {
    cy.get(":nth-child(2) > .border-tabs").should("have.length", 1);
    cy.wait(1000);
  });
  it("User click top event", () => {
    cy.get('[data-qa-id="current0"]').click();
    cy.wait(2000);
  });
  it("User choose first phase", () => {
    cy.get('[data-qa-id="phase0"]').click();
    cy.wait(2000);
  });
});
