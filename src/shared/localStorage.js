function getItem(name) {
  const value = localStorage.getItem(name)

  if (!value) {
    location = '/member.html?redirect=' + encodeURIComponent(location.href)
  }
  return value
}

function setItem(name, value) {
  localStorage.setItem(name, value)
}

export default {
  getItem,
  setItem
}
