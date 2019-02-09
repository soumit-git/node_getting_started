const url = require('url');

const myUrl = new url.URL('http://mywebsite.com/hello.html?id=100&status=active');

//Serialized URL
console.log(myUrl.href);

//Host or root domain(with port)
console.log(myUrl.host);

//hostname (without port)
console.log(myUrl.hostname);

//pathname
console.log(myUrl.pathname);

//Serialized query
console.log(myUrl.search);

//params object
console.log(myUrl.searchParams);

//Add params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

//loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
