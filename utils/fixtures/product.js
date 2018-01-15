module.exports = {
  name: "CLiQQ Live Test Product",
  shortDescription: "This is a 7-11 CLiQQ live testing product.",longDescription: "<br>This test item is an empty HUAWEI blue box labeled with CLiQQ Logo.<\u002fbr>",
  gtin: "4806018207365",
  isFeatured: false,
  returnable: true,
  returnPolicy: "Not satisfied with your purchase? Depending on our CLiQQ Care Policy, you can return your item anytime of the day within 7 days from claim date. Just go to the 7-Eleven store where the item was purchased and get your Return Slip from the CLiQQ Kiosk and bring it to the cashier.",images: [
    {imageUrl: "https://cliqq.imgix.net/11292.png",imageType: "PRIMARY"}],
  cliqqCodes: [{cliqqCode: "11292",agentCode: "002"}],
  priceList: [{
    amount: 100.00,
    currency: "PHP"
  }, {
    currency: "DPHP",
    type: "Amount",
    value: 10.00
  }],
  availableQuantity: 1,
  deliveryPromiseMessage: "<p>Delivery for:<\u002fp>\n            <p>Mega Manila: 1-3 Days<\u002fp>\n            <p>Major Luzon Provinces: 3-5 Days<\u002fp>\n            <p>Vis-Min Provinces: 7-14 Days (Not available yet!)<\u002fp>",
  points: {
    multiplier: "1.3",
    methods: {
      cod: "5", //assuming this is %
      poc: "2",
      cash: "10"
    }
  }
}