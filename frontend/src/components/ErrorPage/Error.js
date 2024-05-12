import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function Error() {
  return (
    <>
      <div>
        <center>
          <img src="error-page.png" alt="error page" width={"70%"} />
          <div>
            <Link to="/">
              <Button
                style={{ width: "167px", height: "50px", borderRadius: "25px" }}
              >
                Go Home
              </Button>
            </Link>
          </div>
        </center>
      </div>
    </>
  );
}

export default Error;
