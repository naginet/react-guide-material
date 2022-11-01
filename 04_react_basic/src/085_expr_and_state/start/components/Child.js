/* POINT 式と文
式：何らかの値を返すもの（変数に代入できるもの）
文：変数宣言、for文、if文、switch文やセミコロンで区切るもの。
*/

import "./Child.css";

const Child = () => {
  // const a = true ? "hello" : "bye";
  const hello = () => "hello";
  const a = hello();
  return (
    <div className="component">
      <h3>式と文</h3>
      {false ? "hello" : "bye"}
    </div>
  );
};

export default Child;
