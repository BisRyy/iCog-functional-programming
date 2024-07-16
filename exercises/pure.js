// 2.Write a pure function that takes a nested array and flattens it. Ensure the original array remains unchanged use recursion and functional programming principles.

function flattenArray(arr) {
    return arr.reduce((acc, item) => {
        return acc.concat(Array.isArray(item) ? flattenArray(item) : item);
    }, []);
}

const nestedArray = [1, [2, 4, 5]];
console.log(nestedArray);
console.log(flattenArray(nestedArray));
console.log(nestedArray);
