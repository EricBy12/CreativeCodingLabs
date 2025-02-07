let age = 21;
const dob = "01-01-1972";
let friends = ["Jim", "otherJim","otherOtherJim", "otherOtherOtherJim", "otherOtherOtherOtherJim", "otherOtherOtherOtherOtherJim", "otherOtherOtherOtherOtherOtherJim", "otherOtherOtherOtherOtherOtherOtherJim"];

// let yobString = dob.substring(6,10);
// let yobNum = parseInt(yobString);

age = 2025 - parseInt(dob.substring(6,10));

//friends.splice(0,0,"otherOtherJim");

for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}

let myFriend = {name:"John", age:22, address:"A94V5F4"}