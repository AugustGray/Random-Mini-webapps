// Example data structure
const tvShows = {
    "Food": {
      seasons: {
        Pizza:{},
        Hamburgers:{},
        Boneless:{},
        "Fried Chicken":{},
        Spaguetti:{},
        Panini:{},
        Sushi:{},
        Ramen:{},
        Onigiri:{},
        Tacos:{},
      },
      color: "#FFD700", // Custom background color
      textColor: "#000000", // Custom text color
      icon: "🍕🍔" // Emoji icon
    },
    "Fast Food": {
      seasons: {
        KFC:{},
        Wendys:{},
        Subway:{},
        "Little Caesars":{},
        "Pizza del rey": {},
      },
      color: "#FFD700", // Custom background color
      textColor: "#000000", // Custom text color
      icon: "🍔🍟" // Emoji icon
    },
    "Restaurant $": {
      seasons: {
        Arizona:{},
        "Ricos Tacos":{},
        "Ganbare!":{},
        "Origami Sushi": {},
      },
      color: "#FF6347", // Custom background color
      textColor: "#000000", // Custom text color
      icon: "🍽️💵" // Emoji icon
    },
    "Restaurant $$$": {
      seasons: {
        Comecamila:{},
        "Cinco panes":{},
        "Shin-toshin":{}
      },
      color: "#E05D57", // Custom background color
      textColor: "#ffffff", // Custom text color
      icon: "💸🍷" // Emoji icon
    },
    "Ubereats": {
      seasons: {
        Masterdogos:{},
        Shugu:{},
        Wendys:{}
      },
      color: "#32CD32", // Custom background color
      textColor: "#ffffff", // Custom text color
      icon: "🛵🍕" // Emoji icon
    },
    "Drinks": {
      seasons: {
        "Once Upon":{},
        Mezcaleria:{},
        "La mexicana":{},
        "Gabba Gabba":{},
        "Don Burro":{},
      },
      color: "#0055B2", // Custom background color
      textColor: "#ffffff", // Custom text color
      icon: "🥂🍾" // Emoji icon
    },
  };
  
  // Get reference to the buttons container and result display
  const buttonsContainer = document.getElementById("buttons-container");
  const resultElement = document.getElementById("result");
  
  // Function to get a random episode for a specific show
  function getRandomEpisode(showName) {
    const { seasons } = tvShows[showName];
    const seasonKeys = Object.keys(seasons);
    const randomSeason = seasonKeys[Math.floor(Math.random() * seasonKeys.length)];
    const { episodes, excluded } = seasons[randomSeason];
  
    // Filter available episodes
    const availableEpisodes = Array.from({ length: episodes }, (_, i) => i + 1).filter(
      (ep) => !excluded.includes(ep)
    );
  
    const randomEpisode = availableEpisodes[Math.floor(Math.random() * availableEpisodes.length)];
    return `${showName}: ${randomSeason}`;
  }
  
  // Function to pick a random show
  function getRandomShow() {
    const showNames = Object.keys(tvShows);
    const randomShow = showNames[Math.floor(Math.random() * showNames.length)];
    return getRandomEpisode(randomShow);
  }
  
  // Dynamically create buttons for each show
  Object.keys(tvShows).forEach((showName) => {
    const { color, textColor, icon } = tvShows[showName];
  
    // Create a button for the show
    const button = document.createElement("button");
    button.style.backgroundColor = color; // Apply custom background color
    button.style.color = textColor; // Apply custom text color
    button.innerHTML = `${showName} <span class="icon">${icon}</span>`; // Add icon and name
  
    // Add click event to the button
    button.addEventListener("click", () => {
      const result = getRandomEpisode(showName);
      resultElement.textContent = result;
    });
  
    // Append the button to the container
    buttonsContainer.appendChild(button);
  });
  
  // Event listener for random show button
  document.getElementById("random-show").addEventListener("click", () => {
    const result = getRandomShow();
    resultElement.textContent = result;
  });
  