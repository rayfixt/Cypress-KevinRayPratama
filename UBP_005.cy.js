describe('Skenario Ubah Password', () => {
  it.only('Merubah Password dengan Tidak Mengisi Kolom Confirm Password Baru', () => {

    //User berhasil masuk ke halaman login website
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Input username yang terdaftar
    cy.get('[name="username"]').type('Admin').should('have.value','Admin')

    //Input password yang terdaftar
    cy.get('[name="password"]').type('admin123').should('have.value','admin123')

    //Klik tombol Login
    cy.get('.oxd-button').should('be.visible')
    cy.get('.oxd-button').click()

    //Menuju halaman utama/ dashboard website
    cy.url().should('include','/dashboard/index')

    //Kliik dropdown profile
    cy.get('.oxd-userdropdown-tab').click()

    //Klik "Change Password"
    cy.get(':nth-child(3) > .oxd-userdropdown-link').click()

    //Tidak input Current Password
    cy.get(':nth-child(1) > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')

    //Input Password baru
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin12345')

    //Tidak input Confirm Password baru
    

    //Klik tombol "Save"
    cy.get('.oxd-button--secondary').should('be.visible')
    cy.get('.oxd-button--secondary').click()

    //Expected result
    //Ubah password tidak berhasil disimpan dan tampil wording "Passwords do not match" di bawah kolom Confirm Password.
  })
})