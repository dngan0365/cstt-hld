import classNames from 'classnames/bind';
import { faSquareXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import styles from './Header.module.scss';
import images from '../../../../assets/images';

const cx = classNames.bind(styles);

function Header({ data, onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Handle search click
    const handleSearchClick = () => {
        if (!searchTerm.trim()) {
            // Show modal if search term is empty
            setIsModalOpen(true);
            return;
        }

        const value = searchTerm.toLowerCase();
        const searchTerms = value.split(' và ').map(term => term.trim());
        const filteredResults = data.filter(law =>
            searchTerms.some(term => law['tieu-de'].trim().toLowerCase().includes(term)),
        );

        onSearch(filteredResults);
    };

    // Handle input clear
    const handleClearSearch = () => {
        setSearchTerm('');
        onSearch([]); // Clear search results
    };

    // Close modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                    {/* Logo */}
                    <a href="/">
                        <div className={cx('logo')}>
                            <img src={images.logo} alt="Giao thông" />
                            <span className={cx('text-logo')}>
                                <h1>Luật giao thông</h1>
                            </span>
                        </div>
                    </a>

                    {/* Search */}
                    <div className={cx('search')}>
                        <input
                            placeholder="Tìm kiếm tiêu đề luật và nhiều luật thì cách nhau bởi chữ 'và'..."
                            spellCheck="false"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)} // Update search term
                        />
                        {/* Clear button */}
                        {searchTerm && (
                            <button className={cx('clear')} onClick={handleClearSearch}>
                                <FontAwesomeIcon icon={faSquareXmark} />
                            </button>
                        )}
                        {/* Search button */}
                        <button className={cx('search-btn')} onClick={handleSearchClick}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>

                    {/* Action (if needed for future actions) */}
                    <div className={cx('action')}></div>
                </div>
            </header>

            {/* Modal for empty search */}
            {isModalOpen && (
                <div className={cx('modal')}>
                    <div className={cx('modal-content')}>
                        <h2>Thông báo</h2>
                        <p>Vui lòng nhập từ khóa vào thanh tìm kiếm.</p>
                        <button onClick={handleCloseModal}>Đóng</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Header;
