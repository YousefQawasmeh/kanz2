import React from "react";
import "./style.css";
import imgkanz from "./kanz.gif";
import imgkanz1 from "./kanz1.gif";
class HomePage extends React.Component {
  state = { pass: "", try: 0, hint: "", win: 0, pass2: "" };
  fun = (event) => {
    event.preventDefault();
    const a = [
      "كلمة السر خاطئة",
      "معقول ما بتعرف كلمة السر؟!؟!؟!",
      "يمكن بتعرفها بس انت مش عنيد",
      "العين لا تستطيع رؤية كل شيء",
    ];
    if (this.state.pass === "123321") {
      this.setState({ try: this.state.try + 1, hint: "لازم تكون عنيد" });

      if (this.state.try === 4) {
        this.setState({ win: 1, hint: "كلمة السر الاولى صحيحة" });
      }
    } else {
      this.setState({ hint: a[Math.floor(Math.random() * 3)] });
    }
  };
  fun2 = (event) => {
    event.preventDefault();

    const a = [
      "كلمة السر خاطئة",
      "معقول ما بتعرف كلمة السر؟!؟!؟!",
      "يمكن بتعرفها بس ما بتعرف انك بتعرفها",
      "اكتبها ما تحكيها",
    ];
    if (this.state.pass2 === "افتح يا سمسم") {
      this.setState({ try: this.state.try + 1, hint: "مبارك" });
      window.location.href = "/مبارك";
      // if (this.state.try === 4) {
      //   this.setState({ win: 1 });
      // }
    } else {
      this.setState({ hint: a[Math.floor(Math.random() * 3)] });
    }
  };
  render() {
    return this.state.win ? (
      <div>
        <h1>احسنت لقد اوشكنا على الانتهاء</h1>
        <h3>
          {" "}
          هذا الكنز يختلف عن باقي الكنوز اللي بالتلفزيون كلمة السر كتابة مش حكي{" "}
        </h3>
        <form>
          <input
            type='text'
            name='pass2'
            className='pass'
            placeholder='كلمة السر النهائية'
            value={this.state.pass2}
            onChange={(pass2) => {
              this.setState({ pass2: pass2.target.value });
            }}
          />
          <button className='go' onClick={this.fun2}>
            GO
          </button>
        </form>
        <br />
        <p>{this.state.hint}</p>
        <img src={imgkanz1} />
      </div>
    ) : (
      <div>
        <h3> العين لا تستطيع رؤية كل شيئ </h3>
        <form>
          <input
            type='text'
            name='pass'
            className='pass'
            placeholder='كلمة السر'
            value={this.state.pass}
            onChange={(pass) => {
              this.setState({ pass: pass.target.value });
            }}
          />
          <button className='go' onClick={this.fun}>
            GO
          </button>
        </form>
        <br />
        <p>{this.state.hint}</p>
        <img src={imgkanz} />
      </div>
    );
  }
}
export default HomePage;
