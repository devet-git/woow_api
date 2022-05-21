import { objectString } from "./src/utils/genString.js"

let obj = { real_name: 'thang', phone_num: '081383', pw: 'asfdfsdfgsdgsdg' }
let a = objectString(obj).genKeys
let b = objectString(obj).genComma
console.log(a, b);