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

publish: lint
				npm publish