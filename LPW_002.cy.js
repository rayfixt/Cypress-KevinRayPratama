describe('Skenario Lupa Password', () => {
  it.only('Lupa Password Menggunakan Data Invalid', () => {

    //User berhasil masuk ke halaman login website
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Klik perintah "Forgot your password?"
    cy.get('.orangehrm-login-forgot > .oxd-text').click()

    //Input username tidak terdaftar
    cy.get('[name="username"]').type('Nimda')

    //Klik tombol Reset Password
    cy.get('.oxd-button--secondary').click()

    //Expected result
    //Tampil wording "Username tidak terdaftar" sehingga tidak tampil wording "A reset password link has been sent to you via email."
  })
})