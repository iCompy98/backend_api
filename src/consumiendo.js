const url = 'http://localhost:3000/preguntas'

fetch(url).then(res=>res.json())
.then(data=> console.log(data))
.catch(err=> console.error(err))

/////////ESTA WEA ES TESTEO