import React from 'react';
import classNames from 'classnames/bind';
import styles from  './ProgressionPage.module.scss'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
const cx=classNames.bind(styles)
const ProgressionPage = () => {
    const user = useSelector((state) => state.user)
    return (
        <div>
             <div  className={cx('progressionpage')}>

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
<svg className={cx('logo-next-two')} xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
<path d="M5.35841 4.40874L1.82507 0.875405C1.74761 0.797298 1.65544 0.735302 1.55389 0.692995C1.45234 0.650688 1.34342 0.628906 1.23341 0.628906C1.1234 0.628906 1.01448 0.650688 0.912927 0.692995C0.811378 0.735302 0.71921 0.797298 0.641741 0.875405C0.486532 1.03154 0.399414 1.24275 0.399414 1.4629C0.399414 1.68306 0.486532 1.89427 0.641741 2.0504L3.59174 5.0004L0.641741 7.9504C0.486532 8.10654 0.399414 8.31775 0.399414 8.5379C0.399414 8.75806 0.486532 8.96927 0.641741 9.1254C0.719608 9.20264 0.811955 9.26374 0.913486 9.30521C1.01502 9.34668 1.12374 9.3677 1.23341 9.36707C1.34308 9.3677 1.4518 9.34668 1.55333 9.30521C1.65486 9.26374 1.74721 9.20264 1.82507 9.1254L5.35841 5.59207C5.43652 5.5146 5.49851 5.42243 5.54082 5.32088C5.58312 5.21934 5.60491 5.11041 5.60491 5.0004C5.60491 4.89039 5.58312 4.78147 5.54082 4.67992C5.49851 4.57837 5.43652 4.48621 5.35841 4.40874Z" fill="#7E7D88"/>
</svg>
<span className={cx('add-device')}>Cấp số mới</span>
<span  className={cx('device-index-S')}>Quản lý cấp số</span>
</header>
<div  className={cx('content-block')}> 
<span className={cx('header-text')}>Cấp số mới</span>
<span className={cx('header-text-service')}>Dịch vụ khách hàng lựa chọn</span>
<span className={cx('block')}>chọn dịch vụ<svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
<path d="M1 1L7 7L13 1" fill="#FF7506"/>
<path d="M1 1L7 7L13 1H1Z" stroke="#FF7506" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
<button className={cx('cancle')}>Hủy bỏ</button>
<button className={cx('print')}>In số</button>
</div>
        </div>
    );
}

export default ProgressionPage;
