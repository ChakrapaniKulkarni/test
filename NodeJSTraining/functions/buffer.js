var buff = new Buffer('Chakrapani K', 'utf-8');
console.log(buff);
console.log(buff.toString());
//console.log(buff.toJSON());
buff.write('wo');
console.log(buff.toString());