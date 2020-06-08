var os = require('os');
const si = require('systeminformation');
var fs = require("fs");
{
console.log('Os type : ' + os.type());
console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());
console.log('release'+ os.release())
console.log('Uptime: '+ os.uptime())
console.log('Totalmemmory : '+ os.totalmem() + " bytes")
console.log('Free memory: '+ os.freemem() +" bytes")
console.log('cpu: '+ os.cpus())
console.log('network interface: '+ os.networkInterfaces())
console.log('platform ' + os.platform())
console.log('endianness : ' + os.endianness());
}
console.log(os.userInfo({ option: 'utf8' }));



// callback 
si.cpu(function(data) {
    console.log('CPU-Information:');
    console.log(data);
});

var data = '';
// Create a readable stream
var createStream = fs.createWriteStream("brandone.txt");
createStream.end();

/**
 * Node FS Example
 * Node JS Write to File
 */
var fs = require("fs");

var writeStream = fs.createWriteStream("brandone.txt");
writeStream.write("Hi, JournalDEV Users. ");
writeStream.write("Thank You.");
writeStream.end();


 //Node FS Read File
 //Node JS Read File
 
var fs = require("fs");

function readData(err, data) {
	  console.log(data);
}

fs.readFile('brandone.txt', 'utf8', readData);

fs.unlink('brandone.txt', function (err) {
    if (err) throw err;
    // if no error, file has been deleted successfully
    console.log('File deleted!');
}); 

var fs = require('fs');
 
fs.rename('brandone.txt', 'brandone_old.txt', function (err) {
//   if (err) throw err;
  console.log('File Renamed.');
});