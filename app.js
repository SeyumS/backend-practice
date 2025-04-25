const fs = require('fs').promises;
const superagent = require('superagent');

(async() => {
  try{
  const pokemon = await superagent.get('https://pokeapi.co/api/v2/pokemon/ditto');
  console.log(pokemon)
  }catch(err){
    console.log(err);
  }
})();

console.log('at the end')

writeInFile = async (file, text) => {
  try{
  await fs.appendFile(file, text); 
  console.log('text written');
  }catch{
    console.log(err.message)
  }
}
const appendix = '...  and this is an appendix'

writeInFile('test.txt', appendix);

(async () => {
  try{
    const text = await fs.readFile('test.txt', 'utf-8');
    console.log(text);
  }catch(err){
  console.log('an error occoured', err.message);
}
})();

