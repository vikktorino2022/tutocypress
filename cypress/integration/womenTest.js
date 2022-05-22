import {cyan} from "color-name"

describe('Pruebas en el sitio women',function(){
    
    beforeEach(function(){
        cy.visit('http://automationpractice.com/index.php?id_category=3&controller=category');
    })
    it('Large and Top search',function(){
        cy.get('#layered_category_4').check();
        cy.get('#layered_id_attribute_group_3').check();

        cy.get('#layered_id_attribute_group_3').uncheck();
        cy.get('#layered_category_4').uncheck();

    })
    it('Order by highest Price', function(){
        cy.get('#selectProductSort').select('Price: Lowest first');
    })
    it('Order by in Stock', function () {
        cy.get('#selectProductSort').select('In stock');
    })
})