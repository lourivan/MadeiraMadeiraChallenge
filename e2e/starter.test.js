describe('Teste e2e commerce', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it('should have show product list after load', async () => {
    await expect(element(by.text('Catálogo de produtos'))).toBeVisible();
    await expect(element(by.id('cardItem_0'))).toExist();
    await expect(element(by.id('cardItem_0_plpImage'))).toBeVisible();
    await expect(element(by.id('cardItem_0_plpTitle'))).toBeVisible();
    await expect(element(by.id('cardItem_0_plpCategory'))).toBeVisible();
    await expect(element(by.id('cardItem_0_plpPrice'))).toBeVisible();
  });


  it('should show product detail screen after tap', async () => {
    await element(by.id('cardItem_0')).tap();
    await expect(element(by.id('containerPdp'))).toBeVisible();
    await expect(element(by.id('productImage'))).toBeVisible();
    await expect(element(by.id('productTitle'))).toBeVisible();
    await expect(element(by.id('productDescription'))).toBeVisible();
    await expect(element(by.id('addToCart'))).toBeVisible();
    await expect(element(by.id('productCategory'))).toBeVisible();
    await expect(element(by.id('addToCart'))).toExist();
  });

  it('should show cart screen after tap', async () => {
    await element(by.id('addToCart')).tap();
    await expect(element(by.id('wrapperCart'))).toExist();
    await expect(element(by.id('cartItem_0_containerCart'))).toExist();
    await expect(element(by.id('cartItem_0_imgCart'))).toBeVisible();
    await expect(element(by.id('cartItem_0_priceItem'))).toBeVisible();
    await expect(element(by.id('cartItem_0_decrementItem'))).toExist();
    await expect(element(by.id('cartItem_0_quantity'))).toHaveText('1');
    await expect(element(by.id('cartItem_0_incrementItem'))).toExist();
    await expect(element(by.id('cartItem_0_removeItem'))).toExist();
    await expect(element(by.id('textCartTotal'))).toBeVisible();
  });
});
