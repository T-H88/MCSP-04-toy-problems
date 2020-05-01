// Write a function that takes in an array of numbers and returns the maximum number of consecutive 1s

//maxConsecutiveOnes([1,1,2,0,3,1,1,1,1,5,6,3]) returns 4

function maxConsecutiveOnes(array){
  var count = 0;
  var max = 0;
  for(var i = 0; i < arr.length; i++){
    if(arr[i] == 0)
      count = 0;
    else
      count++;
    max = count > max ? count : max;
  }
  return max;
}
