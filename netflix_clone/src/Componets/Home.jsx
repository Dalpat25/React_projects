import Banner from '../Componets/Banner';
import Row from "../Componets/Row"
import request from '../requests'
import Navbar from '../Componets/Navbar';

function Home(){
    return (
        <div className="App">
        <Navbar/>
          <Banner/> 
          <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals} isLargeRow />
          <Row title="Trending now" fetchUrl={request.fetchTrending} />
          <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
          <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
          <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
          <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
          <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
          <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
        </div>
      );
}

export default Home;