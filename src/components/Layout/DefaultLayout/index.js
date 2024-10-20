import classNames from 'classnames/bind';
import { useState } from 'react';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import styles from './DefaultLayout.module.scss';
import Footer from '../components/Footer';
import Search from '../../../pages/Search';
import Home from '../../../pages/Home';

import data from '../../../assets/data/data.json';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = filteredResults => {
        setSearchResults(filteredResults);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Header data={data} onSearch={handleSearch} />
            </div>
            <div className={cx('container')}>
                <div className={cx('sidebar')}>
                    <Sidebar />
                </div>
                <div className={cx('content')}>
                    {/* Conditionally render search results or the home page */}
                    {searchResults.length > 0 ? <Search rules={searchResults} /> : <Home />}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
