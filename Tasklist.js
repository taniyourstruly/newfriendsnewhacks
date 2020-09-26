function Task(title, hours, minutes, month, day, year){
    this.title = title;
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

function createTask(title, hours, minutes, date){
    sDate = date.split("/");
    taskList.push(new task(title, hours, minutes, Number(sDate[0]), Number(sDate[1]), Number(sDate[2]))); 
}