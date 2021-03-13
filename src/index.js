
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let str = '';
    if (typeof matrix != 'undefined'){
      for (let i = 0; i < matrix.length; i++){
        if (i % 2 == 0) str += matrix[i].join() + ',';
          else str += matrix[i].reverse().join() + ',';
        }
        console.log(str)
    }
    arr = str.split(",");
    arr.splice(arr.length - 1, 1);
     for (let i = 0; i < arr.length; i++){
         arr[i] = Number(arr[i]);
     }
    return arr;
}
