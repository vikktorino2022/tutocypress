describe('Go to diferent section',function(){
    beforeEach(function(){
        cy.visit("http://automationpractice.com/index.php");
    })
    it('Go to women section',function(){
        cy.get('[class=sf-with-ul]').eq(0).click();
    })

    it('Go to Dresses section', function () {
        cy.get('[class=sf-with-ul]').eq(3).click();
    })
})