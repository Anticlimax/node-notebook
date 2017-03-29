

//学习Promise

//typeof Promise == 'function'

// prototype ===> then/catch

//静态方法 ===> all/race/resolve/reject  返回值都是Promise

//第一步 new Promise

var another = Promise.resolve({
  then: function(resolve,reject){
    reject(2)
  }
})
// another.then(val=>console.log(val))
another.catch(val=>console.log(val))

console.log(another)