export default function getToken(string) {
   return string.replace(/^Bearer/, "")
}