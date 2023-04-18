describe('Suite 1 - Desafio nível 1', () => {
    beforeEach(() => {
        cy.restoreLocalStorage()
        cy.visit("https://tinnova-teste-qa.vercel.app/");
    })

    afterEach(() => {
        cy.saveLocalStorage();
    })

    it('Cenário 1 - Cadastro de usuário', () => {
        cy.contains('Entrar').click()
        cy.contains('Adicionar').click()
        cy.get('input[name=name]').type('Indiara Caetano Marques')
        cy.get('input[name=email]').type('indiara@email.com')
        cy.get('input[name=cpf]').type('82847042008')
        cy.get('input[name=phone]').type('1198855444')
        cy.contains('GUARDAR').click()
    })

    it('Cenário 2 - Consulta de usuário', () => {
        cy.contains('Entrar').click()
        cy.get(':nth-child(3) > [style="width: 15%; justify-content: flex-start;"] > :nth-child(2) > svg').click()
        cy.get('.sc-bczRLJ').click()
    })
})