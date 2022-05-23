const styles = ["Jazz", "Blues"]; // 1
console.log(styles);
// styles.push("Rock-n-Roll"); // 2
// console.log(styles);
// styles.splice(1, 1, "Classics"); // 3
// console.log(styles);
// const firstElement = styles.shift(); // 4
// console.log(firstElement);
// console.log(styles);
// styles.unshift("Rap", "Reggae"); // 2
// console.log(styles);

// function getMaxSubSum(array) {
// const sum = array.reduce((total, num) => (num > 0 ? total + num : total), 0);
// return sum;
// }

function getMaxSubSum(array) {
    const sum = array.reduce((total, num) => {
    if (num > 0) {
    return total + num;
    } else {
    return total;
    }
    }, 0);
    return sum;
    }
    
    const sum = getMaxSubSum(arr);
    console.log(sum);