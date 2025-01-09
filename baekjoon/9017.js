const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = Number(input[0]);

for (let t = 0; t < T; t++) {
    const N = Number(input[t * 2 + 1]);
    const arr = input[t * 2 + 2].split(" ").map(Number);

    const teamCount = {};
    const validTeams = new Set();

    arr.forEach((team) => {
        teamCount[team] = (teamCount[team] || 0) + 1;
        if (teamCount[team] >= 6) validTeams.add(team); 
    });

    let rank = 1;
    const teamScores = {};
    arr.forEach((team) => {
        if (!validTeams.has(team)) return; 
        if (!teamScores[team]) teamScores[team] = [];
        teamScores[team].push(rank++);
    });

    const results = Object.entries(teamScores).map(([team, scores]) => {
        scores.sort((a, b) => a - b); 
        return {
            team: Number(team),
            totalScore: scores.slice(0, 4).reduce((sum, score) => sum + score, 0),
            fifthScore: scores[4], 
        };
    });

    results.sort((a, b) => {
        if (a.totalScore !== b.totalScore) return a.totalScore - b.totalScore;
        return a.fifthScore - b.fifthScore; 
    });

    console.log(results[0].team); 
}