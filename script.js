const content = document.getElementById("content")

function createCard(data) {
  const card = document.createElement("div")
  card.className = "card"

  card.innerHTML = `
    <h2>${data.heading}</h2>
    <p>${data.text}</p>
    <img src="${data.image}" width="400">
  `

  content.appendChild(card)
}

createCard({
  heading: "Models",
  text: "My Blender projects.",
  image: "https://placehold.co/600x300/png"
})

createCard({
  heading: "UI Design",
  text: "Roblox UI concepts.",
  image: "https://placehold.co/600x300/png"
})
