if(process.env.NODE_ENV=='production'){
  module.exports = require('./dist/add.min.js')
}else{
  module.exports = require('./dist/add.js')
}