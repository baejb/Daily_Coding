function solution(today, terms, privacies) {
    const answer = [];
    const termMap = new Map();
   
    terms.forEach((term) => {
        const [alpha, month] = term.split(" ");
        termMap.set(alpha, Number(month));
    });

    const [ty, tm, td] = today.split(".").map(Number);
    const todayTotalDays = (ty * 12 * 28) + (tm * 28) + td;

    privacies.forEach((privacy, index) => {
        const [days, term] = privacy.split(" ");
        const [y, m, d] = days.split(".").map(Number);

        const privacyTotalDays = (y * 12 * 28) + ((m + termMap.get(term)) * 28) + d - 1;

        if (privacyTotalDays < todayTotalDays) {
            answer.push(index + 1);
        }
    });

    return answer;
}
