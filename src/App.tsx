import "./styles.css";
import { useState } from "react";

export default function App() {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("red");
  const [stars, setStars] = useState(3);
  const [titleList, setTitleList] = useState([]);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeStars = (e) => {
    setStars(+e.target.value);
  };

  const onChangeRadioButton = (e) => {
    setColor(e.target.value);
  };

  const addTitleList = () => {
    const newStars = new Array(stars).fill({ isReviewed: false });

    const newTitle = {
      title: title,
      color: color,
      stars: newStars
    };
    console.log(newTitle.stars);
    setTitleList([...titleList, newTitle]);
    setTitle("");
    setColor("red");
    setStars(3);
  };

  const delTitleList = (index) => {
    const newTitleList = [...titleList];
    newTitleList.splice(index, 1);
    setTitleList(newTitleList);
  };

  const onClickStar = (idx1, idx2) => {
    const newTitleList = [...titleList];
    newTitleList[idx1].stars.map((star, index) => {
      console.log("-------");
      console.log(index);
      console.log(idx2);
      console.log(index <= idx2);
      if (index <= idx2) {
        star.isReviewed = Boolean("true");
      } else {
        star.isReviewed = Boolean("false");
      }
      console.log(star);
    });
    console.log(newTitleList[idx1].stars);
    console.log("==================");
    setTitleList(newTitleList);
  };

  return (
    <div>
      <h1>Hello CodeSandbox</h1>
      <div>{title}</div>
      <div>
        <input value={title} onChange={onChangeTitle} />
        <button onClick={() => addTitleList()}>追加</button>
      </div>
      　
      <input
        type="number"
        min="3"
        max="10"
        onChange={onChangeStars}
        value={stars}
      />
      <div>
        <label style={{ backgroundColor: "red", color: "white" }}>赤</label>
        <input
          type="radio"
          checked={color === "red"}
          value="red"
          onClick={onChangeRadioButton}
        />
        <label style={{ backgroundColor: "blue", color: "white" }}>青</label>
        <input
          type="radio"
          checked={color === "blue"}
          value="blue"
          onClick={onChangeRadioButton}
        />
        <label style={{ backgroundColor: "yellow" }}>黄</label>
        <input
          type="radio"
          checked={color === "yellow"}
          value="yellow"
          onClick={onChangeRadioButton}
        />
      </div>
      <div>
        <label>【評価値一覧】</label>
        {titleList.map((title, index) => (
          <div key={index}>
            <button onClick={(index) => delTitleList(index)}>削除</button>
            <label style={{ backgroundColor: title.color }}>
              {" "}
              {title.title}
            </label>
            {title.stars.map((star, sIndex) =>
              star.isReviewed === true ? (
                <label onClick={() => onClickStar(index, sIndex)}>
                  ★ {index}
                  {sIndex}
                </label>
              ) : (
                <label onClick={() => onClickStar(index, sIndex)}>
                  ☆ {index}
                  {sIndex}
                </label>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
