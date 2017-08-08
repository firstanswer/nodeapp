var os = require('os');
var message = 'List of OS info: ';

var sysarray = ['Type: '+os.type(),
				'Node Ver: '+process.version,
				'Platform: '+os.platform(),
				'Hostname: '+os.hostname(),
				'Total memory: '+os.totalmem(),
				'Free memory '+os.freemem(),
				'Uptime: '+os.uptime()
				];
				
console.log(message);

var arraylen = sysarray.length; 

i = 0;

while(i < arraylen){
	console.log(sysarray[i]);
	i++;
};