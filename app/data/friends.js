var friends = [
   {
    name: "test",
    photo : "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
    ]
   },
   {
    name: "test2",
    photo: "n/a",
    scores: [
        2,
        3, 
        5, 
        6, 
        7, 
        2, 
        1, 
        9, 
        4, 
        10
    ]
   },
   {
    name: "test3",
    photo: "n/a",
    scores: [
        0,
        0, 
        0, 
        6, 
        7, 
        2, 
        1, 
        9, 
        4, 
        10
    ]
   },
   {
    name: "test3",
    photo: "n/a",
    scores: [
        0,
        0, 
        0, 
        0, 
        0, 
        0, 
        0, 
        0, 
        0, 
        0
    ]
   }

];
module.exports = friends;

// for (var i = 0; i < friends.length; i++) {
//     console.log(friends[i].scores)
// }

// function totalDif(){
//     for(var i=0; i < 10;i++){
//         if(friends[0].scores[i] > friends[1].scores[i]) {
//             var difference = parseInt(friends[0].scores[i]) - parseInt(friends[1].scores[i]);
//             totalDifferenceArr.push(difference);
//         }else{
//             var difference = parseInt(friends[1].scores[i]) - parseInt(friends[0].scores[i]);
//             totalDifferenceArr.push(difference);
//         }
//     }
//     console.log(totalDifferenceArr);
//     var totalDifference = totalDifferenceArr.reduce(function(a, b) { return a + b; }, 0);
//     console.log(totalDifference);

// }
// var friendMatch = "";
// function compareScores(){
//     var arrLength = friends.length -1;
//     var lastFriend = friends.slice(-1)[0].scores;
//     var difference = 0;
//     var difArr = [];
//     console.log(lastFriend);
//     for(var i=0; i < arrLength;i++){
//         for (var j=0; j < 10;j++){
//             difference += Math.abs(parseInt(lastFriend[j]) - parseInt(friends[i].scores[j]));
//         }
//         difArr.push(difference);
//         difference = 0;
//     }
//     console.log(difArr);
//     var leastDif = Math.min.apply(null, difArr);
//     console.log(leastDif);

//     function num(element) {
//         return element <= leastDif;
//     }
//     friendMatch = difArr.findIndex(num);

//     console.log(friends[friendMatch]);
// }

// // console.log(totalDifferenceArr);
// // totalDif();
// compareScores();
