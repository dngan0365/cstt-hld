import classNames from 'classnames/bind';

import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search({ rules }) {
    return (
        <div>
            <h1>Kết quả tìm kiếm</h1>
            {rules.map((rule, index) => (
                <p key={rule.id}>
                    <span className={cx('number')}>{index + 1}</span>. Nếu {rule['noi-dung']} thì bị phạt từ{' '}
                    <span className={cx('penalty')}>
                        {rule['hinh-phat-tu']} - {rule['hinh-phat-den']} {rule['don-vi']}
                    </span>
                </p>
            ))}
        </div>
    );
}

export default Search;
