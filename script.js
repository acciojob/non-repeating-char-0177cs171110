function firstNonRepeatedChar(str) {
 // Write your code here
	const charMap = new Map();
  
    // Iterate through the string to populate the map
    for (let char of str) {
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }
  
    // Iterate through the string again to find the first non-repeated character
    for (let char of str) {
        if (charMap.get(char) === 1) {
            return char;
        }
    }
  
    // If no non-repeated character is found, return null
    return null; 
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
