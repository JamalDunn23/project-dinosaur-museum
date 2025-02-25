/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleDinosaurData` variable below to gain access to tickets data. This data is pulled from the `data/dinosaurs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all dinosaurs.
*/
const exampleDinosaurData = require("../data/dinosaurs");
// Do not change the line above.

/**
 * getLongestDinosaur()
 * ---------------------
 * Returns an object with the longest dinosaur from the list. Converts from meters to feet.
 *
 * NOTE: To convert from meters to feet, multiply the meters by `3.281`.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @returns {Object} An object where the key is the name of the dinosaur and the value is the height of the dinosaur in feet.
 *
 * EXAMPLE:
 *  getLongestDinosaur(dinosaurs);
 *  //> { Brachiosaurus: 98.43 }
 */
function getLongestDinosaur(dinosaurs) {
  let longestObj = {};
  let length = 0;
  let dName = "";

  if (!dinosaurs.length) {
    return longestObj;

    // checks the length of dinosaur if there is any value within, if there is not return longestObj which has a value of an empty object.
  }
  for (let dino of dinosaurs) {
    // for of needed to intirate over dinosaurs, so we can manipulate the data.
    if (dino.lengthInMeters > length) {
      // using .notation we check if the length in meters for each dinosaur we itirated over is greater than the length at which point of this program has a value of 0.
      length = dino.lengthInMeters;
      dName = dino.name;
      // we then asign the length in meters and the name of each dinosaur to length and dname.
    }
  }
  longestObj[`${dName}`] = Number(`${length * 3.281}`)
  // within the empty object we are assigning the dinosaurs we are interating over to become keys with the object, while assigning the converted length in feet to the keys value.
  return (longestObj)
  // then return the object.

}

/**
 * getDinosaurDescription()
 * ---------------------
 * Returns a formatted description of a dinosaur. If the dinosaur cannot be found, returns an error message.
 *
 * NOTE: Carefully view the test output and example below to see how the returned string should be formatted.
 *
 * NOTE: The `\n` represents a new line in text.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {string} id - The unique identifier for the dinosaur.
 * @returns {string} A detailed description of the dinosaur.
 *
 * EXAMPLE:
 *  getDinosaurDescription(dinosaurs, "U9vuZmgKwUr");
 *  //> "Xenoceratops (ZEE-no-SEH-ruh-tops)\nXenoceratops had horns and a bony frill with elaborate ornamentation of projections, knobs, and spikes. It lived in the Early Cretaceous period, over 77.5 million years ago."
 *
 *  getDinosaurDescription(dinosaurs, "incorrect-id");
 *  //> "A dinosaur with an ID of 'incorrect-id' cannot be found."
 */
function getDinosaurDescription(dinosaurs, id) {
  let placeHeld = null


  for (let dino of dinosaurs) {
    //for of needed to intirate over dinosaurs, so we can manipulate the data.
    if (dino.dinosaurId === id) {
      placeHeld = dino
    }
    // if Ids within dinosaurs match the ids of what the guest are looking for assign whats in dino to placeHeld.
  }
  if (!placeHeld) {
    return `A dinosaur with an ID of '${id}' cannot be found.`
    //this checks if any value is placed within placeHeld, if there is not we will be left with a message. 
  }
  return `${placeHeld.name} (${placeHeld.pronunciation})\n${placeHeld.info} It lived in the ${placeHeld.period} period, over ${placeHeld.mya[placeHeld.mya.length - 1]} million years ago.`
  //returns a string manipulated by string interlopation to the desired requirments 

}
/**
 * getDinosaursAliveMya()
 * ---------------------
 * Returns an array of dinosaurs who were alive at the given `mya` (i.e. "millions of years ago") value. If a `key` is provided, returns the value of that key for each dinosaur alive at that time. Otherwise, returns the ID.
 *
 * If the dinosaur only has a single value for `mya`, allows for the `mya` value to be equal to the given value or one less. For example, if a dinosaur has a `mya` value of `[29]`, the dinosaur's information will be returned if `29` is entered or `28` is entered.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {number} mya - "Millions of years ago."
 * @param {string} key - An optional parameter. If included, for dinosaurs that lived during the `mya` value given, will return the value of the supplied key. Otherwise, returns the ID.
 * @returns {*[]} An array of values, which depend on the key given. The array should only include data of dinosaurs who lived during the given time period.
 *
 * EXAMPLE:
 *  getDinosaursAliveMya(dinosaurs, 150);
 *  //> ["YLtkN9R37", "GGvO1X9Zeh", "BFjjLjea-O", "V53DvdhV2A"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65);
 *  //> ["WHQcpcOj0G"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "name");
 *  //> ["Dracorex"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "unknown-key");
 *  //> ["WHQcpcOj0G"]
 */
function getDinosaursAliveMya(dinosaurs, mya, key) {
  let dinoArr = [];
  let keyOrId = (key || "dinosaurId");
  //using short circuiting I assigned "key" which is value being passed through by the user or "dinosaurId" 

  for (let dino of dinosaurs) {
    // for let is used to intirate over dinosaurs using dino
    if (!dino[keyOrId]) {
      keyOrId = "dinosaurId";
      // ! in this situation is used to check if there is anything within key from our user if there is not using [] notation if thhere is not the string 'dinosaurId' will be prompted
    }
    if (dino.mya.length === 1 && (mya === (dino.mya[0]) || (mya === dino.mya[0] - 1))) {
      //using the .length method we check to see if dinosaur only has a single value for `mya, and if the mya being passed by users matches the value of mya at position zero with the mya array or if it matches one less than the value of mya 

      dinoArr.push(dino[keyOrId]);
      //places all the keys that match with in the dino array we created. 

    } else if (mya <= dino.mya[0] && mya >= dino.mya[1]) {

      dinoArr.push(dino[keyOrId])
    }
  }
  return dinoArr;
}

module.exports = {
  getLongestDinosaur,
  getDinosaurDescription,
  getDinosaursAliveMya,
};
