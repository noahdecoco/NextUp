// Modules
const axios = require('axios');
const express = require('express')
const request = require('request');
const cheerio = require('cheerio');
var utf8 = require('utf8');
const URL = require('url-parse');

// Variables
const app = express()
const pageToVisit = 'http://lastminuteticketshop.nl/';
const url = new URL(pageToVisit);
const baseUrl = url.protocol + "//" + url.hostname;

let fetchEvents = () => {

	return new Promise((resolve, reject) => {

		request.get(pageToVisit, (error, response, body) => {

			let results = [];
			let $ = cheerio.load(body);

			$('#show-list article').each((a, b) => {
				results.push({
					title: $(b).find('.text-container h1 a').text(),
					time: $(b).find('.time').text(),
					ticketLink: $(b).find('.btn-buy').attr('href'),
					location: $(b).find('.location').text()
				})
			});

			return Promise.all(results.map(deriveEventCoords)).then((result) => {
				resolve(results);
			});

		});

	});

};

let deriveEventCoords = (event) => {

	return new Promise((resolve, reject) => {

		var location = encodeURI(event.location);

		request.get(`http://maps.google.com/maps/api/geocode/json?address=${location},Amsterdam`, (error, response, body) => {

			var results = JSON.parse(body);
			event.coords = results.results[0].geometry.location;
			resolve(event);

		});

	});

};

// Routes
app.get('/api/events', function (req, res) {

	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'X-Requested-With');

	fetchEvents().then((results) => {

		console.log('results', results);
		res.send(results);

	});

});

app.listen(3000);
