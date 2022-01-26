/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */

import "cypress-localstorage-commands";
import { login } from "./positive.spec";
describe("negative-case-login", () => {
  it("user see page", () => {
    cy.visit("http://localhost:3000");
  });
  it("user see button login", () => {
    cy.get('[data-qa-id="button-login"]').should("have.length", 1);
  });
  it("user click button login before fill", () => {
    cy.get('[data-qa-id="button-login"]').click();
  });
  it("user see input username & password", () => {
    cy.get('[data-qa-id="input-Username"]').should("have.length", 1);
    cy.get('[data-qa-id="input-Password"]').should("have.length", 1);
  });
  it("user see error log in input", () => {
    cy.get(":nth-child(1) > .error_msg").should("exist");
    cy.get(":nth-child(2) > .error_msg").should("exist");
  });
  it("user fill input username & passworod", () => {
    cy.get('[data-qa-id="input-Username"]').type("bagusrino");
    cy.get('[data-qa-id="input-Password"]').type("12345%qaz");
  });
  it("user click button login", () => {
    cy.get('[data-qa-id="button-login"]').click();
  });
  it("user see failed login notif", () => {
    cy.get(".error-state.text-center.m-auto.d-block").should("exist");
  });
});
login();
