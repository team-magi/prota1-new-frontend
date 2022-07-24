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
                            placeholder="Search"></div>
                </div>
            </div>
            <div class="page-header__action">
                <a class="action-btn" href="notification.html"><i
                        class="ico_notification"></i><span
                        class="animation-ripple-delay2"></span></a>
                <span class="profile" @click='showLoginmodal'><img
                src="assets/photos/logo.png"
                alt="profile">登录</span>
                <!--<a class="profile" href="wallet.html"></a>-->
            </div>
        </div>


        <!--// // @close="SET_LOGINPUP(false)"-->
       



    </div>
    <script type="text/javascript">
        var isHas = Boolean(document.getElementsByTagName('body')[0].className.indexOf('dark-theme'))
        if(localStorage.getItem('themestatus') == 1){
            document.getElementsByTagName('body')[0].className += 'dark-theme'
        }else{
            document.getElementsByTagName('body')[0].className = 'page-profile'
        }

        document.getElementById("toggle").addEventListener("click", function() {
            var isHas2 = Boolean(document.getElementsByTagName('body')[0].className.indexOf('dark-theme'))
            if(isHas2){
                localStorage.setItem('themestatus','1')
            }else{
                localStorage.setItem('themestatus','2')
            }
            document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
        });
    </script>
</header>`,
    data() {
        return {
            mddd: '组件组件'
        }
    },
    methods: {
        showdata() {
            console.log(111111)
        },
        showLoginmodal(){
            console.log(333)
        },
        metamaskConnect(){
            console.log(3342432)
        },
    },
    // mounted() {
    //     console.log(window.location.pathname,1111)
    // },
});




//  <div class='el-dialog__wrapper' >
        //     <div style="position:fixed; left:20%;top:15%;width:500px;height:800px;background:#fff; color:#333;">
        //         <div class="dialogTiti">Authetication selection</div>
        //         <div class="dialogCard" @click="metamaskConnect">
        //             <img src="assets/img/Metamask.png" alt="" />
        //             <span>Metamask</span>
        //             <span class="dc_right"
        //                 ><img src="assets/img/arrowWhite.png" alt=""
        //             /></span>
        //         </div>
        //         <div class="dialogCard success">
        //             <img src="assets/img/twitter-fill.png" alt="" />
        //             <span>Twitter</span>
        //             <span class="dc_right"
        //                 ><img src="assets/img/arrowWhite.png" alt=""
        //             /></span>
        //             <div class="successico">
        //                 <img src="assets/img/checkfill.png" alt="" />
        //             </div>
        //         </div>
        //         <div class="dialogfoter">
        //                 Congratulations！Authentication successded, unlock all
        //                 permission
        //         </div>
        //     </div>
        // </div>


