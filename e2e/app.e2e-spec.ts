import { AcmeProductManagementPage } from './app.po';

describe('acme-product-management App', function() {
  let page: AcmeProductManagementPage;

  beforeEach(() => {
    page = new AcmeProductManagementPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
