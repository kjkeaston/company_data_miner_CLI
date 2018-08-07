const ora = require('ora');
const colors = require('colors/safe');

const employeeRanges = [
  '1-10', 
  '11-50', 
  '51-200', 
  '201-500', 
  '501-1,000', 
  '1,001-5,000', 
  '5,001-10,000', 
  '10,001+'
  ];

function findCompBetweenSize(filePath, commandArg) {
  if (employeeRanges.includes(commandArg)) {
    console.log(colors.yellow('>>>Finding companies with ') + colors.blue.bold(`${commandArg}`) + colors.yellow(' full-time employees...'))
    let companyCounter = 0;
    let tempComps = [];
    console.log(colors.magenta.underline.bold('\tCompany Names:\t\t'))
    const spinner = ora().start();

    var config = require(filePath);
    if(config) {
      config.map((eachComp) => {
        if(eachComp.full_time_employees === commandArg) {
          companyCounter += 1;
          tempComps.push(eachComp.company_name);
        }
      })
      spinner.stop();
      console.log(tempComps.join(colors.magenta(', ')))
      console.log(colors.cyan('\tNumber of Companies: ') + colors.magenta.bold(`${companyCounter}`));
    } 
  } else {
    console.log(colors.red.bold('Error!! Please enter a valid range >>>'));
    console.log(colors.yellow('Valid employee range: ') + colors.cyan(`${employeeRanges}`));
  }
}

module.exports = findCompBetweenSize;
