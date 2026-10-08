import { test, expect } from '../../fixtures/baseFixture';

test.describe('Login', () => {

  test('User should be able to login successfully', async ({ loginPage, page }) => {

    await loginPage.navigate('/');

    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory\.html/);

  });

});