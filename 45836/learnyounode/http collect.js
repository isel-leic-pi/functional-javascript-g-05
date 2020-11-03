const http = require('http')
const bl = require('bl')

/* Both bl and concat-stream can have a stream piped in to them and they will
  collect the data for you. Once the stream has ended, a callback will be
  fired with the data:
*/

http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
        if (err) {
            return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
    }))
})
