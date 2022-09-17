

class League {

    constructor(name, teams=[], config={}) {
        this.name = name
        this.matchDaySchedule = []
        this.setup(config)
        this.setupTeams(teams) 
        
    }

    setup(config) { 
        const defaultConfig = { rounds: 1}
        this.config = Object.assign(defaultConfig, config)
        
    }

    setupTeams(teamNames) {
        this.teams = []
        for (const teamName of teamNames) {
            const team = {
                name: teamName,
                matchesWon: 0,
                matchesDrawn: 0,
                matchesLost: 0
            }
            this.teams.push(team)
        }
    }
}

class PointsBasedLeague extends League {
    constructor(name, teams=[], config={} ) {
        super(name, teams, config) 
    }
      
    setup(config) {
        const defaultConfig = {
            rounds : 1,
            pointsPerWin: 3,
            pointsPerDraw: 1,
            pointsPerLose: 0
        }
        this.config = Object.assign(defaultConfig, config)
    }

}

const premierLeagueTeams = ['Chelsea', 'Arsenal'];

const config = { rounds : 2, pointsPerWin: 3}
const premier = new PointsBasedLeague('Premier League', premierLeagueTeams, config);

console.log('CONFIG' ,premier.config);
for (const team of premier.teams) {
    console.log(team)
}
