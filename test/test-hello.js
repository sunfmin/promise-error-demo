/* global describe, it, expect, beforeEach */

describe('hello', function () {
  var p1 = new Promise(function(resolve, reject) {
    resolve('the value')
  })

  it('promise without done', function () {
    p1.then(v => {
      console.log("in p1 then")
      console.log(v)
      b.c.d = 1
      throw "123"
    })
  })

  it('promise with done', function (done) {
    p1.then(v => {
      console.log("in p1 then")
      console.log(v)
      b.c.d = 1
      done()
    }).catch(function(err){
      console.log(err)
      done()
    })
  })
})
