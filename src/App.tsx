import React, { useState } from "react"
import TinderCard from "react-tinder-card"
import "./App.css"

const db = [
  {
    name: "Richard Hendricks",
    url: "https://avatars.dicebear.com/api/avataaars/" + Math.random() + ".svg",
  },
  {
    name: "Erlich Bachman",
    url: "https://avatars.dicebear.com/api/avataaars/" + Math.random() + ".svg",
  },
  {
    name: "Monica Hall",
    url: "https://avatars.dicebear.com/api/avataaars/" + Math.random() + ".svg",
  },
  {
    name: "Jared Dunn",
    url: "https://avatars.dicebear.com/api/avataaars/" + Math.random() + ".svg",
  },
  {
    name: "Dinesh Chugtai",
    url: "https://avatars.dicebear.com/api/avataaars/" + Math.random() + ".svg",
  },
]

function App() {
  const characters = db
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction: any, nameToDelete: any) => {
    console.log("removing: " + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name: any) => {
    console.log(name + " left the screen!")
  }

  return (
    <div className="app">
      <div className="cardContainer">
        {characters.map((character) => (
          <div className="swipe">
            <TinderCard
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
            >
              <div
                style={{ backgroundImage: "url(" + character.url + ")" }}
                className="card"
              >
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          </div>
        ))}
      </div>
      {lastDirection ? (
        <h2 className="infoText">You swiped {lastDirection}</h2>
      ) : (
        <h2 className="infoText" />
      )}
    </div>
  )
}

export default App
