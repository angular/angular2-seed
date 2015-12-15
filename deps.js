var fs = require('fs');

fs.createReadStream('./node_modules/angular2/bundles/angular2-polyfills.js')
	.pipe(fs.createWriteStream('./src/lib/angular2-polyfills.js'));