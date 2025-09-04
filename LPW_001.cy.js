describe('Skenario Lupa Password', () => {
  it.only('Lupa Password Menggunakan Data Valid', () => {

    //User berhasil masuk ke halaman login website
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Klik perintah "Forgot your password?"
    cy.get('.orangehrm-login-forgot > .oxd-text').click()

    //Input username terdaftar
    cy.get('[name="username"]').type('Admin').should('have.value','Admin')

    //Klik tombol Reset Password
    cy.get('.oxd-button--secondary').click()

    //Expected result
    //Reset password berhasil dan tampil wording "A reset password link has been sent to you via email."
  })
})