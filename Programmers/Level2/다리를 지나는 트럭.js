function solution(bridge_length, weight, truck_weights) {
  // answer: 걸린 시간
  let answer = 0;

  // queue: 현재 다리상태
  let queue = [];

  // queueSum: 현재 다리무게
  let queueSum = 0;

  // queue의 길이는 다리 길이, 모두 0으로 초기화
  for (let i = 0; i < bridge_length; i++) {
    queue.push(0);
  }
  
  // nowTruck: 현재 다리를 지나는 트럭
  let nowTruck = truck_weights.shift();

  // 큐에 트럭을 넣고 다리를 앞으로 한칸씩 땡김
  queue.unshift(nowTruck);
  queue.pop();

  // 다리 무게 증가
  queueSum += nowTruck;

  // 시간 증가
  answer++;

  // 쉬지않고 큐에 트럭을 넣거나 다리를 건너기 때문에 queueSum이 0이 되면 모든 트럭이 지나간 것.

  while (queueSum) {
    // 다리에 있는 트럭 이동
    queueSum -= queue.pop();

    // 일단 다리를 안 건넌 트럭 하나 빼기
    nowTruck = truck_weights.shift();

    // 다리에 들어갈 수 있으면 큐(다리)에 트럭 넣고 무게 증가
    if (nowTruck + queueSum <= weight) {
      queue.unshift(nowTruck);
      queueSum += nowTruck;
    }
    // 다리에 들어갈 수 없으면 0을 넣고, 뺐던 트럭 다시 트럭 배열에 넣어줌
    else {
      queue.unshift(0);
      truck_weights.unshift(nowTruck);
    }
    answer++;
  }

  return answer;
}

/*
문제 설명
트럭 여러 대가 강을 가로지르는 일 차선 다리를 정해진 순으로 건너려 합니다. 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 트럭은 1초에 1만큼 움직이며, 다리 길이는 bridge_length이고 다리는 무게 weight까지 견딥니다.
※ 트럭이 다리에 완전히 오르지 않은 경우, 이 트럭의 무게는 고려하지 않습니다.

예를 들어, 길이가 2이고 10kg 무게를 견디는 다리가 있습니다. 무게가 [7, 4, 5, 6]kg인 트럭이 순서대로 최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.

경과 시간	다리를 지난 트럭	다리를 건너는 트럭	대기 트럭
0	[]	[]	[7,4,5,6]
1~2	[]	[7]	[4,5,6]
3	[7]	[4]	[5,6]
4	[7]	[4,5]	[6]
5	[7,4]	[5]	[6]
6~7	[7,4,5]	[6]	[]
8	[7,4,5,6]	[]	[]
따라서, 모든 트럭이 다리를 지나려면 최소 8초가 걸립니다.

solution 함수의 매개변수로 다리 길이 bridge_length, 다리가 견딜 수 있는 무게 weight, 트럭별 무게 truck_weights가 주어집니다. 이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성하세요.

제한 조건
bridge_length는 1 이상 10,000 이하입니다.
weight는 1 이상 10,000 이하입니다.
truck_weights의 길이는 1 이상 10,000 이하입니다.
모든 트럭의 무게는 1 이상 weight 이하입니다.
입출력 예
bridge_length	weight	truck_weights	return
2	10	[7,4,5,6]	8
100	100	[10]	101
100	100	[10,10,10,10,10,10,10,10,10,10]	110
출처

※ 공지 - 2020년 4월 06일 테스트케이스가 추가되었습니다.
*/