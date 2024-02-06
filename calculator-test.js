describe('Calculate Monthly Payment', function (){
it('should calculate the monthly rate correctly', function() {
  const values = {
    amount: 100000,
    years: 30,
    rate: 5
};
expect(calculateMonthlyPayment(values)).toEqual('536.82');
});

describe('Payment within 2 deci places', function (){
it("should return a result with 2 decimal places", function() {
 const values = {
  amount: 100573,
  years: 10,
  rate: 5.8
 };
 expect(calculateMonthlyPayment(values)).toEqual('1106.49');
});
})
})

describe('Handle large loan amounts', function (){
  it('should properly calculate large loans', function(){
    const values = {
      amount: 10000000,
      years: 30,
      rate: 5
    };
    expect(calculateMonthlyPayment(values)).toEqual('53682.16')
  })
  });