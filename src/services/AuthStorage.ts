import Cookies from 'js-cookie';

class AuthStorage {
    private isRemember = true;

    checkTokens() {
        if (sessionStorage.getItem('token')) {
            this.isRemember = false;
        }
    }

    saveToken(token: string, rememberMe = true) {
        this.isRemember = rememberMe;
        if (this.isRemember) {
            Cookies.set('token', token);
        } else {
            sessionStorage.setItem('token', token);
        }
    }

    getToken() {
        return this.isRemember ? Cookies.get('token') : sessionStorage.getItem('token') ?? '';
    }

    removeToken() {
        Cookies.remove('token');
        sessionStorage.removeItem('token');
    }
}

export default new AuthStorage();
