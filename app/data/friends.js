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
   }

];
for (var i = 0; i < friends.length; i++) {
    console.log(friends[i].scores)
}

function totalDif(){
    var totalDifferenceArr = [];
    for(var i=0; i < 10;i++){
        if(friends[0].scores[i] > friends[1].scores[i]) {
            var difference = parseInt(friends[0].scores[i]) - parseInt(friends[1].scores[i]);
            totalDifferenceArr.push(difference);
        }else{
            var difference = parseInt(friends[1].scores[i]) - parseInt(friends[0].scores[i]);
            totalDifferenceArr.push(difference);
        }
    }
    console.log(totalDifferenceArr);
    var totalDifference = totalDifferenceArr.reduce(function(a, b) { return a + b; }, 0);
    console.log(totalDifference);

}
totalDif();