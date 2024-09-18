describe('Navigate homepage', () => {
  beforeEach(() => {
    cy.visit("localhost:3000")
  })


  it('is even a webpage', () => {
    cy.get('h1').contains('Claire Marie')
    })

    it('has working buttons', () => {
      cy.get('a').contains('Contact').click()
      })

})
  
   