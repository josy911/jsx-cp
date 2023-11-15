import Card from "react-bootstrap/Card";
import Name from "./components/Name";
import Description from "./components/Description";
import Price from "./components/Price";
import Image from "./components/Image";

const firstname = prompt("What is your first name");

function App() {
  return (
    <div className="d-flex flex-column align-items-center">
      <Card style={{ width: "18rem" }}>
        <Image />
        <Card.Body>
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Text>
            <Description />
          </Card.Text>
          <Price />
        </Card.Body>
      </Card>

      {/* image section */}
      <div
        className="p-2 bg-success text-white mt-5"
        style={{ width: "300px" }}
      >
        {firstname ? (
          <div className="d-flex align-items-center">
            <div style={{ width: 75, height: 75 }}>
              <img
                src="https://media.istockphoto.com/id/1434850824/photo/portrait-of-boy-laughing-in-public-square.webp?b=1&s=170667a&w=0&k=20&c=L1gM73DKybjjkTVUopxTRKs8ZNWwR7wfMXZ0L7pnYD0="
                style={{ borderRadius: "50%", width: 75, height: 75 }}
              />
            </div>
            <h3>Hello {firstname}</h3>
          </div>
        ) : (
          <h3>Hello, There</h3>
        )}
      </div>
    </div>
  );
}

export default App;
