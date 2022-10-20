import axios from 'axios'
//import request from 'request'
import FootballLeague from "./clases/PointsBasedLeague.js";
//import { premierLeagueTeams } from "./teams.js"

const url = 'https://raw.githubusercontent.com/openfootball/football.json/master/2020-21/en.1.clubs.json'

try {
    const response = await axios.get(url)

//axios.get(url).then(function(response) {
    const premierLeagueTeams = response.data.clubs.map(club => club.name)
    console.log('Response', premierLeagueTeams)

//request.get(url, function(error,response, body) {
    //const teamsData = JSON.parse(body)
    //const premierLeagueTeams = teamsData.clubs.map(club => club.name)
    //console.log(premierLeagueTeams)

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
    i = 1
    premier.summaries.forEach(summary => {
        console.log(`Resumen Jornada ${i}`)
        summary.results.forEach(result => {
            console.log(`${result.homeTeam} ${result.homeGoals} - ${result.awayGoals} ${result.awayTeam}`)        
        })
        console.table(summary.standings.map(team => {
            return {
                Team: team.name,
                Points: team.points,
                PlayedMatches: team.matchesWon + team.matchesDrawn + team.matchesLost,
                Won: team.matchesWon,
                Drawn: team.matchesDrawn,
                Lost: team.matchesLost,
                GoalsFor: team.goalsFor,
                GoalsAgainst: team.goalsAgainst,
                GoalsDiff: team.goalsFor - team.goalsAgainst
            }
        }));
        i++;
    })

    // Mostramos el total de goles y el total de puntos
    // for equivalente al reduce
        /*
        let goalsAcumulated = 0;
        for (const team of premier.teams) {
            goalsAcumulated = goalsAcumulated + team.goalsFor;
        } 
        const totalGoals = premier.teams.reduce(function(goalsAcumulated, team) {
            return goalsAcumulated + team.goalsFor;
            
        }, 0); */

        const initialAccumulator = {totalGoals: 0, totalPoints: 0}
        const totals = premier.teams.reduce(function(accumulator, team) {
            accumulator.totalGoals += team.goalsFor;
            accumulator.totalPoints += team.points;
            return accumulator;
        }, initialAccumulator);

        console.log('Totales:', totals);

    //console.log(premier.summaries)
    //console.log('Teams', premier.teams)

} 
    catch (error) {
    console.error('error', error)
}