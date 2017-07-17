export function openDrawer() {
  return {
    type: 'DRAWER_OPEN_TRUE',
    payload: {
      value: true,
    }
  }
}

export function closeDrawer() {
  return {
    type: 'DRAWER_OPEN_FALSE',
    payload: {
      value: false,
    }
  }
}
