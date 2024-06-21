// <reference types="cypress" />
describe('first test', () => {
    beforeEach(() => {
        cy.visit('../../app/lighbox.html')
    })



       it('2. Tester la fermeture de la lightbox au clique en dehors de la lightbox',()=>{
        cy.dataCy('image').click()
        cy.dataCy('quit-overlay').click('right')
       })

       


    it('3. Tester l’ajout de la mention “j’aime” et la mise à jour des compteurs sur l’overlay et la lightbox',()=>{
        cy.dataCy('image').click()
        cy.dataCy('like').click()
        cy.dataCy('liked').should('have.text','1')
        cy.dataCy('overlay-like').should('have.text','1')
        cy.dataCy('quit-overlay').click('right')

       })

       it('4. Tester la supression de la mention “jaime” et la mise à jour des compteurs sur l’overlay et la lightbox',()=>{
        cy.dataCy('image').click()
        cy.dataCy('like').click()
        cy.dataCy('liked').should('have.text','1')
        cy.dataCy('overlay-like').should('have.text','1')
        cy.dataCy('quit-overlay').click('right')
        cy.dataCy('image').click()
        cy.dataCy('unlike').click()
        cy.dataCy('liked').should('have.text','0')
        cy.dataCy('overlay-like').should('have.text','0')
       })


       it('5. Tester l’ajout d’un commentaire - Exemple de commentaire : “Cypress is awesome!',()=>{
        cy.dataCy('image').click()
        cy.dataCy('add-comment-text').type('Cypress is awesome!')
        cy.dataCy('submit-comment').click()
    })


    it('6. Tester que l’ajout d’un commentaire vide soit impossible car le bouton “Publish” reste désactivé',()=>{
        cy.dataCy('image').click()
        cy.dataCy('submit-comment').should('be.disabled')
    })

    it('7. Tester l’option qui cache les commentaires',()=>{
        cy.dataCy('image').click()
        cy.dataCy('add-comment-text').type('Cypress is awesome!')
        cy.dataCy('submit-comment').click()
        cy.dataCy('show-comment').click()
    })

    it('8. Tester les différents compteurs de commentaires sur l’overlay et la lightbox',()=>{
        cy.dataCy('image').click()
        cy.dataCy('add-comment-text').type('Cypress is awesome!')
        cy.dataCy('submit-comment').click()
        cy.dataCy('show-comment').click()
        cy.dataCy('overlay-comment').should('have.text','1')
        cy.dataCy('show-comment').should('have.text','Show 1 comment')

    })

    it('9. Tester le singulier/pluriel en fonction du nombre de commentaire.s',()=>{
        cy.dataCy('image').click()
        cy.dataCy('add-comment-text').type('Cypress is awesome!')
        cy.dataCy('submit-comment').click()
        cy.dataCy('show-comment').click()
        cy.dataCy('overlay-comment').should('have.text','1')
        cy.dataCy('show-comment').should('have.text','Show 1 comment')
        cy.dataCy('add-comment-text').type('Cypress is better!')
        cy.dataCy('submit-comment').click()
        cy.dataCy('show-comment').click()
        cy.dataCy('show-comment').should('have.text','Show 2 comments')

    })

    it('10. Écrire trois commentaires et tester la supression du second commentaire au clique sur la bonne croix',()=>{
        cy.dataCy('image').click()
        cy.dataCy('add-comment-text').type('Cypress is better than me!')
        cy.dataCy('submit-comment').click()
        cy.dataCy('add-comment-text').type('Cypress is better!')
        cy.dataCy('submit-comment').click()
        cy.dataCy('add-comment-text').type('commentaire 3')
        cy.dataCy('submit-comment').click()
        cy.dataCy('comments').eq(1).as('comment2');
        cy.get('[data-cy="delete-comment"]').eq(2)
        cy.get('@comment2').within(()=>{
            cy.get('[data-cy="delete-comment"]').click()
        })
})
})
