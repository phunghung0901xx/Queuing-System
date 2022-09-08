
import React from 'react';
import classNames from 'classnames/bind';
import styles from  './NotifyPage.module.scss'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
const cx=classNames.bind(styles)
export default function NotifyPage() {
    const user = useSelector((state) => state.user)
  return (
  
    <div>
      <div  className={cx('notifypage')}>

      </div>
      <header  className={cx('topbar')}>
      <span className={cx('device-text')}>Báo cáo</span>
                 <svg className={cx('logo-next')}  xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
<path d="M5.35833 4.40874L1.825 0.875405C1.74753 0.797298 1.65536 0.735302 1.55381 0.692995C1.45226 0.650688 1.34334 0.628906 1.23333 0.628906C1.12332 0.628906 1.0144 0.650688 0.912851 0.692995C0.811302 0.735302 0.719134 0.797298 0.641665 0.875405C0.486456 1.03154 0.399338 1.24275 0.399338 1.4629C0.399338 1.68306 0.486456 1.89427 0.641665 2.0504L3.59167 5.0004L0.641665 7.9504C0.486456 8.10654 0.399338 8.31775 0.399338 8.5379C0.399338 8.75806 0.486456 8.96927 0.641665 9.1254C0.719532 9.20264 0.811878 9.26374 0.91341 9.30521C1.01494 9.34668 1.12366 9.3677 1.23333 9.36707C1.343 9.3677 1.45172 9.34668 1.55325 9.30521C1.65478 9.26374 1.74713 9.20264 1.825 9.1254L5.35833 5.59207C5.43644 5.5146 5.49843 5.42243 5.54074 5.32088C5.58305 5.21934 5.60483 5.11041 5.60483 5.0004C5.60483 4.89039 5.58305 4.78147 5.54074 4.67992C5.49843 4.57837 5.43644 4.48621 5.35833 4.40874Z" fill="#7E7D88"/>
</svg>
<span className={cx('device-index')}>Lập báo cáo</span>
<svg className={cx('logo-next-two')} xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
<path d="M5.35841 4.40874L1.82507 0.875405C1.74761 0.797298 1.65544 0.735302 1.55389 0.692995C1.45234 0.650688 1.34342 0.628906 1.23341 0.628906C1.1234 0.628906 1.01448 0.650688 0.912927 0.692995C0.811378 0.735302 0.71921 0.797298 0.641741 0.875405C0.486532 1.03154 0.399414 1.24275 0.399414 1.4629C0.399414 1.68306 0.486532 1.89427 0.641741 2.0504L3.59174 5.0004L0.641741 7.9504C0.486532 8.10654 0.399414 8.31775 0.399414 8.5379C0.399414 8.75806 0.486532 8.96927 0.641741 9.1254C0.719608 9.20264 0.811955 9.26374 0.913486 9.30521C1.01502 9.34668 1.12374 9.3677 1.23341 9.36707C1.34308 9.3677 1.4518 9.34668 1.55333 9.30521C1.65486 9.26374 1.74721 9.20264 1.82507 9.1254L5.35841 5.59207C5.43652 5.5146 5.49851 5.42243 5.54082 5.32088C5.58312 5.21934 5.60491 5.11041 5.60491 5.0004C5.60491 4.89039 5.58312 4.78147 5.54082 4.67992C5.49851 4.57837 5.43652 4.48621 5.35841 4.40874Z" fill="#7E7D88"/>
</svg>
<span  className={cx('img-bar')}></span>
<span  className={cx('hello-bar')}>Xin chào</span>
<span  className={cx('name-bar')}>{user.name}</span>
<span  className={cx('select-time')}>Chọn thời gian</span>
      </header>
      <div  className={cx('content-block')}>
      <div  className={cx('column-one')}>
      <span  className={cx('column-one-1')}>Số thứ tự</span>
      <span  className={cx('column-one-2')}>2010001</span>
      <span  className={cx('column-one-3')}>2010002</span>
      <span  className={cx('column-one-4')}>2010003</span>
      <span  className={cx('column-one-5')}>2010004</span>
      <span  className={cx('column-one-6')}>2010005</span>
      <span  className={cx('column-one-7')}>2010006</span>
      <span  className={cx('column-one-8')}>2010007</span>
      <span  className={cx('column-one-9')}>2010008</span>
      <span  className={cx('column-one-10')}>2010009</span>
      <span  className={cx('column-one-11')}>20100010</span>
      </div>
      <div  className={cx('margin')}></div>
      <div  className={cx('column-two')}>
      
      <span  className={cx('column-one-1')}>Tên dịch vụ</span>
      <span  className={cx('column-one-2')}>Khám tim mạch</span>
      <span  className={cx('column-one-3')}>Răng hàm mặt</span>
      <span  className={cx('column-one-4')}>Khám sản - phụ khoa</span>
      <span  className={cx('column-one-5')}>Răng hàm mặt</span>
      <span  className={cx('column-one-6')}>Tai mũi họng</span>
      <span  className={cx('column-one-7')}>Khám tổng quát</span>
      <span  className={cx('column-one-8')}>Khám hô hấp</span>
      <span  className={cx('column-one-9')}>Khám hô hấp</span>
      <span  className={cx('column-one-10')}>Tai mũi họng</span>
      <span  className={cx('column-one-11')}>Khám sản - phụ khoa</span>
      </div>
      <div  className={cx('margin-two')}></div>
      <div  className={cx('column-three')}>
      
      <span  className={cx('column-one-1')}>Thời gian cấp</span>
      <span  className={cx('column-one-2')}>07:20 - 07/10/2021</span>
      <span  className={cx('column-one-3')}>07:20 - 07/10/2021</span>
      <span  className={cx('column-one-4')}>07:20 - 07/10/2021</span>
      <span  className={cx('column-one-5')}>07:20 - 07/10/2021</span>
      <span  className={cx('column-one-6')}>07:20 - 07/10/2021</span>
      <span  className={cx('column-one-7')}>07:20 - 07/10/2021</span>
      <span  className={cx('column-one-8')}>07:20 - 07/10/2021</span>
      <span  className={cx('column-one-9')}>07:20 - 07/10/2021</span>
      <span  className={cx('column-one-10')}>07:20 - 07/10/2021</span>
      <span  className={cx('column-one-11')}>07:20 - 07/10/2021</span>
      </div>
      <div  className={cx('margin-three')}></div>
      <div  className={cx('column-four')}>
      <span  className={cx('column-one-1')}>Tình trạng</span>
      <span  className={cx('column-one-2')}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#4277FF"/>
</svg>Đang chờ</span>
      <span  className={cx('column-one-3')}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#7E7D88"/>
</svg>Đã sủ dụng</span>
      <span  className={cx('column-one-4')}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#E73F3F"/>
</svg>Bỏ qua</span>
      <span  className={cx('column-one-5')}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#4277FF"/>
</svg>Đang chờ</span>
      <span  className={cx('column-one-6')}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#4277FF"/>
</svg>Đang chờ</span>
      <span  className={cx('column-one-7')}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#E73F3F"/>
</svg>Bỏ qua</span>
      <span  className={cx('column-one-8')}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#4277FF"/>
</svg>Đang chờ</span>
      <span  className={cx('column-one-9')}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#7E7D88"/>
</svg>Đã sủ dụng</span>
      <span  className={cx('column-one-10')}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#E73F3F"/>
</svg>Bỏ qua</span>
      <span  className={cx('column-one-11')}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#4277FF"/>
</svg>Đang chờ</span>
      </div>
      <div  className={cx('margin-three')}></div>
      <div  className={cx('column-five')}>
      
      <span  className={cx('column-one-1')}>Nguồn cấp</span>
      <span  className={cx('column-one-2')}>Kiosk</span>
      <span  className={cx('column-one-3')}>Hệ thống</span>
      <span  className={cx('column-one-4')}>Kiosk</span>
      <span  className={cx('column-one-5')}>Hệ thống</span>
      <span  className={cx('column-one-6')}>Kiosk</span>
      <span  className={cx('column-one-7')}>Hệ thống</span>
      <span  className={cx('column-one-8')}>Kiosk</span>
      <span  className={cx('column-one-9')}>Kiosk</span>
      <span  className={cx('column-one-10')}>Hệ thống</span>
      <span  className={cx('column-one-11')}>Hệ thống</span>
      </div>
      </div>
      <div className={cx('right-bar')}><svg xmlns="http://www.w3.org/2000/svg" width="86" height="87" viewBox="0 0 86 87" fill="none">
<g filter="url(#filter0_d_21_5857)">
<path d="M6 14C6 9.58172 9.58172 6 14 6H86V81H14C9.58172 81 6 77.4183 6 73V14Z" fill="#FFF2E7"/>
<path d="M55.9166 29.888H52.545C49.78 29.888 47.5283 27.6363 47.5283 24.8713V21.4997C47.5283 20.858 47.0033 20.333 46.3616 20.333H41.415C37.8216 20.333 34.9166 22.6663 34.9166 26.8313V37.168C34.9166 41.333 37.8216 43.6663 41.415 43.6663H50.585C54.1783 43.6663 57.0833 41.333 57.0833 37.168V31.0547C57.0833 30.413 56.5583 29.888 55.9166 29.888ZM46.3266 36.4097L43.9933 38.743C43.9116 38.8247 43.8066 38.8947 43.7016 38.9297C43.5966 38.9763 43.4916 38.9997 43.375 38.9997C43.2583 38.9997 43.1533 38.9763 43.0483 38.9297C42.955 38.8947 42.8616 38.8247 42.7916 38.7547C42.78 38.743 42.7683 38.743 42.7683 38.7313L40.435 36.398C40.0966 36.0597 40.0966 35.4997 40.435 35.1613C40.7733 34.823 41.3333 34.823 41.6716 35.1613L42.5 36.013V31.1247C42.5 30.6463 42.8966 30.2497 43.375 30.2497C43.8533 30.2497 44.25 30.6463 44.25 31.1247V36.013L45.09 35.173C45.4283 34.8347 45.9883 34.8347 46.3266 35.173C46.665 35.5113 46.665 36.0713 46.3266 36.4097Z" fill="#FF7506"/>
<path d="M52.335 28.2779C53.4434 28.2896 54.9834 28.2896 56.3017 28.2896C56.9667 28.2896 57.3167 27.5079 56.85 27.0413C55.17 25.3496 52.16 22.3046 50.4334 20.5779C49.955 20.0996 49.1267 20.4263 49.1267 21.0913V25.1629C49.1267 26.8663 50.5734 28.2779 52.335 28.2779Z" fill="#FF7506"/>
<path d="M31.9487 64.07C31.734 64.07 31.5567 64.0047 31.4167 63.874C31.286 63.734 31.2207 63.5567 31.2207 63.342V55.334H28.4207C27.9727 55.334 27.7487 55.1333 27.7487 54.732C27.7487 54.536 27.8047 54.3867 27.9167 54.284C28.038 54.1813 28.206 54.13 28.4207 54.13H35.4767C35.6914 54.13 35.8547 54.1813 35.9667 54.284C36.088 54.3867 36.1487 54.536 36.1487 54.732C36.1487 55.1333 35.9247 55.334 35.4767 55.334H32.6767V63.342C32.6767 63.5567 32.6114 63.734 32.4807 63.874C32.35 64.0047 32.1727 64.07 31.9487 64.07ZM38.9672 57C39.8725 57 40.5445 57.2287 40.9832 57.686C41.4312 58.1433 41.6552 58.8387 41.6552 59.772V63.398C41.6552 63.6127 41.5945 63.7807 41.4732 63.902C41.3519 64.014 41.1839 64.07 40.9692 64.07C40.7639 64.07 40.6005 64.0093 40.4792 63.888C40.3579 63.7667 40.2972 63.6033 40.2972 63.398V62.88C40.1199 63.272 39.8539 63.5753 39.4992 63.79C39.1539 63.9953 38.7479 64.098 38.2812 64.098C37.8332 64.098 37.4225 64.0093 37.0492 63.832C36.6852 63.6453 36.3959 63.3933 36.1812 63.076C35.9665 62.7587 35.8592 62.3993 35.8592 61.998C35.8499 61.494 35.9759 61.102 36.2372 60.822C36.4985 60.5327 36.9232 60.3273 37.5112 60.206C38.0992 60.0753 38.9159 60.01 39.9612 60.01H40.2832V59.604C40.2832 59.0813 40.1759 58.7033 39.9612 58.47C39.7465 58.2367 39.4012 58.12 38.9252 58.12C38.5985 58.12 38.2905 58.162 38.0012 58.246C37.7119 58.33 37.3945 58.4513 37.0492 58.61C36.7972 58.75 36.6199 58.82 36.5172 58.82C36.3772 58.82 36.2605 58.7687 36.1672 58.666C36.0832 58.5633 36.0412 58.4327 36.0412 58.274C36.0412 58.134 36.0785 58.0127 36.1532 57.91C36.2372 57.798 36.3679 57.6907 36.5452 57.588C36.8719 57.4107 37.2545 57.2707 37.6932 57.168C38.1319 57.056 38.5565 57 38.9672 57ZM38.5332 63.048C39.0465 63.048 39.4665 62.8753 39.7932 62.53C40.1199 62.1753 40.2832 61.7227 40.2832 61.172V60.808H40.0312C39.3032 60.808 38.7432 60.8407 38.3512 60.906C37.9592 60.9713 37.6792 61.0833 37.5112 61.242C37.3432 61.3913 37.2592 61.6107 37.2592 61.9C37.2592 62.236 37.3805 62.5113 37.6232 62.726C37.8659 62.9407 38.1692 63.048 38.5332 63.048ZM39.4012 55.964C39.3919 56.0853 39.3452 56.1787 39.2612 56.244C39.1772 56.3093 39.0839 56.342 38.9812 56.342C38.8692 56.342 38.7712 56.3047 38.6872 56.23C38.6125 56.146 38.5752 56.034 38.5752 55.894C38.5752 55.7073 38.6219 55.5487 38.7152 55.418C38.8085 55.278 38.9392 55.1333 39.1072 54.984C39.2192 54.8813 39.3032 54.7927 39.3592 54.718C39.4152 54.6433 39.4432 54.564 39.4432 54.48C39.4432 54.3773 39.3965 54.298 39.3032 54.242C39.2099 54.1767 39.0792 54.144 38.9112 54.144C38.7152 54.144 38.4912 54.186 38.2392 54.27C38.1085 54.3073 38.0012 54.2887 37.9172 54.214C37.8425 54.1393 37.8052 54.046 37.8052 53.934C37.8052 53.8593 37.8285 53.7893 37.8752 53.724C37.9219 53.6587 37.9872 53.6073 38.0712 53.57C38.3512 53.4487 38.6639 53.388 39.0092 53.388C39.4759 53.388 39.8399 53.4813 40.1012 53.668C40.3625 53.8547 40.4932 54.088 40.4932 54.368C40.4932 54.5733 40.4419 54.7413 40.3392 54.872C40.2459 55.0027 40.1012 55.152 39.9052 55.32C39.7465 55.4413 39.6252 55.5487 39.5412 55.642C39.4665 55.726 39.4199 55.8333 39.4012 55.964ZM44.3034 64.07C44.098 64.07 43.9254 64.014 43.7854 63.902C43.6547 63.79 43.5894 63.622 43.5894 63.398V57.714C43.5894 57.49 43.6547 57.322 43.7854 57.21C43.9254 57.0887 44.098 57.028 44.3034 57.028C44.5087 57.028 44.6767 57.0887 44.8074 57.21C44.938 57.322 45.0034 57.49 45.0034 57.714V63.398C45.0034 63.622 44.938 63.79 44.8074 63.902C44.6767 64.014 44.5087 64.07 44.3034 64.07ZM44.3034 55.656C44.0327 55.656 43.818 55.5813 43.6594 55.432C43.5007 55.2827 43.4214 55.0867 43.4214 54.844C43.4214 54.6013 43.5007 54.41 43.6594 54.27C43.818 54.1207 44.0327 54.046 44.3034 54.046C44.5647 54.046 44.7747 54.1207 44.9334 54.27C45.1014 54.41 45.1854 54.6013 45.1854 54.844C45.1854 55.0867 45.106 55.2827 44.9474 55.432C44.7887 55.5813 44.574 55.656 44.3034 55.656ZM55.5294 57.448C55.5854 57.308 55.6647 57.2053 55.7674 57.14C55.8794 57.0747 55.9961 57.042 56.1174 57.042C56.2947 57.042 56.4487 57.1027 56.5794 57.224C56.7194 57.3453 56.7894 57.49 56.7894 57.658C56.7894 57.7513 56.7707 57.84 56.7334 57.924L54.0594 63.594C53.9941 63.7433 53.8914 63.86 53.7514 63.944C53.6207 64.0187 53.4807 64.056 53.3314 64.056C53.1821 64.056 53.0374 64.0187 52.8974 63.944C52.7667 63.86 52.6687 63.7433 52.6034 63.594L49.9294 57.924C49.8921 57.8493 49.8734 57.7607 49.8734 57.658C49.8734 57.49 49.9481 57.3453 50.0974 57.224C50.2467 57.1027 50.4147 57.042 50.6014 57.042C50.8721 57.042 51.0727 57.1727 51.2034 57.434L53.3734 62.25L55.5294 57.448ZM63.1971 62.278C63.3278 62.278 63.4351 62.3293 63.5191 62.432C63.6031 62.5347 63.6451 62.6653 63.6451 62.824C63.6451 63.0947 63.4771 63.3233 63.1411 63.51C62.8145 63.6967 62.4551 63.8413 62.0631 63.944C61.6805 64.0467 61.3118 64.098 60.9571 64.098C59.8745 64.098 59.0205 63.7853 58.3951 63.16C57.7698 62.5253 57.4571 61.662 57.4571 60.57C57.4571 59.87 57.5925 59.2493 57.8631 58.708C58.1431 58.1667 58.5305 57.7467 59.0251 57.448C59.5291 57.1493 60.0985 57 60.7331 57C61.6478 57 62.3711 57.294 62.9031 57.882C63.4351 58.47 63.7011 59.2633 63.7011 60.262C63.7011 60.6353 63.5331 60.822 63.1971 60.822H58.8711C58.9645 62.2687 59.6598 62.992 60.9571 62.992C61.3025 62.992 61.6011 62.9453 61.8531 62.852C62.1051 62.7587 62.3711 62.6373 62.6511 62.488C62.6791 62.4693 62.7538 62.432 62.8751 62.376C63.0058 62.3107 63.1131 62.278 63.1971 62.278ZM60.7611 58.036C60.2198 58.036 59.7858 58.2087 59.4591 58.554C59.1325 58.8993 58.9365 59.3847 58.8711 60.01H62.4831C62.4551 59.3753 62.2918 58.89 61.9931 58.554C61.7038 58.2087 61.2931 58.036 60.7611 58.036ZM61.6991 53.696C61.5778 53.5653 61.5171 53.4253 61.5171 53.276C61.5171 53.1173 61.5778 52.9867 61.6991 52.884C61.8298 52.772 61.9745 52.716 62.1331 52.716C62.3851 52.716 62.5625 52.8467 62.6651 53.108L63.1831 54.382C63.2018 54.4193 63.2111 54.4753 63.2111 54.55C63.2111 54.6433 63.1785 54.7227 63.1131 54.788C63.0478 54.844 62.9685 54.872 62.8751 54.872C62.7538 54.872 62.6465 54.8253 62.5531 54.732L61.6991 53.696ZM59.5711 56.202C59.4871 56.286 59.3798 56.328 59.2491 56.328C59.1185 56.328 59.0065 56.2813 58.9131 56.188C58.8198 56.0947 58.7731 55.9873 58.7731 55.866C58.7731 55.7073 58.8478 55.572 58.9971 55.46L60.1591 54.396C60.3458 54.2467 60.5371 54.172 60.7331 54.172C60.9105 54.172 61.1018 54.2467 61.3071 54.396L62.4691 55.46C62.6278 55.5813 62.7071 55.7213 62.7071 55.88C62.7071 56.0013 62.6558 56.1087 62.5531 56.202C62.4598 56.2953 62.3478 56.342 62.2171 56.342C62.1145 56.342 62.0118 56.3 61.9091 56.216L60.7331 55.054L59.5711 56.202Z" fill="#FF7506"/>
</g>
<defs>
<filter id="filter0_d_21_5857" x="0" y="0" width="92" height="87" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="3"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.906458 0 0 0 0 0.915167 0 0 0 0 0.95 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_21_5857"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_21_5857" result="shape"/>
</filter>
</defs>
</svg> </div>
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
