var fs = require('fs');

var r6 = ['Pratik', 'Bhavnesh', 'Biju', 'Akash', 'Ramesh', 'Tariq', 'Deepak']
var r7 = ['Santosh', 'Mohit', 'Vivek', 'Tarun', 'Chandrashekhar', 'Raushan', 'Dipesh']
var r8 = ['Aman', 'S Vivek', 'Prabhakar', 'Bhaskar', 'Chandan']
var r9 = ['Aman Sharma', 'Kishor']
var r10 = ['Yogessh', 'Alpesh', 'Rahit', 'Jaiprakash', 'Shabid', 'Kirithiv']
var r11 = ['Atul', 'Shahid', 'Ajith', 'Hemant', 'Riyaz', 'Rakesh']
var r12 = ['Anand', 'Sanjay', 'K Nayak', 'Vishal', 'Kapil', 'Himanshu', 'Paranthaman', 'Akhilesh', 'Rohit']

var allRooms = [r6, r7, r8, r9, r10, r11, r12]
var Room = [6, 7, 8, 9, 10, 11, 12]

var listofDetailedStudent = []
var i = 0;
for (var room of allRooms) {
    for (student of room) {
        var studentDetails = {
            "name": student,
            "room": Room[i]
        }
        listofDetailedStudent.push(studentDetails)
    }
    i += 1
}

var roomAndBed = {
    6: [1, 2, 3, 4, 5, 6, 7],
    7: [8, 9, 10, 11, 12, 13, 14, 15],
    8: [16, 17, 18, 19, 20, 21],
    9: [22, 23, 24, 25],
    10: [26, 27, 28, 29, 30, 31, 32, 33],
    11: [34, 35, 36, 37, 38, 39],
    12: [40, 41, 42, 43, 44, 45, 46, 47, 48, 49]
}

var assignedStudent = [];
var assinedBed = []
var shuffleDone = []



module.exports = (endpoints) => {
    endpoints.get('/roomshuffle', (req, res) => {
        while(listofDetailedStudent.length !== 0){
            var student = listofDetailedStudent[Math.floor(Math.random() * listofDetailedStudent.length)];
            var items = Object.keys(roomAndBed)
            var randomRoom = items[Math.floor(Math.random() * items.length)];
            if(Number(student.room) !== Number(randomRoom) && assignedStudent.includes(student.name) === false ){
                var randomBed = roomAndBed[randomRoom][Math.floor(Math.random() * roomAndBed[randomRoom].length)];
                if(assinedBed.includes(randomBed) === false){
                    var heythere = {
                            "name": student.name,
                            "room": randomRoom,
                            "bed": randomBed
                        }
                    assignedStudent.push(student.name)
                    assinedBed.push(randomBed)
                    shuffleDone.push(heythere)
                    var index = listofDetailedStudent.indexOf(student);
                    listofDetailedStudent.splice(index, 1)

                }
            }
        }
        console.log(shuffleDone)
            return res.json(shuffleDone)
    })
}
