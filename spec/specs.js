describe("countBy", function() {
  it("will start at start number", function() {
    expect(countBy(5)).to.equal(5);
  });
  it("will increment by start number", function() {
    expect(countBy(5)).to.equal(10);
  });
});
