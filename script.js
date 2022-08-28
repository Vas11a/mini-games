console.log('Request data...')

// setTimeout(() => {
// 	console.log('Prepearing data...')
// 	const backData = {
// 		server: 'aws',
// 		port : '2000',
// 		status : 'working'
// 	}
// 	setTimeout(() => {
// 		console.log('data resived' , backData)
// 	}, 2000)
// }, 2000)

const p = new Promise((resolve , reject) => {
	setTimeout(()=> {
		console.log('Prepearing data...')
		const backData = {
			server: 'aws',
			port : '2000',
			status : 'working'
		}
		resolve(backData)
	}, 2000)
})

p.then(data => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(data)
		}, 2000)
	})
}).then(data => {
	console.log('clientData: ' , data)
})

