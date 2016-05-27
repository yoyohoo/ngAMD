var http = require('http'),
	path = require('path'),
	fs = require('fs');

var indexPath = '../index.html',
	defaultContentType = 'text/html',
	getContentType = function(filePath) {
		var extname = path.extname(filePath),
			contentType = defaultContentType;
		switch (extname) {
			case '.js':
			case '.json':
				contentType = 'text/javascript';
				break;
			case '.css':
				contentType = 'text/css';
				break;
			case '.jpg':
				contentType = 'image/jpeg';
				break;
			case '.png':
				contentType = 'image/png';
				break;
			case '.gif':
				contentType = 'image/gif';
				break;
		}
		return contentType;
	},
	getFilePath = function(url) {
		var filePath = indexPath,
			arr = url.split('/'),
			lastHash = arr[arr.length - 1];
		if (lastHash.indexOf('.') > 0)
			filePath = '..' + url;
		return filePath;
	},
	showResponse = function(request, response) {
		var filePath = getFilePath(request.url);
		console.info('pc', request.headers.host);

		fs.exists(filePath, function(exists) {
			console.log(new Date().getDate() + '-' + new Date().getHours() + '-' + new Date().getMinutes(),
				'path ' + filePath + ' exists:' + exists);
			if (exists) {
				fs.readFile(filePath, function(error, content) {
					if (error) {
						response.writeHead(500);
						response.end();
					} else {
						response.writeHead(200, {
							'Content-Type': getContentType(filePath)
						});
						response.end(content, 'utf-8');
					}
				});
			} else {
				response.writeHead(302, {
					'Content-Type': defaultContentType,
					'Location': indexPath
				});
				response.end();
			}
		});
	}

http.createServer(showResponse).listen(1234);
console.log('localhost:1234', ' is running!');
