class articlesPage{
    
    //metodos
    verifyArticles = (article) =>{
        cy.fixture('articles.json').then((locators) => {
            cy.get(locators.banner).contains(article);
        })
    }
}
export default new articlesPage();
