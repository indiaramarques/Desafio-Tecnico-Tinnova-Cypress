describe('Suite 4 - Desafio nível 3', () => {
    beforeEach(() => {
        cy.restoreLocalStorage()
        cy.visit("https://tinnova-teste-qa.vercel.app/");
    })

    afterEach(() => {
        cy.saveLocalStorage();
    })

    it('Cenários Explorátorios 1 - Deletar usuário - Clicar em "não" no modal', () => {
        cy.contains('Entrar').click()
        cy.wait(3000)
        cy.get('#root > div > div.sc-jqUVSM.jkrDKT > div.sc-jSMfEi.iuhvyf > div:nth-child(1) > div:nth-child(5) > div:nth-child(4)').click()
        cy.get(':nth-child(1) > .swal-button').click()
    })

    it('Cenários Explorátorios 2 - Sair do APP Tinnova', () => {
        cy.contains('Entrar').click()
        cy.get('.sc-hKMtZM > :nth-child(4)').click()
    })
})
