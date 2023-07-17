import {Routes, Route} from 'react-router-dom'
import Home from './components/home/Home'
import Search from './components/Search/Search'
import Navbar from './components/navbar/Navbar'
import VideoDatail from './components/videoDatail/videoDatail'
import ChannelDetail from './components/ChannelDetail/ChannelDetail'
function App() {

  return (
    <>
      <div className='w-full bg-[#212121]'>
        <div className='max-w-[1440px] mx-auto px-2'>
          <Navbar/>
        </div>
      </div>
      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/video/:id' element={<VideoDatail/>}/>
            <Route path='/channel/:id' element={<ChannelDetail/>}/>
            <Route path='/search/:id' element={<Search/>}/>
      </Routes>
    </>
  )
}

export default App