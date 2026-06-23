function findLeaders(arr) {
    let leaders = [];

    for (let i = 0; i < arr.length; i++) {
        let isLeader = true;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                isLeader = false;
                break;
            }
        }

        if (isLeader) {
            leaders.push(arr[i]);
        }
    }

    return leaders;
}

console.log(findLeaders([16, 17, 4, 3, 5, 2]));