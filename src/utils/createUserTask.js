const uuidv1 = require('uuid/v1');


const task = 
  {
    title: "",
    imgName: "",
    days: [
      {
        date: 0,
        isActive: false,
        name: 'monday',
        title: 'Пн',
        isDone: false,  
      },{
        date: 0,
        isActive: false,
        name: 'tuesday',
        title: 'Вт',
        isDone: false,  
      },{
        date: 0,
        isActive: false,
        name: 'wednesday',
        title: 'Ср',
        isDone: false,  
      },{
        date: 0,
        isActive: false,
        name: 'thursday',
        title: 'Чт',
        isDone: false,  
      },
      {
        date: 0,
        isActive: false,
        name: 'friday',
        title: 'Пт',
        isDone: false,  
      },{
        date: 0,
        isActive: false,
        name: 'Saturday',
        title: 'Сб',
        isDone: false,  
      },{
        date: 0,
        isActive: false,
        name: 'Sunday',
        title: 'Нд',
        isDone: false,  
      },
    ],
    taskPoints: 0,
  }
  

function createUserTask({title, taskPoints}) {
  function getMonday(d) {
    d = new Date(d);
    const day = d.getDay(),
        diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
        console.log('day :', day);
    return new Date(d.setDate(diff));
  }
  const monday = getMonday(new Date()).getTime();
  const getDayOfWeek = day => {
    if(day === 0) return monday
    return monday + day * 60 * 60 * 24 * 1000
  } 

  
    
    const newDays = task.days.map((day, i) => {
      return { ...day, date: getDayOfWeek(i) }
    })
    return {...task, days: newDays, title,  taskPoints}
  
}

module.exports = createUserTask;