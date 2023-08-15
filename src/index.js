import './styles/styles.css';

// Import image src
import Bulbasaur from './images/bulbasaur.png';
import Ivysaur from './images/ivysaur.png';
import Venusaur from './images/venusaur.png';
import Charmander from './images/charmander.png';
import Charmeleon from './images/charmeleon.png';
import Charizard from './images/charizard.png';
import Squirtle from './images/squirtle.png';
import Wartortle from './images/wartortle.png';
import Blastoise from './images/blastoise.png';
import Next from './images/chevron-right.svg';
import Previous from './images/chevron-left.svg';

// Create content container
const content = document.createElement('div');
content.classList.add('content');
document.body.appendChild(content);

// Create dropdown section
const dropdownSection = document.createElement('div');
dropdownSection.classList.add('dropdownSection');
content.appendChild(dropdownSection);

// Create header section
const headerContainer = document.createElement('div');
headerContainer.classList.add('headerContainer');

// Create image carousell section
const imageCarousellSection = document.createElement('div');
imageCarousellSection.classList.add('imageCarousellSection');

// Create header factory function
const createHeader = (titleName, ...items) => {
  // Create header title
  const title = document.createElement('h1');
  title.classList.add('headerTitle');
  title.textContent = titleName;

  // Create ul container
  const headerList = document.createElement('ul');
  headerList.classList.add('headerList');

  // Create li items
  for (let i = 0; i < items.length; i++) {
    const headerListItem = document.createElement('li');
    headerListItem.classList.add('headerItems');
    headerListItem.textContent = items[i];
    headerList.appendChild(headerListItem);
  }

  headerContainer.appendChild(title);
  headerContainer.appendChild(headerList);
  content.appendChild(headerContainer);
};

// Create dropdown factory function
const createDropdownContainer = (titleName, ...items) => {
  // Create dropdown Container
  const dropdownContainer = document.createElement('div');
  dropdownContainer.classList.add('dropdownContainer');

  // Create title
  const title = document.createElement('p');
  title.classList.add('dropdownTitle');
  title.textContent = titleName;

  // Create ul
  const list = document.createElement('ul');
  list.classList.add('list', 'listHidden');

  // Toggle the ul on and off
  title.addEventListener('click', () => {
    list.classList.toggle('listHidden');
    title.classList.toggle('dropdownTitleClicked');
  });

  // Create li items
  for (let i = 0; i < items.length; i++) {
    const listItem = document.createElement('li');
    listItem.classList.add('listItems');
    listItem.textContent = items[i];
    list.appendChild(listItem);
  }

  dropdownContainer.appendChild(title);
  dropdownContainer.appendChild(list);

  return dropdownContainer;
};

// Creat image carousell factory function
const createImageCarousell = (...imageSrc) => {
  // Create image carousell container
  const imageCarousellContainer = document.createElement('div');
  imageCarousellContainer.classList.add('imageCarousellContainer');

  // Create image array
  const imageArray = [];

  // Create navigation dot array
  const navigationContainer = document.createElement('div');
  navigationContainer.classList.add('navigationContainer');

  // Push arguments into imageArray
  for (let i = 0; i < imageSrc.length; i++) {
    imageArray.push(imageSrc[i]);
  }

  // Create current image number
  let currentImageIndex = 0;

  // Declare auto scroll interval
  let autoScrollInterval;

  // Create Image container
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('imageContainer');

  // Render image function
  const renderImage = () => {
    imageContainer.textContent = '';
    const renderedImage = document.createElement('img');
    renderedImage.src = imageArray[currentImageIndex];
    imageContainer.appendChild(renderedImage);
  };

  // Render navigation dots
  const renderNavigation = () => {
    navigationContainer.textContent = '';

    // Create navigation dots
    for (let i = 0; i < imageArray.length; i++) {
      const navDot = document.createElement('div');
      navDot.classList.add('navDot');

      // Set the current image equal to the current dot
      if (i === currentImageIndex) {
        navDot.classList.add('activeNavDot');
      }

      navDot.addEventListener('click', (event) => {
        const targetId = event.target.id;
        currentImageIndex = parseInt(targetId);
        renderImage();
        renderNavigation();
        stopAutoScroll();
        startAutoScroll();
      });

      navDot.setAttribute('id', i);
      navigationContainer.appendChild(navDot);
    }
  };

  // Create auto scroll function
  const autoScroll = () => {
    if (currentImageIndex < imageArray.length - 1) {
      currentImageIndex++;
    } else {
      currentImageIndex = 0;
    }
    renderImage();
    renderNavigation();
  };

  // Create start auto scroll function
  const startAutoScroll = () => {
    autoScrollInterval = setInterval(autoScroll, 5000);
  };

  // Create stop auto scroll function
  const stopAutoScroll = () => {
    clearInterval(autoScrollInterval);
  };

  // Create previous button
  const btnPrevious = document.createElement('img');
  btnPrevious.classList.add('btnPrevious');
  btnPrevious.src = Previous;
  btnPrevious.addEventListener('click', () => {
    if (currentImageIndex > 0) {
      currentImageIndex--;
    } else {
      currentImageIndex = imageArray.length - 1;
    }
    renderImage();
    renderNavigation();
    stopAutoScroll();
    startAutoScroll();
  });

  // Create next button
  const btnNext = document.createElement('img');
  btnNext.classList.add('btnNext');
  btnNext.src = Next;
  btnNext.addEventListener('click', () => {
    if (currentImageIndex < imageArray.length - 1) {
      currentImageIndex++;
    } else {
      currentImageIndex = 0;
    }
    renderImage();
    renderNavigation();
    stopAutoScroll();
    startAutoScroll();
  });

  imageCarousellContainer.appendChild(btnPrevious);
  imageCarousellContainer.appendChild(imageContainer);
  imageCarousellContainer.appendChild(btnNext);
  imageCarousellContainer.appendChild(navigationContainer);
  imageCarousellSection.appendChild(imageCarousellContainer);
  content.appendChild(imageCarousellSection);

  // Initial render and start auto scroll
  renderImage();
  startAutoScroll();
  renderNavigation();
};

// Create header content
createHeader('Pokemon', 'Home', 'News', 'About', 'Contact', 'Settings');

// Create food drop down menu
const foodDropdownMenu = createDropdownContainer(
  'Generations',
  'Pokémon Gold, Silver, and Crystal',
  'Pokémon Ruby and Sapphire and Pokémon Emerald',
  'Pokémon Diamond and Pearl and Pokémon Platinum',
  'Pokémon Black and White',
  'Pokémon X and Y',
  'Pokémon Sun and Moon',
  'Pokémon Sword and Shield',
  'Pokémon Scarlet and Violet',
);
dropdownSection.appendChild(foodDropdownMenu);

// Create item drop down menu
const itemDropdownMenu = createDropdownContainer(
  'Regions',
  'Kanto',
  'Johto',
  'Hoenn',
  'Unova/Einall',
  'Kalos',
  'Alola',
  'Galar',
  'Paldea',
);
dropdownSection.appendChild(itemDropdownMenu);

createImageCarousell(
  Bulbasaur,
  Ivysaur,
  Venusaur,
  Charmander,
  Charmeleon,
  Charizard,
  Squirtle,
  Wartortle,
  Blastoise,
);
