// 1.
// Add two numbers
function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addNumbers(2, 5));
console.log(addNumbers(5, 5));
console.log(addNumbers(15, 5));

// 2.
// Converting minutes to seconds
function minsToSeconds(minutes) {
    return minutes * 60;
}

console.log(minsToSeconds(1));
console.log(minsToSeconds(5));

//3.
// Converting your age into seconds
function ageInSeconds(age) {
    return age * 12 * 30 * 24 * 60 * 60; // age * months * days * hours * minutes * seconds
}

console.log(ageInSeconds(25));

// 4. 
// Get the first value in an Array
function getFirstItem(items) {
    return items[0];
}

let movies = ['Backdraft', 'Heat', 'Moana', 'Avatar']

console.log(getFirstItem(movies));

// 5.
//Label something good or bad (i.e. movies)

function badOrGoodMovie(movie_rating) {
    // badOrGoodMovie(6)-> "bad"
    // badOrGoodMovie(7)-> "good"
    // badOrGoodMovie(9.2)-> "good"
    // badOrGoodMovie(2)-> "bad"

    let movie_result;

    if (movie_rating >= 7) {
        movie_result = 'Good Movie'
    } else {
        movie_result = 'Bad Movie'
    }

    return movie_result;
}

console.log(badOrGoodMovie(5));
console.log(badOrGoodMovie(7));
console.log(badOrGoodMovie(9.2));
console.log(badOrGoodMovie(2));