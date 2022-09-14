

class League {

    constructor(name, teams=[], rounds=1) {
        this.name = name
        this.teams = teams
        this.rounds = rounds
        this.matchDaySchedule = []
    }
}

const premierLeagueTeams = ['Chelsea', 'Arsenal'];

const premier = new League('Premier League', premierLeagueTeams);

for (const team of premier.teams) {
    console.log(team)
}
