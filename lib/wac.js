const { spawn } = require("child_process");

console.log("wac compiler - under development")

console.log("https://www.npmjs.com/package/@easychessanimations/wac")

console.log("https://github.com/easychessanimations/wac#wac")

const numArgs = process.argv.length

let args = []

for(let i=2;i<numArgs;i++){
	args.push(process.argv[i])
}

console.log("wac called with args", args)

const wat2wasm = spawn('wat2wasm', args)

wat2wasm.stdout.on('data', data => {
	process.stdout.write(data.toString())	
})

wat2wasm.stderr.on('data', data => {
	process.stdout.write(data.toString())	
})
