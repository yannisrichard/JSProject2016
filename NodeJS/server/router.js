var url = require('url');

class Router
{
	constructor(){
		this.get = new Map();
		this.post = new Map();
	}
	
	handle(request,response){
		
		var pathname = url.parse(request.url).pathname;
		switch(request.method)
		{
			case 'GET' :
			if(this.get.has(pathname)){
	 			this.get.get(pathname)(request,response);
			}
			else{
				response.writeHead(404, {"Content-Type": "text/html"});
				response.write('<html><body>La page n\'existe pas</body></html>');
				response.end();
			}
			break;
			case 'POST' :
			if(this.post.has(pathname)){
				this.post.get(pathname)(request,response);
			}
			else{
				response.writeHead(404, {"Content-Type": "text/html"});
				response.write('<html><body>La page n\'existe pas</body></html>');
				response.end();
			}
			break;
			default :
			response.writeHead(405, {"Content-Type": "text/html"});
			response.write('<html><body>La méthode n\'est pas disponible</body></html>');
			response.end();
			break;
		}
	}
	
	addGet(path,callback){
		this.get.set(path, callback);
	}

	addPost(path,callback){
		this.post.set(path,callback);
	}

}

module.exports = Router
