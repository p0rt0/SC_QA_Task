describe('Currency rate functionality', () => {
  it('Check if the exchange rate was positive in last 24 hours', () => {
    cy.visit('https://spectrocoin.com/en/bitcoin-price-rates.html')
    cy.get('.RatesPage_searchFormWrapper__yHnqn').should('include.text', 'Live Rates')
    cy.get('.css-79fvgm').click()
    cy.get('#react-select-5-option-0').click()
    cy.get('.css-1a3dmmm > .css-1hwfws3').click().type('bitcoin')
    cy.get('#react-select-2-option-6 > span > .SearchInput_highlighted__kglNW').should('have.text', 'Bitcoin').click()
    cy.get('[data-cy="last-24"] > .CurrencyExchangeData_value__4Ghte').contains('-')
    //If the test fails - the exchange rate has been positive within last 24 hours. If passed - negative
  })
})