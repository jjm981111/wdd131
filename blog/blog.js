// Array of articles
const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk, this is the book for you.',
		imgSrc: 'magyk.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'magnus.jpg',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐⭐'
	},
    {
		id: 3,
		title: "Harry Potter and the Philosopher's Stone",
		date: 'September 1, 2014',
		description:
			'The hope and wonder of Harry Potter’s world will make you want to escape to Hogwarts again and again.',
		imgSrc:
			'harrypotter.jpg',
		imgAlt: 'Book cover for Harry Potter and the Philosopher\'s Stone',
		ages: '10-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐⭐'
	}
];

// Function to generate and insert articles dynamically
function displayArticles() {
    const container = document.querySelector('#blog-articles'); 

    // Clear existing content in case function is called multiple times
    container.innerHTML = '';

    articles.forEach((item) => {
        let book = document.createElement('article');
        book.classList.add('book');

        // Use a template literal to structure the article dynamically
        let html = `
            <div class="details">
                <em><p>${item.date}</p></em>
                <p>${item.ages}</p>
                <p>${item.genre}</p>
                <p>${item.stars}</p>
            </div>
            <div class="content">
                <h2>${item.title}</h2>
                <img src="${item.imgSrc}" alt="${item.imgAlt}">
                <p>${item.description} <a href="#">Read More...</a></p>
            </div>
        `;

        book.innerHTML = html;
        container.appendChild(book);
    });
}

// Call the function to display articles on page load
document.addEventListener("DOMContentLoaded", displayArticles);
