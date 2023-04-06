
import './Components/index.css'
// import Temp from './Components/tempBook'
import BookContent from './Components/bookCotent'
// import type { RouteObject } from "react-router-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './Components/Home';
// import { Link } from '@mui/material'
// import { Route } from '@mui/icons-material'


const App = () => {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookContent />} />

      </Routes>
    </BrowserRouter>
    // <div className="BookTem">
    //        <nav>
    //         <ul>
    //           <li>
    //             <Link to="/">Home</Link>
    //           </li>
    //           <li>
    //             <Link to="/books">Books</Link>
    //           </li>
    //         </ul>
    //       </nav> */}
    //  <Route path="/" element={<Home />} /> 

    //   <BookContent />
    // </div>
  )
}



export default App;
