import {urlencoded} from './helper'
import Authenticate from '@qasir/auth'

/**
 * Parent class curl for thirdparty request http to another api
 * 
 * @class curl
 */
class curl {
	/**
	 * Creates an instance of curl.
	 * 
	 * @memberOf curl
	 */
	constructor(config) {
		this.config = config
		this.baseUrl = config.baseUrl
		this.apiUrl = this.baseUrl + config.apiEndpoint
		this.method = 'get'

		let auth = new Authenticate
		this.headers = {...config.headers, ...auth.headerPublic(), ...auth.headerLogin()}
		this.service = ''
		this.data = {}
	}

	/**
	 * Setting custom header http request.
	 * @param {string} key 
	 * @param {string} value 
	 * 
	 * @memberOf curl
	 */
	setHeader(key, value) {
		this.headers[key] = value
	}

	/**
	 * Setting up data from object
	 * 
	 * @param {object} obj  
	 * @memberOf curl
	 */
	setData(obj) {
		this.data = obj
	}

	/**
	 * Function to send http request.
	 * @function send
	 * @returns Promise
	 * 
	 * @memberOf curl
	 */
	send() {
		const axios = require('axios')
		let fullUrl = this.apiUrl + this.service
		if (this.method == 'get') {
			if (Object.keys(this.data).length > 0) {
				fullUrl =  fullUrl + '?' + urlencoded(this.data)
			}
			return axios[this.method](fullUrl, {
				headers: this.headers
			})
		} else if (this.method == 'post') {
			return axios[this.method](fullUrl, this.data, {
				headers: this.headers
			})
		} else {
			return axios[this.method](fullUrl, {
				headers: this.headers
			})
		}
	}
}

export default curl