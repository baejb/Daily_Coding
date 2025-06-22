function solution(n, t, m, timetable) {

  const toMinutes = (time) => {
    const [h, m] = time.split(':').map(Number);
    return h * 60 + m;
  };

  const toHHMM = (min) => {
    const h = String(Math.floor(min / 60)).padStart(2, '0');
    const m = String(min % 60).padStart(2, '0');
    return `${h}:${m}`;
  };

  const crewTimes = timetable.map(toMinutes).sort((a, b) => a - b);

  let busTime = 540; // 09:00부터 시작
  let crewIdx = 0;

  for (let i = 0; i < n; i++) {
    let onboard = [];

    while (onboard.length < m && crewIdx < crewTimes.length && crewTimes[crewIdx] <= busTime) {
      onboard.push(crewTimes[crewIdx]);
      crewIdx++;
    }

    if (i === n - 1) {
      if (onboard.length < m) {
     
        return toHHMM(busTime);
      } else {
     
        return toHHMM(onboard[m - 1] - 1);
      }
    }

    
    busTime += t;
  }
}
