const http = require('http'),
  axios = require('axios');

http.createServer((req, res) => {
  res.write(id.join(", "));
  res.write('\n\n' + names[0]+ ', ');
  res.write('\n\n' + username.join(', '));
  res.write('\n\n' + email.join(', '));
  res.write('\n\n' + street.join(', '));
  res.write('\n\n' + suite.join(', '));
  res.write('\n\n' + city.join(', '));
  res.write('\n\n' + zipcode.join(', '));
  res.write('\n\n' + lat.join(', '));
  res.write('\n\n' + lng.join(', '));
  res.write('\n\n' + phone.join(', '));
  res.write('\n\n' + website.join(', '));
  res.write('\n\n' + companyName.join(', '));
  res.write('\n\n' + catchPhrase.join(', '));
  res.write('\n\n' + bs.join(', '));

  res.end()
}).listen(8000)

let id = [];
let names = [];
let username = [];
let email = [];
let street = [];
let suite = [];
let city = [];
let zipcode = [];
let lat = [];
let lng = [];
let phone = [];
let website = [];
let companyName = [];
let catchPhrase = [];
let bs = [];

(async function getNames(){
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    id = data.map(user => user.id)
    names = data.map(user => user.name)
    username = data.map(user => user.username)
    email = data.map(user => user.email)
    street = data.map(user => user.address.street)
    suite = data.map(user => user.address.suite)
    city = data.map(user => user.address.city)
    zipcode = data.map(user => user.address.zipcode)
    lat = data.map(user => user.address.geo.lat)
    lng = data.map(user => user.address.geo.lng)
    phone = data.map(user => user.phone)
    website = data.map(user => user.website)
    companyName = data.map(user => user.company.name)
    catchPhrase = data.map(user => user.company.catchPhrase)
    bs = data.map(user => user.company.bs)
    

    if (email.indexOf("Rey.Padberg@karina.biz") > -1) {
      console.log("found")
      console.log(email.indexOf("Rey.Padberg@karina.biz"))
    } else {
      console.log("not found");
    } 
  } catch (err) {
    console.log(err)
  }
})()