/**
 * Function takes a num as parameter and return a random num between 0 and the limit 
 * @param {number} limit - Num representin the limit of the random number.
 */
export const randomNum = (limit) => { 
    return Math.floor(Math.random() * limit)
 }