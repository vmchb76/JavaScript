import axios from "axios";

export const LiverpoolTeams = ['Tigres', 'Monterrey', 'Juarez','Puebla', 'Toluca', 'Leon']
export const manchesterTeams = ['Tijuana', 'Santos Laguna', 'Mazatlan', 'Atlas', 'Queretaro', 'San Luis']
export const londonTeams = ['America', 'Pachuca', 'Cruz Azul', 'U.N.A.M.', 'Chivas', 'Necaxa']

export const premierLeagueTeams = [
    ...LiverpoolTeams,
    ...manchesterTeams,
    ...londonTeams
];

export async function getTeamsFromGitHub() {
    const url = 'https://raw.githubusercontent.com/openfootball/football.json/master/2020-21/en.1.clubs.json'
    const response = await axios.get(url)  
    return response.data.clubs
}

export function getTeamsWithPromise() {
    const url = 'https://raw.githubusercontent.com/openfootball/football.json/master/2020-21/en.1.clubs.json'
    return new Promise(function(resolve, reject) {
        axios.get(url).then(function(response) {
             resolve(response.data.clubs)
        }, function(error) {
            reject(error)
        })
    })
}