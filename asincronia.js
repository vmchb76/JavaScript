import axios from 'axios'
//import request from 'request'

const url = 'https://raw.githubusercontent.com/openfootball/football.json/master/2020-21/en.1.clubs.json'

axios.get(url).then(function(response) {
    const premierLeagueTeams = response.data.clubs.map(club => club.name)
    console.log('Response', premierLeagueTeams)
}).catch(function(error) {
    console.error('Error', error)
})