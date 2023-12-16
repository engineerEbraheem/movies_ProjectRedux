import React, { useCallback, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getMovieDetails } from "../redux/api/apiRequst";

const MoviesDetails = () => {
  const param = useParams();
  const movieInfo = useSelector((getStore) => getStore.movieDetils.movDetils);
  const dataLoading = useSelector((getStore) => getStore.movieDetils.isLoading);
  const dispatch = useDispatch();

  const getMovieDetailsData = useCallback(() => {
    dispatch(getMovieDetails(Number(param.id)));
  }, [param.id, dispatch]);

  useEffect(() => {
    getMovieDetailsData();
  }, [getMovieDetailsData]);

  return (
    <>
      {dataLoading ? (
        <h1 className="w-100 text-center">جاري تحميل البيانات...</h1>
      ) : movieInfo ? (
        <Row xs={12} className=" g-2 my-2 ">
          <Col xs={12}>
            <div className="movieCardDetails d-flex align-items-center rounded-4">
              <img
                className="movieImgDetails rounded-4"
                src={movieInfo.img}
                alt="img"
              />
              <div className="movieTextDetails m-auto text-center ">
                <p className="border-bottom">
                  <strong className="fs-5">اسم الفيلم: </strong>{" "}
                  {movieInfo.name}
                </p>
                <p className="border-bottom">
                  <strong className="fs-5 ">تاريخ الاصدار: </strong>{" "}
                  {movieInfo.date}
                </p>
                <p className="border-bottom">
                  <strong className="fs-5"> النوع: </strong> {movieInfo.type}
                </p>
                <p className="border-bottom">
                  <strong className="fs-5">التقيم: </strong>{" "}
                  {movieInfo.assessment}
                </p>
              </div>
            </div>
          </Col>

          <Col xs={12}>
            <div className="p-3 movieCardStory d-flex flex-column align-items-start rounded-4">
              <div className="  fs-2 ">
                <p className="story-title border-bottom mb-1">القصة:</p>
              </div>
              <div className="px-2">
                <p className="story-text">{movieInfo.movieStory} </p>
              </div>
            </div>
          </Col>

          <Col xs={12} className=" d-flex justify-content-center ">
            <Link to="/">
              <button className="btn btn-homePage mx-1">عودة للرئيسية</button>
            </Link>
            <Link to="/">
              <button className="btn btn-showMovie mx-1">مشاهدة الفيلم</button>
            </Link>
          </Col>
        </Row>
      ) : (
        <h1 className="w-100 text-center">لايوجد بيانات لعرضها</h1>
      )}
    </>
  );
};

export default MoviesDetails;
