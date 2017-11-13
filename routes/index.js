const router = require('koa-router')()
    // const { query } = require('../db/async-db')
const dbhandle = require('../db/handle')
router.get('/report', async(ctx, next) => {
    let dataList = await dbhandle.getHistoryScore('1510589677533')
    ctx.body = {
        code: 0,
        msg: 'success',
        data: dataList
    }
})

module.exports = router