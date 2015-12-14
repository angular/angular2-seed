//es5 file to bootstrap our application
System.config({
	
});

System.import('src/app.ts').catch(function(err){
	console.error(err);
});