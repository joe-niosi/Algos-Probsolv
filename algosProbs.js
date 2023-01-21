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

// 6.
// Check if a string is empty

function isEmptyString(some_string) {
    //isEmptyString("") -> True
    //isEmptryString("The Godfather") -> False
    if (some_string == "") {
        return true
    } else {
        return false
    }
}

console.log(isEmptyString(""));
console.log(isEmptyString("The Godfather"));

// 7. 
// Find the minimum number in an array

function findMin(numbers) {
    // findMin([5,2,9,8,7,2])
    // findMin([5,8,9,8,7,2])
    let minimum = numbers[0];
    for (let i=0; i < numbers.length; i++){
        if (numbers[i] < minimum) {
            minimum = numbers[i]
        }
    }
    return minimum
}

console.log(findMin([5,2,9,8,7,2]));
console.log(findMin([5,8,9,8,7,10]));

// 8.
// Find the maximum number in an array

function findMax(arr) {
    
    let maximum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maximum) {
            maximum = arr[i]
        }
    }
    return maximum
}

console.log(findMax([2,9,6,10,4,5]))
console.log(findMax([2,13,15,2,7,8,9,10]))

//9. 
// Sort an array of numbers greatest to least

function sortHighestNums(arr) {
    // sortHighestNums([5,8,2,9,3,10])

    //finds the max
    for (let j = 0; j < arr.length -1; j++) {

        let max_num = arr[j];
        let max_location = j;

        for (let i = j; i < arr.length; i++) {
            if (arr[i] > max_num) {
                max_num = arr[i]
                max_location = i
            }
        }
        // swap the first and the last
        arr[max_location] = arr[j]
        arr[j] = max_num
}
    return arr 
}

console.log(sortHighestNums([5,8,2,9,3,10]))
console.log(sortHighestNums([11,15,3,8,9,34]))

//10.
//Find max and sort largest with helper functions

function findMaxWithHelper(arr, start) {
    let maximum = arr[start];
    let max_location = start

    for (let i = start; i < arr.length; i++) {
        if (arr[i] > maximum) {
            maximum = arr[i]
            max_location = i
        }
    }
    return {max_number: maximum, max_index: max_location}
}

console.log(findMaxWithHelper([5,2,9,3,7], 3))


function sortHighestNumsWithHelper(arr) {
    // run as many times are there are items
    for (let j = 0; j < arr.length -1; j++) {
        
        // Find the max number and max location starting from j
        max = findMaxWithHelper(arr, j)
        max_num = max['max_number']
        max_location = max['max_index']

        // swap the first and the last item in array
        arr[max_location] = arr[j]
        arr[j] = max_num
}
    return arr 
}


console.log(sortHighestNumsWithHelper([5,8,2,9,3,10]))
console.log(sortHighestNumsWithHelper([13,24,5,9,0,3,2]))