describe('Search element', () =>{
    it('seaarch for elements with multiple results', ()=>{
        cy.visit('/');
        cy.fixture('index').then((index) =>{
            cy.get(index.searchBox).type('dress');
            cy.get(index.searchButton).click();
        })
        cy.fixture('searchResult').then((searchResult) =>{
            cy.get(searchResult.title).should('contain','dress');
        })
    })
    it('search for elements with not result', () =>{
        cy.fixture('index').then((index) => {
            cy.get(index.searchBox).type('qwety');
            cy.get(index.searchButton).click();
    })
        cy.fixture('searchResult').then((searchResult) => {
            cy.get(searchResult.alert).should('contain', 'No result were found for your search');
        })
})
})