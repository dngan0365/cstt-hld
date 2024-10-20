import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import data from '../../../../assets/data/data.json';

const cx = classNames.bind(styles);
const rules = data;

function Sidebar() {
    const [clickedIndex, setClickedIndex] = useState(null);

    return (
        <aside className={cx('wrapper')}>
            <h2>Tiêu đề</h2>
            <div className={cx('rule')}>
                {rules.map((rule, index) => (
                    <div className={cx('link')} key={index}>
                        <a
                            href={`#${rule.id}`}
                            onClick={() => setClickedIndex(index)}
                            className={cx('line', { active: clickedIndex === index })}
                        >
                            <p>
                                <b>{rule['id']}</b>. {rule['tieu-de']}
                            </p>
                        </a>
                    </div>
                ))}
            </div>
        </aside>
    );
}

export default Sidebar;
