import style from "@/styles/Mainpage.module.css";
import SignUpBtn from "./components/SignUpBtn";

function App() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>리액트 아토믹 컴포넌트 구현하기</h1>
      <SignUpBtn status="click" />
      <SignUpBtn status="white" />
    </div>
  );
}

export default App;
