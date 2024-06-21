const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = fruit.filter((f) => { //will now show results using the filter method instead of an empty array.
		return f.toLowerCase().includes(str.toLowerCase()); //converts individual fruit strings to lowercase.
	});
	showSuggestions(results, str); //passes the filtered array + user input to showSuggestions function
};

function searchHandler(e) { //this will call the search function for every "keyup" on the current user input
	search(input.value);
}

function showSuggestions(results, inputVal) { //this function is called by the search function
	const listed = results.map((result) =>{ // using map arrays will give 'results' into new listed array. Then is converted into HTML listed elements containing the fruit strings.
		if(inputVal !== ''){ //only if the input value is not an empty string.
			return "<li>" + result + "</li>"; 
		}
	});
	suggestions.innerHTML = "<ul>" + listed.join('') + "</ul>"; //creating and nesting innerHTML. A <ul> element in the 'suggestions' <div> will contain the entire listed array of <li>'s. Using join to remove any commas.

};
function useSuggestion(e) { //this will handle an event related to choosing a suggestion
	input.value = e.target.innerText; //this changes the target suggested when it is chosen and clicked. that target suggestion replaces the user input
	suggestions.innerHTML = ''; //clears the suggestions after a suggestion is chosen.

}

input.addEventListener('keyup', searchHandler); //lisstens for a key release in the user input field and calls the searchHandler any time the key is released.
suggestions.addEventListener('mouseup', useSuggestion); //listens for a mouse release in the suggestions, which then calls useSuggestion.