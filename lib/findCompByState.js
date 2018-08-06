const fetch = require('node-fetch');
const ora = require('ora');
const colors = require('colors/safe');

function findCompByState(args) {
  let argsUpper = args.toUpperCase();
  console.log(colors.yellow('>>>Finding companies located in ') + colors.blue.bold.underline(`${argsUpper}`) + colors.yellow('...'))
  let companyCounter = 0;
  let tempComps = [];
  console.log(colors.magenta.underline.bold('\tCompany Names:\t\t'))
  const spinner = ora().start();

  fetch('https://s3-us-west-2.amazonaws.com/bain-coding-challenge/data.json')
  .then(function(res) {
    return res.json();
  })
  .then(function(allCompanies) {
    allCompanies.map((eachComp) => {
      if(eachComp.state === argsUpper) {
        companyCounter += 1;
        tempComps.push(eachComp.company_name);
      }
    })
    spinner.stop();
    console.log(tempComps.join(colors.magenta(', ')))
    console.log(colors.cyan('\tNumber of Companies: ') + colors.magenta.bold(`${companyCounter}`));
  });
}

module.exports = findCompByState;
