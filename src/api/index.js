const activities = [
  { key: 'coding',  text: 'Coding', state: {showSkills: true} },
  { key: 'reading', text: 'Reading', state: { showSkills: true} },
  { key: 'sport',  text: 'Sport', state: { showSkills: false} },
  { key: 'relax',  text: 'Relax', state: { showSkills: false} },
]

export function loadActivities() {
  return new Promise((resolve, reject) => { 
    setTimeout(() => {
      resolve({ data:activities })
    }, 2000)
  })
}

export function createActivity(params) {
  return new Promise((resolve, reject) => { 
    setTimeout(()=>{
      resolve({data:{date: '123', type: '123'}})
    }, 1000)
  })
}
