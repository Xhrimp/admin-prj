import * as React from 'react'
import { styled } from '@mui/material/styles'
import style from './mycourse.module.scss'
import imgMyCourse from '../../../assets/background-course.png'
const MyCourse = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.wrapper_maintitle}>
        <h1 style={{ textAlign: 'center', marginBottom: '-10px' }}>
          Khoá Học Của Tôi
        </h1>
        <p style={{ textAlign: 'center', color: 'rgb(142, 119, 119)' }}>
          Các khoá học đầy đủ bài giảng bài tập bài thi, tài liệu, hỗ trợ học
          tập thuận tiện hơn.
        </p>
      </div>
      <div className={style.wrapper_content}>
        <div className={style.wrapper_content_inf}>
          <div className={style.wrapper_content_inf_img}>
            <img width="100%" height="100%" src={imgMyCourse} alt="" />
          </div>
          <div className={style.wrapper_content_inf_inner}>
            <p style={{ paddingLeft: '20px', marginTop: '-4px' }}>
              Chương trình dịch - ACTVN180605
            </p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row-reverse',
                marginRight: '10px',
              }}
            >
              <button className={style.wrapper_content_inf_inner_button}>
                {' '}
                Chi tiết
              </button>
            </div>
          </div>
        </div>

        <div className={style.wrapper_content_inf}>
          <div className={style.wrapper_content_inf_img}>
            <img width="100%" height="100%" src={imgMyCourse} alt="" />
          </div>
          <div className={style.wrapper_content_inf_inner}>
            <p style={{ paddingLeft: '20px', marginTop: '-4px' }}>
              Chương trình dịch -ACTVN180605
            </p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row-reverse',
                marginRight: '10px',
              }}
            >
              <button className={style.wrapper_content_inf_inner_button}>
                {' '}
                Chi tiết
              </button>
            </div>
          </div>
        </div>
        <div className={style.wrapper_content_inf}>
          <div className={style.wrapper_content_inf_img}>
            <img width="100%" height="100%" src={imgMyCourse} alt="" />
          </div>
          <div className={style.wrapper_content_inf_inner}>
            <p style={{ paddingLeft: '20px', marginTop: '-4px' }}>
              Chương trình dịch -ACTVN180605
            </p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row-reverse',
                marginRight: '10px',
              }}
            >
              <button className={style.wrapper_content_inf_inner_button}>
                {' '}
                Chi tiết
              </button>
            </div>
          </div>
        </div>
        <div className={style.wrapper_content_inf}>
          <div className={style.wrapper_content_inf_img}>
            <img width="100%" height="100%" src={imgMyCourse} alt="" />
          </div>
          <div className={style.wrapper_content_inf_inner}>
            <p style={{ paddingLeft: '20px', marginTop: '-4px' }}>
              Chương trình dịch -ACTVN180605
            </p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row-reverse',
                marginRight: '10px',
              }}
            >
              <button className={style.wrapper_content_inf_inner_button}>
                {' '}
                Chi tiết
              </button>
            </div>
          </div>
        </div>
        <div className={style.wrapper_content_inf}>
          <div className={style.wrapper_content_inf_img}>
            <img width="100%" height="100%" src={imgMyCourse} alt="" />
          </div>
          <div className={style.wrapper_content_inf_inner}>
            <p style={{ paddingLeft: '20px', marginTop: '-4px' }}>
              Chương trình dịch -ACTVN180605
            </p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row-reverse',
                marginRight: '10px',
              }}
            >
              <button className={style.wrapper_content_inf_inner_button}>
                {' '}
                Chi tiết
              </button>
            </div>
          </div>
        </div>
        <div className={style.wrapper_content_inf}>
          <div className={style.wrapper_content_inf_img}>
            <img width="100%" height="100%" src={imgMyCourse} alt="" />
          </div>
          <div className={style.wrapper_content_inf_inner}>
            <p style={{ paddingLeft: '20px', marginTop: '-4px' }}>
              Chương trình dịch -ACTVN180605
            </p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row-reverse',
                marginRight: '10px',
              }}
            >
              <button className={style.wrapper_content_inf_inner_button}>
                {' '}
                Chi tiết
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyCourse
