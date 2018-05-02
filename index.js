'use strict'

const loadScript = require('simple-load-script');

const main = (callback) => {
	return new Promise((resolve, reject) => {
		loadScript('https://momentjs.com/downloads/moment.js')
			.then((ref) => {
				resolve('moment.js as been imported')
				return callback(null, ref)
			})
			.catch((err) => {
				reject('something went wrong while importing moment.js')
				return callback('moment.js library was not imported', null)
			})
	})
}

module.exports = main
