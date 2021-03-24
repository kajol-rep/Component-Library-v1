import "../componentStyle.css";
import { FaRegHeart } from "react-icons/fa";
import Badge from "../func_comp/Badge";
export default function CardDoc() {
  return (
    <div>
      <div className="heading bold-text">Card</div>
      <p>
        A card is a flexible and extensible content container. It includes
        options for headers and footers, a wide variety of content, contextual
        background colors, and powerful display options.
      </p>
      <br />
      <span className="medium-text">Basic card</span>
      <p>
        A card with image and text. Basically cards do not have width so that
        they can take the width of its parent element. But in the below example
        I have set a fixed width to the card.
      </p>
      <div className="component-container flex-row">
        <div
          style={{ background: "white", color: "black" }}
          className="card cw border"
        >
          <div className="img-container">
            <img
              alt=""
              src="https://i.pinimg.com/originals/e8/c7/c4/e8c7c4d4e14a9e3b21faf3d7b37c5b03.jpg"
            />
          </div>
          <div className="container">
            <span>A basic card</span>
          </div>
        </div>
      </div>
      <br />
      <div className="code-container">
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28191%2C220%2C238%2C0.22%29&t=vscode&wt=none&l=jsx&ds=false&dsyoff=20px&dsblur=73px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=dm&fs=15px&lh=133%25&si=false&es=4x&wm=false&code=%253Cdiv%2520className%253D%2522card%2520cw%2520border%2522%253E%250A%2520%2520%253Cdiv%2520className%253D%2522img-container%2522%253E%250A%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fi.pinimg.com%252Foriginals%252Fe8%252Fc7%252Fc4%252Fe8c7c4d4%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520e14a9e3b21faf3d7b37c5b03.jpg%2522%250A%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253Cdiv%2520className%253D%2522container%2522%253E%250A%2520%2520%2520%2520%2520%253Cspan%253EA%2520basic%2520card%253C%252Fspan%253E%250A%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
          title="card"
          style={{
            width: "550px",
            height: "250px",
            border: "none",
            transform: "scale(1)",
            overflow: "hidden"
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>

      <br />
      <br />
      <span className="medium-text">Card decoration</span>
      <p>
        The entire look of the card can be changed in following ways : <br />
        1. Card shadow <br />
        2. Changing border styles <br />
        3. Badge on a card <br />
        4. Dismissable card <br />
        5. Overlay content on card
      </p>
      <div className="component-container flex-row">
        <div
          style={{ background: "white", color: "black" }}
          className="card cw card-shadow curved-box"
        >
          <div className="img-container curved-box-top">
            <img
              className="curved-box-top"
              alt=""
              src="https://i.pinimg.com/originals/e8/c7/c4/e8c7c4d4e14a9e3b21faf3d7b37c5b03.jpg"
            />
          </div>
          <div className="container">
            <span>A basic card</span>
          </div>
        </div>
      </div>
      <br />
      <div className="code-container">
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28191%2C220%2C238%2C0.22%29&t=vscode&wt=none&l=jsx&ds=false&dsyoff=20px&dsblur=73px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=dm&fs=15px&lh=133%25&si=false&es=4x&wm=false&code=%253Cdiv%2520className%253D%2522card%2520cw%2520card-shadow%2520curved-box%2522%253E%250A%2520%2520%253Cdiv%2520className%253D%2522img-container%2520curved-box-top%2522%253E%250A%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520className%253D%2522curved-box-top%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fi.pinimg.com%252Foriginals%252Fe8%252Fc7%252Fc4%252F%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520e8c7c4d4e14a9e3b21faf3d7b37c5b03.jpg%2522%250A%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253Cdiv%2520className%253D%2522container%2522%253E%250A%2520%2520%2520%2520%253Cspan%253EA%2520basic%2520card%253C%252Fspan%253E%250A%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
          title="card"
          style={{
            width: "476px",
            height: "250px",
            border: "none",
            transform: "scale(1)",
            overflow: "hidden"
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
      <br />
      <div className="component-container flex-row">
        <div
          style={{ background: "white", color: "black" }}
          className="card cw border vertical-card text-center"
        >
          <div className="thumbnail">
            <div className="badge-container-top-left">
              <Badge variant="primary" shape="square" size="xs">
                NEW
              </Badge>
            </div>
            <button className="card-remove-btn">&times;</button>
          </div>
          <div className="img-container">
            <img
              alt=""
              src="data:image/jpeg;base64,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"
            />
          </div>

          <div className="container thumbnail">
            <strong>SASSFRAS</strong>
            <div>Women Printed Wrap Dress</div>
            <span>Rs. 1079</span>
            <span style={{ textDecoration: "line-through" }}>Rs. 2399</span>
            <span style={{ color: "red" }}>(Rs. 1200 OFF)</span>
            <div className="card-overlay">
              <div className="item-inside-overlay">
                <button className="primary-outline-btn">
                  <FaRegHeart /> Add to Wishlist
                </button>
                <br />
                <br />
                <small>
                  <strong>SASSFRAS</strong>
                  <div>Women Printed Wrap Dress</div>
                  <span>Rs. 1079</span>
                  <span style={{ textDecoration: "line-through" }}>
                    Rs. 2399
                  </span>
                  <span style={{ color: "red" }}>(Rs. 1200 OFF)</span>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="code-container">
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28191%2C220%2C238%2C0.22%29&t=vscode&wt=none&l=jsx&ds=false&dsyoff=20px&dsblur=73px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=dm&fs=15px&lh=133%25&si=false&es=4x&wm=false&code=%253Cdiv%2520className%253D%2522card%2520cw%2520border%2520vertical-card%2520text-center%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522thumbnail%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522badge-container-top-left%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253CBadge%2520variant%253D%2522primary%2522%2520shape%253D%2522square%2522%2520size%253D%2522xs%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520NEW%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252FBadge%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522card-remove-btn%2522%253E%2526times%253B%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522img-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522data%253Aimage%252Fjpeg%253Bbase64%252C%252F9j%252F4AAQSkZJRgABAQAAAQABAAD%252F2wCEAAoHCBIRERIRERESEREREhEREhEREhISERIRGBQZGRkYGRkdIS4lHB8rIBoZJzgmKy8xNTU1GiQ%252BTj0zRy40NjEBDAwMEA8QHxISHzYrJSsxNDU0NDQ9NDQ0NjE2NDQ0PTE0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0NP%252FAABEIAQMAwgMBIgACEQEDEQH%252FxAAcAAACAgMBAQAAAAAAAAAAAAAAAQIDBAUGBwj%252FxAA7EAACAgEDAgUDAQYFAwQDAAABAgADEQQSIQUxBhMiQVFhcYEyBxRCUpGhI2KxwfGCouEzcpKyFUNT%252F8QAGAEBAQEBAQAAAAAAAAAAAAAAAAEDAgT%252FxAAgEQEBAQEBAQACAgMAAAAAAAAAARECITEDEjJBIlFx%252F9oADAMBAAIRAxEAPwDqRGBFGJ0HGICOARiEcAhHCApwnibxc%252B81aMgBch7sA5PvszwB9ff%252B83%252FjDVmvSsFO0uwryO%252B08t%252FUAj8zhfD%252FAE5NVq9PQ2dtjkvt%252FkVWYjPtnbj8zPrrHfPOsGvrGrdiV1FzMuSX3vtBHsD2PM6nw74yw60atshsKl5GPV8OPv7%252FAPM9PHSNOiCtKawijAUIuAJ5J%252B0no9eltSytCtdvpsUAlVcZwR8Z5H4E4579d3iZr0iE5rwH1M6jSBXJL0N5RJzlkAyjc%252F5Tj7qZ0s3lYiKOKAQihmARQzFAIjHFCCIxmIwpQhCAASUI4AI4pIQHHFHAIQmPr9SKq2duwH9%252Bw%252FvFuDzjxb1dr7bKycJW4RF%252FOCfuZb4Hayu93pre56V2DaisAzkk53OoXhQO%252FwDFOc1trNaSSFYli74ye%252FsPyJ1n7MOoCjU3VDjzkV0DH9TISD%252BcMp%252FB%252BJ5%252BvZa9POSyPTtQt11Sru8t2OHwce2cZByO%252FsfzOR8U9Fs%252FcLlv8s2Pgota7QGBBGeeTkd509uqsYnacKr5f0qr8LjA3MOPfOJpfFOod9MS%252BFaxCqIWHDOdqZYY%252Bc%252FSZRpZk9%252BOQ8GapaNU2nJx5gKc%252FwD9EJx%252FUbv7T0OeM%252BHqi2o0rDJU2K43Y3YVs8%252FWexg8T1c%252F6eXr7pkxZiJkSZ24SJhmQ3Q3QJwkcwzCJRRQgEDCBhShCECUcQjgMSUjJCA44oQHNR4n0ps0tgDhNo3kntgc9%252Fabea%252FrdYfS3oSFDVWDcTgA7Tgn7SdfFn143qWbeTWo7YJ7kZHJmH%252B8vXZXZWxSyolgw%252Fn3Ej7jbtHxjj75T3ugKtk5xjHb57%252FmQ0ehsvdUVWaxzwqjJ5mU8nrW%252B%252BR7J0jrfn6Wq%252B3TeY7orN5ZG3d78E%252FP3nLeNLdVqEZyhRUIKov8I7Z%252B%252BD3nc%252BGOk%252Fu%252Bkqqc%252BpV7fU84x%252BZh%252BLusaTR1stn%252BJc6HZSOGYfJ%252FlXvz%252FrPPLd8bXM9eXdM2VtVy2Dt3AKPbuOexHM9ZRwyhh2IyJ46L2sc2MwQetyFB4HPpUe57gZ4%252Bcd51nRvEOtY1A6Y20"
          title="card"
          style={{
            width: "1024px",
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
      <span className="medium-text">Text based card</span>
      <p>
        A text based card contains only text based information in it as shown
        below:
      </p>
      <div className="component-container flex-row">
        <div
          style={{ background: "white", color: "black" }}
          className="card cw vertical-card container card-shadow curved-box"
        >
          <span className="heading">The Heading</span>

          <p className="small-text grey-text">small info</p>

          <div className="medium-text">A Simple Text Based Card Design</div>
          <p>An example to showcase how can we make a text based card.</p>
        </div>
      </div>
      <br />
      <div className="code-container">
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28191%2C220%2C238%2C0.22%29&t=vscode&wt=none&l=jsx&ds=false&dsyoff=20px&dsblur=73px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=dm&fs=15px&lh=133%25&si=false&es=4x&wm=false&code=%253Cdiv%2520className%253D%2522card%2520cw%2520vertical-card%2520container%2520card-shadow%2520curved-box%2522%253E%250A%2520%2520%253Cspan%2520className%253D%2522heading%2522%253EThe%2520Heading%253C%252Fspan%253E%250A%2520%2520%253Cp%2520className%253D%2522small-text%2520grey-text%2522%253Esmall%2520info%253C%252Fp%253E%250A%2520%2520%253Cdiv%2520className%253D%2522medium-text%2522%253EA%2520Simple%2520Text%2520Based%2520Card%2520Design%253C%252Fdiv%253E%250A%2520%2520%253Cp%253EAn%2520example%2520to%2520showcase%2520how%2520can%2520we%2520make%2520a%2520text%2520based%2520card.%253C%252Fp%253E%250A%253C%252Fdiv%253E"
          title="card"
          style={{
            width: "623px",
            height: "188px",
            border: "none",
            transform: "scale(1)",
            overflow: "hidden"
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
      <br />
      <br />
      <span className="medium-text">Vertical card</span>
      <div className="component-container flex-row">
        <div
          style={{ background: "white", color: "black" }}
          className="card cw vertical-card  rmv-border card-shadow curved-box"
        >
          <div className="img-container curved-box-top">
            <img
              className="curved-box-top"
              alt=""
              src="https://appinventiv.com/wp-content/uploads/sites/1/2019/08/Mobile-App-UI-Design-Tips-Trends-to-Follow-in-2020-Exclusive-1.png"
            />
          </div>
          <div className="container">
            <p>
              An example to showcase how we can make a simple image based card
              with some description.
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="code-container">
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28191%2C220%2C238%2C0.22%29&t=vscode&wt=none&l=jsx&ds=false&dsyoff=20px&dsblur=73px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=dm&fs=15px&lh=133%25&si=false&es=4x&wm=false&code=%253Cdiv%2520className%253D%2522card%2520cw%2520vertical-card%2520%2520rmv-border%2520card-shadow%2520curved-box%2522%253E%250A%2520%2520%253Cdiv%2520className%253D%2522img-container%2520curved-box-top%2522%253E%250A%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520className%253D%2522curved-box-top%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fappinventiv.com%252Fwp-content%252Fuploads%252Fsites%252F1%252F2019%252F08%252F%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Mobile-App-UI-Design-Tips-Trends-to-Follow-in-2020-Exclusive-1.png%2522%250A%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253Cdiv%2520className%253D%2522container%2522%253E%250A%2520%2520%2520%2520%2520%253Cp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520An%2520example%2520to%2520showcase%2520how%2520we%2520can%2520make%2520a%2520simple%2520image%2520based%2520card%250A%2520%2520%2520%2520%2520%2520%2520%2520with%2520some%2520description.%250A%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
          title="card"
          style={{
            width: "698px",
            height: "378px",
            border: "none",
            transform: "scale(1)",
            overflow: "hidden"
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
      <br />
      <br />
      <span className="medium-text">Horizontal card</span>
      <div className="component-container flex-row">
        <div
          style={{ background: "white", color: "black" }}
          className="horizontal-card curved-box card-shadow"
        >
          <div className="img-container curved-box-left">
            <img
              className="curved-box-left"
              alt=""
              src="https://appinventiv.com/wp-content/uploads/sites/1/2019/08/Mobile-App-UI-Design-Tips-Trends-to-Follow-in-2020-Exclusive-1.png"
            />
          </div>
          <div className="container">
            <span className="medium-text">The heading</span>
            <p>
              An example to showcase how we can make a simple image based card
              with some description.
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="code-container">
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28191%2C220%2C238%2C0.22%29&t=vscode&wt=none&l=jsx&ds=false&dsyoff=20px&dsblur=73px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=dm&fs=15px&lh=133%25&si=false&es=4x&wm=false&code=%253Cdiv%2520className%253D%2522horizontal-card%2520curved-box%2520card-shadow%2522%253E%250A%2520%2520%253Cdiv%2520className%253D%2522img-container%2520curved-box-left%2522%253E%250A%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520className%253D%2522curved-box-left%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fappinventiv.com%252Fwp-content%252Fuploads%252Fsites%252F1%252F%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%25202019%252F08%252FMobile-App-UI-Design-Tips-Trends-to-Follow-%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520in-2020-Exclusive-1.png%2522%250A%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253Cdiv%2520className%253D%2522container%2522%253E%250A%2520%2520%253Cspan%2520className%253D%2522medium-text%2522%253EThe%2520heading%253C%252Fspan%253E%250A%2520%2520%253Cp%253E%250A%2520%2520%2520%2520%2520%2520An%2520example%2520to%2520showcase%2520how%2520we%2520can%2520make%2520a%2520simple%2520image%2520based%2520card%250A%2520%2520%2520%2520%2520%2520with%2520some%2520description.%250A%2520%2520%253C%252Fp%253E%250A%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
          title="card"
          style={{
            width: "616px",
            height: "378px",
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
