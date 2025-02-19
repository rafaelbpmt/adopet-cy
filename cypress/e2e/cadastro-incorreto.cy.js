describe('Testando Cadastro - Adopet', () => {
    it('Registro - Sucesso', () => {
    cy.visit('https://adopet-tau.vercel.app/')
    cy.get('[href="/cadastro"]').click();
    cy.get("[type='submit']").click();
    cy.contains('É necessário informar um endereço de email').should('be.visible');
    cy.contains('Crie uma senha').should('be.visible');
    cy.contains('Repita a senha criada acima').should('be.visible');
    })
})