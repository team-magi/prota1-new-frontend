Vue.component('vheader', {
    props: ['todo'],
    template: `<header class="page-header">
    <div class="page-header__inner">
        <div class="page-header__sidebar">
            <div class="page-header__menu-btn"><button
                    class="menu-btn ico_menu is-active"></button></div>
            <div class="page-header__logo">
                <a href="login.html">
                    <img src="assets/photos/logo.png" alt="logo"><span
                        class="page-header__logo_text">Prota-1</span>
                </a>
            </div>
        </div>
        <div class="page-header__content">
            <div class="page-header__search">
                <div class="search">
                    <div class="search__input"><i
                            class="ico_search"></i><input
                            type="search" name="search"
                            placeholder="dddddd"></div>
                </div>
            </div>
            <div class="page-header__action">
                <a class="action-btn" href="notification.html"><i
                        class="ico_notification"></i><span
                        class="animation-ripple-delay2"></span></a>
                <a class="profile" href="wallet.html"><img
                        src="assets/photos/logo.png"
                        alt="profile"></a>
            </div>
        </div>
    </div>
</header>`,
    data() {
        return {
            mddd: '组件组件'
        }
    },
    methods: {
        showdata() {
            console.log(111111)
        }
    },
});



