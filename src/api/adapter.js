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
      resolve(newKey.key)
    }catch(err){
      reject(new Error('Create records failed.[code: 500]'))
    }
  })
}

export function updateEntity(resource, key, params) {
  return new Promise((resolve, reject) => {
    try{
      firebase.database().ref(resource).child(key).update(params)
    }catch(err){
      reject(new Error('Update failed.[code: 500]'))
      return
    }
    resolve({
      resource: resource, 
      key: key, 
      entity: params
    })
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

export function loadResource(resource) {
  return new Promise((resolve, reject) => { 
    try{
      firebase.database().ref(resource).on("value", function(snapshot) {
        resolve({ data: snapshot.val() || {} })
      })
    }catch(err){
      reject(new Error('Loading failed.[code: 500]'))
      return
    }
  })
}
