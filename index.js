

class League {

    constructor(name, teams=[], rounds=1) {
        this.name = name
        this.teams = teams
        this.rounds = rounds
        this.matchDaySchedule = []
    }
}

class PointsBasedLeague extends League {
    constructor(name, teams=[], rounds=1, pointsPerWin=3, pointsPerDraw=1, pointsPerLose=0) {
        super(name, teams, rounds)
        this.pointsPerWin = pointsPerWin
        this.pointsPerDraw = pointsPerDraw
        this.pointsPerLose = pointsPerLose
    }
}

const premierLeagueTeams = ['Chelsea', 'Arsenal'];

const premier = new PointsBasedLeague('Premier League', premierLeagueTeams);
console.log(premier);
for (const team of premier.teams) {
    console.log(team)
}
