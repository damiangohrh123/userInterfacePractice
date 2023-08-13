import './styles/styles.css';

// Create content container
const content = document.createElement('div');
content.classList.add('content');
document.body.appendChild(content);

// Create dropdown section
const dropdownSection = document.createElement('div');
dropdownSection.classList.add('dropdownSection');
content.appendChild(dropdownSection);

// Create dropdown factory function
const createDropdownContainer  = (titleName, ...items) => {
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
}

const foodDropdownMenu = createDropdownContainer('Food List', 'Pizza', 'Sushi', 'Fried Rice');
dropdownSection.appendChild(foodDropdownMenu);

const itemDropdownMenu = createDropdownContainer('Item List', 'Bowl', 'Phone', 'Keyboard');
dropdownSection.appendChild(itemDropdownMenu);