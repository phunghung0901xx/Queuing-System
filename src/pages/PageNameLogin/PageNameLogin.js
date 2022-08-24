import React from 'react'
import {useState} from 'react'
import classNames from 'classnames/bind';
import styles from './PageNameLogin.module.scss'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useSelector} from 'react-redux';
import Navbar from "./navbar/Navbar"
const cx=classNames.bind(styles)


function PageNameLogin() {
  const user = useSelector((state) => state.user)
 
  
   
   
  return (
   <div>
    <div className={cx('wrap')}>
   
   
   
            
    </div>
    <div  className={cx('topbar')}>
    <div  className={cx('info')}>Thông tin cá nhân</div>
    <svg   className={cx('logo')} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<rect width="32" height="32" rx="16" fill="#FFF2E7"/>
<path d="M22.1168 18.0743L21.2834 16.691C21.1084 16.3827 20.9501 15.7993 20.9501 15.4577V13.3493C20.9501 11.391 19.8001 9.69935 18.1418 8.90768C17.7084 8.14102 16.9084 7.66602 15.9918 7.66602C15.0834 7.66602 14.2668 8.15768 13.8334 8.93268C12.2084 9.74102 11.0834 11.416 11.0834 13.3493V15.4577C11.0834 15.7993 10.9251 16.3827 10.7501 16.6827L9.90845 18.0743C9.57512 18.6327 9.50012 19.2493 9.70845 19.816C9.90845 20.3743 10.3834 20.8077 11.0001 21.016C12.6168 21.566 14.3168 21.8327 16.0168 21.8327C17.7168 21.8327 19.4168 21.566 21.0334 21.0244C21.6168 20.8327 22.0668 20.391 22.2834 19.816C22.5001 19.241 22.4418 18.6077 22.1168 18.0743Z" fill="#FFAC6A"/>
<path d="M18.3582 22.6743C18.0082 23.641 17.0832 24.3327 15.9999 24.3327C15.3416 24.3327 14.6916 24.066 14.2332 23.591C13.9666 23.341 13.7666 23.0077 13.6499 22.666C13.7582 22.6827 13.8666 22.691 13.9832 22.7077C14.1749 22.7327 14.3749 22.7577 14.5749 22.7743C15.0499 22.816 15.5332 22.841 16.0166 22.841C16.4916 22.841 16.9666 22.816 17.4332 22.7743C17.6082 22.7577 17.7832 22.7493 17.9499 22.7243C18.0832 22.7077 18.2166 22.691 18.3582 22.6743Z" fill="#FFAC6A"/>
</svg>
    <span   className={cx('hello')}>Xin chào</span>
    <span   className={cx('username')}>{user.name}</span>
    
   </div>
   <div  className={cx('infoNameid')} >
    <div  className={cx('infoNameid-img')}>

    </div>
    <span  className={cx('infoNameid-name')} >{user.name}</span>
    <div className={cx('infoNameid-block')}>   
    <span  className={cx('infoNameid-name-second')}>Tên người dùng </span>
    <span  className={cx('display')}>{user.name}</span>
    </div>
    <div className={cx('phoneNumber-block')}>   
    <span  className={cx('phoneNumber-name')}>Số điện thoại</span>
    <span  className={cx('displayPhone')}>{user.phoneNumber}</span>
    </div>
    <div className={cx('email-block')}>   
    <span  className={cx('email-name')}>Email:</span>
    <span  className={cx('displayEmail')}>{user.email}</span>
    </div>
    <div className={cx('loginName-block')}>   
    <span  className={cx('login-name')}>Tên đăng nhập</span>
    <span  className={cx('displayLogin')}>{user.nameId}</span>
    </div>
    <div className={cx('password-block')}>   
    <span  className={cx('password-name')}>Mật khẩu</span>
    <span  className={cx('displayPassword')}>{user.password}</span>
    </div>
    <div className={cx('role-block')}>   
    <span  className={cx('role-name')}>Vai trò:</span>
    <span  className={cx('displayRole')}>{user.role}</span>
    </div>
   </div>
    </div>
  )
}
export default  PageNameLogin
