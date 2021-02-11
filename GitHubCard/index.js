/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const githubSite = "https://api.github.com/users/"

const myGit = "bukit3point0"



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

const container = document.querySelector(".cards");

const myCard = (contact) =>{
  const newCardContainer = document.createElement("div")
  const cardAvatar = document.createElement("img")
  const boxText = document.createElement("div")
  const cardName = document.createElement("p")
  const cardLogin = document.createElement("p")
  const cardLocation = document.createElement("p")
  const cardURL = document.createElement("p")
  const cardFollowers = document.createElement("p")
  const cardFollowing = document.createElement("p")
  const cardBio = document.createElement("p")

  cardAvatar.setAttribute("src", contact.avatar_url)
  cardName.textContent = `${contact.name}`
  cardLogin.textContent = `${contact.login}`
  cardLocation.textContent = `Location: ${contact.location}`
  cardURL.innerHTML = `Profile: <a href="${contact.url}">${contact.url}</a>`
  cardFollowers.textContent = `Followers: ${contact.followers}`
  cardFollowing.textContent = `Following: ${contact.following}`
  cardBio.textContent = `Bio: ${contact.bio}`

  // boxImg.appendChild(cardAvatar)
  boxText.appendChild(cardName)
  boxText.appendChild(cardLogin)
  boxText.appendChild(cardLocation)
  boxText.appendChild(cardURL)
  boxText.appendChild(cardFollowers)
  boxText.appendChild(cardFollowing)
  boxText.appendChild(cardBio)

  newCardContainer.appendChild(cardAvatar)
  newCardContainer.appendChild(boxText)

  newCardContainer.classList.add("card")
  cardName.classList.add("name")
  cardLogin.classList.add("username")

  return newCardContainer;
}

axios.get(githubSite + myGit)
  .then(res => {
    console.log(res.data);
    container.appendChild(myCard(res.data))
  })
  .catch(err => {
    console.log(`YOU FOOL YOU HECKED UP ${err}`)
  })

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ["AD9018", "codyethanjordan", "SpicyLunchBox", "Gavin-Rilee", "natepace"];

followersArray.forEach (gitter => {
axios.get(githubSite + gitter)
  .then(res => {
    console.log(res.data);
    container.appendChild(myCard(res.data))
  })
  .catch(err => {
    console.log(`YOU FOOL YOU HECKED UP ${err}`)
  })
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
