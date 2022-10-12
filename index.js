
import FootballLeague from "./clases/PointsBasedLeague.js";
import { premierLeagueTeams } from "./teams.js"

const config = { rounds : 2, pointsPerWin: 3}
const premier = new FootballLeague('Premier League', premierLeagueTeams, config);
//const premier = new FootballLeague('Premier League', ['A', 'B', 'C', 'D'], config);
//console.log('CONFIG' ,premier.config);

const teamNames = premier.teams.map(team => team.name)

//teamNames.forEach(function(equipo) {
//    console.log(equipo)
//})
 
premier.scheduleMatchDays()
//console.log(premier.matchDaySchedule)

// Mostramos por pantalla las jornadas y sus partidos
let i = 1
premier.matchDaySchedule.forEach(matchDay => {
    console.log(`Jornada ${i}`)
     matchDay.forEach(match => {
        const home = match[0] != null ? match[0] : 'Descansa'
        const away = match[1] != null ? match[1] : 'Descansa'
        console.log(`${home} Vs ${away}`)
     })
     i++
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

// Comenzar la liga

premier.start()

// mostrar por pantalla los resultados de cada joranda y la clasificacion
console.log(premier.summaries)
//console.log('Teams', premier.teams)
