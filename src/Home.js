import "./componentStyle.css";
export default function Home() {
  return (
    <div>
      <div className="horizontal-card">
        <img
          style={{ width: "80%", height: "30rem" }}
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
    </div>
  );
}
