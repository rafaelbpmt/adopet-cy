describe('Teste de Login - Adopet', () => {
    beforeEach(() =>{
    cy.visit('https://adopet-tau.vercel.app/');
    cy.get('[href="/login"]').click();
    })

    it('Login - Sucesso', () => {
    
    cy.get('#email').type('rafaelteste@gmail.com');
    cy.get('#pass').type('Teste123');
    cy.get('.register').click();
    })
})