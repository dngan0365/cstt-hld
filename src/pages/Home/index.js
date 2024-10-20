import React from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.scss'; // Assuming you have some styles to apply
import data from '~/assets/data/data.json'; // Importing your data
import image from '../../assets/images/image.png';
import imgfooter from '../../assets/images/giao-thong-van-hoa.webp';

const cx = classNames.bind(styles); //bind object bìn vào và trả về 1 function

function Home() {
    const rules = data;

    return (
        <div className={styles.homeContainer}>
            {' '}
            {/* Assuming you're applying some styles */}
            <h1>
                20 luật giao thông đường bộ dành cho <br /> xe máy
            </h1>
            <img src={image} width="900px" height="500px" alt="An toàn giao thông" />
            {rules.map((rule, index) => (
                <p key={rule.id} id={rule.id + 1}>
                    {' '}
                    {/* Added key based on rule.id */}
                    <span className={cx('number')}>{index + 1}</span>. Nếu {rule['noi-dung']} thì bị phạt từ{' '}
                    <span className={cx('penalty')}>
                        {' '}
                        {rule['hinh-phat-tu']} - {rule['hinh-phat-den']} {rule['don-vi']}{' '}
                    </span>
                </p>
            ))}
            <img src={imgfooter} width="900px" height="500px" alt="Văn hóa giao thông" />
        </div>
    );
}

export default Home;
