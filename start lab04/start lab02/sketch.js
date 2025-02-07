let friend01 = {name: "David", age: 46, bowling: true};
let friend02 = {name: "Peter", age: 29, bowling: false};
let friend03 = {name: "Jim", age: 20, bowling: true};
let friend04 = {name: "Anna", age: 22, bowling: true};
let friend05 = {name: "Craig", age: 27, bowling: false};

let friends = [];
let friendAges = [];
let friendBowlingAges = [];

friends.push(friend01);
friends.push(friend02);
friends.push(friend03);
friends.push(friend04);
friends.push(friend05);

for (let i = 0; i < friends.length; i++) {
    friendAges.push(friends[i].age);
    // console.log(friends[i].name);
}

for (let i = 0; i < friends.length; i++) {
if (friends[i].bowling == true) {
    friendBowlingAges.push(friends[i].age);
    }
}

function calcAvg(arrayNums) {
    let startValue = 0;

    for (let i = 0; i < arrayNums.length; i++) {
        startValue = startValue + arrayNums[i];
    }
    return startValue / arrayNums.length
    
    
    // let avg = 0;
    
    // for (let i = 0; i < friendBowlingAges.length; i++) {
    //     //console.log(friendBowlingAges[i])  
    //     avg = avg + friendBowlingAges[i];
    // }
    
    // return avg = avg / friendBowlingAges.length;
}

// for (let i = 0; i < 100; i++) {
//     if (i % 5 == 0) {console.log(i)}
// }


function median(arrayOfNums) {
    arrayOfNums.sort((a,b) => (a-b));
    
    if (arrayOfNums.length%2 == 0) {
        let endNum = arrayOfNums.length / 2;
        let startNum = endNum - 1;
        console.log("It's Even")
        return (arrayOfNums[startNum] + arrayOfNums[endNum])/2
    } else {
        console.log("It's Odd")
        return arrayOfNums[Math.floor(arrayOfNums.length / 2)]
    }
}

