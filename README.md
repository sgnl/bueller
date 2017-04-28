# Bueller
Choose students at a randomly fair rate.

## Getting started with Dev League cohort names
1. Install via `npm` with the command `$ npm install -g bueller`
1. Run with the command `$ bueller -c [COHORT_NUMBER]`
1. Press the `enter` key to get a random student's name.

Example of running bueller with cohort 4 names:

  ```
  $ bueller -c 4
  ```

By default, bueller looks for a file located in the `cohorts/` directory and a `.json`
file. e.g. `$ bueller -c 4` will look for a file at this path: `cohorts/4.json`

## Getting started with your own list of students
1. Install via `npm` with the command `$ npm install -g bueller`
2. use the `-f` flag to pass a path to bueller, e.g. `$ bueller -f ../../path/to/file/of/students.json`

File **must** be in json format. Look in the `cohorts` directory of this repository for the internal format of the json file.

## Features
Bueller started out as fully `Math.random` then Owen implemented mean reverting algorithm
so that students would get chosen at an equal rate.

You can configure the degree of variance, by default the value is `2` which means that
there may be a slight chance of seeing a student's more than once in a set.

A degree of:
  - `0` each student should be called before repeating a name
  - `10` totally random

To change the degree of variance, use the `-d` flag:

  ```
  $ bueller -c 10 -d 7
  ```


## [See it in action by Owen Yang](http://owen28299.github.io/meanRevertingBeuller/)

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request from your feature branch :D

## Contributers:
  *[Ray Faris](https://github.com/sgnl/)

  *[Joe Carlson](http://www.callmejoe.net/)

  *[Owen Yang](https://github.com/owen28299/)

## License
The MIT License (MIT)
