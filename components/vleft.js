Vue.component('vleft', {
    props: ['todo'],
    template: `<aside class="sidebar is-show" id="sidebar">
    <div class="sidebar-box">
        <ul class="uk-nav">
            <li class="uk-nav-header">Start here</li>
            <li class="uk-active"><a href="home.html"><i class="ico_home"></i><span>Home</span></a></li>
            <li><a href="stories.html"><i
                        class="ico_streams"></i><span>Stories</span></a></li>
            <li><a href="collections.html"><i
                        class="ico_favourites"></i><span>Collections</span></a></li>
            <li><a href="upcoming.html"><i class="ico_store"></i><span>Upcoming</span></a></li>
            <li><a href="friends.html"><i class="ico_friends"></i><span>Friends</span></a></li>
            <li><a href="chat.html"><i
                        class="ico_chats"></i><span>Chats</span><span
                        class="count">soon</span></a></li>
            <!-- end of "Web3 social" and start of "Support" -->
            <li class="uk-nav-header">Support</li>
            <li><a href="#modal-report" data-uk-toggle><i
                        class="ico_report"></i><span>Privacy</span></a></li>
            <li><a href="#modal-help" data-uk-toggle><i
                        class="ico_help"></i><span>Help</span></a></li>
        </ul>
    </div>
</aside>`,
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



