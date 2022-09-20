

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
            const team = this.customizeTeam(teamName)
            this.teams.push(team)
        }
    }

    customizeTeam(teamName) {
        return {
            name: teamName,
            matchesWon: 0,
            matchesDrawn: 0,
            matchesLost: 0
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

    customizeTeam(teamName) {
        // Llamar al metodo customizeTeam del padre
        // Devolver un objeto con los mismos datos del objeto que devuelve el padre
        // Y ademas las propiedades: goalsFor: 0 y goalsAgainst :0
        // Tip: usar spreading
        const customizedTeam = super.customizeTeam(teamName)
        //customizedTeam.points = 0
        //customizedTeam.goalsFor = 0
        //customizedTeam.goalsAgainst = 0

        //return customizedTeam
        return {
            points: 0,
            goalsFor: 0,
            goalsAgainst: 0,
            ...customizedTeam
        }
    }

}

const LiverpoolTeams = ['Liverpool', 'Everton']
const manchesterTeams = ['Manchester City', 'Manchester United']
const londonTeams = ['Arsenal', 'Chelsea', 'Fulham', 'West Ham', 'Tottenham', 'Crystal Palace']

const premierLeagueTeams = [
    ...LiverpoolTeams,
    ...manchesterTeams,
    ...londonTeams
];

const config = { rounds : 2, pointsPerWin: 3}
const premier = new PointsBasedLeague('Premier League', premierLeagueTeams, config);

console.log('CONFIG' ,premier.config);
for (const team of premier.teams) {
    console.log(team)
}
