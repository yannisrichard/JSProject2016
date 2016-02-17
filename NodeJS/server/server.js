var http = require("http");
var Router = require("./router");
var Controller = require("./controller");

function start(port){

	var router = new Router();
	var controller = new Controller();

	router.addGet('/',function(request,response){
		controller.index(request,response);
	});

	router.addGet('/episode',function(request,response){
		controller.getEpisode(request,response);
	});

	router.addPost('/',function(request,response){
		controller.post(request,response);
	});

	router.addGet('/count',function(request,response){
		controller.count(request,response);
	});
	
	http.createServer(function(request, response) {

	    router.handle(request,response);  
	
	}).listen(port);

	console.log("Start server... port : " + port);
}


exports.start = start


