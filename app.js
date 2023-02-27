const express = require('express')
const handlebars = require('express-handlebars')
const routes = require('./routes')

const app = express()
const port = process.env.PORT || 3000

app.engine('hbs', handlebars({ extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(routes)

app.listen(port, () => {
  console.info(`Example app listening on port ${port}!`)
})

// 導入自動化測試以後，由於測試環境會用到 app，所以需要在文件最下方輸出 app
module.exports = app

console.log('aaa')
console.info('aaa')
console.error('aaa')
console.warn('aaa')
console.debug('aaa')
