import * as ApiAdapter from './adapter'

export function loadActivities() {
  return ApiAdapter.loadActivities()
}
export function deleteEntity(resource, uuid) {
  return ApiAdapter.deleteEntity(resource, uuid)
}

export function updateEntity(resource, uuid, params) {
  return ApiAdapter.updateEntity(resource, uuid, params)
}

export function newEntity(resource, params) {
  return ApiAdapter.newEntity(resource, params).then((newEntityKey) => {
    return ApiAdapter.getEntityByKey(resource, newEntityKey)
  })
}
