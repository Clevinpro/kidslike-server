const uuidv1 = require('uuid/v1');
const tasks = [
  {
    title: "Застелити ліжко",
    imgName: "bed",
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
    taskPoints: 3,
  },{
    title: "Пропилососити"
,     imgName: "vacuum",
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
    taskPoints: 5,
  },{
    title: "Полити квіти"
,    imgName: "flowers",
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
    taskPoints: 2,
  },{
    title: "Почитати книгу"
,      imgName: "book",
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
    taskPoints: 4,
  },{
    title: "Викинути сміття",
    imgName: "trash",
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
    taskPoints: 1,
  },{
    title: "Почистити зуби"
,      imgName: "teeth",
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
    taskPoints: 1,
  },{
    title: "Підмести"
    ,imgName: "sweep",
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
    taskPoints: 4,
  },{
    title: "Скласти іграшки",
    imgName: "toys",
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
    taskPoints: 2,
  },
  
]

function createUserTasks() {
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

  return tasks.map(el => {
    
    const newDays = el.days.map((day, i) => {
      return { ...day, date: getDayOfWeek(i), _id: uuidv1() }
    })
    return {...el, days: newDays }
  })
  
}

module.exports = createUserTasks;