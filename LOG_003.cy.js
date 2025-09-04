describe('Skenario Login', () => {
  it.only('Login Menggunakan Data Invalid', () => {
    //User berhasil masuk ke halaman login website
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Input username yang tidak terdaftar
    cy.get('[name="username"]').type('Nimda')

    //Input password yang terdaftar
    cy.get('[name="password"]').type('admin123')

    //Klik tombol login
    cy.get('.oxd-button').should('be.visible')
    cy.get('.oxd-button').click()

    //Expected result
    //Tidak berhasil login dan tampil wording "Invalid credentials"
  })
})