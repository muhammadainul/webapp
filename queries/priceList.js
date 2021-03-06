'use strict'

const debug = require('debug')
const _ = require('lodash')

const { post } = require('../libs/request')
const service = require('../config/service')

exports.getAllPriceList = (data, accessToken) =>
    new Promise(async(resolve, reject) => {
        let log = debug('webadmin:queries:getAllPriceList')
        log('[webadmin][Query] getAllPriceList', { data, accessToken })
        try {
            const url = service.api + 'admin/getAllPricelist'
            let headers = { Authorization: 'Bearer ' + accessToken}
            const body = data
            log('url, headers, body', { url, headers, body })
            let response = await post(url, headers, body)
            log('response', response.body)

            resolve(response.body)
        } catch (error) {
            throw error
        }
    })

exports.getPricelistData = (id, accessToken) =>
    new Promise(async(resolve, reject) => {
        let log = debug('webadmin:pricelist:queries:getPricelistData')
        log('[webadmin][pricelist][Query] getPricelistData', { id, accessToken })
        try {
            const url = service.api + 'admin/getPricelistById'
            let headers = { Authorization: 'Bearer ' + accessToken }
            const body = { id }
            log('url, headers, body', { url, headers, body })
            const response = await post(url, headers, body)
            log('response', response)

            resolve(response.data)
        } catch (error) {
            throw error
        }
    })

exports.create = ({ priceName, jobType, price, unit, accessToken }) =>
    new Promise(async(resolve, reject) => {
        let log = debug('webadmin:pricelist:queries:create')
        log('[webadmin][pricelist][Query] create', { priceName, jobType, price, unit, accessToken })
        try {
            const url = service.api + 'admin/addPricelist'
            let headers = { Authorization: 'Bearer ' + accessToken }
            const body = { priceName, jobType, price, unit }
            log('url, headers, body', { url, headers, body })
            const response = await post(url, headers, body)
            log('response', response)

            resolve(response)
        } catch (error) {
            throw error
        }
    })

exports.editPricelistData = ({ id, priceName, jobType, price, unit, accessToken }) =>
    new Promise(async(resolve, reject) => {
        let log = debug('webadmin:pricelist:queries:editPricelistData')
        log('[webadmin][pricelist][Query] editPricelistData', { id, priceName, jobType, price, unit, accessToken })
        try {
            const url = service.api + 'admin/editPricelist'
            let headers = { Authorization: 'Bearer ' + accessToken }
            const body = { id, priceName, jobType, price, unit }
            log('url, headers, body', { url, headers, body })
            const response = await post(url, headers, body)
            log('response', response)
        
            let result = JSON.parse(response)
            resolve(result.message)
        } catch (error) {
            throw error
        }
    })

exports.deleteById = (id, accessToken) =>
    new Promise(async(resolve, reject) => {
        let log = debug('webadmin:pricelist:queries:deleteById')
        log('[webadmin][pricelist][Query] deleteById', { id, accessToken })
        try {
            const url = service.api + 'admin/deletePricelist'
            let headers = { Authorization: 'Bearer ' + accessToken }
            const body = { id }
            log('url, headers, body', { url, headers, body })
            const response = await post(url, headers, body)
            log('response', response)
        
            resolve(response)
        } catch (error) {
            throw error
        }
    })