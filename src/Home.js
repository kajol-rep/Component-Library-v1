import "./componentStyle.css";
export default function Home() {
  return (
    <div>
      <div className="horizontal-card">
        <img
          style={{ width: "50%", height: "100%" }}
          alt=""
          src="https://uploads-ssl.webflow.com/5e6fd8b314a08bebab35c81a/5ff6a74fce7e0114a17adc81_undraw_Books_l33t.svg"
        />
        <div className="container">
          <div className="heading bold-text">Welcome to Wrapit</div>
          <p className="medium-text">
            Build fast apps with Wrapit. Wrapit provides prebuild components and
            CSS library. You can access all of them here.
            <br />
            Take it and Wrap it !
          </p>
        </div>
      </div>
      <p className="medium-text">
        Before getting started include this link in your code to access the
        styles.
      </p>

      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28191%2C220%2C238%2C0.22%29&t=vscode&wt=none&l=jsx&ds=false&dsyoff=20px&dsblur=73px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=dm&fs=15px&lh=133%25&si=false&es=4x&wm=false&code=%2520%2520%2520%2520%253Clink%2520rel%253D%2522stylesheet%2522%2520href%253D%2522https%253A%252F%252Fwrap-it-library.netlify.app%252FcomponentStyle.css%2522%253E%250A"
        title="style"
        style={{
          width: "772px",
          height: "112px",
          border: "0",
          transform: "scale(1)",
          overflow: "hidden"
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
}
