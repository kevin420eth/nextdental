import './not-found.css'
import Link from 'next/link'
import { PiTooth } from 'react-icons/pi'
import { AiOutlineHome } from 'react-icons/ai'

export default function NotFound() {
  return (
    <div className="error__page">
      <h1 className="error__title">Oops!<span><PiTooth /></span></h1>
      <p className="error__message">頁面不存在或發生錯誤</p>
      <Link className="back__to__home__button" href="/">回首頁 <AiOutlineHome /></Link>
    </div>
  )
}