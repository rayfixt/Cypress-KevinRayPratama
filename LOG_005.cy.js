describe('Skenario Login', () => {
  it.only('Login Hanya Mengisikan Kolom Password', () => {
    //User berhasil masuk ke halaman login website
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Tidak isi kolom username
    

    //Input password yang terdaftar
    cy.get('[name="password"]').type('admin123')

    //Klik tombol login
    cy.get('.oxd-button').should('be.visible')
    cy.get('.oxd-button').click()

    //Expected result
    //Tidak berhasil login dan tampil wording "Required" di bawah kolom input username
  })
})