// 9countDown.js

// Functions
function countDown(num) {
    const fixNum = num;
    for (let i = num; i >= 0; i--) {
        setTimeout(function() {console.log(fixNum - i)}, i*1000);
        num = num - 1; 
    }
}



// Testing
countDown(25)