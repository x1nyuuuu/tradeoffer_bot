const bytenode = require('bytenode');
const fs = require('fs');
const vm = require('vm');

const mainDir = './bin/lib/botmanager.jsc';
const bytecodebuffer = fs.readFileSync(mainDir);
const length = bytecodebuffer.readIntLE(8,4);
const anotherScript = new vm.Script(' '.repeat(length), {
    cachedData: bytecodebuffer
});
anotherScript.runInNewContext({require:require,console:console,process:process}); 
