import {
  FaRegTrashAlt,
  FaFolderPlus,
  FaRegCommentDots,
  FaRegEdit,
  FaPaperPlane
} from "react-icons/fa";

export default function ButtonDoc() {
  return (
    <div>
      <div className="heading bold-text">Button</div>
      <p>
        Buttons allow users to take actions, and make choices, with a single
        tap.
      </p>
      <br />
      <span className="medium-text">Simple buttons</span>
      <p>
        There are several colors available for you to put in your buttons for a
        particular type of action.
      </p>
      <div className="component-container flex-row">
        <button className="primary-btn curved-edge-btn">primary</button>
        <button className="secondary-btn curved-edge-btn">secondary</button>

        <button className="info-btn curved-edge-btn">info</button>

        <button className="success-btn curved-edge-btn">success</button>

        <button className="warning-btn curved-edge-btn">warning</button>
        <button className="danger-btn curved-edge-btn">danger</button>
        <button className="light-btn curved-edge-btn">light</button>
        <button className="dark-btn curved-edge-btn">dark</button>
      </div>
      <br />
      <div className="code-container">
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28191%2C220%2C238%2C0.22%29&t=vscode&wt=none&l=jsx&ds=false&dsyoff=20px&dsblur=73px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=dm&fs=15px&lh=133%25&si=false&es=4x&wm=false&code=%253Cbutton%2520class%253D%2522primary-btn%2520curved-edge-btn%2522%253Eprimary%253C%252Fbutton%253E%250A%253Cbutton%2520class%253D%2522secondary-btn%2520curved-edge-btn%2522%253Esecondary%253C%252Fbutton%253E%250A%253Cbutton%2520class%253D%2522info-btn%2520curved-edge-btn%2522%253Einfo%253C%252Fbutton%253E%250A%253Cbutton%2520class%253D%2522success-btn%2520curved-edge-btn%2522%253Esuccess%253C%252Fbutton%253E%250A%253Cbutton%2520class%253D%2522warning-btn%2520curved-edge-btn%2522%253Ewarning%253C%252Fbutton%253E%250A%253Cbutton%2520class%253D%2522danger-btn%2520curved-edge-btn%2522%253Edanger%253C%252Fbutton%253E%250A%253Cbutton%2520class%253D%2522light-btn%2520curved-edge-btn%2522%253Elight%253C%252Fbutton%253E%250A%253Cbutton%2520class%253D%2522dark-btn%2520curved-edge-btn%2522%253Edark%253C%252Fbutton%253E"
          title="avatar"
          style={{
            width: "566px",
            height: "226px",
            border: "none",
            transform: "scale(1)",
            overflow: "hidden"
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
      <br />
      <br />
      <span className="medium-text">Outline buttons</span>
      <p>You can change the look of button using outline button css.</p>
      <div className="component-container flex-row">
        <button className="primary-outline-btn curved-edge-btn">primary</button>
        <button className="secondary-outline-btn curved-edge-btn">
          secondary
        </button>

        <button className="info-outline-btn curved-edge-btn">info</button>

        <button className="success-outline-btn curved-edge-btn">success</button>

        <button className="warning-outline-btn curved-edge-btn">warning</button>
        <button className="danger-outline-btn curved-edge-btn">danger</button>
        <button className="light-outline-btn curved-edge-btn">light</button>
        <button className="dark-outline-btn curved-edge-btn">dark</button>
      </div>
      <br />
      <div className="code-container">
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28191%2C220%2C238%2C0.22%29&t=vscode&wt=none&l=jsx&ds=false&dsyoff=20px&dsblur=73px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=dm&fs=15px&lh=133%25&si=false&es=4x&wm=false&code=%253Cbutton%2520class%253D%2522primary-outline-btn%2520curved-edge-btn%2522%253Eprimary%253C%252Fbutton%253E%250A%253Cbutton%2520class%253D%2522secondary-outline-btn%2520curved-edge-btn%2522%253Esecondary%253C%252Fbutton%253E%250A%253Cbutton%2520class%253D%2522info-outline-btn%2520curved-edge-btn%2522%253Einfo%253C%252Fbutton%253E%250A%253Cbutton%2520class%253D%2522success-outline-btn%2520curved-edge-btn%2522%253Esuccess%253C%252Fbutton%253E%250A%253Cbutton%2520class%253D%2522warning-outline-btn%2520curved-edge-btn%2522%253Ewarning%253C%252Fbutton%253E%250A%253Cbutton%2520class%253D%2522danger-outline-btn%2520curved-edge-btn%2522%253Edanger%253C%252Fbutton%253E%250A%253Cbutton%2520class%253D%2522light-outline-btn%2520curved-edge-btn%2522%253Elight%253C%252Fbutton%253E%250A%253Cbutton%2520class%253D%2522dark-outline-btn%2520curved-edge-btn%2522%253Edark%253C%252Fbutton%253E"
          title="avatar"
          style={{
            width: "632px",
            height: "226px",
            border: "none",
            transform: "scale(1)",
            overflow: "hidden"
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
      <br />
      <br />
      <span className="medium-text">Icon buttons</span>
      <p>You can also have icon as button and use it in your app.</p>
      <div className="component-container flex-row">
        <button className="icon-btn ">
          <FaRegCommentDots color="grey" size="20px" />
        </button>
        <button className="icon-btn ">
          <FaRegTrashAlt color="grey" size="20px" />
        </button>
        <button className="icon-btn ">
          <FaRegEdit color="grey" size="20px" />
        </button>
      </div>
      <br />
      <div className="code-container">
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28191%2C220%2C238%2C0.22%29&t=vscode&wt=none&l=jsx&ds=false&dsyoff=20px&dsblur=73px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=dm&fs=15px&lh=133%25&si=false&es=4x&wm=false&code=%253Cbutton%2520className%253D%2522icon-btn%2520%2522%253E%250A%2520%2520%253CFaRegCommentDots%2520size%253D%252220px%2522%2520%252F%253E%250A%253C%252Fbutton%253E%250A%253Cbutton%2520className%253D%2522icon-btn%2520%2522%253E%250A%2520%2520%253CFaRegTrashAlt%2520size%253D%252220px%2522%2520%252F%253E%250A%253C%252Fbutton%253E%250A%253Cbutton%2520className%253D%2522icon-btn%2520%2522%253E%250A%2520%2520%253CFaRegEdit%2520size%253D%252220px%2522%2520%252F%253E%250A%253C%252Fbutton%253E"
          title="avatar"
          style={{
            width: "322px",
            height: "240px",
            border: "none",
            transform: "scale(1)",
            overflow: "hidden"
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
      <br />
      <br />
      <span className="medium-text">Floating buttons</span>
      <p>
        You can create floating buttons which will float over any div you want
        it to float on.
      </p>
      <div className="component-container flex-row ">
        <div className="position-relative">
          <div
            style={{ backgroundColor: "pink", height: "100px", width: "100px" }}
            className="card cw vertical-card container"
          >
            <button className="floating-action-btn round-btn bottom-right-btn ">
              <FaPaperPlane size="20px" color="white" />
            </button>
          </div>
        </div>
        <div className="position-relative">
          <div
            style={{ backgroundColor: "pink", height: "100px", width: "100px" }}
            className="card cw vertical-card container"
          >
            <button className="floating-action-btn round-btn bottom-right-btn">
              <FaFolderPlus size="20px" color="white" />
            </button>
          </div>
        </div>
      </div>
      <br />
      <div className="code-container">
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28191%2C220%2C238%2C0.22%29&t=vscode&wt=none&l=jsx&ds=false&dsyoff=20px&dsblur=73px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=dm&fs=15px&lh=133%25&si=false&es=4x&wm=false&code=%253Cbutton%2520className%253D%2522floating-action-btn%2520round-btn%2520bottom-right-btn%2520%2522%253E%250A%2520%2520%2520%2520%253CFaPaperPlane%2520size%253D%252220px%2522%2520color%253D%2522white%2522%2520%252F%253E%250A%253C%252Fbutton%253E%250A%253Cbutton%2520className%253D%2522floating-action-btn%2520round-btn%2520bottom-right-btn%2522%253E%250A%2520%2520%2520%2520%253CFaFolderPlus%2520size%253D%252220px%2522%2520color%253D%2522white%2522%2520%252F%253E%250A%253C%252Fbutton%253E"
          title="avatar"
          style={{
            width: "599px",
            height: "188px",
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
