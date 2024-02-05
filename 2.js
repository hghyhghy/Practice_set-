function removeElement(arr, val) {
    let i = 0; // Pointer for elements to keep
    let j = 0; // Pointer for iterating through the array
  
    while (j < arr.length) {
      if (arr[j] !== val) {
        // If the current element is not equal to val, keep it
        arr[i] = arr[j];
        i++;
      }
      j++;
    }
  
    // The array from index 0 to i-1 contains elements not equal to val
    return i;
  }
  
  // Example usage:
  const nums = [3, 2, 2, 3];
  const val = 3;
  
  const result = removeElement(nums, val);
  console.log(result); // Output: 2
  console.log(nums.slice(0, result)); // Output: [2, 2]
  