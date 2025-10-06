const mongoose = require('mongoose');
const  debug = require('debug')('development:mongoose')

main()
.then(() => {
    console.log('Database connected successfully!')
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Statch');

}

module.exports = mongoose.connection;