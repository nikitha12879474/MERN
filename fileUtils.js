import fs from 'fs';
export function readData(filename){
    const data = fs.readFileSync (filename ,'utf8');
    console.log(data);

}
export function saveData(filename, content) {
    fs.writeFileSync(filename, content);
    console.log('file written');

}
export function logAction(filename, content) {
    fs.appendFileSync(filename, content +'\n');
    console.log('log updated');

}
export default function greet() {
    console.log('fileUtils module loaded');
}