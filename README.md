# Bueller
Choose students at random, form groupings, and ...more?

Used internally by Dev League but can be adapted for any classroom.

## Getting Started
1. Install via `npm` with the command `$ npm install -g bueller`
3. run with the command `Q$ bueller -c [COHORT_NUMBER]`
4. Press the `enter` key to get a random student's name.

Example of running bueller with cohort 4 names:

  ```
  $ bueller -c 4
  ```

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

##License
The MIT License (MIT)

Copyright (c) 2015 Ray Faris

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
