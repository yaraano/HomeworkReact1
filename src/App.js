import React from "react";
import ImgBox from "./components/Img-box";
import Text from "./components/Text";
import Stars from "./components/Stars";
import Price from "./components/Price";


const App = () => {
  return (
      <div className="container">
          <div className={'row'}>
              <div className="col-6">
                  <ImgBox/>
              </div>
              <div className="col-6 d-flex flex-column justify-content-evenly mt-3">
                  <Text/>
                  <Price/>
                  <Stars/>
              </div>
          </div>
      </div>
  )
}

export default App;