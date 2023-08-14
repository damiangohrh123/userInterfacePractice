import './styles/styles.css';

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
