import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Barscan from './pages/BarcodeScanner';
import Home from './pages/Home';
import Scanner from './pages/qrcodescanner';

const App = () => {
  const [productInfo, setProductInfo] = useState(null);
  const [error, setError] = useState(null);

  const handleScanSuccess = (decodedText) => {
    axios.get(`http://localhost:5000/api/product-info?barcode=${decodedText}`)
     .then(response => {
        setProductInfo(response.data);
        setError(null);
      })
     .catch(error => {
        setError('Product not found. Please enter details manually.');
        setProductInfo(null);
      });
  };

  const handleManualEntry = (productDetails = {}) => {
 
    console.log("Manual entry", productDetails);
   
    setProductInfo(productDetails);
  };

  return (
    <div className="App">
      <div className="App-header">
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/qrcode_scanner">
                <Barscan />
              </Route>
              <Route path="/barcode_scanner">
                <Barscan />
              </Route>
            </Switch>
          </div>
        </Router>
        <h1>Barcode/QR Code Scanner</h1>
        {}
        <Scanner onScanSuccess={handleScanSuccess} />
        {productInfo && (
          <div>
            <h2>Product Information</h2>
            <p>Barcode: {productInfo.barcode}</p>
            <p>Manufacturing Date: {productInfo.mfd_date}</p>
            <p>Expiration Date: {productInfo.exp_date}</p>
          </div>
        )}
        {error && (
          <div>
            <p>{error}</p>
            <button onClick={() => handleManualEntry()}>Enter Manually</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;