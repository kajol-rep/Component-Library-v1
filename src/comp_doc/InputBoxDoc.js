import {
  FaEyeSlash,
  FaEye,
  FaCheckCircle,
  FaRegTimesCircle
} from "react-icons/fa";

export default function InputBoxDoc() {
  return (
    <div>
      <div className="heading bold-text">Input box</div>
      <p>
        We usually use input in order to take inputs from user to perform some
        action.
      </p>
      <br />
      <span className="medium-text">Basic Input box</span>
      <div className="component-container flex-column">
        <input className="input-box-container" placeholder="username"></input>
        <input className="input-box-container" placeholder="email"></input>
        <input className="input-box-container" placeholder="password"></input>
      </div>
      <br />
      <div className="code-container">
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28191%2C220%2C238%2C0.22%29&t=vscode&wt=none&l=jsx&ds=false&dsyoff=20px&dsblur=73px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=dm&fs=15px&lh=133%25&si=false&es=4x&wm=false&code=%253Cinput%2520className%253D%2522input-box-container%2522%2520placeholder%253D%2522username%2522%253E%253C%252Finput%253E%250A%253Cinput%2520className%253D%2522input-box-container%2522%2520placeholder%253D%2522email%2522%253E%253C%252Finput%253E%250A%253Cinput%2520className%253D%2522input-box-container%2522%2520placeholder%253D%2522password%2522%253E%253C%252Finput%253E"
          title="card"
          style={{
            width: "616px",
            height: "131px",
            border: "none",
            transform: "scale(1)",
            overflow: "hidden"
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
      <br />
      <br />
      <span className="medium-text">Validation styles</span>
      <p>
        You can have two validation styles:
        <br />
        1. error
        <br />
        2. success
        <br />
      </p>
      <div className="component-container flex-column">
        <div className="error-input-box-container">
          <input></input>
          <FaRegTimesCircle color="red" />
        </div>

        <div className="success-input-box-container">
          <input></input>
          <FaCheckCircle color="green" />
        </div>
      </div>
      <br />
      <div className="code-container">
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28191%2C220%2C238%2C0.22%29&t=vscode&wt=none&l=jsx&ds=false&dsyoff=20px&dsblur=73px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=dm&fs=15px&lh=133%25&si=false&es=4x&wm=false&code=%253Cdiv%2520className%253D%2522error-input-box-container%2522%253E%250A%2520%2520%2520%2520%253Cinput%253E%253C%252Finput%253E%250A%2520%2520%2520%2520%253CFaRegTimesCircle%2520color%253D%2522red%2522%2520%252F%253E%250A%253C%252Fdiv%253E%250A%250A%253Cdiv%2520className%253D%2522success-input-box-container%2522%253E%250A%2520%2520%2520%2520%2520%253Cinput%253E%253C%252Finput%253E%250A%2520%2520%2520%2520%2520%253CFaCheckCircle%2520color%253D%2522green%2522%2520%252F%253E%250A%253C%252Fdiv%253E"
          title="card"
          style={{
            width: "410px",
            height: "245px",
            border: "none",
            transform: "scale(1)",
            overflow: "hidden"
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
    </div>
  );
}
