import axios from 'axios'
//import request from 'request'

const url = 'https://raw.githubusercontent.com/openfootball/football.json/master/2020-21/en.1.clubs.json'

try {
     const response = await axios.get(url)
     console.log('Response', response.data)
