import firebase from './firebase'

export function getEntityByKey(resource, key){
  return new Promise((resolve, reject) => { 
    try{
      firebase.database().ref(resource).child(key).on("value", function(snapshot){
        var object = snapshot.val();
        resolve({[key]: object})
      });
    }catch(err){
      reject(new Error('Get records failed.[code: 500]'))
    }
  })
}

export function newEntity(resource, params){
  return new Promise((resolve, reject) => { 
    try{
      const newKey = firebase.database().ref(resource).push(params)
      //const newKey = firebase.database().ref(resource).push({'..xx':''})
      resolve(newKey.key)
    }catch(err){
      reject(new Error('Create records failed.[code: 500]'))
    }
  })
}

export function updateEntity(resource, uuid, params) {
  return new Promise((resolve, reject) => {
    try{
      firebase.database().ref(resource).child(uuid).update(params)
    }catch(err){
      reject(new Error('Update failed.[code: 500]'))
      return
    }
    resolve(true)
  })
}

export function deleteEntity(resource, key) {
  return new Promise((resolve, reject) => {
    try{
      firebase.database().ref(resource).child(key).remove()
    }catch(err){
      reject(new Error('Delete failed.[code: 500]'))
      return
    }
    resolve(key)
  })
}

export function loadActivities() {
  return new Promise((resolve, reject) => { 
    firebase.database().ref('activities').on("value", function(snapshot) {
      resolve({ data: snapshot.val() || [] })
    })
  })
}
