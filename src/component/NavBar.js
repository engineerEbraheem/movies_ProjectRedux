import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { filterMovie } from "../redux/api/apiRequst";

const NavBar = () => {
  //هذة فقط اليوس ستايد اذا احتجت ان اسوي زرار  مايبحث الا لما اضغط عليه
  const [searchFiledValue, setSearchFiledValue] = useState("");
  const dispatch = useDispatch();

  const onSearchFilter = (word) => {
    setSearchFiledValue(word);

    dispatch(filterMovie(word.trim()));
  };
  return (
    <div sticky="top" className="mb-2 shadow-sm navBarStyle">
      <Container className=" h-100 ">
        <Row className=" h-100 justify-content-between align-items-center">
          <Col xs={2} lg={1}>
            <a href="/" className="navLogo">
              <img src="images/Logo.png" className="logoImg" alt="logoImg" />
            </a>
          </Col>
          <Col xs={10} lg={11}>
            <div className="searcForm d-flex align-items-center position-relative">
              <input
                onChange={(e) => onSearchFilter(e.target.value)}
                type="search"
                className="form-control searchInput"
                placeholder="بحث"
              />
              <i className="fa-solid fa-magnifying-glass search-icon-style position-absolute "></i>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;
