describe("monthly interest rates", () => {
  it("should calculate the monthly rate correctly", function () {
    const values = {
        amount: 50000,
        years : 15,
        rate: 4.3
    };
    expect(calculateMonthlyPayment(values)).toEqual('377.41')
  });

  it("should return a result with 2 decimal places", function () {
    const values = {
      amount: 643221,
      years : 15,
      rate: 4.3
    };
  expect(calculateMonthlyPayment(values)).toEqual('4855.11')
  });

  it("should take care of very low interest rate", function () {
    const values = {
      amount: 50000,
      years : 15,
      rate: 0.0001
    };
  expect(calculateMonthlyPayment(values)).toEqual('277.78')
  });

});
