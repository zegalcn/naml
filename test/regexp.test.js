// import 'should';
// import 'tape';
const should = require('should');
// import should;

describe('regexp', function(){
  
  it("regexp 1", function(){
    let regexp = /\{(\w+)\}(\"\w+\"|\'\w+\')?/
    should('test'.match(regexp)).be.exactly(null);
  })
  
  // t.equal('{}'.match(regexp), null)
});
