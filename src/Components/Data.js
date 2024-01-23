import React, { Component } from "react";
import Movie from "./Components/Movie";

export default class MovieList extends Component {
  render() {
    // using let for each movie, having an image, the tile, what it is about, the year, rating and time'
    let movieOne = {
      image:
        "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9276475_p_v8_ax.jpg",
      title: "Pitch Perfect ",
      about:
        "Becca, a freshman at Barden University, is cajoled into joining The Bellas, her school's all-girls singing group. Injecting some much needed energy into their repertoire, The Bellas take on their male rivals in a campus competition.",
      year: "2012",
      rating: "PG-13",
      length: "1h 52min",
    };

    let movieTwo = {
      image:
        "https://m.media-amazon.com/images/M/MV5BMjE2NDkxNTY2M15BMl5BanBnXkFtZTgwMDc2NzE0MTI@.https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhXf6t0ai0Pd8FAyLaYQ8wQYam5UI_LRYUjA&usqp=CAU_V1_.jpg",
      title: "Other Women",
      about:
        "After discovering that her boyfriend is married, Carly meets the wife he's been betraying; when yet another affair is discovered, all three women team up to plot revenge on the three-timing S.O.B.ound by an inescapable blood debt to the Italian crime lord, Santino D'Antonio, and with his precious 1969 Mustang still stolen, John Wick--the taciturn and pitiless assassin who thirsts for seclusion--is forced to visit Italy to honour his promise. But, soon, the Bogeyman will find himself dragged into an impossible task in the heart of Rome's secret criminal society, as every killer in the business dreams of cornering the legendary Wick who now has an enormous price on his head. Drenched in blood and mercilessly hunted down, John Wick can surely forget a peaceful retirement as no one can make it out in one piece. —Nick Riganas",
      year: "2014",
      rating: "PG-13",
      length: "1h 49min",
    };
    let movieThree = {
      image:
        "https://image.tmdb.org/t/p/original/jeNTqOnhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKwf0-NdcyYpiDBjQIykz8_3_uJZXtfR-OZA&usqp=CAUux7KSulznSh4UdiDlfmV.jpg",
      title: "13 Going on 30",
      about:
        "Unpopular schoolgirl Jenna Rink makes an unusual wish on her birthday. Miraculously, her wish comes true and the 13-year-old Jenna wakes up the next day as a 30-year-old woman.drenaline-fueled action franchise, skilled assassin John Wick (Keanu Reeves) returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin's guild, the High Table, John Wick is excommunicado, but the world's most ruthless hit men and women await his every turn. -IMDB",
      year: "2004",
      rating: "PG-13",
      length: "1h 38in",
    };
    return (
      // This code is render movie components from the list, displayed in row with bootstrap and given the movie class
      <>
        <div className="row">
          <div className="col-lg-12">
            {/* Render Movie component for movieOne */}
            <Movie {...movieOne} />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            {/* Render Movie component for movieTwo */}
            <Movie {...movieTwo} />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            {/* Render Movie component for movieThree */}
            <Movie {...movieThree} />
          </div>
        </div>
      </>
    );
  }
}
