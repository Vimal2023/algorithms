function selectionSort(arr) {
    const len = arr.length;
    
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swapping the found minimum element with the first element
        if (minIndex !== i) {
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    
    return arr;
}

// Taking the Example to run the upper whole function
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = selectionSort(unsortedArray);
console.log("Sorted array:", sortedArray);
