import { Sorter } from "./interfaces";
const fs = require("fs");
export class DefaultSorter implements Sorter {
  timed_sort(array: number[]): { array: number[]; milliseconds: number } {
    let start = Date.now();
    let temp = this.sort(array);
    let end = Date.now();
    return { array: temp, milliseconds: end - start };
  }
  sort(array: number[]): number[] {

    return (array.sort())

  }
  shuffle(array: number[]): number[] {
    // https://stackoverflow.com/a/2450976
    let currentIndex = array.length;
    let randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
}

export class DefaultSorterTimeLogger extends DefaultSorter {
  override timed_sort(array: number[]): {
    array: number[];
    milliseconds: number;
  } {
    let temp = super.timed_sort(array);
    // TODO: log the elapsed time to console

    console.log(temp.milliseconds)

    return temp;
  }
}

export class BubbleSorter extends DefaultSorterTimeLogger {
  //https://rajat-m.medium.com/implement-5-sorting-algorithms-using-javascript-63c5a917e811
  sort(arr: number[]): number[] {
    // TODO: implement bubblesort, check at the link

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j + 1] < arr[j]) {
            // ES6 way of swapping array elements
            [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        }
      }
    }
    
    return arr;
  }
}

export class QuickSorter extends DefaultSorterTimeLogger {
  //https://rajat-m.medium.com/implement-5-sorting-algorithms-using-javascript-63c5a917e811
  sort(arr: number[]): number[] {
    // TODO: implement quicksort, check the link

    function partition(arr: number[], start: number = 0, end: number = arr.length - 1) {
      // Let's choose the pivot to be the arr[start] element
      let pivot = arr[start];
      let swapIdx = start;
  
      for (let i = start + 1; i <= end; i++) {
          if (arr[i] < pivot) {
              swapIdx++;
              // Swap current element with the element at the new pivot index
              [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
          }
      }
    
      // Swap the pivot element with the element at the pivotIndex index
      [arr[swapIdx], arr[start]] = [arr[start], arr[swapIdx]];
    
      // Return the index of the pivot element after swapping
      return swapIdx;
    }
  
  function quickSort(arr: number[], left: number = 0, right: number = arr.length - 1) {
      // Base case is that the left and right pointers don't overlap, after which we'll be left with an array of 1 item
      if (left < right) {
          let pivotIndex = partition(arr, left, right);
        
          // For left subarray, which is everything to the left of the pivot element
          quickSort(arr, left, pivotIndex - 1);
        
          // For the right sub array, which is everything to the right of the pivot element
          quickSort(arr, pivotIndex + 1, right);
      }
      // Return the array, when it's of length 1 i.e, left === right
      return arr;
    }

    return quickSort(arr)
  }
}

// this sorter does the parent sort and also dumps the result to file
export class QuickSorterTimeFileDumper extends QuickSorter {
  override timed_sort(array: number[]): {
    array: number[];
    milliseconds: number;
  } {
    const start = process.hrtime();
    let sortedArray = super.timed_sort(array);
    const end = process.hrtime(start);
    const timeTakenInMilliseconds = Math.round(end[0] * 1000 + end[1] / 1000000);

    const logString = `Time taken to sort ${array.length} elements: ${timeTakenInMilliseconds} ms\n`;

    fs.appendFile("./log2.txt", logString, (err) => {
      if (err) throw err;
      console.log(`Time taken to sort array logged to file.`);
    });

    return sortedArray;
  }
}