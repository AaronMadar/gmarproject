import fs from 'fs'


export function getAllPost(){

 let objcontent:any = fs.readFileSync('../Assets/Data/data.json')

 let jscontent= JSON.parse(objcontent)

 return jscontent


}