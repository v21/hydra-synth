var hydraShader = require('./../shader-generator.js')

var shaderGenerator = new hydraShader()

var myShader = shaderGenerator.eval('osc().out()')
console.log(myShader)
