import Alert from "../func_comp/Alert";
import "../componentStyle.css";

export default function AlertDoc() {
  return (
    <div>
      <div className="heading bold-text">Alert</div>
      <p>
        An alert displays a short, important message in a way that attracts the
        user's attention without interrupting the user's task.
      </p>
      <span className="medium-text">Variants of alert</span>
      <p>
        There are seven variants that sets a distinctive icon and color as
        follows:
      </p>
      <div className="component-container flex-column">
        <Alert variant="primary">
          This is a <strong>primary</strong> alert box
        </Alert>

        <Alert variant="success">
          This is a <strong>success</strong> alert box
        </Alert>

        <Alert variant="info">
          This is a <strong>info</strong> alert box
        </Alert>

        <Alert variant="warning">
          This is a <strong>warning</strong> alert box
        </Alert>

        <Alert variant="danger">
          This is a <strong>danger</strong> alert box
        </Alert>

        <Alert variant="light">
          This is a <strong>light</strong> alert box
        </Alert>

        <Alert variant="dark">
          This is a <strong>dark</strong> alert box
        </Alert>
      </div>
      <br />
      <div className="code-container">
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28191%2C220%2C238%2C0.22%29&t=vscode&wt=none&l=jsx&ds=false&dsyoff=20px&dsblur=73px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=dm&fs=15px&lh=133%25&si=false&es=4x&wm=false&code=%253CAlert%2520variant%253D%2522primary%2522%253E%250A%2520%2520%2520%2520%2520This%2520is%2520a%2520%253Cstrong%253Eprimary%253C%252Fstrong%253E%2520alert%2520box%250A%253C%252FAlert%253E%250A%250A%253CAlert%2520variant%253D%2522success%2522%253E%250A%2520%2520%2520%2520%2520This%2520is%2520a%2520%253Cstrong%253Esuccess%253C%252Fstrong%253E%2520alert%2520box%250A%253C%252FAlert%253E%250A%250A%253CAlert%2520variant%253D%2522info%2522%253E%250A%2520%2520%2520%2520%2520This%2520is%2520a%2520%253Cstrong%253Einfo%253C%252Fstrong%253E%2520alert%2520box%250A%253C%252FAlert%253E%250A%250A%253CAlert%2520variant%253D%2522warning%2522%253E%250A%2520%2520%2520%2520%2520This%2520is%2520a%2520%253Cstrong%253Ewarning%253C%252Fstrong%253E%2520alert%2520box%250A%253C%252FAlert%253E%250A%250A%253CAlert%2520variant%253D%2522danger%2522%253E%250A%2520%2520%2520%2520%2520This%2520is%2520a%2520%253Cstrong%253Edanger%253C%252Fstrong%253E%2520alert%2520box%250A%253C%252FAlert%253E%250A%250A%253CAlert%2520variant%253D%2522light%2522%253E%250A%2520%2520%2520%2520%2520This%2520is%2520a%2520%253Cstrong%253Elight%253C%252Fstrong%253E%2520alert%2520box%250A%253C%252FAlert%253E%250A%250A%253CAlert%2520variant%253D%2522dark%2522%253E%250A%2520%2520%2520%2520%2520This%2520is%2520a%2520%253Cstrong%253Edark%253C%252Fstrong%253E%2520alert%2520box%250A%253C%252FAlert%253E"
          title="alert"
          style={{
            width: "442px",
            height: "300px",
            border: "none",
            transform: "scale(1)",
            overflow: "hidden"
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
      <br />
      <br />
      <span className="medium-text">Dismissable alert</span>
      <p>
        You can make your alert dismissable by specifying dissmissable into your
        component. Then you can see a close button displayed on the right side
        of your alert message.
      </p>
      <div className="component-container">
        <Alert variant="info" dismissable>
          This is a <strong>info</strong> alert box
        </Alert>
      </div>
      <br />
      <div className="code-container">
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28191%2C220%2C238%2C0.22%29&t=vscode&wt=none&l=jsx&ds=false&dsyoff=20px&dsblur=73px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=dm&fs=15px&lh=133%25&si=false&es=4x&wm=false&code=%253CAlert%2520variant%253D%2522info%2522%2520dismissable%253E%250A%2520%2520This%2520is%2520a%2520%253Cstrong%253Einfo%253C%252Fstrong%253E%2520alert%2520box%250A%253C%252FAlert%253E"
          title="alert"
          style={{
            width: "393px",
            height: "131px",
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
