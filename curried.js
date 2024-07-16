// 1.Implement a curried function that calculates the volume of a rectangular prism. Then use it to create a partially applied function that calculates the volume for a specific height.

function volume(length) {
  return function (width) {
    return function (height) {
      return length * width * height;
    };
  };
}

const calculateVolume = volume(2)(3);
console.log(calculateVolume(4)); 
console.log(calculateVolume(5)); 
console.log(calculateVolume(6)); 
