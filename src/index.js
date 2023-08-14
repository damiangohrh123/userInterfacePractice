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
  // Create image array
  const imageArray = [];

  for (let i = 0; i < imageSrc.length; i++) {
    imageArray.push(imageSrc[i]);
  }

  // Create current image number
  let currentImageIndex = 0;

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
  renderImage();

  // Create previous button
  const btnPrevious = document.createElement('img');
  btnPrevious.classList.add('btnPrevious');
  btnPrevious.src = Previous;
  btnPrevious.addEventListener('click', () => {
    if (currentImageIndex > 0) {
      currentImageIndex--;
      renderImage();
    } else {
      currentImageIndex = imageArray.length - 1;
      renderImage();
    }
  });

  // Create next button
  const btnNext = document.createElement('img');
  btnNext.classList.add('btnNext');
  btnNext.src = Next;
  btnNext.addEventListener('click', () => {
    if (currentImageIndex < imageArray.length - 1) {
      currentImageIndex++;
      renderImage();
    } else {
      currentImageIndex = 0;
      renderImage();
    }
  });

  imageCarousellSection.appendChild(btnPrevious);
  imageCarousellSection.appendChild(imageContainer);
  imageCarousellSection.appendChild(btnNext);
  content.appendChild(imageCarousellSection);
};

// Create header content
createHeader('Kingslayer', 'Home', 'News', 'About', 'Contact', 'Settings');

// Create food drop down menu
const foodDropdownMenu = createDropdownContainer(
  'Food List',
  'Pizza',
  'Sushi',
  'Fried Rice',
);
dropdownSection.appendChild(foodDropdownMenu);

// Create item drop down menu
const itemDropdownMenu = createDropdownContainer(
  'Item List',
  'Bowl',
  'Phone',
  'Keyboard',
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
