/* eslint-disable no-undef */
import "cypress-localstorage-commands";
const login = () => {
  describe("positive-case-login", () => {
    // beforeEach(() => {
    //   cy.setLocalStorage("token", "3063a1f45f21de5f03a3eef4178d031cc8526494");
    //   cy.saveLocalStorage();
    // })
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
    it("user see list-event", () => {
      cy.get(".scora-event__tab > :nth-child(1)").should("exist");
    });
  });
};
export default { login };
