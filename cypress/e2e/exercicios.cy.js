describe('rodando exercícios', () => {
  it('passes', () => {
    cy.visit('https://adopet-tau.vercel.app/')
    cy.get('.header__message').click()
    cy.get('.header__home').click()
    cy.get('.home__buttons').click()
    cy.get(':nth-child(2) > .card__contact').click()
  })
})