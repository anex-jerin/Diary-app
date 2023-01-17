import { useState, useRef, useEffect } from "react";
const USER_REGEX = /^[a-zA-z][a-zA-Z0-9-_]{3,23}$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PASSWORD_REGEX.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);
  return (
    <section className="main">
      <p ref={errRef} className={errMsg ? "errmsg" : "hide"}>
        {errMsg}
      </p>
      <h1 className="head">Register</h1>
      <form action="" className="registerform">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          required
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
        />
        <p className={userFocus && user && !validName ? "show" : "hide"}>
          type a valid username
        </p>
        <label htmlFor="pwd">Password</label>
        <input
          type="password"
          id="pwd"
          autoComplete="off"
          onChange={(e) => setPwd(e.target.value)}
          required
          onFocus={() => setPwdFocus(true)}
          onBlur={() => setPwdFocus(false)}
        />
        <p className={pwdFocus && !validPwd ? "show" : "hide"}>
          type a valid password
        </p>
        <label htmlFor="matchpwd">Confirm Password</label>
        <input
          type="password"
          id="matchpwd"
          autoComplete="off"
          onChange={(e) => setMatchPwd(e.target.value)}
          required
          onFocus={() => setMatchFocus(true)}
          onBlur={() => setMatchFocus(false)}
        />
        <p className={matchFocus && !validMatch ? "show" : "hide"}>
          type a matching password
        </p>
        <button disabled={!validMatch || !validName || validName} className='signupbtn'>
          Sign up
        </button>
      </form>
    </section>
  );
};

export default Register;
