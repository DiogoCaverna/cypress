describe('Pagina de Cadastro', () => {
  it('Deve preencher os campos do formulário corretamente para cadastrar novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    //cy.contains('a', 'Cadastrar').click();
    //cy.get/*('input[name="nome"]')*/ ('#name').type('Diogo');
    //cy.get/*('input[name="email"]')*/ ('#email').type('Diogo1@gm.com');
    //cy.get/*('input[name="password"]')*/ ('#pass-create').type('D123456a');
    //cy.get/*('input[name="confirm_password"]')*/ ('#pass-confirm').type('D123456a');
    //cy.contains('button', 'Cadastrar').click();

    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('Diogo');
    cy.get('[data-test="input-email"]').type('Diogo12@gm.com');
    cy.get('[data-test="input-password"]').type('D123456a');
    cy.get('[data-test="input-confirm-password"]').type('D123456a');
    cy.get('[data-test="submit-button"]').click();
  })
})






