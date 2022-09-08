
import React from 'react';

import classNames from 'classnames/bind';
import styles from  './NumberPage.module.scss'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
const cx=classNames.bind(styles)
export default function NumberPage() {
    const user = useSelector((state) => state.user)
  return (
    <div>
       <div  className={cx('numberpage')}>

       </div>
       <header  className={cx('topbar')}>
       <span className={cx('device-text')}>Cấp số</span>
                 <svg className={cx('logo-next')}  xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
<path d="M5.35833 4.40874L1.825 0.875405C1.74753 0.797298 1.65536 0.735302 1.55381 0.692995C1.45226 0.650688 1.34334 0.628906 1.23333 0.628906C1.12332 0.628906 1.0144 0.650688 0.912851 0.692995C0.811302 0.735302 0.719134 0.797298 0.641665 0.875405C0.486456 1.03154 0.399338 1.24275 0.399338 1.4629C0.399338 1.68306 0.486456 1.89427 0.641665 2.0504L3.59167 5.0004L0.641665 7.9504C0.486456 8.10654 0.399338 8.31775 0.399338 8.5379C0.399338 8.75806 0.486456 8.96927 0.641665 9.1254C0.719532 9.20264 0.811878 9.26374 0.91341 9.30521C1.01494 9.34668 1.12366 9.3677 1.23333 9.36707C1.343 9.3677 1.45172 9.34668 1.55325 9.30521C1.65478 9.26374 1.74713 9.20264 1.825 9.1254L5.35833 5.59207C5.43644 5.5146 5.49843 5.42243 5.54074 5.32088C5.58305 5.21934 5.60483 5.11041 5.60483 5.0004C5.60483 4.89039 5.58305 4.78147 5.54074 4.67992C5.49843 4.57837 5.43644 4.48621 5.35833 4.40874Z" fill="#7E7D88"/>
</svg>
<span className={cx('device-index')}>Danh sách cấp số</span>
<svg className={cx('logo-next-two')} xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
<path d="M5.35841 4.40874L1.82507 0.875405C1.74761 0.797298 1.65544 0.735302 1.55389 0.692995C1.45234 0.650688 1.34342 0.628906 1.23341 0.628906C1.1234 0.628906 1.01448 0.650688 0.912927 0.692995C0.811378 0.735302 0.71921 0.797298 0.641741 0.875405C0.486532 1.03154 0.399414 1.24275 0.399414 1.4629C0.399414 1.68306 0.486532 1.89427 0.641741 2.0504L3.59174 5.0004L0.641741 7.9504C0.486532 8.10654 0.399414 8.31775 0.399414 8.5379C0.399414 8.75806 0.486532 8.96927 0.641741 9.1254C0.719608 9.20264 0.811955 9.26374 0.913486 9.30521C1.01502 9.34668 1.12374 9.3677 1.23341 9.36707C1.34308 9.3677 1.4518 9.34668 1.55333 9.30521C1.65486 9.26374 1.74721 9.20264 1.82507 9.1254L5.35841 5.59207C5.43652 5.5146 5.49851 5.42243 5.54082 5.32088C5.58312 5.21934 5.60491 5.11041 5.60491 5.0004C5.60491 4.89039 5.58312 4.78147 5.54082 4.67992C5.49851 4.57837 5.43652 4.48621 5.35841 4.40874Z" fill="#7E7D88"/>
</svg>
<span  className={cx('img-bar')}></span>
<span  className={cx('hello-bar')}>Xin chào</span>
<span  className={cx('name-bar')}>{user.name}</span>
<span  className={cx('device-index-S')}>Quản lý cấp số</span>
<span  className={cx('name-service')}>Tên dịch vụ</span>
<span  className={cx('name-service-block')}>Tất cả <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
<path d="M1 1L7 7L13 1" fill="#FF7506"/>
<path d="M1 1L7 7L13 1H1Z" stroke="#FF7506" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
<span  className={cx('status')}>Tình trạng</span>
<span  className={cx('name-status-block')}>Tất cả <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
<path d="M1 1L7 7L13 1" fill="#FF7506"/>
<path d="M1 1L7 7L13 1H1Z" stroke="#FF7506" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
<span  className={cx('source')}>Nguồn cấp</span>
<span  className={cx('name-source-block')}>Tất cả <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
<path d="M1 1L7 7L13 1" fill="#FF7506"/>
<path d="M1 1L7 7L13 1H1Z" stroke="#FF7506" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
<span  className={cx('keyword')}>Từ khóa</span>

<span  className={cx('keyword-source-block')}>Nhập từ khóa <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#FF7506" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 17.5L13.875 13.875" stroke="#FF7506" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
       </header>
       <div  className={cx('content-block')}>
       <div  className={cx('column-one')}>
       <span  className={cx('column-one-1')}>STT</span>
       <span  className={cx('column-one-2')}>2010001</span>
       <span  className={cx('column-one-3')}>2010002</span>
       <span  className={cx('column-one-4')}>2010003</span>
       <span  className={cx('column-one-5')}>2010004</span>
       <span  className={cx('column-one-6')}>2010005</span>
       <span  className={cx('column-one-7')}>2010006</span>
       <span  className={cx('column-one-8')}>2010007</span>
       <span  className={cx('column-one-9')}>2010008</span>
       <span  className={cx('column-one-10')}>2010009</span>
       </div>
       <div  className={cx('margin')}></div>
       <div  className={cx('column-two')}>
       <span  className={cx('column-two-1')}>Tên khách hàng</span>
       <span  className={cx('column-two-2')}>Lê Huỳnh Ái Vân</span>
       <span  className={cx('column-two-3')}>Huỳnh Ái Vân</span>
       <span  className={cx('column-two-4')}>Lê Ái Vân</span>
       <span  className={cx('column-two-5')}> Nguyễn Ái Vân</span>
       <span  className={cx('column-two-6')}>Trần Thị Ái Vân</span>
       <span  className={cx('column-two-7')}>Lê Huỳnh Nghĩa</span>
       <span  className={cx('column-two-8')}>Lê Huỳnh Đức</span>
       <span  className={cx('column-two-9')}>Phạm Văn Mạnh</span>
       <span  className={cx('column-two-10')}>Lê Thị Cẩm Tiên</span>

       </div>
       <div  className={cx('margin-two')}></div>
       <div  className={cx('column-three')}>
       <span  className={cx('column-three-1')}>Tên dịch vụ </span>
       <span  className={cx('column-three-2')}>Khám tim mạch</span>
       <span  className={cx('column-three-3')}>Khám sản - Phụ Khoa</span>
       <span  className={cx('column-three-4')}>Khám răng hàm mặt</span>
       <span  className={cx('column-three-5')}>Khám tai mũi họng</span>
       <span  className={cx('column-three-6')}>Khám hô hấp</span>
       <span  className={cx('column-three-7')}>Khám tổng quát</span>
       <span  className={cx('column-three-8')}>Khám tai mũi họng</span>
       <span  className={cx('column-three-9')}>Khám tổng quát</span>
       <span  className={cx('column-three-10')}>Khám tai mũi họng</span>
       </div>
       <div  className={cx('margin-three')}></div>
       <div  className={cx('column-four')}>
       <span  className={cx('column-four-1')}>Thời gian cấp </span>
       <span  className={cx('column-four-2')}>14:35 - 07/11/2021</span>
       <span  className={cx('column-four-3')}>14:35 - 07/11/2021</span>
       <span  className={cx('column-four-4')}>14:35 - 07/11/2021</span>
       <span  className={cx('column-four-5')}>14:35 - 07/11/2021</span>
       <span  className={cx('column-four-6')}>14:35 - 07/11/2021</span>
       <span  className={cx('column-four-7')}>14:35 - 07/11/2021</span>
       <span  className={cx('column-four-8')}>14:35 - 07/11/2021</span>
       <span  className={cx('column-four-9')}>14:35 - 07/11/2021</span>
       <span  className={cx('column-four-10')}>14:35 - 07/11/2021</span>
       </div>
       <div  className={cx('margin-four')}></div>
       <div  className={cx('column-five')}>
       <span  className={cx('column-five-1')}>Hạn sử dụng</span>
       <span  className={cx('column-five-2')}>14:35 - 12/11/2021</span>
       <span  className={cx('column-five-3')}>14:35 - 12/11/2021</span>
       <span  className={cx('column-five-4')}>14:35 - 12/11/2021</span>
       <span  className={cx('column-five-5')}>14:35 - 12/11/2021</span>
       <span  className={cx('column-five-6')}>14:35 - 12/11/2021</span>
       <span  className={cx('column-five-7')}>14:35 - 12/11/2021</span>
       <span  className={cx('column-five-8')}>14:35 - 12/11/2021</span>
       <span  className={cx('column-five-9')}>14:35 - 12/11/2021</span>
       <span  className={cx('column-five-10')}>14:35 - 12/11/2021</span>
       </div>
       <div  className={cx('margin-five')}></div>
       <div  className={cx('column-six')}>
       <span  className={cx('column-six-1')}>Trạng thái</span>
       <span  className={cx('column-six-2')}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#4277FF"/>
</svg>Đang chờ</span>
<span  className={cx('column-six-3')}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#7E7D88"/>
</svg>Đã sử dụng</span>
<span  className={cx('column-six-4')}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#4277FF"/>
</svg>Đang chờ</span>
<span  className={cx('column-six-5')}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#4277FF"/>
</svg>Đang chờ</span>
<span  className={cx('column-six-6')}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#4277FF"/>
</svg>Đang chờ</span>
<span  className={cx('column-six-7')}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#7E7D88"/>
</svg>Đã sử dụng</span>
<span  className={cx('column-six-8')}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#7E7D88"/>
</svg>Đã sử dụng</span>
<span  className={cx('column-six-9')}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#E73F3F"/>
</svg>Bỏ qua</span>
<span  className={cx('column-six-10')}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#7E7D88"/>
</svg>Đã sử dụng</span>
       </div>
       <div  className={cx('margin-six')}></div>
       <div  className={cx('column-seven')}>
       <span  className={cx('column-seven-1')}>Nguồn cấp</span>
       <span  className={cx('column-seven-2')}>Kiosk</span>
       <span  className={cx('column-seven-3')}>Kiosk</span>
       <span  className={cx('column-seven-4')}>Hệ thống</span>
         <span  className={cx('column-seven-5')}>Hệ thống</span>
         <span  className={cx('column-seven-6')}>Kiosk</span>
         <span  className={cx('column-seven-7')}>Hệ thống</span>
         <span  className={cx('column-seven-8')}>Kiosk</span>
         <span  className={cx('column-seven-9')}>Hệ thống</span>
         <span  className={cx('column-seven-10')}>Hệ thống</span>
       </div>
       <div  className={cx('margin-seven')}></div>
       <div  className={cx('column-eight')}>
       <span  className={cx('column-eight-1')}></span>
       <span  className={cx('column-eight-2')}>Chi tiết</span>
       <span  className={cx('column-eight-3')}>Chi tiết</span>
       <span  className={cx('column-eight-4')}>Chi tiết</span>
       <span  className={cx('column-eight-5')}>Chi tiết</span>
       <span  className={cx('column-eight-6')}>Chi tiết</span>
       <span  className={cx('column-eight-7')}>Chi tiết</span>
       <span  className={cx('column-eight-8')}>Chi tiết</span>
       <span  className={cx('column-eight-9')}>Chi tiết</span>
       <span  className={cx('column-eight-10')}>Chi tiết</span>
       </div>
       </div>
       <div className={cx('footer')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
<path d="M7 1L1 6L7 11" fill="#A9A9B0"/>
<path d="M7 1L1 6L7 11L7 1Z" stroke="#A9A9B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<span className={cx('footer-text-one')}><span>1</span></span>
<span className={cx('footer-text-two')}><span>2</span></span>
<span className={cx('footer-text-three')}><span>3</span></span>
<span className={cx('footer-text-four')}><span>4</span></span>
<span className={cx('footer-text-five')}><span>5</span></span>
<span className={cx('footer-text-six')}><span>...</span></span>
<span className={cx('footer-text-seven')}><span>10</span></span>
<svg className={cx('footer-text-eight')} xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
<path d="M1 11L7 6L1 1" fill="#7E7D88"/>
<path d="M1 11L7 6L1 1L1 11Z" stroke="#7E7D88" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </div>
            <Link to ="/Number/progression" className={cx('right-bar')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M16.8884 0.333008H7.11171C2.86504 0.333008 0.333374 2.86467 0.333374 7.11134V16.8763C0.333374 21.1347 2.86504 23.6663 7.11171 23.6663H16.8767C21.1234 23.6663 23.655 21.1347 23.655 16.888V7.11134C23.6667 2.86467 21.135 0.333008 16.8884 0.333008ZM16.6667 12.8747H12.875V16.6663C12.875 17.1447 12.4784 17.5413 12 17.5413C11.5217 17.5413 11.125 17.1447 11.125 16.6663V12.8747H7.33337C6.85504 12.8747 6.45837 12.478 6.45837 11.9997C6.45837 11.5213 6.85504 11.1247 7.33337 11.1247H11.125V7.33301C11.125 6.85467 11.5217 6.45801 12 6.45801C12.4784 6.45801 12.875 6.85467 12.875 7.33301V11.1247H16.6667C17.145 11.1247 17.5417 11.5213 17.5417 11.9997C17.5417 12.478 17.145 12.8747 16.6667 12.8747Z" fill="#FF9138"/>
</svg>
<span className={cx('right-bar-text')}>Cấp
số mới</span>
            
            </Link>
    </div>
  )
}
