// 9countDown.js

// Functions
function countDown(num) {
    for (var i = num; i >= 0; i--) {
        (function(index) {
            setTimeout(function() {console.log(num-index)}, 1000*i+1000);
        }(i))
    }
}



// Testing
countDown(5)