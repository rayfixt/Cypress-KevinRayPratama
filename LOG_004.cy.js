describe('Skenario Login', () => {
  it.only('Login Hanya Mengisikan Kolom Username', () => {
    //User berhasil masuk ke halaman login website
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Input username yang terdaftar
    cy.get('[name="username"]').type('Admin').should('have.value','Admin').should('have.value','Admin')

    //Tidak isi kolom password


    //Klik tombol login
    cy.get('.oxd-button').should('be.visible')
    cy.get('.oxd-button').click()

    //Expected result
    //Tidak berhasil login dan tampil wording "Required" di bawah kolom input password
  })
})