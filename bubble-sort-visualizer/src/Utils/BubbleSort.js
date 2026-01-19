// BubbleSort.js
//Author: funwithdev.com
//Description: This is a practice util function in a react test app to visualize the bubble sort algorithm.
//The star marks this function as a generator which means we can use the yield keyword inside it which will return the results one at a time.
export function* bubbleSort(array) {
  const arr = array.slice();
  const n = arr.length;
  
  //out loop with an upper bound of N - 1
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    //inner loop with an upper bound of N - i - 1}
    for (let j = 0; j < n - i - 1; j++) {
        //Since this is a generator function we want to show the comparison 
        yield { array: [...arr], comparing: [j, j + 1]};

        //Compare the adjacent elements,  example: 5, 4, 1   a[0]=5, a[1]=4 
        if(arr[j] > arr[j + 1]) {
            //Swap because the current element is greater than the next element
            [arr[j], arr[j +1]] = [arr[j + 1], arr[j]];
            swapped = true;

            //Show the swap which would show, 4,5,1 just as an example
            yield { array: [...arr], swapped: [j, j+1] };
        }
    }
    
    if(swapped === false)break;

  }
  yield { array: [...arr], done: true};
}