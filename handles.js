// ./handles.js
// Necessary imports
//librairies
const url = require('url')
const qs = require('querystring')
const aboutJson = require('./content/about.json')

module.exports = {
   serverHandle : function (req, res) {
        const route = url.parse(req.url)
        const path = route.pathname 
        const params = qs.parse(route.query)
      
        res.writeHead(200, {'Content-Type': 'text/plain'})
      
        if (path === '/hello' && 'name' in params) {
          res.write('Hello ' + params['name'])
        } else if (path === '/') {
          res.write('Welcome to my application, go to /hello and add ?name=YourName to see a welcome screen ')
        } else if (path === '/about'){
            res.write(JSON.stringify(aboutJson))
        }else{
            res.write('404')
        }

        res.end()
      }
    
  }