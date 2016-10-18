'use strict'

import Koa from 'koa'
import applyMiddleware from './middleware'
import applyRoutes from './routes'
import { configLog, configDB, appInit, env } from './config'

const app = new Koa()

// 日志
const logger = configLog()
app.context.logger = logger  // logger挂载在ctx

// 数据库
configDB()

// 常规中间件
appInit(app)

// 自定义中间件
applyMiddleware(app)

// 路由
applyRoutes(app)

app.listen(env.app.port)
logger.info("Server started, listening on port: " + env.app.port)

export default app