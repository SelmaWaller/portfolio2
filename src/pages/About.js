import React from 'react';
import ContentWave from './../components/page-title';

function About() {
  return (
    <>
      <ContentWave
        header={'about me'}
        subheader={'why i became a frontend developer'}
      />
      <div className="content">
        <div className="title">
          <h2>Selma Waller</h2>
        </div>
        <div className="aboutMe">
          <p>
            I grew up all the way south of Norway in Kristiansand, which in my
            best way to describe it is like a city of canadians to the rest of
            the norwegian population.
          </p>
          <p>
            At the age of 16 I moved to a small town near Oslo, where I spent my
            next 6 years trying to figure out what I wanted to do with my life.
            I went to a handful of different high schools and moved around a
            lot, needless to say it took me a while to find my passion.
          </p>
          <p>
            So how did I go from working on becoming a car mechanic to suddenly
            fall so hard for programming? I was playing video games, which is a
            great hobby of mine, when it hit me that people actually make these
            games for a living. Thinking I should probably start with something
            easier than math equations consisting of close to zero digits, I
            paused the game and sent my application to the school I’m now soon
            to be graduating from.
          </p>
          <p>
            I wouln’t have imagined being satisfied before having a degree in
            game development, but neither would I’d thought I could find my
            passion without having to hunt it down. Happy !ending!
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
