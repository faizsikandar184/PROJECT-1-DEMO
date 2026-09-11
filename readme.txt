add extension 
Playwright Test for VS Code
ESLint
Prettier
GitLens
DotENV
--------------------------------
install Git, node, npm

1. npm init -y 
    create package.json

2. npm init playwright@latest

3. npm install dotenv 
    Allows us to manage environment variable

4. npm install -D allure-playwright

5. npm install -D @types/node 
   npm install -D @types/node 
   npm install -D @types/node
   npm install -D eslint

6. Create folder using command prompt
mkdir pages fixtures test-data config utils constants types api tests
mkdir tests\login tests\product tests\search tests\cart tests\checkout tests\customization

type nul > pages\BasePage.ts
type nul > pages\LoginPage.ts
type nul > pages\HomePage.ts
type nul > pages\ProductPage.ts
type nul > pages\SearchPage.ts
type nul > pages\CartPage.ts
type nul > pages\CheckoutPage.ts
type nul > pages\CustomizationPage.ts   

7. Create common functionality that other pages can reuse. in pages\BasePage.ts
8. Create config/env.ts and .env.qa, .env.uat, .env.prod
    add dotenv.config and env variable 
    now we can run set TEST_ENV=uat && npx playwright test

9. Add test data json in test data
10. Add testConstants.ts in constant for reusable constant
11. Add baseFixture.ts for using the objects and things prepared before test
12. Configure playwright.config.ts    
13. 