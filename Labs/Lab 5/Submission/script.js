// Get the h1 tag at the begininning and change its text
const h1Tag = document.querySelector('.title');
h1Tag.textContent = 'Hi, I changed this text with JavaScript!';

// Change the description tag to my name
const descriptionTag = document.querySelector('#description');
descriptionTag.textContent = 'Josh Seligman';

// Change the text to be nicer
const bossyTag = document.querySelector('#bossy');
bossyTag.textContent = 'Can you please complete these tasks? Thank you!';

// Get all of the li elements and make the appropriate changes
const listItems = document.querySelectorAll('li');
listItems[0].style.color = 'blue';
listItems[1].style.backgroundColor = '#FFFDD0';
document.body.style.backgroundColor = 'gray';
listItems[3].style.textTransform = 'uppercase';
listItems[4].classList.add('title');