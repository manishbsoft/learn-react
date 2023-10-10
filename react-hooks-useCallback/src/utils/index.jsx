
/**
 * This algorithm works by iterating over the array from 
 * the last element to the first, swapping each element 
 * with an element before it.
 */
export const shuffle = (array) => {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
    }
    // console.log('shuffled->', shuffled)
    return shuffled;
};