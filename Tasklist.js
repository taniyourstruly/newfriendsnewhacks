function Task(title, info, hours, minutes, month, day, year){
    this.title = title;
    this.info = info;
    this.hours = hours;
    this.minutes = minutes;
    this.month = month;
    this.day = day;
    this.year = year;
}

let taskList = [];

function accessTask(index){
    return tasklist[index];
}

function createTask(){
    let title = document.getElementById("title").value;
    let info = document.getElementById("notes").value;
    let date = document.getElementById("party").value;
    //date format : "2020-09-01T12:13"
    let year = Number(date.substring(0,4));
    let month =Number(date.substring(5,7));
    let day = Number(date.substring(8,10));
    let hours = Number(date.substring(11, 13));
    let minutes = Number(date.substring(14));

    taskList.push(new Task(title, info, hours, minutes, month, day, year)); 
}

function actionTime(task){
    let current = new Date();
    if(current.getFullYear() ===  task.year && current.getMonth() === task.month && current.getDate === task.day){
        let diff = (current.getHours()*60 + current.getMinutes()) - (task.hours*60 + task.minutes);
        if(diff === 30 ){
            return true;
        }
    }
    return false;
}

function sortTaskList(){
    taskList.sort(function(a,b){
        if(a.year === b.year){
            if(a.month === b.month){
                if(a.day === b.day){
                    if(a.hours === b.hours){
                        return a.minutes - b.minutes;
                    }
                    return a.hours - b.hours;
                }
                return a.day - b.day;
            }
            return a.month - b.month;
        }
        return a.year - b.year;
    });
}

