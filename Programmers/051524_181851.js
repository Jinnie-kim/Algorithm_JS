function solution(rank, attendance) {
  let attendanceObj = {};
  let attendanceArr = [];

  for (let i = 0; i < attendance.length; i++) {
    if (attendance[i]) {
      attendanceObj[rank[i]] = i;
      attendanceArr.push(rank[i]);
    }
  }
  attendanceArr.sort((a, b) => a - b);

  let a = attendanceObj[attendanceArr[0]];
  let b = attendanceObj[attendanceArr[1]];
  let c = attendanceObj[attendanceArr[2]];

  return 10000 * a + 100 * b + c;
}

solution([3, 7, 2, 5, 4, 6, 1], [false, true, true, true, true, false, false]);
