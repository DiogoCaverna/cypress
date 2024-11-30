Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('TOKEN_CAPTCHA is not defined')) {
      // Retorna false para evitar que o teste falhe
      return false;
    }
});

describe('template spec', () => {
  beforeEach(()=>{
    cy.visit('https://desenvolvimento.pje.csjt.jus.br/primeirograu/login.seam')
    cy.get('#username').type('18280498168');
    cy.get('#password').type('csjt@pje123');
    cy.get('#btnEntrar').click();
    

  })

  it ('listar escaninho', () =>{
    cy.get('button[name="Escaninho"]').click();
    //cy.url().should('include', '/escaninho/peticoes-juntadas'); // Verifica parte da URL
    //cy.contains('h1', 'Escaninho de petições juntadas').should('be.visible'); // Exemplo de validação visual
  })

  

  /*it('consultar todos os processos', () => {
    cy.get('button[name="Painel Global"]').click();
    cy.contains('button', 'Exibir todos').click();
    //validação retorna uma lista de todos os processos
    cy.url().should('be.equal', 'https://desenvolvimento.pje.csjt.jus.br/pjekz/painel/global/todos/lista-processos');
  
  })

  it('consultar processo', () => {     
    cy.get(':nth-child(3) > .container-item-menu > .mat-focus-indicator').click(); //clica no icone do painel global
    cy.get('#inputNumeroProcesso').click().type('0000955-05.2016.5.10.0022');  //pesquisa processo
    cy.get('.cdk-drag > :nth-child(2)').should('be.contain', '0000955-05.2016.5.10.0022');  //valida
  })

  it('listar os processos do Escaninho', () => {
    //cy.get('button[name="Escaninho"]').click();
    cy.get(':nth-child(6) > .container-item-menu > .mat-focus-indicator > .mat-button-wrapper > .icone-menu').click();
    cy.url().should('be.equal', 'https://desenvolvimento.pje.csjt.jus.br/pjekz/escaninho/peticoes-juntadas');
  
  })

  /*it('consultar processo especifico do Escaninho', () => {     
    cy.get('button[name="Escaninho"]').click();
    cy.get('[aria-label="Localizar Processo no Escaninho"]').click().type('0000182-57.2016.5.10.0022');  //pesquisa processo
    cy.get('.cdk-drag > :nth-child(2)').should('be.contain', '0000955-05.2016.5.10.0022');  //valida
  })*/

  
});




