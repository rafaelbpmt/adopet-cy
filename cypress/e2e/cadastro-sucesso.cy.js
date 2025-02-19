describe('Testando Cadastro - Adopet', () => {
  it('Registro - Sucesso', () => {
    cy.visit('https://adopet-tau.vercel.app/')
    cy.get('[href="/cadastro"]').click();
    cy.get('#name').type('Rafael');
    cy.get('#email').type('rafaeltdest@gmail.com');
    cy.get('#pass-create').type('Testando1');
    cy.get('#pass-confirm').type('Testando1');
    cy.get("[type='submit']").click();
  })
})