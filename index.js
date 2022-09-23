
import FootballLeague from "./clases/PointsBasedLeague.js";
import { premierLeagueTeams } from "./teams.js"

const config = { rounds : 2, pointsPerWin: 3}
const premier = new FootballLeague('Premier League', premierLeagueTeams, config);

//console.log('CONFIG' ,premier.config);

const teamNames = premier.teams.map(team => team.name)

teamNames.forEach(function(equipo) {
    console.log(equipo)
})

/*
for (const teamName of teamNames) {
    console.log(teamName)
}
*/

/*
for (const team of premier.teams) {
    console.log(team)
}
*/