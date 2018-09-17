///// Problem 1 - Fun with Promises
function flip() {
    var p = new Promise(function (resolve, reject) {
        if (Math.random() > 0.5) {
            resolve();
        }
        else {
        reject();
        }
    });
    return p;
}

//// Add code here that will "flip" the coin ten times and write the 
//// result to the console (e.g. "Heads" or "Tails" for each flip).


for (let i = 0; i < 10; i++) {
    new Promise((resolve, reject) => {
        res = Math.random() > 0.5;
        if (res) resolve();
        else reject();
    }).then(
        () => {console.log("Heads!")}, 
        () => {console.log("Tails!")}
    );
}

///// Problem 2 - More fun...

function countBig(bignum) {
    try {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve()}, bignum);
    });
}
    catch(e) {
        console.log("An error occured...");
    }
}


start = Date.now();
bignum = 10; // Changed value to 10 to shorten wait time
countBig(bignum).then(()=> {
    console.log("It took " + (Date.now() - start) + " ms to count to " + bignum);
}, () => {
    console.log("A problem occurred while trying to count to " + bignum);
})


