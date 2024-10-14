import classNames from 'classnames/bind';
import { faSquareXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { faCircle, faCircleXmark } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles); //bind object bìn vào và trả về 1 function
// console.log(images.logo);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>

                {/* Search */}

                <div className={cx('search')}>
                    <input placeholder="Search rules" spellCheck="false" />
                    {/* <button className={cx('clear')}> */}
                    {/* Clear */}
                    {/* <FontAwesomeIcon icon={faSquareXmark} /> */}
                    {/* </button> */}
                    {/* Loading */}
                    {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
                    <button className={cx('search-btn')}>
                        {/* Search */}
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

                {/* action */}
                <div className={cx('action')}></div>
            </div>
        </header>
    );
}

export default Header;
