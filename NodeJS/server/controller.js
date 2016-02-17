var Dal = require("./dal");
var url = require('url');

class Controller
{
	constructor(){
		this.dal = new Dal();
	}
	
	index(request,response){
		if(this.dal.getAll() === null){
			response.writeHead(204, {"Content-Type": "application/json", });
			response.write("<html><body> Vide </body></html>");
			response.end();
		}
		else{
			response.writeHead(200, {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*" , "Access-Control-Allow-Headers": "X-Requested-With" });
			response.write(JSON.stringify(this.dal.getAll()));
			response.end();
		}
	}

	post(request,response){
		var dal = this.dal;

		request.on('data', function(data){
			
			var object = JSON.parse(data);
			var objectWithId = dal.add(object);
			
			response.writeHead(201, {"Content-Type": "application/json"});
			response.write(JSON.stringify(objectWithId));
			response.end();
		});

		request.on('end',function(){
			
		});		
	}

	getEpisode(request,response){
		
		var parsedUrl = url.parse(request.url, true);
		var queryAsObject = parsedUrl.query;	

		var episode = this.dal.getEpisodeById(queryAsObject.id);
		if(episode === null){
			response.writeHead(404, {"Content-Type": "application/json"});
			response.end();
		}
		else{
			response.writeHead(200, {"Content-Type": "application/json"});
			response.write(JSON.stringify(episode));
			response.end();
		}
	}
}

module.exports = Controller
