install: 
				npm install

start: 
		npx babel-node 'src/bin/brain-games.js'

lint: 
		npx eslint 'src'

even: 
		npx babel-node 'src/bin/brain-even.js'

calc:
		npx babel-node 'src/bin/brain-calc.js'

gcd:
		npx babel-node 'src/bin/brain-gcd.js'

arithprog:
		npx babel-node 'src/bin/brain-arithprog.js'

prime: 
		npx babel-node 'src/bin/brain-prime.js'

publish: lint
				npm publish