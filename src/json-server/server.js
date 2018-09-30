const jsonServer = require('json-server')
const request = require('request');
const path = require('path')
const db = require('./db.js')
let data = db.generateData();
const server = jsonServer.create()
const router = jsonServer.router(data)
const middlewares = jsonServer.defaults()
const baseUrl = 'http://158.167.28.131:3000/';

server.use(middlewares)

server.use(jsonServer.rewriter({
	"/poll/vote": "/pollVote",
	"/poll/vote/:id": "/pollVote/:id"
}))


server.use(jsonServer.bodyParser)

// server.use((req, res, next) => {
//   if (req.method === 'POST') {
//     console.log(req.body)
//   }
//   // Continue to JSON Server router
//   next()
// })

// If you need to scope this behaviour to a particular route, use thi
// server.post('/vote', function(req, res, next) {
//
//
//
//   //next()
// })

// If you want to target specifically

router.render = function(req, res) {
	if (req.url === '/pollVote' && req.method === 'POST') {
		let url = baseUrl + 'stream/' + req.body.publicationId;
		request({
			url: url,
			json: true
		}, (err, response, body) => {
			body.poll.votable = false;
            body.poll.hasVoted = true;
            body.poll.votes = body.poll.votes + req.body.choices.length;
            req.body.choices.forEach(function(item){
                body.poll.choices.find(x => x.id === item).votes ++;
            });
			res.jsonp(body);
		});
	} else {
		res.jsonp(res.locals.data)
	}
}

server.use(router)
server.listen(3001, () => {
	console.log('JSON Server is running')
})
