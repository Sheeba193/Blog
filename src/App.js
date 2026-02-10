import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  // Importing BrowserRouter, Route, and Switch for routing
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
           <Route exact path="/">  {/*Using 'exact' to ensure it only matches the exact path */}
            <Home />
          </Route>
          <Route path="/create">
              <Create />
          </Route>
          <Route path="/blogs/:id">  {/* Dynamic route for blog details */}
              <BlogDetails />
          </Route>
          <Route path="*">  {/* Catch-all route for undefined paths */}
             <NotFound />  {/* This will render for any route that doesn't match the above routes */}
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
    
  );
}

export default App;

// In react router-dom v6 it will be: function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <div className="content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/create" element={<Create />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }


