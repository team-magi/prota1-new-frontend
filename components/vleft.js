Vue.component('vleft', {
    props: ['todo'],
    template: `<aside class="sidebar is-show" id="sidebar">
    <div class="sidebar-box">
        <ul class="uk-nav">
            <li class="uk-nav-header">Start here</li>
            <li :class="currentPath.indexOf('home.html') != -1 ? 'uk-active' : '' "><a href="home.html"><i class="ico_home"></i><span>Home</span></a></li>
            <li :class="currentPath.indexOf('stories.html') !== -1 ? 'uk-active' : '' "><a href="stories.html"><i
                        class="ico_streams"></i><span>Stories</span></a></li>
            <li :class="currentPath.indexOf('collections.html') !== -1 ? 'uk-active' : '' "><a href="collections.html"><i
                        class="ico_favourites"></i><span>Collections</span></a></li>
            <li :class="currentPath.indexOf('upcoming.html') !== -1 ? 'uk-active' : '' "><a href="upcoming.html"><i class="ico_store"></i><span>Upcoming</span></a></li>
            <li :class="currentPath.indexOf('friends.html') !== -1 ? 'uk-active' : '' "><a href="friends.html"><i class="ico_friends"></i><span>Friends</span></a></li>
            <li :class="currentPath.indexOf('chat.html') !== -1 ? 'uk-active' : '' "><a href="chat.html"><i
                        class="ico_chats"></i><span>Chats</span><span
                        class="count">soon</span></a></li>
            <!-- end of "Web3 social" and start of "Support"  :class="currentPath.indexOf('collections.html') !== -1 ? 'uk-active' : '' "   :class="currentPath.indexOf('collections.html') !== -1 ? 'uk-active' : '' "-->
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
            mddd: 'test test',
            currentPath: 'home.html',
            isCurrentPath: true,
        }
    },
    methods: {
        showdata() {
            console.log(111111)
        }
    },
    mounted() {
        this.currentPath = window.location.pathname
        
        console.log(this.currentPath.indexOf('stories.html'),'1111导航',this.currentPath)
    },
});



