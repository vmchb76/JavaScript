import request from 'request'

const url = 'https://raw.githubusercontent.com/openfootball/football.json/master/2020-21/en.1.clubs.json'
request.get(url, function(error,response, body) {
    const teamsData = JSON.parse(body)
    const premierLeagueTeams = teamsData.clubs.map(club => club.name)
    console.log(premierLeagueTeams)
})