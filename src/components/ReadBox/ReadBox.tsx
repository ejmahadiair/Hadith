import React from "react";
import NameCard from "../NameCard/NameCard";
import TitleCard from "../TitleCard/TitleCard";
import ChapterCard from "../ChapterCard/ChapterCard";
import ReadBodyCard from "../ReadBodyCard/ReadBodyCard";

const ReadBox = () => {
  return (
    <>
      <div>
        <NameCard />
        <TitleCard />
        <ChapterCard />
        <ReadBodyCard />
      </div>
    </>
  );
};

export default ReadBox;
