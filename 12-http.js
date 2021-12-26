const http = require('http');

const server = http.createServer((req,res)=>{
if(req.url === '/'){
    res.end('welcome to my home page')
  
}
if(req.url === '/about'){
    res.end('here is my short history')

}
res.end(`<h1>oops!</h1>
<p>We can't seem to fine the page you are looking for</p>
<a herf="/">back home </a>
`);

});

server.listen(5000);


