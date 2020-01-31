let r1 = ['Nitish', 'Biju', 'Kirithiv']
let r6 = ['Kartik', 'Praveen', 'Shakti', 'Sonu', 'Shubham', 'Aman k', 'Bijendra']
let r7 = ['V nayak', 'Bhavnesh', 'Rahit', 'Bhaskar', 'R L Yogessh', 'Deepak sh', 'Paramthaman', 'Dipesh']
let r8 = ['Aakash', 'Prince', 'Yousuf', 'J Prakash', 'V modi', 'Bilal']
let r9 = ['Sanjay', 'Shabid', 'Ajith', 'Atul']
let r10 = ['Rohit', 'Roshan', 'Riyaz', 'Hemant', 'Tapas', 'Rakesh', 'Akhilesh', 'Ramesh']
let r11 = ['Alpesh', 'Kishore', 'Prakash', 'Prabhakar', 'Himanshu', 'Anand']
let r12 = ['Ankur', 'Sushant', 'Santosh', 'Tariq A', 'Umesh', 'Amar pal', 'Abhishek', 'Chandan sh', 'S Vivek']

var allRooms = [r1 ,r6, r7, r8, r9, r10, r11, r12]
var Room = [1, 6, 7, 8, 9, 10, 11, 12]

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
    1: [1, 2, 3, 4, 5, 6, 7, 8],
    6: [10, 11, 12, 13, 14, 15, 16],
    7: [17, 18, 19, 20, 21, 22, 23, 24],
    8: [25, 26, 27, 28, 29, 30],
    9: [31, 32, 33, 34],
    10: [35, 36, 37, 38, 39, 40, 41, 42],
    11: [43, 44, 45, 46, 47, 48],
    12: [49, 50, 51, 52, 53, 54, 55, 56]
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
        // looking for the duplicate elements 
        // let newSet = new Set();
        // shuffleDone.map((i) => {
        //     newSet.add(i.name)
        // })
        // if(newSet.size === shuffleDone.length){
        //     console.log(true)
        // }
        console.log(shuffleDone)
            return res.json(shuffleDone)
    })
}
