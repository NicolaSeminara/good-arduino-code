Simon is a simple electronic memory game: the user has to repeat a growing sequence of
colors. The sequence is displayed by lighting up the LEDs. Each color also has a
corresponding tone.

In each turn, the game will play the sequence, and then wait for the user to repeat
the sequence by pressing the buttons according to the color sequence. If the user
repeated the sequence correctly, the game will play a "leveling-up" sound, add a new
color at the end of the sequence, and move to the next turn.

The game continues until the user has made a mistake. Then a game over sound is
played, and the game restarts.

### Hardware

| Item             | Quantity | Notes                        |
| ---------------- | -------- | ---------------------------- |
| Arduino Uno R3   | 1        |                              |
| 5mm LED          | 4        | Red, Green, Blue, and Yellow |
| 12mm Push button | 4        | Red, Green, Blue, and Yellow |
| Resistor         | 4        | 220Ω                         |
| Piezo Buzzer     | 1        |                              |

### Diagram

<figure>
    <img src="images/diagram.png" alt="diagram" style="max-width: 628px" />
    <figcaption>Simon connection diagram</figcaption>
</figure>