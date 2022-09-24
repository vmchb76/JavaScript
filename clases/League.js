export default class League {

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

    scheduleMatchDays() {
        const numberOfMatchDays = this.teams.length - 1
        const numberOfMatchesPerMatchDay = this.teams.length / 2
         for (let i = 0; i < numberOfMatchDays; i++) {
            const matchDay = [] // jornada vacia
             for (let j = 0; j < numberOfMatchesPerMatchDay; j++) {
                const match = ['Equipo local', 'Equipo visitante'] // partido
                matchDay.push(match)
             }
             //una vez añadidos todos los partidos a la jornada
             this.matchDaySchedule.push(matchDay) // añadimos la jornada a la planificacion 
         }

    }
}
