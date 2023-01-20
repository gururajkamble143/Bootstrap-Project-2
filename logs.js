const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '94544ab23amsh58961bdb9faadb6p178f12jsn207b7f5fc3b8',
		'X-RapidAPI-Host': 'animi.p.rapidapi.com'
	}
};

fetch('https://animi.p.rapidapi.com/name?name=Levi', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));