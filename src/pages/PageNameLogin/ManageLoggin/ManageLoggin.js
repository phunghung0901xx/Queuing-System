import React from 'react';

import classNames from 'classnames/bind';
import styles from './ManageLoggin.module.scss'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
const cx=classNames.bind(styles)
export default function ManageLoggin() {
    const user = useSelector((state) => state.user)
  return (
    <div>
      <div  className={cx('ManageLoggin')}>
          
          </div> 
          <header  className={cx('topbar')}>
            <span className={cx('device-text')}>Cài đặt hệ thống</span>
                 <svg className={cx('logo-next')}  xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
<path d="M5.35833 4.40874L1.825 0.875405C1.74753 0.797298 1.65536 0.735302 1.55381 0.692995C1.45226 0.650688 1.34334 0.628906 1.23333 0.628906C1.12332 0.628906 1.0144 0.650688 0.912851 0.692995C0.811302 0.735302 0.719134 0.797298 0.641665 0.875405C0.486456 1.03154 0.399338 1.24275 0.399338 1.4629C0.399338 1.68306 0.486456 1.89427 0.641665 2.0504L3.59167 5.0004L0.641665 7.9504C0.486456 8.10654 0.399338 8.31775 0.399338 8.5379C0.399338 8.75806 0.486456 8.96927 0.641665 9.1254C0.719532 9.20264 0.811878 9.26374 0.91341 9.30521C1.01494 9.34668 1.12366 9.3677 1.23333 9.36707C1.343 9.3677 1.45172 9.34668 1.55325 9.30521C1.65478 9.26374 1.74713 9.20264 1.825 9.1254L5.35833 5.59207C5.43644 5.5146 5.49843 5.42243 5.54074 5.32088C5.58305 5.21934 5.60483 5.11041 5.60483 5.0004C5.60483 4.89039 5.58305 4.78147 5.54074 4.67992C5.49843 4.57837 5.43644 4.48621 5.35833 4.40874Z" fill="#7E7D88"/>
</svg>
<span className={cx('device-index')}>Quản lý tài khoản</span>
<svg className={cx('logo-next-two')} xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
<path d="M5.35841 4.40874L1.82507 0.875405C1.74761 0.797298 1.65544 0.735302 1.55389 0.692995C1.45234 0.650688 1.34342 0.628906 1.23341 0.628906C1.1234 0.628906 1.01448 0.650688 0.912927 0.692995C0.811378 0.735302 0.71921 0.797298 0.641741 0.875405C0.486532 1.03154 0.399414 1.24275 0.399414 1.4629C0.399414 1.68306 0.486532 1.89427 0.641741 2.0504L3.59174 5.0004L0.641741 7.9504C0.486532 8.10654 0.399414 8.31775 0.399414 8.5379C0.399414 8.75806 0.486532 8.96927 0.641741 9.1254C0.719608 9.20264 0.811955 9.26374 0.913486 9.30521C1.01502 9.34668 1.12374 9.3677 1.23341 9.36707C1.34308 9.3677 1.4518 9.34668 1.55333 9.30521C1.65486 9.26374 1.74721 9.20264 1.82507 9.1254L5.35841 5.59207C5.43652 5.5146 5.49851 5.42243 5.54082 5.32088C5.58312 5.21934 5.60491 5.11041 5.60491 5.0004C5.60491 4.89039 5.58312 4.78147 5.54082 4.67992C5.49851 4.57837 5.43652 4.48621 5.35841 4.40874Z" fill="#7E7D88"/>
</svg>
<span className={cx('header-text')}>Danh sách tài khoản</span>
<span  className={cx('img-bar')}></span>
<span  className={cx('hello-bar')}>Xin chào</span>
<span  className={cx('name-bar')}>{user.name}</span>
<span  className={cx('name-role')}>tên vai trò</span>
<span  className={cx('name-role-block')}>Tất cả <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M6 9L12 15L18 9" fill="#FF7506"/>
<path d="M6 9L12 15L18 9H6Z" stroke="#FF7506" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
<span  className={cx('keyword')}>Từ khóa</span>
<input type="text"  className={cx('keyword-input')} placeholder="Nhập từ khóa"/>
<svg className={cx('search-logo')} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#FF7506" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 17.5L13.875 13.875" stroke="#FF7506" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </header>
            <div className={cx('content-block')}>
                <div className={cx('column-one')}>
                    <span className={cx('column-one-1')}>Tên đăng nhập</span>
                    <span className={cx('column-one-2')}>tuyetnguyen@12</span>
                    <span className={cx('column-one-3')}>tuyetnguyen@10</span>
                    <span className={cx('column-one-4')}>tuyetnguyen@22</span>
                    <span className={cx('column-one-5')}>tuyetnguyen@18</span>
                    <span className={cx('column-one-6')}>tuyetnguyen@19</span>
                    <span className={cx('column-one-7')}>tuyetnguyen@18</span>
                    <span className={cx('column-one-8')}>tuyetnguyen@16</span>
                    <span className={cx('column-one-9')}>tuyetnguyen@14</span>
                    <span className={cx('column-one-10')}>tuyetnguyen@13</span>
                </div>
                <div className={cx('margin')}></div>
                <div className={cx('column-two')}>
                <span className={cx('column-two-1')}>Họ tên</span>
                <span className={cx('column-two-2')}>Nguyen Văn A</span>
                <span className={cx('column-two-3')}>Nguyen Văn B</span>
                <span className={cx('column-two-4')}>Nguyen Văn C</span>
                <span className={cx('column-two-5')}>Nguyen Văn D</span>
                <span className={cx('column-two-6')}>Nguyen Văn T</span>
                <span className={cx('column-two-7')}>Nguyen Văn K</span>
                <span className={cx('column-two-8')}>Nguyen Văn N</span>
                <span className={cx('column-two-9')}>Nguyen Văn M</span>
                <span className={cx('column-two-10')}>Nguyen Văn L</span>
                </div>
                <div className={cx('margin-two')}></div>
                <div className={cx('column-three')}>
                <span className={cx('column-three-1')}>Số điện thoại</span>
                <span className={cx('column-three-2')}>0919256712</span>
                <span className={cx('column-three-3')}>0919256712</span>
                <span className={cx('column-three-4')}>0919256712</span>
                <span className={cx('column-three-5')}>0919256715</span>
                <span className={cx('column-three-6')}>0919256712</span>
                <span className={cx('column-three-7')}>0919256712</span>
                <span className={cx('column-three-8')}>0919257008</span>
                <span className={cx('column-three-9')}>0919257003</span>
                <span className={cx('column-three-10')}>0919257074</span>
                </div>
                <div className={cx('margin-three')}></div>
                <div className={cx('column-four')}>
                <span className={cx('column-four-1')}>Email</span>
                <span className={cx('column-four-2')}>tuyetnguyen123@gmail.com</span>
                <span className={cx('column-four-3')}>tuyetnguyen123@gmail.com</span>
                <span className={cx('column-four-4')}>tuyetnguyen232@gmail.com</span>
                <span className={cx('column-four-5')}>tuyetnguyen232@gmail.com</span>
                <span className={cx('column-four-6')}>tuyetnguyen244@gmail.com</span>
                <span className={cx('column-four-7')}>tuyetnguyen242@gmail.com</span>
                <span className={cx('column-four-8')}>tuyetnguyen122@gmail.com</span>
                <span className={cx('column-four-9')}>tuyetnguyen227@gmail.com</span>
                <span className={cx('column-four-10')}>tuyetnguyen278@gmail.com</span>
            
                </div>
                <div className={cx('margin-four')}></div>
                <div className={cx('column-five')}>
                <span className={cx('column-five-1')}>Vai trò</span>
                <span className={cx('column-five-2')}>Kế toán</span>
                <span className={cx('column-five-3')}>Kế toán</span>
                <span className={cx('column-five-4')}>Kế toán</span>
                <span className={cx('column-five-5')}>Kế toán</span>
                <span className={cx('column-five-6')}>Kế toán</span>
                <span className={cx('column-five-7')}>Kế toán</span>
                <span className={cx('column-five-8')}>Kế toán</span>
                <span className={cx('column-five-9')}>Kế toán</span>
                <span className={cx('column-five-10')}>Kế toán</span>
                </div>
                <div className={cx('margin-five')}></div>
                <div className={cx('column-six')}>
                <span className={cx('column-six-1')}>Trạng thái hoạt động</span>
                <span className={cx('column-six-2')}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#34CD26"/>
</svg>Hoạt động</span>
<span className={cx('column-six-3')}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#34CD26"/>
</svg>Hoạt động</span>
<span className={cx('column-six-4')}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#EC3740"/>
</svg>Ngưng hoạt động</span>
<span className={cx('column-six-5')}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#34CD26"/>
</svg>Hoạt động</span>
<span className={cx('column-six-6')}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#34CD26"/>
</svg>Hoạt động</span>
<span className={cx('column-six-7')}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#34CD26"/>
</svg>Hoạt động</span>
<span className={cx('column-six-8')}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#34CD26"/>
</svg>Hoạt động</span>
<span className={cx('column-six-9')}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#EC3740"/>
</svg>Ngưng hoạt động</span>
<span className={cx('column-six-10')}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#34CD26"/>
</svg>Hoạt động</span>
                </div>
                <div className={cx('margin-six')}></div>
                <div className={cx('column-seven')}>
                <span className={cx('column-seven-1')}>
             
                </span>
                <span className={cx('column-seven-2')}>
                Cập nhật
                </span>
                <span className={cx('column-seven-3')}>
                Cập nhật
                </span>
                <span className={cx('column-seven-4')}>
                Cập nhật
                </span>
                <span className={cx('column-seven-5')}>
                Cập nhật
                </span>
                <span className={cx('column-seven-6')}>
                Cập nhật
                </span>
                <span className={cx('column-seven-7')}>
                Cập nhật
                </span>
                <span className={cx('column-seven-8')}>
                Cập nhật
                </span>
                <span className={cx('column-seven-9')}>
                Cập nhật
                </span>
                <span className={cx('column-seven-10')}>
                Cập nhật
                </span>
                </div>
             
            </div>
            <div className={cx('right-bar')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="86" height="106" viewBox="0 0 86 106" fill="none">
<g filter="url(#filter0_d_282_8797)">
<path d="M6 14C6 9.58172 9.58172 6 14 6H86V100H14C9.58172 100 6 96.4183 6 92V14Z" fill="#FFF2E7"/>
<path d="M50.8884 20.3335H41.1117C36.865 20.3335 34.3334 22.8652 34.3334 27.1118V36.8768C34.3334 41.1352 36.865 43.6668 41.1117 43.6668H50.8767C55.1234 43.6668 57.655 41.1352 57.655 36.8885V27.1118C57.6667 22.8652 55.135 20.3335 50.8884 20.3335ZM50.6667 32.8752H46.875V36.6668C46.875 37.1452 46.4784 37.5418 46 37.5418C45.5217 37.5418 45.125 37.1452 45.125 36.6668V32.8752H41.3334C40.855 32.8752 40.4584 32.4785 40.4584 32.0002C40.4584 31.5218 40.855 31.1252 41.3334 31.1252H45.125V27.3335C45.125 26.8552 45.5217 26.4585 46 26.4585C46.4784 26.4585 46.875 26.8552 46.875 27.3335V31.1252H50.6667C51.145 31.1252 51.5417 31.5218 51.5417 32.0002C51.5417 32.4785 51.145 32.8752 50.6667 32.8752Z" fill="#FF9138"/>
<path d="M31.8325 64.07C31.6178 64.07 31.4405 64.0047 31.3005 63.874C31.1698 63.734 31.1045 63.5567 31.1045 63.342V55.334H28.3045C27.8565 55.334 27.6325 55.1333 27.6325 54.732C27.6325 54.536 27.6885 54.3867 27.8005 54.284C27.9218 54.1813 28.0898 54.13 28.3045 54.13H35.3605C35.5752 54.13 35.7385 54.1813 35.8505 54.284C35.9718 54.3867 36.0325 54.536 36.0325 54.732C36.0325 55.1333 35.8085 55.334 35.3605 55.334H32.5605V63.342C32.5605 63.5567 32.4952 63.734 32.3645 63.874C32.2338 64.0047 32.0565 64.07 31.8325 64.07ZM41.5227 57C43.1467 57 43.9587 57.9193 43.9587 59.758V63.398C43.9587 63.6033 43.8933 63.7667 43.7627 63.888C43.632 64.0093 43.4593 64.07 43.2447 64.07C43.03 64.07 42.8573 64.0093 42.7267 63.888C42.6053 63.7667 42.5447 63.6033 42.5447 63.398V59.772C42.5447 59.212 42.428 58.8013 42.1947 58.54C41.9707 58.2787 41.616 58.148 41.1307 58.148C40.5613 58.148 40.104 58.3253 39.7587 58.68C39.4133 59.0347 39.2407 59.5107 39.2407 60.108V63.398C39.2407 63.6033 39.1753 63.7667 39.0447 63.888C38.9233 64.0093 38.7553 64.07 38.5407 64.07C38.326 64.07 38.1533 64.0093 38.0227 63.888C37.892 63.7667 37.8267 63.6033 37.8267 63.398V54.732C37.8267 54.5267 37.892 54.3633 38.0227 54.242C38.1627 54.1207 38.34 54.06 38.5547 54.06C38.76 54.06 38.9233 54.1207 39.0447 54.242C39.1753 54.354 39.2407 54.508 39.2407 54.704V58.204C39.474 57.812 39.7867 57.5133 40.1787 57.308C40.5707 57.1027 41.0187 57 41.5227 57ZM51.2411 62.278C51.3718 62.278 51.4791 62.3293 51.5631 62.432C51.6471 62.5347 51.6891 62.6653 51.6891 62.824C51.6891 63.0947 51.5211 63.3233 51.1851 63.51C50.8584 63.6967 50.4991 63.8413 50.1071 63.944C49.7244 64.0467 49.3558 64.098 49.0011 64.098C47.9184 64.098 47.0644 63.7853 46.4391 63.16C45.8138 62.5253 45.5011 61.662 45.5011 60.57C45.5011 59.87 45.6364 59.2493 45.9071 58.708C46.1871 58.1667 46.5744 57.7467 47.0691 57.448C47.5731 57.1493 48.1424 57 48.7771 57C49.6918 57 50.4151 57.294 50.9471 57.882C51.4791 58.47 51.7451 59.2633 51.7451 60.262C51.7451 60.6353 51.5771 60.822 51.2411 60.822H46.9151C47.0084 62.2687 47.7038 62.992 49.0011 62.992C49.3464 62.992 49.6451 62.9453 49.8971 62.852C50.1491 62.7587 50.4151 62.6373 50.6951 62.488C50.7231 62.4693 50.7978 62.432 50.9191 62.376C51.0498 62.3107 51.1571 62.278 51.2411 62.278ZM48.8051 58.036C48.2638 58.036 47.8298 58.2087 47.5031 58.554C47.1764 58.8993 46.9804 59.3847 46.9151 60.01H50.5271C50.4991 59.3753 50.3358 58.89 50.0371 58.554C49.7478 58.2087 49.3371 58.036 48.8051 58.036ZM47.7131 56.076C47.6104 56.244 47.4658 56.328 47.2791 56.328C47.1484 56.328 47.0318 56.2813 46.9291 56.188C46.8358 56.0947 46.7891 55.9827 46.7891 55.852C46.7891 55.7493 46.8264 55.6467 46.9011 55.544L48.1611 53.738C48.2544 53.6167 48.3478 53.528 48.4411 53.472C48.5344 53.4067 48.6464 53.374 48.7771 53.374C48.9078 53.374 49.0198 53.402 49.1131 53.458C49.2064 53.514 49.2998 53.6073 49.3931 53.738L50.6531 55.544C50.7278 55.6467 50.7651 55.7493 50.7651 55.852C50.7651 55.9827 50.7138 56.0947 50.6111 56.188C50.5178 56.2813 50.4058 56.328 50.2751 56.328C50.0978 56.328 49.9531 56.244 49.8411 56.076L48.7771 54.396L47.7131 56.076ZM61.1432 57C62.6739 57 63.4392 57.9193 63.4392 59.758V63.398C63.4392 63.6127 63.3739 63.7807 63.2432 63.902C63.1126 64.014 62.9399 64.07 62.7252 64.07C62.5199 64.07 62.3519 64.014 62.2212 63.902C62.0906 63.7807 62.0252 63.6127 62.0252 63.398V59.772C62.0252 59.2027 61.9226 58.792 61.7172 58.54C61.5119 58.2787 61.1899 58.148 60.7512 58.148C60.2379 58.148 59.8319 58.3253 59.5332 58.68C59.2346 59.0253 59.0852 59.5013 59.0852 60.108V63.398C59.0852 63.6127 59.0199 63.7807 58.8892 63.902C58.7586 64.014 58.5859 64.07 58.3712 64.07C58.1659 64.07 57.9979 64.014 57.8672 63.902C57.7366 63.7807 57.6712 63.6127 57.6712 63.398V59.772C57.6712 59.2027 57.5686 58.792 57.3632 58.54C57.1579 58.2787 56.8359 58.148 56.3972 58.148C55.8839 58.148 55.4732 58.3253 55.1652 58.68C54.8666 59.0253 54.7172 59.5013 54.7172 60.108V63.398C54.7172 63.6127 54.6519 63.7807 54.5212 63.902C54.3906 64.014 54.2226 64.07 54.0172 64.07C53.8119 64.07 53.6392 64.014 53.4992 63.902C53.3686 63.7807 53.3032 63.6127 53.3032 63.398V57.7C53.3032 57.4947 53.3732 57.3313 53.5132 57.21C53.6532 57.0887 53.8212 57.028 54.0172 57.028C54.2132 57.028 54.3719 57.0887 54.4932 57.21C54.6239 57.322 54.6892 57.4807 54.6892 57.686V58.204C54.8946 57.812 55.1792 57.5133 55.5432 57.308C55.9072 57.1027 56.3272 57 56.8032 57C57.3259 57 57.7552 57.1073 58.0912 57.322C58.4366 57.5367 58.6932 57.868 58.8612 58.316C59.0666 57.9147 59.3699 57.5973 59.7712 57.364C60.1726 57.1213 60.6299 57 61.1432 57ZM21.1912 81.992C21.3966 82.0107 21.5412 82.0667 21.6252 82.16C21.7186 82.244 21.7652 82.3653 21.7652 82.524C21.7652 82.7107 21.6906 82.8553 21.5412 82.958C21.4012 83.0513 21.1912 83.0887 20.9112 83.07L20.5332 83.042C19.7772 82.986 19.2126 82.7573 18.8392 82.356C18.4659 81.9453 18.2792 81.3433 18.2792 80.55V77.26H17.4392C17.0286 77.26 16.8232 77.078 16.8232 76.714C16.8232 76.546 16.8746 76.4153 16.9772 76.322C17.0892 76.2193 17.2432 76.168 17.4392 76.168H18.2792V74.726C18.2792 74.5113 18.3399 74.3433 18.4612 74.222C18.5919 74.1007 18.7646 74.04 18.9792 74.04C19.1939 74.04 19.3666 74.1007 19.4972 74.222C19.6279 74.3433 19.6932 74.5113 19.6932 74.726V76.168H21.0792C21.2752 76.168 21.4246 76.2193 21.5272 76.322C21.6392 76.4153 21.6952 76.546 21.6952 76.714C21.6952 76.8913 21.6392 77.0267 21.5272 77.12C21.4246 77.2133 21.2752 77.26 21.0792 77.26H19.6932V80.648C19.6932 81.0867 19.7819 81.4087 19.9592 81.614C20.1459 81.8193 20.4259 81.936 20.7992 81.964L21.1912 81.992ZM25.6508 76C26.5561 76 27.2281 76.2287 27.6668 76.686C28.1148 77.1433 28.3388 77.8387 28.3388 78.772V82.398C28.3388 82.6127 28.2781 82.7807 28.1568 82.902C28.0354 83.014 27.8674 83.07 27.6528 83.07C27.4474 83.07 27.2841 83.0093 27.1628 82.888C27.0414 82.7667 26.9808 82.6033 26.9808 82.398V81.88C26.8034 82.272 26.5374 82.5753 26.1828 82.79C25.8374 82.9953 25.4314 83.098 24.9648 83.098C24.5168 83.098 24.1061 83.0093 23.7328 82.832C23.3688 82.6453 23.0794 82.3933 22.8648 82.076C22.6501 81.7587 22.5428 81.3993 22.5428 80.998C22.5334 80.494 22.6594 80.102 22.9208 79.822C23.1821 79.5327 23.6068 79.3273 24.1948 79.206C24.7828 79.0753 25.5994 79.01 26.6448 79.01H26.9668V78.604C26.9668 78.0813 26.8594 77.7033 26.6448 77.47C26.4301 77.2367 26.0848 77.12 25.6088 77.12C25.2821 77.12 24.9741 77.162 24.6848 77.246C24.3954 77.33 24.0781 77.4513 23.7328 77.61C23.4808 77.75 23.3034 77.82 23.2008 77.82C23.0608 77.82 22.9441 77.7687 22.8508 77.666C22.7668 77.5633 22.7248 77.4327 22.7248 77.274C22.7248 77.134 22.7621 77.0127 22.8368 76.91C22.9208 76.798 23.0514 76.6907 23.2288 76.588C23.5554 76.4107 23.9381 76.2707 24.3768 76.168C24.8154 76.056 25.2401 76 25.6508 76ZM25.2168 82.048C25.7301 82.048 26.1501 81.8753 26.4768 81.53C26.8034 81.1753 26.9668 80.7227 26.9668 80.172V79.808H26.7148C25.9868 79.808 25.4268 79.8407 25.0348 79.906C24.6428 79.9713 24.3628 80.0833 24.1948 80.242C24.0268 80.3913 23.9428 80.6107 23.9428 80.9C23.9428 81.236 24.0641 81.5113 24.3068 81.726C24.5494 81.9407 24.8528 82.048 25.2168 82.048ZM23.4668 73.578C23.2428 73.3913 23.1308 73.1907 23.1308 72.976C23.1308 72.808 23.1914 72.668 23.3128 72.556C23.4341 72.4347 23.5834 72.374 23.7608 72.374C24.0128 72.374 24.2274 72.4953 24.4048 72.738L25.9168 74.712C25.9821 74.7867 26.0148 74.8707 26.0148 74.964C26.0148 75.0667 25.9728 75.1553 25.8888 75.23C25.8141 75.3047 25.7254 75.342 25.6228 75.342C25.5201 75.342 25.4314 75.3093 25.3568 75.244L23.4668 73.578ZM30.987 83.07C30.7816 83.07 30.609 83.014 30.469 82.902C30.3383 82.79 30.273 82.622 30.273 82.398V76.714C30.273 76.49 30.3383 76.322 30.469 76.21C30.609 76.0887 30.7816 76.028 30.987 76.028C31.1923 76.028 31.3603 76.0887 31.491 76.21C31.6216 76.322 31.687 76.49 31.687 76.714V82.398C31.687 82.622 31.6216 82.79 31.491 82.902C31.3603 83.014 31.1923 83.07 30.987 83.07ZM30.987 74.656C30.7163 74.656 30.5016 74.5813 30.343 74.432C30.1843 74.2827 30.105 74.0867 30.105 73.844C30.105 73.6013 30.1843 73.41 30.343 73.27C30.5016 73.1207 30.7163 73.046 30.987 73.046C31.2483 73.046 31.4583 73.1207 31.617 73.27C31.785 73.41 31.869 73.6013 31.869 73.844C31.869 74.0867 31.7896 74.2827 31.631 74.432C31.4723 74.5813 31.2576 74.656 30.987 74.656ZM43.095 81.894C43.263 82.034 43.347 82.2067 43.347 82.412C43.347 82.5893 43.2863 82.7433 43.165 82.874C43.0437 83.0047 42.899 83.07 42.731 83.07C42.5537 83.07 42.395 83.0047 42.255 82.874L38.769 79.794V82.384C38.769 82.608 38.7037 82.7807 38.573 82.902C38.4423 83.014 38.2743 83.07 38.069 83.07C37.8637 83.07 37.691 83.014 37.551 82.902C37.4203 82.7807 37.355 82.608 37.355 82.384V73.746C37.355 73.522 37.4203 73.354 37.551 73.242C37.691 73.1207 37.8637 73.06 38.069 73.06C38.2743 73.06 38.4423 73.1207 38.573 73.242C38.7037 73.354 38.769 73.522 38.769 73.746V79.234L41.961 76.252C42.1197 76.112 42.2737 76.042 42.423 76.042C42.6003 76.042 42.7543 76.1073 42.885 76.238C43.0157 76.3687 43.081 76.5227 43.081 76.7C43.081 76.8773 43.0017 77.0407 42.843 77.19L40.351 79.472L43.095 81.894ZM48.2834 76C49.9074 76 50.7194 76.9193 50.7194 78.758V82.398C50.7194 82.6033 50.6541 82.7667 50.5234 82.888C50.3928 83.0093 50.2201 83.07 50.0054 83.07C49.7908 83.07 49.6181 83.0093 49.4874 82.888C49.3661 82.7667 49.3054 82.6033 49.3054 82.398V78.772C49.3054 78.212 49.1888 77.8013 48.9554 77.54C48.7314 77.2787 48.3768 77.148 47.8914 77.148C47.3221 77.148 46.8648 77.3253 46.5194 77.68C46.1741 78.0347 46.0014 78.5107 46.0014 79.108V82.398C46.0014 82.6033 45.9361 82.7667 45.8054 82.888C45.6841 83.0093 45.5161 83.07 45.3014 83.07C45.0868 83.07 44.9141 83.0093 44.7834 82.888C44.6528 82.7667 44.5874 82.6033 44.5874 82.398V73.732C44.5874 73.5267 44.6528 73.3633 44.7834 73.242C44.9234 73.1207 45.1008 73.06 45.3154 73.06C45.5208 73.06 45.6841 73.1207 45.8054 73.242C45.9361 73.354 46.0014 73.508 46.0014 73.704V77.204C46.2348 76.812 46.5474 76.5133 46.9394 76.308C47.3314 76.1027 47.7794 76 48.2834 76ZM55.6218 83.098C54.9498 83.098 54.3572 82.9533 53.8438 82.664C53.3398 82.3747 52.9478 81.964 52.6678 81.432C52.3972 80.8907 52.2618 80.2653 52.2618 79.556C52.2618 78.8373 52.3972 78.212 52.6678 77.68C52.9478 77.1387 53.3398 76.7233 53.8438 76.434C54.3572 76.1447 54.9498 76 55.6218 76C56.2938 76 56.8818 76.1447 57.3858 76.434C57.8992 76.7233 58.2912 77.1387 58.5618 77.68C58.8418 78.212 58.9818 78.8373 58.9818 79.556C58.9818 80.2653 58.8418 80.8907 58.5618 81.432C58.2912 81.964 57.8992 82.3747 57.3858 82.664C56.8818 82.9533 56.2938 83.098 55.6218 83.098ZM55.6218 81.978C56.2472 81.978 56.7232 81.7727 57.0498 81.362C57.3858 80.9513 57.5538 80.3493 57.5538 79.556C57.5538 78.772 57.3858 78.1747 57.0498 77.764C56.7138 77.344 56.2378 77.134 55.6218 77.134C55.0058 77.134 54.5298 77.344 54.1938 77.764C53.8578 78.1747 53.6898 78.772 53.6898 79.556C53.6898 80.3493 53.8532 80.9513 54.1798 81.362C54.5158 81.7727 54.9965 81.978 55.6218 81.978ZM63.4262 76C64.3315 76 65.0035 76.2287 65.4422 76.686C65.8902 77.1433 66.1142 77.8387 66.1142 78.772V82.398C66.1142 82.6127 66.0535 82.7807 65.9322 82.902C65.8108 83.014 65.6428 83.07 65.4282 83.07C65.2228 83.07 65.0595 83.0093 64.9382 82.888C64.8168 82.7667 64.7562 82.6033 64.7562 82.398V81.88C64.5788 82.272 64.3128 82.5753 63.9582 82.79C63.6128 82.9953 63.2068 83.098 62.7402 83.098C62.2922 83.098 61.8815 83.0093 61.5082 82.832C61.1442 82.6453 60.8548 82.3933 60.6402 82.076C60.4255 81.7587 60.3182 81.3993 60.3182 80.998C60.3088 80.494 60.4348 80.102 60.6962 79.822C60.9575 79.5327 61.3822 79.3273 61.9702 79.206C62.5582 79.0753 63.3748 79.01 64.4202 79.01H64.7422V78.604C64.7422 78.0813 64.6348 77.7033 64.4202 77.47C64.2055 77.2367 63.8602 77.12 63.3842 77.12C63.0575 77.12 62.7495 77.162 62.4602 77.246C62.1708 77.33 61.8535 77.4513 61.5082 77.61C61.2562 77.75 61.0788 77.82 60.9762 77.82C60.8362 77.82 60.7195 77.7687 60.6262 77.666C60.5422 77.5633 60.5002 77.4327 60.5002 77.274C60.5002 77.134 60.5375 77.0127 60.6122 76.91C60.6962 76.798 60.8268 76.6907 61.0042 76.588C61.3308 76.4107 61.7135 76.2707 62.1522 76.168C62.5908 76.056 63.0155 76 63.4262 76ZM62.9922 82.048C63.5055 82.048 63.9255 81.8753 64.2522 81.53C64.5788 81.1753 64.7422 80.7227 64.7422 80.172V79.808H64.4902C63.7622 79.808 63.2022 79.8407 62.8102 79.906C62.4182 79.9713 62.1382 80.0833 61.9702 80.242C61.8022 80.3913 61.7182 80.6107 61.7182 80.9C61.7182 81.236 61.8395 81.5113 62.0822 81.726C62.3248 81.9407 62.6282 82.048 62.9922 82.048ZM63.8602 74.964C63.8508 75.0853 63.8042 75.1787 63.7202 75.244C63.6362 75.3093 63.5428 75.342 63.4402 75.342C63.3282 75.342 63.2302 75.3047 63.1462 75.23C63.0715 75.146 63.0342 75.034 63.0342 74.894C63.0342 74.7073 63.0808 74.5487 63.1742 74.418C63.2675 74.278 63.3982 74.1333 63.5662 73.984C63.6782 73.8813 63.7622 73.7927 63.8182 73.718C63.8742 73.6433 63.9022 73.564 63.9022 73.48C63.9022 73.3773 63.8555 73.298 63.7622 73.242C63.6688 73.1767 63.5382 73.144 63.3702 73.144C63.1742 73.144 62.9502 73.186 62.6982 73.27C62.5675 73.3073 62.4602 73.2887 62.3762 73.214C62.3015 73.1393 62.2642 73.046 62.2642 72.934C62.2642 72.8593 62.2875 72.7893 62.3342 72.724C62.3808 72.6587 62.4462 72.6073 62.5302 72.57C62.8102 72.4487 63.1228 72.388 63.4682 72.388C63.9348 72.388 64.2988 72.4813 64.5602 72.668C64.8215 72.8547 64.9522 73.088 64.9522 73.368C64.9522 73.5733 64.9008 73.7413 64.7982 73.872C64.7048 74.0027 64.5602 74.152 64.3642 74.32C64.2055 74.4413 64.0842 74.5487 64.0002 74.642C63.9255 74.726 63.8788 74.8333 63.8602 74.964ZM71.7304 76C73.3637 76 74.1804 76.9193 74.1804 78.758V82.398C74.1804 82.6127 74.115 82.7807 73.9844 82.902C73.863 83.014 73.6904 83.07 73.4664 83.07C73.2517 83.07 73.079 83.0093 72.9484 82.888C72.827 82.7667 72.7664 82.6033 72.7664 82.398V78.828C72.7664 78.2493 72.6497 77.8247 72.4164 77.554C72.1924 77.2833 71.8377 77.148 71.3524 77.148C70.783 77.148 70.3257 77.3253 69.9804 77.68C69.635 78.0347 69.4624 78.5107 69.4624 79.108V82.398C69.4624 82.6033 69.397 82.7667 69.2664 82.888C69.145 83.0093 68.977 83.07 68.7624 83.07C68.5477 83.07 68.375 83.0093 68.2444 82.888C68.1137 82.7667 68.0484 82.6033 68.0484 82.398V76.7C68.0484 76.504 68.1137 76.3453 68.2444 76.224C68.3844 76.0933 68.557 76.028 68.7624 76.028C68.9677 76.028 69.131 76.0887 69.2524 76.21C69.3737 76.3313 69.4344 76.49 69.4344 76.686V77.26C69.6584 76.8493 69.971 76.5367 70.3724 76.322C70.7737 76.1073 71.2264 76 71.7304 76Z" fill="#FF7506"/>
</g>
<defs>
<filter id="filter0_d_282_8797" x="0" y="0" width="92" height="106" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="3"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.906458 0 0 0 0 0.915167 0 0 0 0 0.95 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_282_8797"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_282_8797" result="shape"/>
</filter>
</defs>
</svg></div>
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
    
  )
}
