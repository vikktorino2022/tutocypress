describe('formas de encontrar un elemento',function (){
    it('buscar en el buscador', function(){
        cy.visit('http://automationpractice.com/index.php');
        cy.get('.search_query.form-control.ac_input').type('Hola');// buscamos polr clase
        cy.get('#search_query_top').type('Como te va');//buscamos por Id
        cy.get('[name = search_query]').type('Me va muy bien');// buscamos por nombre
        cy.get('[placeholder ="Search"]').clear();// borramos el contenido del  elemento


    })
})