// function huiswerkMaken(vak, callback) {
//   console.log(`Ok, ok, ik ga nu mijn ${vak} maken`);
//   setTimeout(function(){callback();
// }, 10000);

// function klaarMetHuiswerk() {
//   console.log('Kijk Paps/Mams, ik ben klaar met mijn huiswerk!');
// }

// huiswerkMaken("wiskunde", klaarMetHuiswerk);

huiswerkMaken = (vak, callback) => {
  console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
  setTimeout(function() {
    callback();
  }, 10000);
};
klaarMetHuiswerk = () => {
  console.log('Kijk Paps/Mams, ik ben klaar met mijn huiswerk!');
};
huiswerkMaken('wiskunde', klaarMetHuiswerk);

// Solution by Winc:
// huiswerkMaken = (vak, callback) => {
//   console.log('Ok, ok, ik ga nu mijn ' + `${vak}` + ' ' + 'huiswerk maken');
//   setTimeout(function() {
//     callback();
//   }, 10000);
// };
// klaarMetHuiswerk = () => {
//   console.log('Kijk Paps/Mams, ik ben klaar met mijn huiswerk!');
// };
// huiswerkMaken('wiskunde', klaarMetHuiswerk);
