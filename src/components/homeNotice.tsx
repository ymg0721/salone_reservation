import React from "react";

interface AnnouncementProps {
  date: string;
  text: string;
  link: string;
}

const HomeNotice: React.FC<AnnouncementProps> = ({ date, text, link }) => {
  return (
    <div>
      <p>{date}</p>
      <a href={link}>{text}</a>
    </div>
  );
};

export default HomeNotice;
