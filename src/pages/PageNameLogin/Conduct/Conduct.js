import React from 'react';

import classNames from 'classnames/bind';
import styles from './Conduct.module.scss'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
const cx=classNames.bind(styles)
const Conduct = () => {
    const user = useSelector((state) => state.user)
    return (

        <div>
            <div  className={cx('Conduct')}>
          
                </div> 
                <header  className={cx('topbar')}>
            <span className={cx('device-text')}>Cài đặt hệ thống</span>
                 <svg className={cx('logo-next')}  xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
<path d="M5.35833 4.40874L1.825 0.875405C1.74753 0.797298 1.65536 0.735302 1.55381 0.692995C1.45226 0.650688 1.34334 0.628906 1.23333 0.628906C1.12332 0.628906 1.0144 0.650688 0.912851 0.692995C0.811302 0.735302 0.719134 0.797298 0.641665 0.875405C0.486456 1.03154 0.399338 1.24275 0.399338 1.4629C0.399338 1.68306 0.486456 1.89427 0.641665 2.0504L3.59167 5.0004L0.641665 7.9504C0.486456 8.10654 0.399338 8.31775 0.399338 8.5379C0.399338 8.75806 0.486456 8.96927 0.641665 9.1254C0.719532 9.20264 0.811878 9.26374 0.91341 9.30521C1.01494 9.34668 1.12366 9.3677 1.23333 9.36707C1.343 9.3677 1.45172 9.34668 1.55325 9.30521C1.65478 9.26374 1.74713 9.20264 1.825 9.1254L5.35833 5.59207C5.43644 5.5146 5.49843 5.42243 5.54074 5.32088C5.58305 5.21934 5.60483 5.11041 5.60483 5.0004C5.60483 4.89039 5.58305 4.78147 5.54074 4.67992C5.49843 4.57837 5.43644 4.48621 5.35833 4.40874Z" fill="#7E7D88"/>
</svg>
<span className={cx('device-index')}>Nhật ký hoạt động</span>
<svg className={cx('logo-next-two')} xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
<path d="M5.35841 4.40874L1.82507 0.875405C1.74761 0.797298 1.65544 0.735302 1.55389 0.692995C1.45234 0.650688 1.34342 0.628906 1.23341 0.628906C1.1234 0.628906 1.01448 0.650688 0.912927 0.692995C0.811378 0.735302 0.71921 0.797298 0.641741 0.875405C0.486532 1.03154 0.399414 1.24275 0.399414 1.4629C0.399414 1.68306 0.486532 1.89427 0.641741 2.0504L3.59174 5.0004L0.641741 7.9504C0.486532 8.10654 0.399414 8.31775 0.399414 8.5379C0.399414 8.75806 0.486532 8.96927 0.641741 9.1254C0.719608 9.20264 0.811955 9.26374 0.913486 9.30521C1.01502 9.34668 1.12374 9.3677 1.23341 9.36707C1.34308 9.3677 1.4518 9.34668 1.55333 9.30521C1.65486 9.26374 1.74721 9.20264 1.82507 9.1254L5.35841 5.59207C5.43652 5.5146 5.49851 5.42243 5.54082 5.32088C5.58312 5.21934 5.60491 5.11041 5.60491 5.0004C5.60491 4.89039 5.58312 4.78147 5.54082 4.67992C5.49851 4.57837 5.43652 4.48621 5.35841 4.40874Z" fill="#7E7D88"/>
</svg>
<span  className={cx('img-bar')}></span>
<span  className={cx('hello-bar')}>Xin chào</span>
<span  className={cx('name-bar')}>{user.name}</span>
<span  className={cx('select-time')}>Chọn thời gian</span>
<span  className={cx('keyword')}>Từ khóa</span>
<input type="text"  className={cx('keyword-input')} placeholder="Nhập từ khóa"/>
<svg className={cx('search-logo')} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#FF7506" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 17.5L13.875 13.875" stroke="#FF7506" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </header>
            <div className={cx('content-block')}>
            <div className={cx('column-one')}>
            <div className={cx('column-one-1')}>
            Tên đăng nhập
            </div>
            <div className={cx('column-one-2')}>tuyetnguyen@12</div>
            <div className={cx('column-one-3')}>tuyetnguyen@12</div>
            <div className={cx('column-one-4')}>tuyetnguyen@12</div>
            <div className={cx('column-one-5')}>tuyetnguyen@12</div>
            <div className={cx('column-one-6')}>tuyetnguyen@12</div>
            <div className={cx('column-one-7')}>tuyetnguyen@12</div>
            <div className={cx('column-one-8')}>tuyetnguyen@12</div>
            <div className={cx('column-one-9')}>tuyetnguyen@12</div>
            <div className={cx('column-one-10')}>tuyetnguyen@12</div>
            <div className={cx('column-one-11')}>tuyetnguyen@12</div>
            </div>
            <div className={cx('margin')}></div>
            <div className={cx('column-two')}>
            <div className={cx('column-one-1')}>
            Thời gian tác động
            </div>
            <div className={cx('column-one-2')}>01/12/2021 15:12:17</div>
            <div className={cx('column-one-3')}>01/12/2021 15:12:17</div>
            <div className={cx('column-one-4')}>01/12/2021 15:12:17</div>
            <div className={cx('column-one-5')}>01/12/2021 15:12:17</div>
            <div className={cx('column-one-6')}>01/12/2021 15:12:17</div>
            <div className={cx('column-one-7')}>01/12/2021 15:12:17</div>
            <div className={cx('column-one-8')}>01/12/2021 15:12:17</div>
            <div className={cx('column-one-9')}>01/12/2021 15:12:17</div>
            <div className={cx('column-one-10')}>01/12/2021 15:12:17</div>
            <div className={cx('column-one-11')}>01/12/2021 15:12:17</div>
            </div>
            <div className={cx('margin-two')}></div>
            <div className={cx('column-three')}>
            <div className={cx('column-one-1')}>
            IP thực hiện
            </div>
            <div className={cx('column-one-2')}>192.168.3.1</div>
            <div className={cx('column-one-3')}>192.168.3.1</div>
            <div className={cx('column-one-4')}>192.168.3.1</div>
            <div className={cx('column-one-5')}>192.168.3.1</div>
            <div className={cx('column-one-6')}>192.168.3.1</div>
            <div className={cx('column-one-7')}>192.168.3.1</div>
            <div className={cx('column-one-8')}>192.168.3.1</div>
            <div className={cx('column-one-9')}>192.168.3.1</div>
            <div className={cx('column-one-10')}>192.168.3.1</div>
            <div className={cx('column-one-11')}>192.168.3.1</div>
            </div>
            <div className={cx('margin-three')}></div>
            <div className={cx('column-four')}>
            <div className={cx('column-one-1')}>
            Thao tác thực hiện
            </div>
            <div className={cx('column-one-2')}>Cập nhật thông tin dịch vụ DV_01</div>
            <div className={cx('column-one-3')}>Cập nhật thông tin dịch vụ DV_01</div>
            <div className={cx('column-one-4')}>Cập nhật thông tin dịch vụ DV_01</div>
            <div className={cx('column-one-5')}>Cập nhật thông tin dịch vụ DV_01</div>
            <div className={cx('column-one-6')}>Cập nhật thông tin dịch vụ DV_01</div>
            <div className={cx('column-one-7')}>Cập nhật thông tin dịch vụ DV_01</div>
            <div className={cx('column-one-8')}>Cập nhật thông tin dịch vụ DV_01</div>
            <div className={cx('column-one-9')}>Cập nhật thông tin dịch vụ DV_01</div>
            <div className={cx('column-one-10')}>Cập nhật thông tin dịch vụ DV_01</div>
            <div className={cx('column-one-11')}>Cập nhật thông tin dịch vụ DV_01</div>
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
        </div>
    );
}

export default Conduct;
