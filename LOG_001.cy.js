describe('Skenario Login', () => {
  it.only('Login Menggunakan Data Valid', () => {

    //User berhasil masuk ke halaman login website
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Input username yang terdaftar
    cy.get('[name="username"]').type('Admin').should('have.value','Admin')

    //Input password yang terdaftar
    cy.get('[name="password"]').type('admin123').should('have.value','admin123')

    //Klik tombol login
    cy.get('.oxd-button').should('be.visible')
    cy.get('.oxd-button').click()

    //Expected result
    //Berhasil login dan diarahkan ke halaman utama/ dashboard web
    cy.url().should('include','/dashboard/index')
  })
})