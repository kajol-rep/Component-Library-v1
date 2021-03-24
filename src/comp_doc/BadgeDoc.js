import Avatar from "../func_comp/Avatar";
import Badge from "../func_comp/Badge";
import { MdMail } from "react-icons/md";
import "../componentStyle.css";

export default function BadgeDoc() {
  return (
    <div>
      <div className="heading bold-text">Badge</div>
      <p>
        The Badge is used to add notifications, messages, or statuses in
        different shapes and sizes. The Badge component can be easily integrated
        with icons, Avatars, and other container controls.
      </p>
      <br />
      <span className="medium-text">Basic badge</span>
      <p>A basic badge can be empty or can have any text inside it.</p>
      <div className="component-container flex-row">
        <Badge></Badge>
        <Badge>2</Badge>
        <Badge>20</Badge>
      </div>
      <br />
      <div className="code-container">
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28191%2C220%2C238%2C0.22%29&t=vscode&wt=none&l=jsx&ds=false&dsyoff=20px&dsblur=73px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=dm&fs=15px&lh=133%25&si=false&es=4x&wm=false&code=%253CBadge%253E%253C%252FBadge%253E%250A%253CBadge%253E2%253C%252FBadge%253E%250A%253CBadge%253E20%253C%252FBadge%253E"
          title="avatar"
          style={{
            width: "178px",
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
      <span className="medium-text">Sizes in badge</span>
      <p>
        You can have different sizes for your badge by just passing size as prop
        to the component.{" "}
      </p>
      <div className="component-container flex-row">
        <div>
          <Badge size="xs">badge</Badge>
        </div>
        <div>
          <Badge size="sm">badge</Badge>
        </div>
        <div>
          <Badge size="lg">badge</Badge>
        </div>
        <div>
          <Badge size="xl">badge</Badge>
        </div>
      </div>
      <br />
      <div className="code-container">
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28191%2C220%2C238%2C0.22%29&t=vscode&wt=none&l=jsx&ds=false&dsyoff=20px&dsblur=73px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=dm&fs=15px&lh=133%25&si=false&es=4x&wm=false&code=%253CBadge%2520size%253D%2522xs%2522%253Ebadge%253C%252FBadge%253E%250A%253CBadge%2520size%253D%2522sm%2522%253Ebadge%253C%252FBadge%253E%250A%253CBadge%2520size%253D%2522lg%2522%253Ebadge%253C%252FBadge%253E%250A%253CBadge%2520size%253D%2522xl%2522%253Ebadge%253C%252FBadge%253E"
          title="avatar"
          style={{
            width: "286px",
            height: "150px",
            border: "none",
            transform: "scale(1)",
            overflow: "hidden"
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
      <br />
      <br />
      <span className="medium-text">Badge on avatar</span>
      <p>You can place a badge on your avatar as shown below:</p>
      <div className="component-container flex-row">
        <div className="p-relative inline-block">
          <Avatar></Avatar>
          <div className="p-absolute right-bottom-circle">
            <Badge></Badge>
          </div>
        </div>
        <div className="p-relative inline-block">
          <Avatar variant="square"></Avatar>
          <div className="p-absolute right-bottom-square">
            <Badge></Badge>
          </div>
        </div>
        <div className="p-relative inline-block">
          <Avatar></Avatar>
          <div className="p-absolute top-right-circle">
            <Badge></Badge>
          </div>
        </div>
        <div className="p-relative inline-block">
          <Avatar variant="square"></Avatar>
          <div className="p-absolute top-right-square">
            <Badge></Badge>
          </div>
        </div>
      </div>
      <br />
      <div>
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28191%2C220%2C238%2C0.22%29&t=vscode&wt=none&l=jsx&ds=false&dsyoff=20px&dsblur=73px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=dm&fs=15px&lh=133%25&si=false&es=4x&wm=false&code=%253Cdiv%2520className%253D%2522p-relative%2520inline-block%2522%253E%250A%2520%2520%253CAvatar%253E%253C%252FAvatar%253E%250A%2520%2520%253Cdiv%2520className%253D%2522p-absolute%2520right-bottom-circle%2522%253E%250A%2520%2520%2520%2520%2520%253CBadge%253E%253C%252FBadge%253E%250A%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E%250A%253Cdiv%2520className%253D%2522p-relative%2520inline-block%2522%253E%250A%2520%2520%253CAvatar%2520variant%253D%2522square%2522%253E%253C%252FAvatar%253E%250A%2520%2520%253Cdiv%2520className%253D%2522p-absolute%2520right-bottom-square%2522%253E%250A%2520%2520%2520%2520%2520%253CBadge%253E%253C%252FBadge%253E%250A%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E%250A%253Cdiv%2520className%253D%2522p-relative%2520inline-block%2522%253E%250A%2520%2520%253CAvatar%253E%253C%252FAvatar%253E%250A%2520%2520%253Cdiv%2520className%253D%2522p-absolute%2520top-right-circle%2522%253E%250A%2520%2520%2520%2520%2520%253CBadge%253E%253C%252FBadge%253E%250A%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E%250A%253Cdiv%2520className%253D%2522p-relative%2520inline-block%2522%253E%250A%2520%2520%253CAvatar%2520variant%253D%2522square%2522%253E%253C%252FAvatar%253E%250A%2520%2520%253Cdiv%2520className%253D%2522p-absolute%2520top-right-square%2522%253E%250A%2520%2520%2520%2520%2520%253CBadge%253E%253C%252FBadge%253E%250A%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
          title="avatar"
          style={{
            width: "450px",
            height: "270px",
            border: "none",
            transform: "scale(1)",
            overflow: "hidden"
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
      <br />
      <br />
      <span className="medium-text">Badge on icon</span>
      <p>You can place a badge on icon as shown below:</p>
      <div className="component-container flex-row">
        <div className="p-relative inline-block">
          <MdMail size="40px" />
          <div className="p-absolute top-right-circle">
            <Badge></Badge>
          </div>
        </div>
        <div className="p-relative inline-block">
          <MdMail size="40px" />
          <div className="p-absolute top-right-circle">
            <Badge size="xs" shape="capsule">
              0
            </Badge>
          </div>
        </div>
        <div className="p-relative inline-block">
          <MdMail size="40px" />
          <div className="p-absolute top-right-circle">
            <Badge size="xs" shape="capsule">
              50
            </Badge>
          </div>
        </div>
        <div className="p-relative inline-block">
          <MdMail size="40px" />
          <div className="p-absolute top-right-circle">
            <Badge size="xs" shape="capsule">
              99+
            </Badge>
          </div>
        </div>
        <div className="p-relative inline-block">
          <MdMail size="40px" />
          <div className="p-absolute top-right-circle">
            <Badge size="xs" shape="capsule">
              999+
            </Badge>
          </div>
        </div>
      </div>
      <br />
      <div className="code-container">
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28191%2C220%2C238%2C0.22%29&t=vscode&wt=none&l=jsx&ds=false&dsyoff=20px&dsblur=73px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=dm&fs=15px&lh=133%25&si=false&es=4x&wm=false&code=%253Cdiv%2520className%253D%2522p-relative%2520inline-block%2522%253E%250A%2520%2520%253CMdMail%2520size%253D%252240px%2522%2520%252F%253E%250A%2520%2520%253Cdiv%2520className%253D%2522p-absolute%2520top-right-circle%2522%253E%250A%2520%2520%2520%2520%253CBadge%253E%253C%252FBadge%253E%250A%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E%250A%253Cdiv%2520className%253D%2522p-relative%2520inline-block%2522%253E%250A%2520%2520%253CMdMail%2520size%253D%252240px%2522%2520%252F%253E%250A%2520%2520%253Cdiv%2520className%253D%2522p-absolute%2520top-right-circle%2522%253E%250A%2520%2520%2520%2520%253CBadge%2520size%253D%2522xs%2522%2520shape%253D%2522capsule%2522%253E%250A%2520%2520%2520%2520%2520%25200%250A%2520%2520%2520%2520%253C%252FBadge%253E%250A%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E%250A%253Cdiv%2520className%253D%2522p-relative%2520inline-block%2522%253E%250A%2520%2520%253CMdMail%2520size%253D%252240px%2522%2520%252F%253E%250A%2520%2520%253Cdiv%2520className%253D%2522p-absolute%2520top-right-circle%2522%253E%250A%2520%2520%2520%2520%2520%253CBadge%2520size%253D%2522xs%2522%2520shape%253D%2522capsule%2522%253E%250A%2520%2520%2520%2520%2520%2520%252050%250A%2520%2520%2520%2520%2520%253C%252FBadge%253E%250A%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E%250A%253Cdiv%2520className%253D%2522p-relative%2520inline-block%2522%253E%250A%2520%2520%253CMdMail%2520size%253D%252240px%2522%2520%252F%253E%250A%2520%2520%253Cdiv%2520className%253D%2522p-absolute%2520top-right-circle%2522%253E%250A%2520%2520%2520%2520%253CBadge%2520size%253D%2522xs%2522%2520shape%253D%2522capsule%2522%253E%250A%2520%2520%2520%2520%2520%2520%252099%252B%250A%2520%2520%2520%2520%253C%252FBadge%253E%250A%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E%250A%253Cdiv%2520className%253D%2522p-relative%2520inline-block%2522%253E%250A%2520%2520%253CMdMail%2520size%253D%252240px%2522%2520%252F%253E%250A%2520%2520%253Cdiv%2520className%253D%2522p-absolute%2520top-right-circle%2522%253E%250A%2520%2520%2520%2520%253CBadge%2520size%253D%2522xs%2522%2520shape%253D%2522capsule%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520999%252B%250A%2520%2520%2520%2520%253C%252FBadge%253E%250A%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
          title="avatar"
          style={{
            width: "450px",
            height: "270px",
            border: "none",
            transform: "scale(1)",
            overflow: "hidden"
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
      <br />
      <br />
      <span className="medium-text">Shapes in badge</span>
      <p>
        You can have different shapes of badges by just passing shape as a prop
        to the component.
      </p>
      <div className="component-container flex-row">
        <Badge shape="curved">curved</Badge>
        <Badge shape="capsule">capsule</Badge>
        <Badge shape="square">sharp</Badge>
      </div>
      <br />
      <div className="code-container">
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28191%2C220%2C238%2C0.22%29&t=vscode&wt=none&l=jsx&ds=false&dsyoff=20px&dsblur=73px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=dm&fs=15px&lh=133%25&si=false&es=4x&wm=false&code=%253CBadge%2520shape%253D%2522curved%2522%253Ecurved%253C%252FBadge%253E%250A%253CBadge%2520shape%253D%2522capsule%2522%253Ecapsule%253C%252FBadge%253E%250A%253CBadge%2520shape%253D%2522square%2522%253Ecapsule%253C%252FBadge%253E"
          title="avatar"
          style={{
            width: "325px",
            height: "200px",
            border: "none",
            transform: "scale(1)",
            overflow: "hidden"
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
      <br />
      <br />
      <span className="medium-text">Variants in badge</span>
      <p>
        You can change the appearance of the badge by using the range of
        variants available as shown below:
      </p>
      <div className="component-container flex-row">
        <Badge variant="primary" shape="capsule">
          primary
        </Badge>
        <Badge variant="secondary" shape="capsule">
          secondary
        </Badge>
        <Badge variant="info" shape="capsule">
          info
        </Badge>
        <Badge variant="success" shape="capsule">
          success
        </Badge>
        <Badge variant="danger" shape="capsule">
          danger
        </Badge>
        <Badge variant="warning" shape="capsule">
          warning
        </Badge>
        <Badge variant="light" shape="capsule">
          light
        </Badge>
        <Badge variant="dark" shape="capsule">
          dark
        </Badge>
      </div>
      <br />
      <div className="code-container">
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28191%2C220%2C238%2C0.22%29&t=vscode&wt=none&l=jsx&ds=false&dsyoff=20px&dsblur=73px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=dm&fs=15px&lh=133%25&si=false&es=4x&wm=false&code=%253CBadge%2520variant%253D%2522primary%2522%2520shape%253D%2522capsule%2522%253E%250A%2520%2520%2520%2520%2520primary%250A%253C%252FBadge%253E%250A%253CBadge%2520variant%253D%2522secondary%2522%2520shape%253D%2522capsule%2522%253E%250A%2520%2520%2520%2520%2520secondary%250A%253C%252FBadge%253E%250A%253CBadge%2520variant%253D%2522info%2522%2520shape%253D%2522capsule%2522%253E%250A%2520%2520%2520%2520%2520info%250A%253C%252FBadge%253E%250A%253CBadge%2520variant%253D%2522success%2522%2520shape%253D%2522capsule%2522%253E%250A%2520%2520%2520%2520%2520success%250A%253C%252FBadge%253E%250A%253CBadge%2520variant%253D%2522danger%2522%2520shape%253D%2522capsule%2522%253E%250A%2520%2520%2520%2520%2520danger%250A%253C%252FBadge%253E%250A%253CBadge%2520variant%253D%2522warning%2522%2520shape%253D%2522capsule%2522%253E%250A%2520%2520%2520%2520%2520warning%250A%253C%252FBadge%253E%250A%253CBadge%2520variant%253D%2522light%2522%2520shape%253D%2522capsule%2522%253E%250A%2520%2520%2520%2520%2520light%250A%253C%252FBadge%253E%250A%253CBadge%2520variant%253D%2522dark%2522%2520shape%253D%2522capsule%2522%253E%250A%2520%2520%2520%2520%2520dark%250A%253C%252FBadge%253E"
          title="avatar"
          style={{
            width: "393px",
            height: "270px",
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
