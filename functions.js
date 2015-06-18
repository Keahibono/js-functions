/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */
 var numberToString = function (number) {
 	var numStr = number.toString();
 	return numStr;
 }


/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
 var increase = function (number) {
 	number++;
 	return number;
 }


/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
 var decrease = function (number) {
 	number--;
 	return number;
 }


/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
 var add = function (x, y) {
 	var sum = x + y;
 	return sum;
 }


/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
 var subtract = function (x, y) {
 	var diff = x - y;
 	return diff;
 }


/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
var multiply = function (x, y) {
 	var product = x * y;
 	return product;
}

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
var divide = function (x, y) {
	var quotient = x / y;
	return quotient;
}

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
var square = function (x) {
	var product = x * x;
	return product;
}


/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
 var calculate = function (str, x, y){
 	var num;
 	switch (str){
 		case "add":
 			var sum = add(x, y);
 			console.log(x + " + " + y + " = " + sum);
 			num = sum;
 			break;
 		case "subtract":
 			var diff = subtract(x, y);
 			console.log(x + " - " + y + " = " + diff);
 			num = diff;
 			break;
 		case "multiply":
 			var product = multiply(x, y);
 			console.log(x + " * " + y + " = " + product);
 			num = product;
 			break;
 		case "divide":
 			var quotient = divide(x, y);
 			console.log(x + " / " + y + " = " + quotient);
 			num = quotient;
 			break;
 		};
 		return num;
 }


/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
var isGreaterThan = function (x, y) {
	if (x > y) {
		return true;
	} else {
		return false;
	}
}

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
 var isLessThan = function (x, y) {
 	if (x < y) {
 		return true;
 	} else {
		return false;
	}
 }

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
var areEqual = function (x, y) {
 	if (x === y) {
 		return true;
 	} else {
		return false;
	}
 }


/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
var minimum = function(x, y) {
	var smallestNum = x;
	if (y < x) {
		smallestNum = y;
	}
	return smallestNum;
}


/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
 var maximum = function (x, y) {
 	var largestNum = x;
 	if (y > x) {
 		largestNum = y;
 	}
 	return largestNum;
 }


/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
var isEven = function(n) {
 	if (n % 2 === 0) {
 		return true;
 	} else {
 		return false;
 	}
}


/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
var isOdd = function(n) {
 	if (n % 2 === 0) {
 		return false;
 	} else {
 		return true;
 	}
}

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

var letterGrade = function (score, totalScore) {
 	var percentage = score / totalScore;
 	var numGrade = percentage * 100;
 	console.log(numGrade);
 	switch (true){
 		case numGrade > 89.99 && numGrade < 101:
 			return "A";
 			break;
 		case numGrade > 79.99 && numGrade < 90:
 			return "B";
 			break;	
 		case numGrade > 69.99 && numGrade < 80:
 			return "C";
 			break;
 		case numGrade > 59.99 && numGrade < 70:
 			return "D";
 			break;
 		case numGrade < 60:
 			return "F";
 			break;
 	}
}

/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */
var incrementReviews = function (restaurant) {
	if (restaurant.hasOwnProperty("reviews")) {
		restaurant.reviews++;
	} else {
		restaurant.reviews = 1;
	}
	return restaurant;
}

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
var combine = function (word1, word2) {
	var sentArray = [word1, word2];
	var finalSent = sentArray.join(" ");
	return finalSent;
}

/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */
var createCircle = function (radius) {
	var circle = {
		area: Math.PI * square(radius),
		circumference: 2 * radius * Math.PI
	}
	return circle;
}
