import Button from "./Button.jsx";
import "../styles/ButtonList.css";

const buttonNames = [
  "All",
  "Javascript",
  "Mixes",
  "Music",
  "Live",
  "Data Structures",
  "Bhajan Music",
  "Accounting",
  "Bollywood Music",
  "Indian Pop Music",
  "Tipendra Jethalal Gada",
  "Manga",
  "Gaming",
  "News",
  "Lectures",
  "Smartphones",
  "Electronic Music",
  "Consumer Electonics",
  "Animes",
  "Cartoons",
  "Serials",
  "Bollywood",
  "Songs",
  "Books",
  "Stories",
  "New for you",
];

const ButtonList = () => {
  return (
    <div className="button-list">
      {buttonNames.map((name, index) =>
        index === 0 ? (
          <Button key={index} name={name} allBtn />
        ) : (
          <Button key={index} name={name} />
        )
      )}
    </div>
  );
};

export default ButtonList;
