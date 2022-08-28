import React from 'react';
import classNames from 'classnames/bind';
import styles from './devicePage.module.scss'
import {Link} from 'react-router-dom'
const cx=classNames.bind(styles)
const DevicePage = () => {
    return (
        <div>
        <div  className={cx('devicePage')}>
         
        </div>
        <header  className={cx('topbar')}>
                 <span className={cx('device-text')}>Thiết bị</span>
                 <svg className={cx('logo-next')}  xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
<path d="M5.35833 4.40874L1.825 0.875405C1.74753 0.797298 1.65536 0.735302 1.55381 0.692995C1.45226 0.650688 1.34334 0.628906 1.23333 0.628906C1.12332 0.628906 1.0144 0.650688 0.912851 0.692995C0.811302 0.735302 0.719134 0.797298 0.641665 0.875405C0.486456 1.03154 0.399338 1.24275 0.399338 1.4629C0.399338 1.68306 0.486456 1.89427 0.641665 2.0504L3.59167 5.0004L0.641665 7.9504C0.486456 8.10654 0.399338 8.31775 0.399338 8.5379C0.399338 8.75806 0.486456 8.96927 0.641665 9.1254C0.719532 9.20264 0.811878 9.26374 0.91341 9.30521C1.01494 9.34668 1.12366 9.3677 1.23333 9.36707C1.343 9.3677 1.45172 9.34668 1.55325 9.30521C1.65478 9.26374 1.74713 9.20264 1.825 9.1254L5.35833 5.59207C5.43644 5.5146 5.49843 5.42243 5.54074 5.32088C5.58305 5.21934 5.60483 5.11041 5.60483 5.0004C5.60483 4.89039 5.58305 4.78147 5.54074 4.67992C5.49843 4.57837 5.43644 4.48621 5.35833 4.40874Z" fill="#7E7D88"/>
</svg>
<span className={cx('device-index')}>Danh sách thiết bị</span>
<span className={cx('device-index-S')}>Danh sách thiết bị</span>
<span className={cx('status')}>Trạng thái hoạt động</span>
<div className={cx('status-block')}>Tất cả <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
<path d="M1 1L7 7L13 1" fill="#FF7506"/>
<path d="M1 1L7 7L13 1H1Z" stroke="#FF7506" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> </div>
<span className={cx('status-connect')}>Trạng thái kết nối</span>
<div className={cx('status-connect-block')}>Tất cả <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
<path d="M1 1L7 7L13 1" fill="#FF7506"/>
<path d="M1 1L7 7L13 1H1Z" stroke="#FF7506" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> </div>
<span className={cx('keyword')}>Từ khóa </span>
<input type="text" className={cx('keyword-search')} name="text" placeholder="Nhập từ khóa"/>
<svg  className={cx('keyword-search-logo')} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#FF7506" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 17.5L13.875 13.875" stroke="#FF7506" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </header>
            <div className={cx('content-block')}>
               <div className={cx('column-block-one')}>
               <span className={cx('content-column-one')}>
                Mã thiết bị
               </span>
               <span className={cx('content-column-two')}>
               KIO_01
               </span>
               <span className={cx('content-column-three')}>
               KIO_01
               </span>
               <span className={cx('content-column-four')}>
               KIO_01
               </span>
               <span className={cx('content-column-five')}>
               KIO_01
               </span>
               <span className={cx('content-column-six')}>
               KIO_01
               </span>
               <span className={cx('content-column-seven')}>
               KIO_01
               </span>
               <span className={cx('content-column-eight')}>
               KIO_01
               </span>
               <span className={cx('content-column-nine')}>
               KIO_01
               </span>
               <span className={cx('content-column-ten')}>
               KIO_01
               </span>
              </div>
              <div className={cx('margin')}>
             
               </div>
               <div className={cx('column-block-two')}>
               <span className={cx('content-column-one')}>
               Tên thiết bị
               </span>
               <span className={cx('content-column-two')}>
              Kiosk
               </span>
               <span className={cx('content-column-three')}>
              Kiosk
               </span>
               <span className={cx('content-column-four')}>
              Kiosk
               </span>
               <span className={cx('content-column-five')}>
              Kiosk
               </span>
               <span className={cx('content-column-six')}>
              Kiosk
               </span>
               <span className={cx('content-column-seven')}>
              Kiosk
               </span>
               <span className={cx('content-column-eight')}>
              Kiosk
               </span>
               <span className={cx('content-column-nine')}>
              Kiosk
               </span>
               <span className={cx('content-column-ten')}>
              Kiosk
               </span>
              </div>
              <div className={cx('margin-two')}>
             
             </div>
             <div className={cx('column-block-three')}>
               <span className={cx('content-column-one')}>
               Địa chỉ IP
               </span>
               <span className={cx('content-column-two')}>
            192.168.1.10
               </span>
               <span className={cx('content-column-three')}>
            192.168.1.10
               </span>
               <span className={cx('content-column-four')}>
            192.168.1.10
               </span>
               <span className={cx('content-column-five')}>
            192.168.1.10
               </span>
               <span className={cx('content-column-six')}>
            192.168.1.10
               </span>
               <span className={cx('content-column-seven')}>
            192.168.1.10
               </span>
               <span className={cx('content-column-eight')}>
            192.168.1.10
               </span>
               <span className={cx('content-column-nine')}>
            192.168.1.10
               </span>
               <span className={cx('content-column-ten')}>
            192.168.1.10
               </span>
              </div>
              <div className={cx('margin-three')}>
             
             </div>
             <div className={cx('column-block-four')}>
             <span className={cx('column-block-four__text')}>
             Trạng thái hoạt động
             </span>
             <span className={cx('column-block-four__text-one')}>
             <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#EC3740"/>
</svg>   Ngưng hoạt động
             </span>
             <span className={cx('column-block-four__text-two')}> 
             <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#34CD26"/>
</svg> Hoạt động
             </span>
             <span className={cx('column-block-four__text-three')}>
             <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#EC3740"/>
</svg>   Ngưng hoạt động
             </span>
             <span className={cx('column-block-four__text-four')}> 
             <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#34CD26"/>
</svg> Hoạt động
             </span>
             <span className={cx('column-block-four__text-five')}>
             <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#EC3740"/>
</svg>   Ngưng hoạt động
             </span>
             <span className={cx('column-block-four__text-six')}> 
             <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#34CD26"/>
</svg> Hoạt động
             </span>
             <span className={cx('column-block-four__text-seven')}>
             <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#EC3740"/>
</svg>   Ngưng hoạt động
             </span>
            
             <span className={cx('column-block-four__text-nine')}>
             <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#34CD26"/>
</svg> Hoạt động
             </span>
             <span className={cx('column-block-four__text-eight')}> 
             <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#34CD26"/>
</svg> Hoạt động
             </span>
                 </div>
                 <div className={cx('margin-four')}>
             
             </div>
             <div className={cx('column-block-five')}> 
             <span className={cx('column-block-four__text')}>
             Trạng thái kết nối
             </span>
             <span className={cx('column-block-four__text-one')}>
             <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#EC3740"/>
</svg>   Ngưng kết nối
             </span>
             <span className={cx('column-block-four__text-two')}> 
             <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#34CD26"/>
</svg> kết nối
             </span>
             <span className={cx('column-block-four__text-three')}>
             <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#EC3740"/>
</svg>   Ngưng kết nối
             </span>
             <span className={cx('column-block-four__text-four')}> 
             <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#34CD26"/>
</svg> kết nối
             </span>
             <span className={cx('column-block-four__text-five')}>
             <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#EC3740"/>
</svg>   Ngưng kết nối
             </span>
             <span className={cx('column-block-four__text-six')}> 
             <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#34CD26"/>
</svg> kết nối
             </span>
             <span className={cx('column-block-four__text-seven')}>
             <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#EC3740"/>
</svg>   Ngưng kết nối
             </span>
            
             <span className={cx('column-block-four__text-nine')}>
             <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#34CD26"/>
</svg> kết nối
             </span>
             <span className={cx('column-block-four__text-eight')}> 
             <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#34CD26"/>
</svg> kết nối
             </span>
             </div>
             <div className={cx('margin-five')}>
             
             </div>
             <div className={cx('column-block-six')}>
             <span className={cx('column-block-six__text')}>
             Dịch vụ sử dụng
             </span>
             <span className={cx('column-block-six__text-one')}>
             Khám tim mạch, Khám mắt...
            <span>xem thêm</span>
             </span>
             <span className={cx('column-block-six__text-two')}>
             Khám tim mạch, Khám mắt...
            <span>xem thêm</span>
             </span>
             <span className={cx('column-block-six__text-three')}>
             Khám tim mạch, Khám mắt...
            <span>xem thêm</span>
             </span>
             <span className={cx('column-block-six__text-four')}>
             Khám tim mạch, Khám mắt...
            <span>xem thêm</span>
             </span>
             <span className={cx('column-block-six__text-five')}>
             Khám tim mạch, Khám mắt...
            <span>xem thêm</span>
             </span>
             <span className={cx('column-block-six__text-six')}>
             Khám tim mạch, Khám mắt...
            <span>xem thêm</span>
             </span>
             <span className={cx('column-block-six__text-seven')}>
             Khám tim mạch, Khám mắt...
            <span>xem thêm</span>
             </span>
             <span className={cx('column-block-six__text-eight')}>
             Khám tim mạch, Khám mắt...
            <span>xem thêm</span>
             </span>
             <span className={cx('column-block-six__text-nine')}>
             Khám tim mạch, Khám mắt...
            <span>xem thêm</span>
             </span>
             
             </div>
             <div className={cx('margin-six')}>
             
             </div>
             <div className={cx('column-block-seven')}>
             <span className={cx('column-block-seven__text')}>
                     
             </span>
             <span className={cx('column-block-seven__text-one')}>
            <Link to="/Device/Detail">Chi tiết</Link>
             </span>
             <span className={cx('column-block-seven__text-two')}>
            <span>Chi tiết</span>
            
             </span>
             <span className={cx('column-block-seven__text-three')}>
            <span>Chi tiết</span>
             </span>
             <span className={cx('column-block-seven__text-four')}>
            <span>Chi tiết</span>
            
             </span>
             <span className={cx('column-block-seven__text-five')}>
            <span>Chi tiết</span>
            
             </span>
             <span className={cx('column-block-seven__text-six')}>
            <span>Chi tiết</span>
            
             </span>
             <span className={cx('column-block-seven__text-seven')}>
            <span>Chi tiết</span>
            
             </span>
             <span className={cx('column-block-seven__text-eight')}>
            <span>Chi tiết</span>
            
             </span>
             <span className={cx('column-block-seven__text-nine')}>
            <span>Chi tiết</span>
            
             </span>
             </div>
             <div className={cx('margin-seven')}>
             
             </div>
             <div className={cx('column-block-eight')}>
             <span className={cx('column-block-seven__text')}>
                     
                     </span>
                     <span className={cx('column-block-seven__text-one')}>
                    <span>Cập nhật</span>
                     </span>
                     <span className={cx('column-block-seven__text-two')}>
                    <span>Cập nhật</span>
                    
                     </span>
                     <span className={cx('column-block-seven__text-three')}>
                    <span>Cập nhật</span>
                     </span>
                     <span className={cx('column-block-seven__text-four')}>
                    <span>Cập nhật</span>
                    
                     </span>
                     <span className={cx('column-block-seven__text-five')}>
                    <span>Cập nhật</span>
                    
                     </span>
                     <span className={cx('column-block-seven__text-six')}>
                    <span>Cập nhật</span>
                    
                     </span>
                     <span className={cx('column-block-seven__text-seven')}>
                    <span>Cập nhật</span>
                    
                     </span>
                     <span className={cx('column-block-seven__text-eight')}>
                    <span>Cập nhật</span>
                    
                     </span>
                     <span className={cx('column-block-seven__text-nine')}>
                    <span>Cập nhật</span>
                    
                     </span>
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
       
           <Link to ="/Device/ADD" className={cx('rightbar-add')}>
           <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
<path d="M18.8884 2.33301H9.11171C4.86504 2.33301 2.33337 4.86467 2.33337 9.11134V18.8763C2.33337 23.1347 4.86504 25.6663 9.11171 25.6663H18.8767C23.1234 25.6663 25.655 23.1347 25.655 18.888V9.11134C25.6667 4.86467 23.135 2.33301 18.8884 2.33301ZM18.6667 14.8747H14.875V18.6663C14.875 19.1447 14.4784 19.5413 14 19.5413C13.5217 19.5413 13.125 19.1447 13.125 18.6663V14.8747H9.33337C8.85504 14.8747 8.45837 14.478 8.45837 13.9997C8.45837 13.5213 8.85504 13.1247 9.33337 13.1247H13.125V9.33301C13.125 8.85467 13.5217 8.45801 14 8.45801C14.4784 8.45801 14.875 8.85467 14.875 9.33301V13.1247H18.6667C19.145 13.1247 19.5417 13.5213 19.5417 13.9997C19.5417 14.478 19.145 14.8747 18.6667 14.8747Z" fill="#FF9138"/>
</svg>
<span to="/v" className={cx('add-device')}>
Thêm thiết bị
</span>
           </Link>
         
        </div>
    );
}

export default DevicePage;
