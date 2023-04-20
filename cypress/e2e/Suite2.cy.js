describe('Suite 2 - Desafio nível 2', () => {
    beforeEach(() => {
        cy.restoreLocalStorage()
        cy.visit("https://tinnova-teste-qa.vercel.app/");
    })

    afterEach(() => {
        cy.saveLocalStorage();
    })

    it('Cenário 1 - Edição de usuário', () => {
        cy.contains('Entrar').click()
        cy.wait(3000)
        cy.get('#root > div > div.sc-jqUVSM.jkrDKT > div.sc-jSMfEi.iuhvyf > div:nth-child(1) > div:nth-child(5) > div:nth-child(3)').click()
        cy.get('input[name=name]').clear().type('Juliana Ferreira de Melo')
        cy.get('input[name=email]').clear().type('teste@email.com')
        cy.get('input[name=cpf]').clear().type('76227255017')
        cy.get('input[name=phone]').clear().type('11956514444')
        cy.contains('ATUALIZAR').click()
    })

    it('Cenário 2 - Deletar usuário', () => {
        cy.contains('Entrar').click()
        cy.wait(3000)
        cy.get('#root > div > div.sc-jqUVSM.jkrDKT > div.sc-jSMfEi.iuhvyf > div:nth-child(1) > div:nth-child(5) > div:nth-child(4)').click()
        cy.contains('Deseja mesmo remover?').should('exist')
        cy.get(':nth-child(2) > .swal-button').click()
    })
})
