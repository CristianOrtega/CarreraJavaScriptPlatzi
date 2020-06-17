/*
* !6 = 6 * 5 * 4 * 3 * 2 * 1 = 720
* !12 = 12 * 11 * 10 * 9 * 8 * 7 * !6
*
*
*/

function factorial(number) {
    
    if(!this.cache) {
        this.cache = {};
    }

    if (this.cache[number]) {
        return this.cache[number];
    }
    
    if (number === 1) {
        return 1;
    }

    this.cache[number] = number * factorial(number - 1);
    return this.cache[number];
}