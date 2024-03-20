import { Route, Routes } from 'react-router'
import { Home } from './components/home/Home'
import { VideoDetail } from './components/videoDatail/videoDatail'
import { Search } from './components/Search/Search'
import { ChannelDetail } from './components/ChannelDetail/ChannelDetail'
import { Navbar } from './components/navbar/Navbar'

function App() {

  return (
    <> {/* bg-[#121212] */}
      <div className='w-full h-screen bg-[#121212]'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/:id' element={<Search />} />
        </Routes>
      </div>
    </>
  )
}

export default App
