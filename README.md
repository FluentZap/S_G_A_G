# <span style="color:red">S</span>\_<span style="color:yellow">G</span>\_<span style="color:green">A</span>_<span style="color:blue">G</span> <span style=" background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red); -webkit-background-clip: text; color: transparent;">Super Galactic Age Generator</span>

A tool for determining your age if you were living on another celestial body

## Code Specs

### Current age on celestial body
| Story | Input | Output |
|-|-|-|
| User inputs age in 'years on earth' and gets current age in 'years on Mercury' | (20), ("Mercury") | 4 |
| User inputs age in 'years on earth' and gets current age in 'years on Venus' | (20), ("Venus") | 12 |
| User inputs age in 'years on earth' and gets current age in 'years on Mars' | (20), ("Mars") |  37 |
| User inputs age in 'years on earth' and gets current age in 'years on Jupiter' | (20), ("Jupiter") | 237 |

### Assuming the date is September 1 2045 UTC
| Story | Input | Output |
|-|-|-|
| User inputs age as birthday and gets current age in 'years on Mars' | ("July 1 2020 UTC"), ("Mars") | 47 |

The life expectancy function is based on the year of birth and will change depending on the time the test is run.
The current Date is overwritten in the tests for the purpose of testing.
Anybody born before 1900 will have a life expectancy of 47 years.
Anyone born after 2014 will have a life expectancy of 80 years.
If the current date is before the person is born there life expectancy will be limited to the maximum life expectancy based on the year they were born.

### Assuming the date is July 1st 2010 UTC
| Story | Input | Output |
|-|-|-|
| User inputs age as birthday and gets current life expectancy in 'years on Earth' | ("March 15 1952 UTC") | 10 |
| User inputs age as birthday and gets 'years on Earth' as a default | "March 15 1952 UTC" | 10 |
| User inputs age as birthday and gets current life expectancy in 'years on Mars' | "March 15 1952 UTC", "Mars" | 18 |
| User inputs age as birthday born after 2014 and in the future and gets current life expectancy of 80 | "March 15 2020 UTC" | 80 |
| User inputs age as birthday born before 1900 and has lived past current life expectancy and returns how much past life expectancy the person has lived in a negative number | "March 15 1850 UTC" | -113 |

## Setup

To run you will need access to `npm` (Node Project Manager)

1. Use `git` to clone the repository:

   ```bash
    $ git clone https://github.com/FluentZap/S_G_A_G.git
   ```

2. Navigate to the installed directory and tell NPM to install required packages:

   ```bash
    $ cd S_G_A_G
    $ npm install
   ```

2. Run the project tests with `jest`:

   ```bash
    $ npm test
   ```
