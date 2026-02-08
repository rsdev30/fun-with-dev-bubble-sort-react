# fun-with-dev-bubble-sort-react

Practice implementing bubble sort with react.

## Informal High Level Steps for bubble sort

 1. Set N elements of the array
 2. Loop through array with an upper bound of n - 1 for the outer loop
 3. Inner loop with an upper bound of n - i -1 that iterates per i of the outer loop
 4. In the inner loop check a[j] > a[j + 1], if so swap them and set swapped = true
 5. if swap = false break out of the inner loop
 6. Continue until we have reached the end
