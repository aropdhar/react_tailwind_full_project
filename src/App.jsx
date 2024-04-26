import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import Rootlayout from "./layout/Rootlayout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Features from "./pages/features/Features";
import Error from "./pages/error/Error";
import Pricing from "./pages/pricing/Pricing";
import Blogpage from "./pages/blog/Blogpage";
import Contact from "./pages/contact/Contact";




function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
     <Route>
       <Route element={<Rootlayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/feature" element={<Features/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
          <Route path="/blog" element={<Blogpage/>}/>
          <Route path="/contact" element={<Contact/>}/>
       </Route>
          <Route path="*" element={<Error/>}/>
     </Route> 

    )
  );

  return (<RouterProvider router={router}/>)
}

export default App
