describe('Skenario Lupa Password', () => {
  it.only('Lupa Password Tidak Mengisikan Kolom Username', () => {

    //User berhasil masuk ke halaman login website
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Klik perintah "Forgot your password?"
    cy.get('.orangehrm-login-forgot > .oxd-text').click()

    //Tidak input kolom username


    //Klik tombol Reset Password
    cy.get('.oxd-button--secondary').click()

    //Expected result
    //Tidak berhasil reset password dan tampil wording "Required" di bawah kolom input username
  })
})