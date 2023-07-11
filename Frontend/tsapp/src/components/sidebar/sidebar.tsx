import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './sidebar.css';
import { GetAllBrands } from '../../services/product/productService';

export const Sidebar = () => {
  const [brands, setBrands] = useState([]);
  const isDataFetched = useRef(false);

  useEffect(() => {
    if (isDataFetched.current) return;
    GetAllBrands().then(
      (res) => setBrands(res.data.data));
    isDataFetched.current = true;
  }, [])

  return (
    <React.Fragment>
      <div className="sidebar bg-dark">
        <div className="row">
          <ul className="row col">
            <li className="list-text active">
              <a href="#"> Home </a>
            </li>
            <li className="list-text">
              <a href="#"> Dashboard </a>
            </li>
            <li className="list-text">
              <a href="#"> Analytics </a>
            </li>
            <li className="list-text">
              <a href="#"> About US </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="right-sidebar bg-dark">
        <h3 style={{ color: '#fff' }}><b> Top Brands </b></h3>
        <div className="row">
          {
            brands.map((data: any, index: number) =>
              <li key={index} style={{ color: '#fff' }}> {data} </li>
            )
          }
        </div>
      </div>
    </React.Fragment>
  )
}
