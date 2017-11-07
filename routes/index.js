const router = require('koa-router')()
const { query } = require('../db/async-db')
router.get('/report', async(ctx, next) => {
    let dataList = await query('SELECT * FROM test')
    console.log(dataList)
    ctx.body = {
        code: 0,
        msg: 'success',
        data: {

        }
    }
})

module.exports = router