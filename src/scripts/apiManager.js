const postLego = (legoToSave) => {
  fetch("http://localhost:8088/legos", { // Replace "url" with your API's URL
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(legoToSave)
})
}
