import style from "@/styles/Mainpage.module.css";

function SignUpBtn({ status }) {
  const handleColorChange = (e) => {
    const span = document.querySelector(".info");
    e.target.style.backgroundColor = "white";
    e.target.style.border = "2px solid #5F0080";
    span.style.color = "#5F0080";
  };

  return (
    <div
      className={status === "click" ? style.btn : style.whiteBtn}
      onClick={handleColorChange}
    >
      <span className="info">회원가입</span>
    </div>
  );
}

export default SignUpBtn;
