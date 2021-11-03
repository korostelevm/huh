// index.js  
const express = require('express')
var Analytics = require('analytics-node');
var analytics = new Analytics(process.env.WRITE_KEY);
const app = express()
app.get('/:img',async (req, res) => {
     console.log('recieved [GET] ')
         console.log(req.params.img)
         console.log(Object.keys(req))
         console.log(req.headers['user-agent'] )


     await  analytics.track({
          anonymousId: 'anonymous',
          event: `Pixel ${req.params.img}`,
          properties: {
               ...req.headers
          }
        });

     const trackImg = Buffer.from('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'base64');

     res.writeHead(200, {
          'Content-Type': 'image/gif', 
          'Content-Length': trackImg.length
        })
      
     //    const { campaign, list, id } = req.params 
     //    const { things } = req.query
        
        // db.save()  
        
        res.end(trackImg)
})
app.listen(process.env.PORT)
