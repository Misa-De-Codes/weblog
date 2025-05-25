import winston from 'winston'

const logger = (req, res, next) => {
    console.log('logger...', req)

    next()
}

export default logger;