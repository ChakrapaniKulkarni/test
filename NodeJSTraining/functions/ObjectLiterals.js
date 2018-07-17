var Subjects = ['physics', 'chemistry', 'math']
var Students = [
    {
        name: 'varun',
        age: 15,
        marks: [10, 20, 30],
        //avg:avg
    },
    {
        name: 'vijay',
        age: 20,
        marks: [30, 20, 40]
    },
    {
        name: 'ajay',
        age: 22,
        marks: [30, 20, 50]
    }
];


function avg(vals) {
    var sum = 0, i = 0;
    for (i = 0; vals[i]; i++) {
        sum += vals[i];
        console.log(Subjects[i] + ": " + vals[i]);
    }
    return sum / i;
}

function displayRecs(recs, prop) {
    //for(vari=0;i<studentsArr.length;i++){
    for (var i = 0; recs[i]; i++) {
        var rec = recs[i];
        console.log('Record :' + i);
        //  console.log(rec[prop]);
        //    console.log(rec['age']);
        for (var j = 0; prop[j]; j++) {
            console.log(rec[prop[j]]);
        }
        console.log('Average: ' + avg(rec['marks']));

    }
}
//pass avg display avg pass marks display marks
displayRecs(Students, ['name', 'age']);
console.log(typeof (Subjects));