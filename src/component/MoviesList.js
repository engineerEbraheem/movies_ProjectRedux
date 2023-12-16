import React, { useEffect, useState } from "react";
import MoviesCard from "./MoviesCard";
import { Row } from "react-bootstrap";
import PaginationCom from "./PaginationCom";
import { useDispatch, useSelector } from "react-redux";
import { getAllMoviesData } from "../redux/api/apiRequst";

const MoviesList = () => {
  //عدد الافلام المعروضه في كل صفحه
  const numOfMoviesInEachPage = 16;
  const [totalPageCount, setTotalPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const allMoviesData = useSelector((getStore) => getStore.moviesData.movData);
  const dataLoading = useSelector((getStore) => getStore.moviesData.isLoading);
  const numOfMovies = useSelector(
    (getStore) => getStore.moviesData.moviesCount
  );

  const numOfPage = Math.ceil(numOfMovies / numOfMoviesInEachPage); // to delete the 0.8343ازالة الكسور وزياده

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMoviesData());
  }, [dispatch]);

  useEffect(() => {
    setTotalPageCount(numOfPage);

    setCurrentPage(0);
  }, [numOfPage]);

  const getCurrentPage = (pageSelect) => {
    setCurrentPage(pageSelect);
  };

  //الاجرائات التاليه سويناها علاشان تجيب لي البيانات الخاصه بكل صفحه نضغط عليها

  //هنا بانحدد اول قيمه يبدا ياخذ من عندها المصفوفه
  const startMovieIndex = currentPage * numOfMoviesInEachPage;

  //هنا حددنا اخر قيمه بينتهي عندها
  const endMovieIndex = startMovieIndex + numOfMoviesInEachPage;
  //هنا كاننا اخذنا نسخه من حقنا البيانات او سوينا لها اقتصاص من مكان معين الى مكان اخر وبعدين مررناه الى متغير جديد
  const newFilterByPage = allMoviesData.slice(startMovieIndex, endMovieIndex);
  return (
    <>
      <Row xs={1} sm={2} md={3} lg={4} className=" g-3 my-2">
        {
          dataLoading ? (
            <h1 className="w-100 text-center">جاري تحميل البيانات...</h1>
          ) : newFilterByPage.length >= 1 ? (
            newFilterByPage.map((item) => {
              return <MoviesCard key={item.id} movieDataItem={item} />; // end return
            }) //end map function
          ) : (
            <h1 className="w-100 text-center">لايوجد بيانات لعرضها</h1>
          ) //end else for is loading
        }
      </Row>
      <PaginationCom
        totalPageCount={totalPageCount}
        getCurrentPage={getCurrentPage}
      />
    </>
  );
};

export default MoviesList;
