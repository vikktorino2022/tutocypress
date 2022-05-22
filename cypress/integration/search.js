import indexPage from '../support/pages/index';
import articlesPage from '../support/pages/articles';

describe('Searchs tests cases', function(){

    before(function(){
        cy.log("Ejecutando precondiones  a las pruebas");
    })
    after(function(){

        cy.log("Ejecutando postcondiciones a las pruebas");
    })
    beforeEach(function(){
        cy.visit('http://automationpractice.com/index.php');
    })
    afterEach(function(){
        cy.log("Poniendo datos en su estado original");
    })

    it('Searchs dresses',function(){
        indexPage.search('dress');
        cy.logSpecFormat('Searching for dresses');
        articlesPage.verifyArticles('"dress"');
    })    
    it('Searchs hat', function () {
        indexPage.search('hat');
        articlesPage.verifyArticles('"hat"');
       
    })
})