// Basic Imports
import { useState, useEffect, lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import ReduxToastr from 'react-redux-toastr'
import './App.css';
import loadingImg from './img/ball-triangle.svg'
import yflogo from './img/YF.png' 

// Components
import Navbar from './Components/Navbar';
import Home from './Containers/Home';
import Footer from './Components/Footer';

// CSS Imports for packages
import 'react-redux-toastr/src/styles/index.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Action Import
import { isLoggedin } from './actions';
import Rocket from './Components/Rocket';
import WhatsAppIcon from './Components/WhatsappIcon';
import Feedback from './Containers/FeedbackFom/index';

// Lazy Load Component
const ErrorPage = lazy(() => import('./Containers/404'));
const Team = lazy(() => import('./Containers/Team'));
const FAQ = lazy(() => import('./Containers/FAQ'));
const Terms = lazy(() => import('./Containers/Terms'));
const Testimonials = lazy(() => import('./Containers/Testimonial'));
const Policy = lazy(() => import('./Containers/Policy'))
const About = lazy(() => import('./Containers/About'));
const Contact = lazy(() => import('./Containers/Contact'));
const Services = lazy(() => import('./Containers/Services'));
const Conferences = lazy(() => import('./Containers/Conferences'));
const Loans = lazy(() => import('./Containers/Loans'));
const Vehicle = lazy(() => import('./Containers/Loans/Vehicle/index.js'));
const TwoWheeler = lazy(() => import('./Containers/Loans/Vehicle/TwoWheeler'));
const ThreeWheeler = lazy(() => import('./Containers/Loans/Vehicle/ThreeWheeler'));
const FourWheeler = lazy(() => import('./Containers/Loans/Vehicle/FourWheeler'));
const Heavy = lazy(() => import('./Containers/Loans/Vehicle/Heavy'));
const Electric = lazy(() => import('./Containers/Loans/Vehicle/Electric'));
const Mortage = lazy(() => import('./Containers/Loans/Mortage'));
 const Gold = lazy(() => import('./Containers/Loans/Gold'));
const Goldloan = lazy(() => import('./Containers/Loans/Gold/Goldloan'));
const Silverloan = lazy(() => import('./Containers/Loans/Gold/Silverloan/Silverloan'));
const Personal = lazy(() => import('./Containers/Loans/Personal'));
const EmiCalculator = lazy(() => import('./Containers/EmiCalculator'));
const Blogs = lazy(() => import('./Containers/Blogs'));

const BlogTwowheeler = lazy(() => import('./Containers/Blogs/Categories/TwoWheeler'));
const BlogThreewheeler = lazy(() => import('./Containers/Blogs/Categories/ThreeWheeler'));
const BlogFourwheeler = lazy(() => import('./Containers/Blogs/Categories/FourWheeler'));
const BlogHeavy = lazy(() => import('./Containers/Blogs/Categories/Heavy'));
const BlogElectric = lazy(() => import('./Containers/Blogs/Categories/Electric'));
const BlogMortage = lazy(() => import('./Containers/Blogs/Categories/Mortage'));
const BlogGold = lazy(() => import('./Containers/Blogs/Categories/Gold'));
const BlogSilver = lazy(() => import('./Containers/Blogs/Categories/Silver'));
const BlogPersonal = lazy(() => import('./Containers/Blogs/Categories/Personal'));
const BlogPage = lazy(() => import('./Containers/Blogs/BlogPage'));

const TwoWheelerBlogPage =lazy(()=>import ('./Containers/Blogs/Categories/TwoWheeler/TwoWheelerBlogPage'))
const ThreeWheelerBlogPage =lazy(()=>import ('./Containers/Blogs/Categories/ThreeWheeler/ThreeWheelerBlogPage'))
const FourWheelerBlogPage =lazy(()=>import ('./Containers/Blogs/Categories/FourWheeler/FourWheelerBlogPage'))
const SilverBlogPage =lazy(()=>import ('./Containers/Blogs/Categories/Silver/SilverBlogPage'))
const GoldBlogPage =lazy(()=>import ('./Containers/Blogs/Categories/Gold/GoldBlogPage'))
const HeavyBlogPage =lazy(()=>import ('./Containers/Blogs/Categories/Heavy/HeavyBlogPage'))
const ElectricBlogPage =lazy(()=>import ('./Containers/Blogs/Categories/Electric/ElectricBlogPage'))
const MortageBlogPage =lazy(()=>import ('./Containers/Blogs/Categories/Mortage/MortageBlogPage'))
const PersonalBlogPage =lazy(()=>import ('./Containers/Blogs/Categories/Personal/PersonalBlogPage'))

// const Blog = lazy(() => import('./Containers/Blog'));
// const BlogPg = lazy(() => import('./Containers/BlogPg'));
const Quote = lazy(() => import('./Containers/Quote'));



function App() {

  const location = useLocation();


  useEffect(() => {
    // Scroll top when location changes
    window.scrollTo(0, 0);
  }, [location]);


  const dispatch = useDispatch()

  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if(!auth.authenticate){
      dispatch(isLoggedin())
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const[loading, setloading]= useState(false);
  useEffect(()=>{
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 4000);
  },[])
  
    return (
    <div className="App">
     {
       loading ?
       <div className="loadImg">
       <img className="logoimg" src={yflogo} alt="Logo intro" />
       <div className="logo-content">
       <h3>We Support Your Dreams..</h3>
       </div>
       </div>
      
       :
      <>
    <Navbar />
    <Suspense fallback={
      <div className="divLoader">
      </div>}>
    <Routes>
      <Route  path='/' element={<Home/>} />
      <Route  path='/service' element={<Services/>} />
      <Route  path='/contact' element={<Contact/>} />
      <Route  path='/about' element={<About/>} />
      <Route  path='/loans' element={<Loans/>} />
      <Route  path='/vehicle' element={<Vehicle/>} />
      <Route  path='/vehicle/two-wheeler' element={<TwoWheeler/>} />
      <Route  path='/vehicle/three-wheeler' element={<ThreeWheeler/>} />
      <Route  path='/vehicle/four-wheeler' element={<FourWheeler/>} />
      <Route  path='/vehicle/heavy-vehicle' element={<Heavy/>} />
      <Route  path='/vehicle/electric-vehicle' element={<Electric/>} />
      <Route  path='/mortage' element={<Mortage/>} />
      <Route  path='/gold' element={<Gold/>} />
      <Route  path='/goldloan' element={<Goldloan/>} />
      <Route  path='/silverloan' element={<Silverloan/>} />
      <Route  path='/personal' element={<Personal/>} />
      <Route  path='/blogs' element={<Blogs/>} />
      <Route  path='/blogs/two-wheeler-loan' element={<BlogTwowheeler/>} />
      <Route  path='/blogs/three-wheeler-loan' element={<BlogThreewheeler/>} />
      <Route  path='/blogs/four-wheeler-loan' element={<BlogFourwheeler/>} />
      <Route  path='/blogs/heavy-vehicles-loan' element={<BlogHeavy/>} />
      <Route  path='/blogs/electric-vehicles-loan' element={<BlogElectric/>} />
      <Route  path='/blogs/mortage-loan' element={<BlogMortage/>} />
      <Route  path='/blogs/gold-loan' element={<BlogGold/>} />
      <Route  path='/blogs/silver-loan' element={<BlogSilver/>} />
      <Route  path='/blogs/personal-loan' element={<BlogPersonal/>} />
      
      <Route  path='/blogs/two-wheeler-loan/:url' element={<TwoWheelerBlogPage/>}/>
      <Route  path='/blogs/three-wheeler-loan/:url' element={<ThreeWheelerBlogPage/>}/>
      <Route  path='/blogs/four-wheeler-loan/:url' element={<FourWheelerBlogPage/>}/>
      <Route  path='/blogs/silver-loan/:url' element={<SilverBlogPage/>}/>
      <Route  path='/blogs/gold-loan/:url' element={<GoldBlogPage/>}/>
      <Route  path='/blogs/heavy-vehicles-loan/:url' element={<HeavyBlogPage/>}/>
      <Route  path='/blogs/electric-vehicles-loan/:url' element={<ElectricBlogPage/>}/>
      <Route  path='/blogs/mortage-loan/:url' element={<MortageBlogPage/>}/>
      <Route  path='/blogs/personal-loan/:url' element={<PersonalBlogPage/>}/>

      <Route  path='/emicalculator' element={<EmiCalculator/>} />
      <Route  path='/conferences' element={<Conferences/>} />
      <Route  path='/team' element={<Team/>} />
      <Route  path="/faq" element={<FAQ/>} />
      <Route  path="/testimonial" element={<Testimonials/>} />
      <Route  path="/policy" element={<Policy/>} />
      <Route  path="/terms" element={<Terms/>} />
      {/* <Route  path="/blog" element={Blog} /> */}
      {/* <Route  path="/blogpg" element={BlogPg} /> */}
      <Route  path="/quote" element={<Quote/>} />
      <Route element={<ErrorPage/>} />
      </Routes>
      </Suspense>
      <Feedback/>
      <Footer />
      <WhatsAppIcon />
      <Rocket />
      <ReduxToastr 
      newestOnTop={false}
      preventDuplicates
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar
      closeOnToastrClick
      />
      </>
    }
        </div>
        );
      }
      
      export default App;
      