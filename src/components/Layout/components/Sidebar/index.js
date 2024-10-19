import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import data from '../../../../assets/data/data.json';

const cx = classNames.bind(styles);

const rules = data;

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <h2>Tiêu đề</h2>
            <div className={cx('rule')}>
                {rules.map((rule, index) => (
                    <p key={index} className={cx('line')}>
                        {' '}
                        <b>{rule['id']}</b>. {rule['tieu-de']}
                    </p>
                ))}
            </div>
        </aside>
    );
}

export default Sidebar;
