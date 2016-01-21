describe("countBy", function() {
  it("will count by the starting number until it reaches the end number", function() {
    expect(countBy(5, 30)).to.eql([5,10,15,20,25,30]);
  });

  it("will count by the starting number until it reaches the end number", function() {
expect(countBy(4, 28)).to.eql([4, 8, 12, 16, 20, 24, 28]);
  });  
});
