import { useState } from "react";

export default function Password() {
  const [form, setForm] = useState({ name: "", password: "" });
  const [msg, setMsg] = useState({msg:"",id:""});

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });

    if (e.target.name === "password") {
      strengthChecker(e.target.value);
    }

    function strengthChecker(p) {
      let pswrd = p;
      const regexWeak = /^[\s\S]{1,5}$/;
      const regexMedium = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;
      const regexStrong =
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

      if (regexStrong.test(pswrd)) {
        // Strong
        setMsg(
         { ...msg,msg:"Strong: Password contains at least 8 characters and includes letters, numbers, and special characters."
            ,id:"strong"});
      } else if (regexMedium.test(pswrd)) {
        // Medium
        setMsg(
          {...msg,msg:"Medium: Password contains at least 6 characters and includes both letters and numbers.",id:"medium"}
        );
      } else if (regexWeak.test(pswrd)) {
        // Weak
        setMsg({...msg,msg:"Weak: Password is less than 6 characters.",id:"weak"});
      }
    }
  }

  return (
    <>
      <h2>User Login</h2>
      <form className="loginpage">
        <h3>
          <input
            type="text"
            value={form.name}
            name="name"
            onChange={handleChange}
            placeholder="Username"
          />
        </h3>
        <h3>
          <input
            type="text"
            value={form.password}
            name="password"
            onChange={handleChange}
            placeholder="Password"
          />
        </h3>
        <input type="submit" value="Login" />
      </form>

      <p className="msg" id={msg.id}>{msg.msg}</p>
    </>
  );
}
