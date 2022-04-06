// ** Home page integration test **

describe('Home page - Meta', () => {

  beforeEach(() => {
    cy.viewport(1980, 800);
    cy.visit('/');
  });

  it('Assert that <title> is correct', () => {
    cy.title().should('eq', 'Airbnb');
  });

});

describe('Home page - Header', () => {

  beforeEach(() => {
    cy.viewport(1980, 800);
    cy.visit('/');
  });

  it('Assert that logo redirect on home page', () => {
    cy.dataCy('logo').click();
    cy.url().should('eq', 'http://localhost:8080/#/');
  });

  it('Assert that "became a host" button redirect on host page', () => {
    cy.dataCy('host').click();
    cy.url().should('eq', 'http://localhost:8080/#/host/homes');
  });

  it('Assert that changing language is functional', () => {
    cy.dataCy('host').should('contain', 'Devenez hôte');

    cy.dataCy('language').click();
    cy.dataCy('english').click();
    cy.dataCy('close').click();

    cy.dataCy('host').should('contain', 'Become a Host');

    cy.dataCy('language').click();
    cy.dataCy('french').click();
    cy.dataCy('close').click();

    cy.dataCy('host').should('contain', 'Devenez hôte');
  });

  it('Assert on account menu that "sign in" button is functionnal', () => {
  });

  it('Assert on account menu that "sign up" button is functionnal', () => {
  });

  it('Assert on account menu that "host" button redirect on host page', () => {
    cy.dataCy('account').click();

    cy.dataCy('menu-host').click();
    cy.url().should('eq', 'http://localhost:8080/#/host/homes');
  });

  it('Assert on account menu that "host experience" button redirect on host experiences page', () => {
    cy.dataCy('account').click();

    cy.dataCy('menu-host-experience').click();
    cy.url().should('eq', 'http://localhost:8080/#/host/experiences?from_nav=1');
  });

  it('Assert on account menu that "help" button redirect on help page', () => {
    cy.dataCy('account').click();

    cy.dataCy('menu-help').click();
    cy.url().should('eq', 'http://localhost:8080/#/help');
  });

});

describe('Home page - Navigation bar', () => {

  beforeEach(() => {
    cy.viewport(1980, 800);
    cy.visit('/');
  });

  it('Assert that "place to stay" is selected by default', () => {
    cy.dataCy('place-to-stay').should('have.class', 'selected');
  });

  it('Assert that on click on "experiences" button, it is selected', () => {
    cy.dataCy('experiences').click().should('have.class', 'selected');
  });

  it('Assert that on click on "place to stay" button, it is selected', () => {
    cy.dataCy('experiences').click()
    cy.dataCy('place-to-stay').click().should('have.class', 'selected');
  });

  it('Assert that "online experiences" button redirect on online experiences page', () => {
    cy.dataCy('online-experiences').click();
    cy.url().should('eq', 'http://localhost:8080/#/s/experiences/online')
  });

});

describe('Home page - Search bar', () => {

  beforeEach(() => {
    cy.viewport(1980, 800);
    cy.visit('/');
  });

  // it('Assert that logo redirect on home page', () => {
  //   cy.dataCy('logo').click();
  //   cy.url().should('eq', 'http://localhost:8080/#/');
  // });

})
