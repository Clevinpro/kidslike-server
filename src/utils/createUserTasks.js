const uuidv1 = require('uuid/v1');


const tasks = [
  {
    title: "Застелити ліжко",
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
    taskPoints: 3,
  },{
    title: "Пропилососити"
,     imgName: "",
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
,    imgName: "",
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
,      imgName: "",
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
    taskPoints: 1,
  },{
    title: "Почистити зуби"
,      imgName: "",
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
    ,imgName: "",
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
      return { ...day, date: getDayOfWeek(i) }
    })
    return {...el, days: newDays }
  })
  
}

module.exports = createUserTasks;