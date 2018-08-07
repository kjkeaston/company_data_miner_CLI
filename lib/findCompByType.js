const ora = require('ora');
const colors = require('colors/safe');

const companyCategory = [
  `N/A`, 
  'Aerospace and Defense',
  'Business & Legal Services',
  'Data/Technology',
  'Education',
  'Energy',
  'Environment & Weather',
  'Finance & Investment',
  'Food & Agriculture',
  'Geospatial/Mapping',
  'Governance',
  'Healthcare',
  'Housing/Real Estate',
  'Insurance',
  'Lifestyle & Consumer',
  'Media',
  'Research & Consulting',
  'Scientific Research',
  'Transportation'
  ];

function findCompByType(filePath, commandArg) {
  if (companyCategory.includes(commandArg)) {
    console.log(colors.yellow('>>>Finding companies from the ') + colors.blue.bold(`${commandArg}`) + colors.yellow(' sector...'))
    let companyCounter = 0;
    let tempComps = [];
    console.log(colors.magenta.underline.bold('\tCompany Names:\t\t'))
    const spinner = ora().start();

    var config = require(filePath);
    if(config) {
      config.map((eachComp) => {
        if(eachComp.company_category === commandArg) {
          companyCounter += 1;
          tempComps.push(eachComp.company_name);
        }
      })
      spinner.stop();
      console.log(tempComps.join(colors.magenta(', ')))
      console.log(colors.cyan('\tNumber of Companies: ') + colors.magenta.bold(`${companyCounter}`));
    } 
  } else {
    console.log(colors.red.bold('Error!! Please enter a valid industry >>>'));
    console.log(colors.magenta('Use quotes around multi-word searches -> ') + colors.blue.bold('"Lifestyle & Consumer"'))
    console.log(colors.yellow('Valid industry options: ') + colors.cyan(`${companyCategory}`));
  }
}

module.exports = findCompByType;
