import React from "react";
import ReactTypingEffect from "react-typing-effect";

import MyProfileImage from "../Image/MyImage.png";
function Home() {
  return (
    <>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <img
            src={MyProfileImage}
            alt="ProfileImage"
            className="rounded-full mx-auto"
          />
          <br />

          <ReactTypingEffect
            text={["Hello.", "I am Champ.", "I am Software Developer."]}
            typingDelay={300}
            eraseDelay={2500}
            cursorRenderer={(cursor) => <h1 className="text-3xl">{cursor}</h1>}
            displayTextRenderer={(text, i) => {
              return (
                <h1>
                  {text.split("").map((char, i) => {
                    const key = `${i}`;
                    return (
                      <span className="text-3xl" key={key}>
                        {char}
                      </span>
                    );
                  })}
                </h1>
              );
            }}
          />
          <br />
          <br />
          <p>
            Hello! I am looking for a
            job in the field of web development to kickstart my career in this
            industry.
          </p>

          <br />
        </div>
      </div>
    </>
  );
}

export default Home;
