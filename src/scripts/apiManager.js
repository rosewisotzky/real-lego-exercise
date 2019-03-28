const apiBaseUrl = "http://localhost:8088"

const postLego = (legoToSave) => {
  fetch(`${apiBaseUrl}/legos`, { // Replace "url" with your API's URL
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(legoToSave)
})
}
const getColor = () => fetch(`${apiBaseUrl}/colors`).then(response => response.json())

const postColor = (legoColorToSave) => {
  fetch(`${apiBaseUrl}/colors`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(legoColorToSave)
  })
}