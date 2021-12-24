import React, { useEffect, useState } from 'react'
import Header from "./compontments/Header";
import newsApi from "./api/newsApi";
import InfiniteScroll from 'react-infinite-scroll-component'
import { Col, Row } from 'react-bootstrap';
import CardNews from './compontments/CardNews';

function App() {

  const [news, setNews] = useState([])
  const [page, setPage] = useState(0)
  useEffect(() => {
    const fetchNews = async () => {
      const response = await newsApi.getnewsfeed({
        page,
        size: 10,
      })
      setNews([...news, ...response])
    }
    fetchNews()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  
  return (
    <div>
      <Header />
      <Row className="mt-5">
        <Col>
      </Col>
      <Col xs={6}>
      <InfiniteScroll
          dataLength={news.length}
          next={() => setPage((page) => page + 1)}
          hasMore={true}>
          {news.map((item, index) => (
           <CardNews feed={item} key={index} />
          ))}
        </InfiniteScroll>
      </Col>
      <Col>
      </Col>
      </Row>
      
      
    </div>
  );
}

export default App;
