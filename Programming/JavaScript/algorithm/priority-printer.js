function solution(priorities, location) {
  let answer = 0;
  let max = 0;

  while (true) {
    max = Math.max.apply(null, priorities);
    if (max === priorities[0]) {
      answer++;
      priorities.shift();
      if (location === 0) {
        return answer;
      } else {
        location--;
      }
    } else {
      priorities.push(priorities.shift());
      location = (location === 0 ? priorities.length : location) - 1;
      }
    }
  }