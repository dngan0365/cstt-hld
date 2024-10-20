import { HeaderLayout } from '../components/Layout';

import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Search from '../pages/Search';

// không cần đăng nhập vẫn xem được
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderLayout },
    { path: '/search', component: Search, layout: null },
];
// phải đăng nhập, không thì chuyển sang login
const privateRoutes = [];
export { publicRoutes, privateRoutes };
