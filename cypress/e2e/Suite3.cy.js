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
        cy.contains('Adicionar').click()
        cy.get('input[name=name]').type('1')
        cy.get('input[name=email]').type('a')
        cy.get('input[name=cpf]').type('a')
        cy.get('input[name=phone]').type('a')
        cy.contains('GUARDAR').click()
        cy.get('.swal-button').click()
    })

    it('Cenário Negativo 2 - Edição de usuário com os dados inválidos', () => {
        cy.contains('Entrar').click()
        cy.get(':nth-child(3) > [style="width: 15%; justify-content: flex-start;"] > :nth-child(3)').click()
        cy.get('input[name=name]').clear().type(' ')
        cy.get('input[name=email]').clear().type(' ')
        cy.get('input[name=cpf]').clear().type(' ')
        cy.get('input[name=phone]').clear().type(' ')
        cy.contains('ATUALIZAR').click()
    })
})