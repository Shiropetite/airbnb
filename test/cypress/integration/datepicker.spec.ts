import { mount } from '@cypress/vue';
import DatePicker from 'src/components/DatePicker.vue';

describe('Date picker', () => {
  it('renders correctly (Mars 2050)', () => {
    mount(DatePicker, {
      props: {
        modelValue: {from: '', to: ''},
        month: 2,
        year: 2050
      },
    });

    cy.dataCy('date').should('contain', 'mars 2050');

    const days = ['lu', 'ma', 'me', 'je', 've', 'sa', 'di']
    for(let i = 0; i < 7; i++) {
      cy.dataCy(`day-${i}`).should('contain', days[i]);
    }

    cy.dataCy('cell-0-0').should('contain', '');
    cy.dataCy('cell-0-1').should('contain', '1');
    cy.dataCy('cell-1-0').should('contain', '7');
    cy.dataCy('cell-4-0').should('contain', '28');
    cy.dataCy('cell-4-3').should('contain', '31');
  })

  it('Select a date', () => {
    mount(DatePicker, {
      props: {
        modelValue: {from: '', to: ''},
        month: 2,
        year: 2050
      },
    });

    cy.dataCy('cell-1-0').click()
    cy.dataCy('cell-1-6').click()
    cy.dataCy('cell-1-0').should('be.visible').should('have.class', 'selected-from');
    cy.dataCy('cell-1-6').should('be.visible').should('have.class', 'selected-to')
  })

  it('Deselect a date', () => {
    mount(DatePicker, {
      props: {
        modelValue: {from: '07/03/2050', to: '13/03/2050'},
        month: 2,
        year: 2050
      },
    });

    cy.dataCy('cell-1-0').click()
    cy.dataCy('cell-1-0').click()
  })
})
