'use strict'

const loadScript = require('simple-load-script');

const main = (callback) => {
	return new Promise((resolve, reject) => {
		loadScript('https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.1/moment.min.js')
			.then((ref) => {
				resolve('moment.js as been imported')
				return callback(null, ref)
			})
			.catch(() => {
				reject('something went wrong while importing moment.js')
				return callback('moment.js library was not imported', null)
			})
	})
}

module.exports = main
