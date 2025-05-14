
import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";
const App =(props)=> {
  const [progress, setProgress] = useState(0)

    return (
      <div >
        <Router>
        <LoadingBar
        height={4}
        color="#f11946"
        progress={progress}
      />
        <Navbar/>
        <Routes>
            {/* business entertainment politics health science technology world education food lifestyle crime domestic environment tourism sports other*/}
            
          <Route exact path='*'element={<News setProgress = {setProgress}   key='top'  country='in' language='hi' category="top"/>}/>
          <Route exact path='/business' element={<News setProgress = {setProgress}   key='business'  country='in' language='hi' category='business'/>}/>
          <Route exact path='/entertainment'element={<News setProgress = {setProgress}   key='entertainment' country='in' language='hi' category='entertainment'/>}/>
          <Route exact path='/politics'element={<News setProgress = {setProgress}   key='politics' country='in' language='hi' category='politics'/>}/>
          <Route exact path='/health'element={<News setProgress = {setProgress}   key='health'  country='in' language='hi' category='health'/>}/>
          <Route exact path='/science'element={<News setProgress = {setProgress}   key='science' country='in' language='hi' category='science'/>}/>
           <Route exact path='/technology' element={<News setProgress = {setProgress}   key='technology'  country='in' language='hi' category='technology'/>}/>
          <Route exact path='/world'element={<News setProgress = {setProgress}   key='world' country='in' language='hi' category='world'/>}/>
          <Route exact path='/eduation'  element={<News setProgress = {setProgress}   key='education'  country='in' language='hi' category='education'/>}/>
          <Route exact path='/food'element={<News setProgress = {setProgress}   key='food'  country='in' language='hi' category='food'/>}/>
            <Route exact path='/lifestyle' element={<News setProgress = {setProgress}   key='lifestyle'  country='in' language='hi' category='lifestyle'/>}/>
          <Route exact path='/crime'element={<News setProgress = {setProgress}   key='crime' country='in' language='hi' category='crime'/>}/>
          <Route exact path='/domestic'element={<News setProgress = {setProgress}   key='domestic' country='in' language='hi' category='domestic'/>}/>
          <Route exact path='/enviroment'element={<News setProgress = {setProgress}   key='enviroment'  country='in' language='hi' category='enviroment'/>}/>
          <Route exact path='/toursim'element={<News setProgress = {setProgress}   key='enviroment' country='in' language='hi' category='enviroment'/>}/>
           <Route exact path='/sports' element={<News setProgress = {setProgress}   key='sports'  country='in' language='hi' category='sports'/>}/>
          <Route exact path='/other'element={<News setProgress = {setProgress}   key='other' country='in' language='hi' category='other'/>}/>
        </Routes>
        </Router>
      </div>
    )
  }
  export default App;
