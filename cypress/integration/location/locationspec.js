describe('Location Demo',function(){
    beforeEach(function(){
        cy.visit('https://automationpractice.com/index.php');
    })

    it('Should have title My Store',function(){
        cy.title().should('eq','My Store'); 
    })
    it('URL show be http://automationpractice.com/index.php',function(){
        
        cy.url().should('eq','http://automationpractice.com/index.php');            
    });
    it('should use https',function(){
        
        cy.location('protocol').should('contains', 'http');
    })
    it('should have hostname', function () {

        cy.location('host').should('eq', 'automationpractice.com');
    })
    it('Logineando y deslogineando', function(){
        cy.get('.login').click();
        cy.get('#email').type('cd@gmail.com');
        cy.get('#passwd').type('123456');
        cy.get('#SubmitLogin > span').click();
        cy.get('.logout').click();
    })
}) 