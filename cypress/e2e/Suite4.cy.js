describe('Suite 3 - Desafio nível 3', () => {
    beforeEach(() => {
        cy.restoreLocalStorage()
        cy.visit("https://tinnova-teste-qa.vercel.app/");
    })

    afterEach(() => {
        cy.saveLocalStorage();
    })

    it('Cenário Explorátorio 1 - Edição de usuário o campo Nome preenchido e CPF preenchido', () => {
        cy.contains('Entrar').click()
        cy.get(':nth-child(1) > [style="width: 15%; justify-content: flex-start;"] > :nth-child(3)').click()
        cy.get('input[name=name]').clear().type('Ana Luiza Ramos')
        cy.get('input[name=email]').clear().type(' ')
        cy.get('input[name=cpf]').clear().type('11233771035')
        cy.get('input[name=phone]').clear().type(' ')
        cy.contains('ATUALIZAR').click()
    })


    it('Cenários Explorátorios 2- Deletar usuário', () => {
        cy.contains('Entrar').click()
        cy.get(':nth-child(3) > [style="width: 15%; justify-content: flex-start;"] > :nth-child(4)').click()
        cy.get(':nth-child(1) > .swal-button').click()
    })

    it('Cenários Explorátorios 3 - Sair', () => {
        cy.contains('Entrar').click()
        cy.get('.sc-hKMtZM > :nth-child(4)').click()
    })
})