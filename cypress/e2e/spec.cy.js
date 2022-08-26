describe('Open Site', () => {
  it('Visits the Test Site', () => {
    cy.visit('http://localhost:1234/');
    cy.contains('Здати в оренду').click();

    cy.contains("Додайте новий об'єкт");
    cy.contains('Знайти адресу');
    cy.contains('Відміна');

    cy.get("input[name='title']").type('dfretyregf');
    cy.contains('Знайти адресу').click();
    cy.contains('Спробуйте ще');

    cy.get("input[name='title']").click().type('Хрещатик,22');
    cy.contains('Знайти адресу').click();
    cy.contains("Додайте новий об'єкт");
    cy.contains('Посилання на фото');
    cy.contains('Опис');
    cy.contains('Додати');

    cy.contains('Додати').click();
    cy.contains('Заповніть всі поля');

    cy.get("input[name='image']").type(
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    );
    cy.get("[name='description']").type(
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint tempore quidem aliquam, vero itaque architecto qui minima hic saepe placeat?'
    );
    cy.contains('Додати').click();

    cy.contains('Хрещатик,22');
  });
});
