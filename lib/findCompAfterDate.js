const ora = require('ora');
const colors = require('colors/safe');

function findCompAfterDate(filePath, commandArg) {
  console.log(colors.yellow('>>>Finding companies founded in and after ') + colors.blue.bold(`${commandArg}`) + colors.yellow('...'))
  let companyCounter = 0;
  let tempComps = [];
  console.log(colors.magenta.underline.bold('\tCompany Names:\t\t'))
  const spinner = ora().start();

  var config = require(filePath);
  if(config) {
    config.map((eachComp) => {
      if(eachComp.year_founded >= commandArg) {
        companyCounter += 1;
        tempComps.push(eachComp.company_name);
      }
    })
  }
  spinner.stop();
  console.log(tempComps.join(colors.magenta(', ')))
  console.log(colors.cyan('\tNumber of Companies: ') + colors.magenta.bold(`${companyCounter}`));
}

module.exports = findCompAfterDate;
