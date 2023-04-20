describe('Suite 3 - Desafio nível 3', () => {
    before(() => {
        cy.clearLocalStorageSnapshot()
    })
    beforeEach(() => {
        cy.restoreLocalStorage()
        cy.visit("https://tinnova-teste-qa.vercel.app/");
    })

    afterEach(() => {
        cy.saveLocalStorage();
    })

    it('Cenário Negativo 1 - Adicionando usuário com os dados inválidos', () => {
        cy.contains('Entrar').click()
        cy.wait(3000)
        cy.contains('Adicionar').click()
        cy.get('input[name=name]').type('a')
        cy.get('input[name=cpf]').type('1')
        cy.get('input[name=phone]').type('1')
        cy.contains('GUARDAR').click()
        cy.contains('Todos os campos devem ser preenchidos').should('exist')
        cy.get('.swal-button').click()
    })

    it('Cenário Negativo 2 - Edição de usuário com os dados inválidos', () => {
        cy.contains('Entrar').click()
        cy.wait(3000)
        cy.get('#root > div > div.sc-jqUVSM.jkrDKT > div.sc-jSMfEi.iuhvyf > div:nth-child(1) > div:nth-child(5) > div:nth-child(3)').click()
        cy.get('input[name=name]').clear().type('Beatriz de Souza')
        cy.get('input[name=email]').clear()
        cy.get('input[name=cpf]').clear().type('642.983.360-77')
        cy.get('input[name=phone]').clear()
        cy.contains('ATUALIZAR').click()
        cy.contains('Todos os campos devem ser preenchidos').should('exist')
        cy.get('.swal-button').click()
    })
})
