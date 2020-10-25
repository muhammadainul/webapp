'use strict'

const debug = require('debug')
const _ = require('lodash')
const Customer = require('../queries/customer')

async function listPage (req, res) {
    let log = debug('webadmin:customer:listPage')
    log('[webadmin][customer] listPage') 
    try {
        res.render('../views/pages/customer/index', { 
            session: req.session.user 
        })
    } catch (error) {
        throw error
    }
}

async function getAllCustomer (req, res) {
    let log = debug('webadmin:customer:getAll')
    let data = req.body
    log('[webadmin][customer] getAll', data)
    try {
        const accessToken = req.session.user.data.accessToken
        const result = await Customer.getAllCustomerData(data, accessToken)
        log('result', result.data)
        
        return res.send(result).data
    } catch (error) {
        throw error
    }
}

module.exports = {
    listPage,
    getAllCustomer
} 