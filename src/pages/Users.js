import { useEffect, useState } from "react";
import "../App.css";
import { getUsers } from "../services/axios";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const payload = await getUsers();
      if (payload?.data?.data) {
        setUsers(payload?.data?.data)
      } else throw payload
    } catch (error) {
      console.error(error)
    }
  }
  return (

    <div className="App">

      <nav class="center">
        <div class="container">
          <span class="icon-logo">Pokedex</span>
        </div>
      </nav>

      <header class="center">
        <center>
          <div class="profile-picture">
            <img src="https://imgur.com/eZ24gj6.png" /> {/* pokemon logo */}
          </div>
        </center>
      </header>

      <main>
        <div class="center">
          <div class="gallery-tablink container">
            <a href="created.html">Pokemon type</a>
            <a href="todos.js">owned</a>
          </div>
        </div>

        <div class="center">
          <div class="gallery-grid container">

            <div class="gallery-frame">
              <img src="https://imgur.com/sAWoPTi.png" />
              {/* <!-- bulbasaur --> */}
              <p>Bulbasaur known as Fushigidane (フシギダネ) in Japan, is the first Pokémon in Nintendo and Game Freak's Pokémon franchise's monster index, called a Pokédex. Designed by Atsuko Nishida, Bulbasaur debuted in Pokémon Red and Blue as a Starter</p>
              <button class="add-collection" href="#">detail</button>
            </div>

            <div class="gallery-frame">
              <img src="https://imgur.com/vZv2BO1.png" />
              {/* <!-- ivysaur --> */}
              <p>Ivysaur is a quadrupedal Pokémon that has blue-green skin with darker patches. On top of its head are pointed ears with black insides and it has narrow red eyes. Ivysaur has a short, rounded snout with a wide mouth and two pointed teeth in its upper jaw. Each of its feet has three claws on them.</p>
              <button class="add-collection" href="#">detail</button>
            </div>

            <div class="gallery-frame">
              <img src="https://imgur.com/bsvQ0PP.png" />
              {/* <!-- venusaur --> */}
              <p>Venusaur known in Japan as Fushigibana (フシギバナ), is a Grass/Poison-type Pokémon species in Nintendo and Game Freak's Pokémon franchise. Created by Ken Sugimori, Venusaur first appeared in the video games Pokémon Red and Green and subsequent sequels.</p>
              <button class="add-collection" href="#">detail</button>
            </div>

            <div class="gallery-frame">
              <img src="https://imgur.com/t2TPf43.png" />
              {/* <!-- Charmander --> */}
              <p>Charmander known as Hitokage (ヒトカゲ) in Japan. The end of a Charmander's tail is alight with a flame, and the flame's size reflects both the physical health and the emotions of the individual. It is known as the Lizard Pokemon.</p>
              <button class="add-collection" href="#">detail</button>
            </div>

            <div class="gallery-frame">
              <img src="https://imgur.com/HqIG31H.png" />
              {/* \<!-- Charmeleon --> */}
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolorum, quidem consequuntur molestiae quod impedit voluptatum odio officiis porro nam id aspernatur! Vitae unde atque repellendus quasi, obcaecati consequuntur fugiat.</p>
              <button class="add-collection" href="#">detail</button>
            </div>

            <div class="gallery-frame">
              <img src="https://imgur.com/xTT7HjM.png" />
              {/* <!-- Charizard --> */}
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolorum, quidem consequuntur molestiae quod impedit voluptatum odio officiis porro nam id aspernatur! Vitae unde atque repellendus quasi, obcaecati consequuntur fugiat.</p>
              <button class="add-collection" href="#">detail</button>
            </div>

            <div class="gallery-frame">
              <img src="https://imgur.com/1HmXgGX.png" />
              {/* <!-- squirtle --> */}
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolorum, quidem consequuntur molestiae quod impedit voluptatum odio officiis porro nam id aspernatur! Vitae unde atque repellendus quasi, obcaecati consequuntur fugiat.</p>
              <button class="add-collection" href="#">detail</button>
            </div>

            <div class="gallery-frame">
              <img src="https://imgur.com/hidXH6F.png" />
              {/* <!-- pikachu --> */}
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolorum, quidem consequuntur molestiae quod impedit voluptatum odio officiis porro nam id aspernatur! Vitae unde atque repellendus quasi, obcaecati consequuntur fugiat.</p>
              <button class="add-collection" href="#">detail</button>
            </div>


          </div>
        </div>
      </main>

    </div>
  );
}

export default Users;

