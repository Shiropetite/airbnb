import { mount } from '@cypress/vue';
import DatePicker from 'src/components/DatePicker.vue';

describe('Date picker', () => {
  it('renders a message', () => {
    const label = 'Hello there';
    mount(DatePicker, {
      props: {
        modelValue: {from: '', to: ''},
        month: 2,
        year: 2022
      },
    });

    // cy.dataCy('button').should('contain', label);
  })
})
