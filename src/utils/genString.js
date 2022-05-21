/**
 * 
 * @param {Object} object 
 * @returns {Object} genKeys --> return a string of object keys. genComma --> returns a string of commas depending on the number of the object's keys
 */
export function objectString(object) {
   let keys = Object.keys(object)
   let commas = []

   for (let i = 0; i < keys.length; i++) { commas.push('?') }
   return {
      genKeys: keys.toString(),
      genCommas: commas.toString()
   }
}
