import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import SearchIcon from '../../images/search.png'
function SearchInput() {
  const [value, setvalue] = useState('')
  const navigate = useNavigate()

  function SubmitHandel(e) {
    e.preventDefault()
    if (value) {
      navigate(`/search/${value}`)
    }
  }
  return (
    <div className='flex items-center   '>
        <form onSubmit={ SubmitHandel} className='xl:w-[450px]  flex items-center  bg-[#323232]'>
            <input type="text" name="" id="" className='bg-[#121212] border-[2px] border-black  w-[362px] h-[40px] px-2 text-[#AAAAAA] max-sm:w-[150px]' placeholder='Search'  onChange={(e) => setvalue(e.target.value)} />
            <img src={SearchIcon} alt="Search Input" className='px-5'  />
        </form>
    </div>
  )
}

export default SearchInput