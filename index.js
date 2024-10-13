/**
 * Insertion Sort Pseudocode
 * -------------------------
 * Start by picking the second element in the array
 * Now compare the seccond element with the one before
 * it and swap if necessary
 * Continue to the next element and if it's in the incorrect
 * order, iterate thr' the sorted portion(i.e. the left
 * side) to place the element in the correct place
 * Repeat Until the array is sorted
 *
 */

function insertionSort(arr) {
  /*
  Steps:
  start from next element
  get the value of current element
  loop thr inner element backward to see if that element is 
  greater than value element, accordingly, 
  place that element next to its index
  Note: we havent replaced the actual element yet
  Once the element is looped over,
  assign the current element to j+1 th element as the element would
  have stopped one before
  */
  for (let i = 1; i < arr.length; i++) {
    let value = arr[i];
    let j = i - 1;
    //loop while arr[j] > value
    while (j >= 0 && arr[j] > value) {
      //move the pointer index by one to the next as j is traversing backwards to hold the current
      arr[j + 1] = arr[j];
      j--; //j is backward traversing
    }
    //place the current element in j+1 th index which was traversing backwards and stops just on the smallest one
    //so we have to increment j again by one to place it next
    arr[j + 1] = value;
  }
  return arr;
}

console.log(insertionSort([2, 1, 4, 7, 66, 22, 44]));
