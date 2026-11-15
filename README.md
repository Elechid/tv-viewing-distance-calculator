# Elechid 音立 · TV Viewing Distance Calculator

[繁體中文](README.zh-Hant.md) · [Try the calculator](https://yikshunming-art.github.io/tv-viewing-distance-calculator/) · [Elechid’s Hong Kong TV size calculator](https://elechid.com/en/pages/tv-size-calculator)

A free, open-source TV size calculator from **Elechid 音立**, a Hong Kong TV and home audio retailer. Enter the distance from your seated eye position to the screen to compare three 16:9 screen sizes. Download the files and open `index.html` in a browser for offline use. Calculations run locally and require no API, account, or third-party libraries.

## Example results

| Viewing distance | 30° smaller reference | 35° middle reference | 40° larger reference |
| --- | ---: | ---: | ---: |
| 1.5 m | 40″ | 43″ | 50″ |
| 2.0 m | 50″ | 55″ | 65″ |
| 2.5 m | 65″ | 75″ | 83″ |
| 3.0 m | 75″ | 85″ | 98″ |

At 2.5 m, start by comparing 65″ and 75″ for a Hong Kong living room. A 65″ set gives the smaller reference for everyday viewing, and 75″ is the middle reference for a larger picture. The 83″ result represents the larger 40° reference. Consider window reflections, seating and what you watch before choosing.

## Calculation

For viewing distance `d` in metres and horizontal angle `θ` in degrees:

- Target screen width in cm: `2 × d × 100 × tan(θ × π / 360)`
- Target 16:9 diagonal in inches: `width × √(16² + 9²) / (16 × 2.54)`
- Choose the closest diagonal from 32, 40, 43, 50, 55, 65, 75, 77, 83, 85, 86, 98 and 100 inches. Identical distances to two candidate sizes favour the smaller one.
- Screen width and height use 16:9 geometry. Check the exact product’s overall width, stand spacing, shipping carton and delivery route separately.

The 30°, 35° and 40° values are reference targets shared with Elechid’s website calculator. They give a range of viewing experiences and do not certify a room layout.

## Before buying

- [Compare 65-inch TVs](https://elechid.com/en/collections/65-inch-smart-tv)
- [Compare 75-inch TVs](https://elechid.com/en/collections/75-inch-smart-tv)
- [Measure the lift, stairs and turns](https://elechid.com/en/blogs/news/large-tv-lift-staircase-measurement-hong-kong)

The source code is available under the [MIT License](LICENSE).
