export const responseFormat = {
   /** 
  * @param {*} data 
  * @returns Object
  */
   success: (data) => {
      return { success: true, statusCode: 200, data }
   },
   /** 
  * @param {number} statusCode 
  * @param {*} erorr 
  * @returns Object
  */
   error: (statusCode, error = null) => {
      return { success: false, statusCode, error }
   }
}
