describe('Escribir en el buscador varios string', function () {
    it('Vamos a escribir y limpiar', function () {
        cy.visit('http://automationpractice.com/index.php');
        cy.get('#search_query_top').clear().type('Hola').clear().type('como estas').clear();
    })
})