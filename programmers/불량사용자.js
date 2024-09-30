function solution(user_id, banned_id) {
    let bannedCases = [];

    function isMatch(user, banned) {
        if (user.length !== banned.length) return false;
        for (let i = 0; i < user.length; i++) {
            if (banned[i] !== '*' && user[i] !== banned[i]) { 
                return false;
            }
        }
        return true;
    }

 
    banned_id.forEach((banId) => {
        const matchingUsers = user_id.filter(userId => isMatch(userId, banId));
        bannedCases.push(matchingUsers);
    });

    let resultSet = new Set();
    
  
    const dfs = (depth, path) => {
        if (depth === banned_id.length) {
            const sortedPath = [...path].sort().join(',');
            resultSet.add(sortedPath);
            return;
        }

        for (let user of bannedCases[depth]) {
            if (!path.has(user)) { 
                path.add(user);
                dfs(depth + 1, path);
                path.delete(user);
            }
        }
    };

    dfs(0, new Set());
   
    return resultSet.size;
}
