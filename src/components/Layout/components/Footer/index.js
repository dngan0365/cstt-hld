import classNames from 'classnames/bind';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles); //bind object bìn vào và trả về 1 function

function Footer() {
    return (
        <div className={cx('center')}>
            <h1> Cảm ơn bạn đã đọc!</h1>
            <h1>Hãy chấp hành tốt luật giao thông đường bộ.</h1>
        </div>
    );
}

export default Footer;
