# Company Data Miner
A CLI app to query company JSON - I decided to create a CLI app using NodeJS. I went with Node because I am comfortable with JavaScript, and Node allows me to write JS throughout. I used the [colors](https://www.npmjs.com/package/colors) npm package to add nice colors with my `console.logs()` to make the interaction and outputs more legible. I made some assumptions as I built this app including that users will already have general knowledge of how to use the command line. I do not have instructions on accessing the command line for a respective operating system, nor do I provide details about basic UNIX commands. I also assumed users will generally type in commands and search parameters correctly as I do not have fully developed error handling. 

![Terminal Screenshot](/company_miner_CLI.png "Company Miner CLI")

## Setup to Run
* clone repository
* cd into cloned directory
* run `npm install` from within directory to install the required dependencies 
* type `company-miner`, followed by `[file path]`, followed by a supported command, followed by command argument
* **Example** `$ company-miner /Users/kyleeaston/Desktop/company_data.json locate TX`
* Run tests with `npm test`

## Supported Commands
* **locate** - find companies based on state
* **find_before** - find companies founded before a certain year
* **find_after** - find companies founded after a certain year
* **find_companies_between_size** - find companies based on number of full-time employees
* **find_type** - find companies based on their industry/sector
* **--help** - pull up a help menu

## Example Input/Output
1. **Input** with *locate*
```
$ company-miner /Users/kyleeaston/Desktop/company_data.json locate IN
```

**Output**
```
>>>Finding companies located in IN...
Company Names:		
American Red Ball Movers, Atlas Van Lines, Bekins, Lilly Open Innovation Drug Discovery
Number of Companies: 4
```

2. **Input** with *find_before*
```
$ company-miner /Users/kyleeaston/Desktop/company_data.json find_before 1800
```

**Output**
```
>>>Finding companies founded in and before 1800...
Company Names:		
J.P. Morgan Chase, Marlin Alter and Associates
Number of Companies: 2
```

3. **Input** with *find_after*
```
$ company-miner /Users/kyleeaston/Desktop/company_data.json find_after 2013
```

**Output**
```
>>>Finding companies founded in and after 2013...
Company Names:		
48 Factoring Inc., Amida Technology Solutions, BaleFire Global, Boundless,...
Number of Companies: 21
```

4. **Input** with *find_companies_between_size*
```
$ company-miner /Users/kyleeaston/Desktop/company_data.json find_companies_between_size 10,001+
```

**Output**
```
>>>Finding companies with 10,001+ full-time employees...
Company Names:		
Accenture, Adobe Digital Government, Allianz, AllState Insurance Group, Bing,...
Number of Companies: 37
```

5. **Input** with *find_type*
```
$ company-miner /Users/kyleeaston/Desktop/company_data.json find_type Education
```

**Output**
```
>>>Finding companies from the Education sector...
Company Names:		
Alltuition, BetterLesson, Cappex, College Board, ConnectEDU, eScholar LLC.,...
Number of Companies: 10
```

## Dependencies
* [colors](https://www.npmjs.com/package/colors)
* [ora](https://www.npmjs.com/package/ora)
* [jasmine](https://www.npmjs.com/package/jasmine)

## Areas for Improvement
* Better error handling - I handle some incorrect inputs for company size, industry, and lowercase state entry, but I feel it is still lacking. I need better handling across all the commands to better account for incorrect user entry.
* More robust test suite - I have some basic unit tests, but it is not encompassing of all areas and things that could go wrong. Good Ole time constraints...
* Improved formatting on output - while the colors and indentation do help, I think there is room for improvement here. Especially when the query returns a larger number of company names.
