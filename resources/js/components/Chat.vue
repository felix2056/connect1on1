<template>
<div class="layout">
    <!-- navigation -->
    <nav class="navigation">
        <div class="nav-group">
            <ul>
                <li class="logo">
                    <a href="#">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="612px" height="612px" viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;" xml:space="preserve">
                            <g>
                                <g id="_x32__26_">
                                    <g>
                                    <path d="M401.625,325.125h-191.25c-10.557,0-19.125,8.568-19.125,19.125s8.568,19.125,19.125,19.125h191.25
                                    c10.557,0,19.125-8.568,19.125-19.125S412.182,325.125,401.625,325.125z M439.875,210.375h-267.75
                                    c-10.557,0-19.125,8.568-19.125,19.125s8.568,19.125,19.125,19.125h267.75c10.557,0,19.125-8.568,19.125-19.125
                                    S450.432,210.375,439.875,210.375z M306,0C137.012,0,0,119.875,0,267.75c0,84.514,44.848,159.751,114.75,208.826V612
                                    l134.047-81.339c18.552,3.061,37.638,4.839,57.203,4.839c169.008,0,306-119.875,306-267.75C612,119.875,475.008,0,306,0z
                                    M306,497.25c-22.338,0-43.911-2.601-64.643-7.019l-90.041,54.123l1.205-88.701C83.5,414.133,38.25,345.513,38.25,267.75
                                    c0-126.741,119.875-229.5,267.75-229.5c147.875,0,267.75,102.759,267.75,229.5S453.875,497.25,306,497.25z"></path>
                                    </g>
                                </g>
                            </g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                        </svg>
                    </a>
                </li>
                <li>
                    <a class="" href="/" data-toggle="tooltip" title="Home" data-placement="right" data-original-title="Chats">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18" role="img" viewBox="0 0 576 512"><path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"/></svg>
                    </a>
                </li>
                <li>
                    <a class="" data-navigation-target="chats" href="#" data-toggle="tooltip" title="" data-placement="right" data-original-title="Chats">
                        <span class="badge badge-warning"></span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                    </a>
                </li>
                <li>
                    <a data-navigation-target="friends" href="#" data-toggle="tooltip" title="" data-placement="right" data-original-title="Friends">
                        <span class="badge badge-danger"></span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </a>
                </li>
                <li>
                    <a data-navigation-target="favorites" data-toggle="tooltip" title="" data-placement="right" href="#" data-original-title="Favorites">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    </a>
                </li>
                <li class="brackets">
                    <a data-navigation-target="archived" href="#" data-toggle="tooltip" title="" data-placement="right" data-original-title="Archived">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-archive"><polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line></svg>
                    </a>
                </li>
                <li>
                    <a href="#" @click.prevent="changeBackground()" class="dark-light-switcher" data-toggle="tooltip" title="" data-placement="right" data-original-title="Light mode">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </a>
                </li>
                <li data-toggle="tooltip" title="" data-placement="right" data-original-title="User menu">
                    <a href="./login.html" data-toggle="dropdown">
                        <figure class="avatar">
                            <!--<img src="./dist/media/img/women_avatar5.jpg" class="rounded-circle" alt="image">-->
                        </figure>
                    </a>
                    <div class="dropdown-menu">
                        <a href="#" class="dropdown-item" data-toggle="modal" data-target="#editProfileModal">Edit
                            profile</a>
                        <a href="#" class="dropdown-item active" data-navigation-target="contact-information">Profile</a>
                        <a href="#" class="dropdown-item" data-toggle="modal" data-target="#settingModal">Settings</a>
                        <div class="dropdown-divider"></div>
                        <a href="login.html" class="dropdown-item text-danger">Logout</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
    <!-- ./ navigation -->

    <!-- content -->
    <div class="content">
        <!-- sidebar group -->
        <div class="sidebar-group">
            <!-- Chats sidebar -->
            <div id="chats" class="sidebar active">
                <header>
                    <span>Chats</span>
                    <ul class="list-inline">
                        <li class="list-inline-item" data-toggle="tooltip" title="" data-original-title="New group">
                            <a class="btn btn-outline-light" href="#" data-toggle="modal" data-target="#newGroup">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="btn btn-outline-light" data-toggle="tooltip" title="" href="#" data-navigation-target="friends" data-original-title="New chat">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                            </a>
                        </li>
                        <li class="list-inline-item d-xl-none d-inline">
                            <a href="#" class="btn btn-outline-light text-danger sidebar-close">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </a>
                        </li>
                    </ul>
                </header>
                
                <form>
                    <input type="text" class="form-control" placeholder="Search chats">
                </form>
                
                <div v-if="conversation != null" class="sidebar-body" style="outline: currentcolor none medium;" tabindex="2">
                    <ul class="list-group list-group-flush">
                        <li v-for="convo in conversations" :key="convo.person.id" @click="select(convo)" :class="{ 'open-chat': convo.id == conversation.id }" class="list-group-item">
                            <figure class="avatar avatar-state-success">
                                <img :src="convo.person.photo_url" class="rounded-circle" :alt="convo.person.name">
                            </figure>
                                
                            <div class="users-list-body">
                                <div>
                                    <h5 :class="{ 'text-primary': convo.has_unread > 0 }">{{ convo.person.name }}</h5>
                                    <p v-if="convo.last_message[0] != null">{{ convo.last_message[0].body.substring(0, 50) }}</p>
                                </div>
                                <div class="users-list-action">
                                    <div v-if="convo.has_unread > 0" class="new-message-count">{{ convo.has_unread }}</div>

                                    <small v-if="convo.last_message[0] != null" :class="{ 'text-primary': convo.has_unread > 0 }">
                                        <timeago :datetime="convo.last_message[0].created_at" :auto-update="60"></timeago>
                                    </small>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- ./ Chats sidebar -->

            <!-- Friends sidebar -->
            <div id="friends" class="sidebar">
                <header>
                    <span>Friends</span>
                    <ul class="list-inline">
                        <li class="list-inline-item" data-toggle="tooltip" title="" data-original-title="Add friends">
                            <a class="btn btn-outline-light" href="#" data-toggle="modal" data-target="#addFriends">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                            </a>
                        </li>
                        <li class="list-inline-item d-xl-none d-inline">
                            <a href="#" class="btn btn-outline-light text-danger sidebar-close">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </a>
                        </li>
                    </ul>
                </header>
                <form>
                    <input type="text" class="form-control" placeholder="Search friends">
                </form>
                <div class="sidebar-body" style="overflow: hidden; outline: currentcolor none medium;" tabindex="3">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" data-navigation-target="chats">
                            <div>
                                <figure class="avatar">
                                    <!--<img src="./dist/media/img/women_avatar5.jpg" class="rounded-circle" alt="image">-->
                                </figure>
                            </div>
                            <div class="users-list-body">
                                <div>
                                    <h5>Harrietta Souten</h5>
                                    <p>Dental Hygienist</p>
                                </div>
                                <div class="users-list-action">
                                    <div class="action-toggle">
                                        <div class="dropdown">
                                            <a data-toggle="dropdown" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right">
                                                <a href="#" class="dropdown-item">New chat</a>
                                                <a href="#" data-navigation-target="contact-information" class="dropdown-item active">Profile</a>
                                                <div class="dropdown-divider"></div>
                                                <a href="#" class="dropdown-item text-danger">Block</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item" data-navigation-target="chats">
                            <div>
                                <figure class="avatar avatar-state-warning">
                                    <span class="avatar-title bg-success rounded-circle">A</span>
                                </figure>
                            </div>
                            <div class="users-list-body">
                                <div>
                                    <h5>Aline McShee</h5>
                                    <p>Marketing Assistant</p>
                                </div>
                                <div class="users-list-action">
                                    <div class="action-toggle">
                                        <div class="dropdown">
                                            <a data-toggle="dropdown" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right">
                                                <a href="#" class="dropdown-item">New chat</a>
                                                <a href="#" data-navigation-target="contact-information" class="dropdown-item active">Profile</a>
                                                <div class="dropdown-divider"></div>
                                                <a href="#" class="dropdown-item text-danger">Block</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item" data-navigation-target="chats">
                            <div>
                                <figure class="avatar avatar-state-success">
                                    <!--<img src="./dist/media/img/women_avatar1.jpg" class="rounded-circle" alt="image">-->
                                </figure>
                            </div>
                            <div class="users-list-body">
                                <div>
                                    <h5>Brietta Blogg</h5>
                                    <p>Actuary</p>
                                </div>
                                <div class="users-list-action">
                                    <div class="action-toggle">
                                        <div class="dropdown">
                                            <a data-toggle="dropdown" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right">
                                                <a href="#" class="dropdown-item">New chat</a>
                                                <a href="#" data-navigation-target="contact-information" class="dropdown-item active">Profile</a>
                                                <div class="dropdown-divider"></div>
                                                <a href="#" class="dropdown-item text-danger">Block</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item" data-navigation-target="chats">
                            <div>
                                <figure class="avatar avatar-state-success">
                                    <!--<img src="./dist/media/img/man_avatar3.jpg" class="rounded-circle" alt="image">-->
                                </figure>
                            </div>
                            <div class="users-list-body">
                                <div>
                                    <h5>Karl Hubane</h5>
                                    <p>Chemical Engineer</p>
                                </div>
                                <div class="users-list-action">
                                    <div class="action-toggle">
                                        <div class="dropdown">
                                            <a data-toggle="dropdown" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right">
                                                <a href="#" class="dropdown-item">New chat</a>
                                                <a href="#" data-navigation-target="contact-information" class="dropdown-item active">Profile</a>
                                                <div class="dropdown-divider"></div>
                                                <a href="#" class="dropdown-item text-danger">Block</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item" data-navigation-target="chats">
                            <div>
                                <figure class="avatar">
                                    <!--<img src="./dist/media/img/man_avatar2.jpg" class="rounded-circle" alt="image">-->
                                </figure>
                            </div>
                            <div class="users-list-body">
                                <div>
                                    <h5>Jillana Tows</h5>
                                    <p>Project Manager</p>
                                </div>
                                <div class="users-list-action">
                                    <div class="action-toggle">
                                        <div class="dropdown">
                                            <a data-toggle="dropdown" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right">
                                                <a href="#" class="dropdown-item">New chat</a>
                                                <a href="#" data-navigation-target="contact-information" class="dropdown-item active">Profile</a>
                                                <div class="dropdown-divider"></div>
                                                <a href="#" class="dropdown-item text-danger">Block</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item" data-navigation-target="chats">
                            <div>
                                <figure class="avatar avatar-state-success">
                                    <span class="avatar-title bg-info rounded-circle">AD</span>
                                </figure>
                            </div>
                            <div class="users-list-body">
                                <div>
                                    <h5>Alina Derington</h5>
                                    <p>Nurse</p>
                                </div>
                                <div class="users-list-action">
                                    <div class="action-toggle">
                                        <div class="dropdown">
                                            <a data-toggle="dropdown" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right">
                                                <a href="#" class="dropdown-item">New chat</a>
                                                <a href="#" data-navigation-target="contact-information" class="dropdown-item active">Profile</a>
                                                <div class="dropdown-divider"></div>
                                                <a href="#" class="dropdown-item text-danger">Block</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item" data-navigation-target="chats">
                            <div>
                                <figure class="avatar avatar-state-secondary">
                                    <span class="avatar-title bg-warning rounded-circle">S</span>
                                </figure>
                            </div>
                            <div class="users-list-body">
                                <div>
                                    <h5>Stevy Kermeen</h5>
                                    <p>Associate Professor</p>
                                </div>
                                <div class="users-list-action">
                                    <div class="action-toggle">
                                        <div class="dropdown">
                                            <a data-toggle="dropdown" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right">
                                                <a href="#" class="dropdown-item">New chat</a>
                                                <a href="#" data-navigation-target="contact-information" class="dropdown-item active">Profile</a>
                                                <div class="dropdown-divider"></div>
                                                <a href="#" class="dropdown-item text-danger">Block</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item" data-navigation-target="chats">
                            <div>
                                <figure class="avatar">
                                    <!--<img src="./dist/media/img/man_avatar1.jpg" class="rounded-circle" alt="image">-->
                                </figure>
                            </div>
                            <div class="users-list-body">
                                <div>
                                    <h5>Stevy Kermeen</h5>
                                    <p>Senior Quality Engineer</p>
                                </div>
                                <div class="users-list-action">
                                    <div class="action-toggle">
                                        <div class="dropdown">
                                            <a data-toggle="dropdown" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right">
                                                <a href="#" class="dropdown-item">New chat</a>
                                                <a href="#" data-navigation-target="contact-information" class="dropdown-item active">Profile</a>
                                                <div class="dropdown-divider"></div>
                                                <a href="#" class="dropdown-item text-danger">Block</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item" data-navigation-target="chats">
                            <div>
                                <figure class="avatar">
                                   <!-- <img src="./dist/media/img/man_avatar5.jpg" class="rounded-circle" alt="image">-->
                                </figure>
                            </div>
                            <div class="users-list-body">
                                <div>
                                    <h5>Gloriane Shimmans</h5>
                                    <p>Web Designer</p>
                                </div>
                                <div class="users-list-action">
                                    <div class="action-toggle">
                                        <div class="dropdown">
                                            <a data-toggle="dropdown" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right">
                                                <a href="#" class="dropdown-item">New chat</a>
                                                <a href="#" data-navigation-target="contact-information" class="dropdown-item active">Profile</a>
                                                <div class="dropdown-divider"></div>
                                                <a href="#" class="dropdown-item text-danger">Block</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item" data-navigation-target="chats">
                            <div>
                                <figure class="avatar avatar-state-warning">
                                    <span class="avatar-title bg-secondary rounded-circle">B</span>
                                </figure>
                            </div>
                            <div class="users-list-body">
                                <div>
                                    <h5>Bernhard Perrett</h5>
                                    <p>Software Engineer</p>
                                </div>
                                <div class="users-list-action">
                                    <div class="action-toggle">
                                        <div class="dropdown">
                                            <a data-toggle="dropdown" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right">
                                                <a href="#" class="dropdown-item">New chat</a>
                                                <a href="#" data-navigation-target="contact-information" class="dropdown-item active">Profile</a>
                                                <div class="dropdown-divider"></div>
                                                <a href="#" class="dropdown-item text-danger">Block</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- ./ Friends sidebar -->

            <!-- Favorites sidebar -->
            <div id="favorites" class="sidebar">
                <header>
                    <span>Favorites</span>
                    <ul class="list-inline">
                        <li class="list-inline-item d-xl-none d-inline">
                            <a href="#" class="btn btn-outline-light text-danger sidebar-close">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </a>
                        </li>
                    </ul>
                </header>
                <form>
                    <input type="text" class="form-control" placeholder="Search favorites">
                </form>
                <div class="sidebar-body" style="overflow: hidden; outline: currentcolor none medium;" tabindex="4">
                    <ul class="list-group list-group-flush users-list">
                        <li class="list-group-item">
                            <div class="users-list-body">
                                <div>
                                    <h5>Jennica Kindred</h5>
                                    <p>I know how important this file is to you. You can trust me ;)</p>
                                </div>
                                <div class="users-list-action">
                                    <div class="action-toggle">
                                        <div class="dropdown">
                                            <a data-toggle="dropdown" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right">
                                                <a href="#" class="dropdown-item">Open</a>
                                                <a href="#" class="dropdown-item">Remove favorites</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="users-list-body">
                                <div>
                                    <h5>Marvin Rohan</h5>
                                    <p>Lorem ipsum dolor sitsdc sdcsdc sdcsdcs</p>
                                </div>
                                <div class="users-list-action">
                                    <div class="action-toggle">
                                        <div class="dropdown">
                                            <a data-toggle="dropdown" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right">
                                                <a href="#" class="dropdown-item">Open</a>
                                                <a href="#" class="dropdown-item">Remove favorites</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="users-list-body">
                                <div>
                                    <h5>Frans Hanscombe</h5>
                                    <p>Lorem ipsum dolor sitsdc sdcsdc sdcsdcs</p>
                                </div>
                                <div class="users-list-action">
                                    <div class="action-toggle">
                                        <div class="dropdown">
                                            <a data-toggle="dropdown" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right">
                                                <a href="#" class="dropdown-item">Open</a>
                                                <a href="#" class="dropdown-item">Remove favorites</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="users-list-body">
                                <div>
                                    <h5>Karl Hubane</h5>
                                    <p>Lorem ipsum dolor sitsdc sdcsdc sdcsdcs</p>
                                </div>
                                <div class="users-list-action">
                                    <div class="action-toggle">
                                        <div class="dropdown">
                                            <a data-toggle="dropdown" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right">
                                                <a href="#" class="dropdown-item">Open</a>
                                                <a href="#" class="dropdown-item">Remove favorites</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- ./ Stars sidebar -->

            <!-- Archived sidebar -->
            <div id="archived" class="sidebar">
                <header>
                    <span>Archived</span>
                    <ul class="list-inline">
                        <li class="list-inline-item d-xl-none d-inline">
                            <a href="#" class="btn btn-outline-light text-danger sidebar-close">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </a>
                        </li>
                    </ul>
                </header>
                <form>
                    <input type="text" class="form-control" placeholder="Search archived">
                </form>
                <div class="sidebar-body" style="overflow: hidden; outline: currentcolor none medium;" tabindex="5">
                    <ul class="list-group list-group-flush users-list">
                        <li class="list-group-item">
                            <figure class="avatar">
                                <span class="avatar-title bg-danger rounded-circle">M</span>
                            </figure>
                            <div class="users-list-body">
                                <div>
                                    <h5>Mercedes Pllu</h5>
                                    <p>I know how important this file is to you. You can trust me ;)</p>
                                </div>
                                <div class="users-list-action">
                                    <div class="action-toggle">
                                        <div class="dropdown">
                                            <a data-toggle="dropdown" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right">
                                                <a href="#" class="dropdown-item">Open</a>
                                                <a href="#" class="dropdown-item">Restore</a>
                                                <div class="dropdown-divider"></div>
                                                <a href="#" class="dropdown-item text-danger">Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <figure class="avatar">
                                <span class="avatar-title bg-secondary rounded-circle">R</span>
                            </figure>
                            <div class="users-list-body">
                                <div>
                                    <h5>Rochelle Golley</h5>
                                    <p>Lorem ipsum dolor sitsdc sdcsdc sdcsdcs</p>
                                </div>
                                <div class="users-list-action">
                                    <div class="action-toggle">
                                        <div class="dropdown">
                                            <a data-toggle="dropdown" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right">
                                                <a href="#" class="dropdown-item">Open</a>
                                                <a href="#" class="dropdown-item">Restore</a>
                                                <div class="dropdown-divider"></div>
                                                <a href="#" class="dropdown-item text-danger">Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- ./ Archived sidebar -->
        </div>
        <!-- ./ sidebar group -->

        <div v-if="!noChatSelected" class="chat">
            <Modals :user="authuser" :otherUser="conversation.person" />

            <div class="chat-header">
                <div class="chat-header-user">
                    <figure class="avatar">
                        <img :src="conversation.person.photo_url" class="rounded-circle" :alt="conversation.person.name">
                    </figure>
                    
                    <div>
                        <h5>{{ conversation.person.name }}</h5>
                
                        <small class="text-success">
                            <i v-if="typingUser != null" v-show="typing"> {{ typingUser }} is typing...</i>
                        </small>
                    </div>
                </div>
                
                <div class="chat-header-action">
                    <ul class="list-inline">
                        <li class="list-inline-item d-xl-none d-inline">
                            <button class="btn btn-outline-light mobile-navigation-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                            </button>
                        </li>
                        
                        <li class="list-inline-item" data-toggle="tooltip" title="" data-original-title="Voice call">
                            <button class="btn btn-outline-light text-success" data-toggle="modal" data-target="#call">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </button>
                        </li>
                        
                        <li class="list-inline-item" data-toggle="tooltip" title="" data-original-title="Video call">
                            <button @click="requestVideoCall()" :disabled="conversation == null || conversation.length == 0" class="btn btn-outline-light text-warning">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-video"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                            </button>
                        </li>

                        <!-- <li class="list-inline-item">
                            <button @click="changeBackground()" data-toggle="tooltip" data-placement="right" class="btn btn-outline-light text-danger dark-light-switcher">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                            </button>
                        </li> -->
                    </ul>
                </div>
            </div>

            <div v-show="videoCalling" class="container video" style="background: rgba(21, 20, 20, 0.61); overflow:auto">  
                <div class="row">
                    <div class="col-lg-12 text-right" style="right: 0;margin-bottom: 20px; margin-top: 20px;">
                        <video width="100" class="img-responsive" autoplay id='localVideo' muted></video>
                    </div>
                    <div class="col-lg-12 col-md-12 mb-4">
                        <div class="card" tabindex="-1">
                            <!--Body-->
                            <div class="card-body mb-0 p-0">
                                <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                                    <video width="100" class="img-responsive" autoplay id='remoteVideo'></video>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-12 text-center" style="right: 0;margin-bottom: 20px; margin-top: 20px;">
                            <div class="action-button">
                                <button @click="endVideoCall" type="button" class="btn btn-danger btn-floating btn-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div v-show="!videoCalling" id="chatbody" class="chatbody" :class="{ 'no-message': 'noChatSelected' }" style="overflow: auto; outline: currentcolor none medium;" tabindex="1"> <!-- .no-message -->
                <div v-if="messages.length == 0" class="no-message-container">
                    <div class="row mb-5">
                        <div class="col-md-6 offset-md-3 col-sm-6 offset-sm-3 col-6 offset-3">
                            <img src="/images/dashboard/undraw_empty_xct9.svg" class="img-fluid" alt="image">
                        </div>
                    </div>
                    <p class="lead">No messages here</p>
                </div>

                <div v-if="loading" class="col-md-12" style="text-align: center; margin-top: 70px;">
                    <span class="spinner-border spinner-border-lg" role="status" aria-hidden="true"></span>
                    <span style="text-align: center;white-space: nowrap;font-size: 16px;font-weight: 100;">{{ loadingMessage }}</span>
                </div>
                
                
                <div v-else class="messages">
                    <div v-if="messages.length > 0" v-for="message in messages" :key="message.id" class="message-item" :class="{ 'outgoing-message': message.user_id === authuser.id }">
                        <div class="message-avatar">
                            <figure class="avatar">
                                <img :src="message.user.photo_url" class="rounded-circle" :alt="message.user.name">
                            </figure>
                            
                            <div>
                                <h5>{{ message.user.name }}</h5>

                                <div class="time">
                                    <timeago :datetime="message.created_at" :auto-update="60"></timeago>
                                    <!--<i class="ti-double-check text-info"></i>-->
                                </div>
                            </div>
                        </div>
                        
                        <div class="message-content" style="width: auto; max-width: 105vh;">
                            {{ message.body }}
                        </div>
                    </div>
                    
                    <!--<div class="message-item messages-divider sticky-top" data-label="Today"></div>-->
                    <div class="mb-10"></div>      
                </div>
            </div>

            <div v-show="!videoCalling" class="chat-footer">
                <form>
                    <input type="text" class="form-control" @keydown="isTyping" @keyup.enter="sendMessage" v-model="newMessage" placeholder="Type your message...">
                    <span class="field-error">{{ String(errors.message) }}</span>

                    <div class="form-buttons">
                        <button class="btn btn-primary" type="button" :disabled="emptyMessage" @click.prevent="sendMessage">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- video call modal -->
    <div v-if="!noChatSelected" data-backdrop="static" data-keyboard="false" class="modal call fade" id="videoCall" tabindex="-1" role="dialog" style="display: none;" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-zoom" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="call">
                        <div>
                            <figure class="mb-4 avatar avatar-xl">
                                <img :src="conversation.person.photo_url" class="rounded-circle" alt="image">
                            </figure>
                            <h4>
                                <span class="text-success">Contacting </span> {{ conversation.person.name }}
                            </h4>
                            
                            <div class="col-md-4 offset-md-5 text-center" style="margin-top: 30px;">
                                <rotate-square5 class="video__spinner"></rotate-square5>
                            </div>
                            
                            <div class="action-button">
                                <button @click="stopVideoCall" type="button" class="btn btn-danger btn-floating btn-lg" data-dismiss="modal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>
                                <!--<button type="button" class="btn btn-success btn-pulse btn-floating btn-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-video"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                                </button>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ./ video call modal -->

    <!-- video answer modal -->
    <div v-if="!noChatSelected" data-backdrop="static" data-keyboard="false" class="modal call fade" id="videoAnswer" tabindex="-1" role="dialog" style="display: none;" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-zoom" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="call">
                        <div>
                            <figure class="mb-4 avatar avatar-xl">
                                <img :src="conversation.person.photo_url" class="rounded-circle" alt="image">
                            </figure>
                            <h4>
                                {{ conversation.person.name }} is requesting a <span class="text-success">Video Call </span>
                            </h4>
                            
                            <div class="col-md-4 offset-md-5 text-center" style="margin-top: 30px;">
                                <rotate-square5 class="video__spinner"></rotate-square5>
                            </div>
                            
                            <div class="action-button">
                                <button @click="stopVideoCall" type="button" class="btn btn-danger btn-floating btn-lg" data-dismiss="modal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>
                                <button @click="answerCall" type="button" class="btn btn-success btn-pulse btn-floating btn-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-video"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ./ video answer modal -->
</div>
</template>

<script>
import Modals from './modals/Modals';
import { RotateSquare5 } from "vue-loading-spinner";
import { servers } from './utils/ICEServers';
import { log } from "./utils/logging";

export default {
    props: ['authuser'],

    components: {
        Modals,
        RotateSquare5
    },
      
    data() {
        return {
            loading: false,
            loadingMessage: "",

            openChat: null,
            conversations: [],

            //single selected conversation
            conversation: null,

            messages: [],
            newMessage: "",
            
            typing: false,
            typingUser: null,

            videoCalling: false,
            isCaller: false,
        
            // videos
            myVideo: {},
            remoteVideo: {},

            //offer received from person who requested video call
            offer: null,

            //peerConnectionDidCreate
            peerConnectionDidCreate: false,

            // Media config
            constraints: {
                audio: {
                    echoCancellation: true,
                    noiseSuppression: true, 
                    autoGainControl: false
                },
                video: { 
                    width: 1080, 
                    height: 720 
                }
            },

            // local & remote video stream
            localStream: undefined,
            remoteStream: undefined,
            // STUN ice servers
            configuration: servers,

            // Peer connection
            pc: undefined,
            // Offer config
            offerOptions: {
                offerToReceiveAudio: 1,
                offerToReceiveVideo: 1
            },

            errors: {
                message: "",
            }
        };
    },

    computed: {
         noChatSelected() {
            return this.conversation == null || this.conversation.length === 0;
        },

        emptyMessage() {
            return this.newMessage == ""
        }
    },

    async mounted() {
        await this.getConversations();
    },
    
    methods: {
        async getConversations() {
            let url = `/get-conversations`

            axios.get(url)
            .then((response) => {
                this.conversations = response.data.conversations;

                if (this.conversation == null) {
                    this.conversation = this.conversations[0];

                    this.getMessages(this.conversation.id);
                    this.initializeVideo(this.conversation);
                }
            })
        },

        async select(conversation) {
            if (this.conversation.id == conversation.id) {
                return;
            }

            conversation.has_unread = 0;

            await this.set(conversation).then(() => {
                if (this.conversation != null) {
                    this.getMessages(conversation.id);   
                }
            })
        },
        
        async set(conversation) {
            this.conversation = conversation;
        },

        changeBackground() {
            var body = document.getElementsByTagName("BODY")[0];
            
            if (body.classList.contains("dark")) {
                axios.post('change-background', {  background: 'light'})
            } else if (body.classList.contains("light")) {
                axios.post('change-background', {  background: 'dark'})
            } else {
                return
            }
        },

        async getMessages(conversation_id) {
            let _this = this;

            this.loading = true;
            this.loadingMessage = "fetching messages...";

            let url = `/messages/${conversation_id}`;

            axios.get(url)
            .then(response => {
                if(response.data.messages != null) {
                    this.messages = response.data.messages;
                }

                var chat_body = document.getElementById("chatbody");

                this.loading = false;
                this.loadingMessage = "";

                setTimeout(function () {
                    chat_body.scrollTop = chat_body.scrollHeight;
                }, 200);
            });

            Echo.private('chat')
            .listen('MessageSent', (e) => {
                console.log(e);

                this.messages.push({
                    id: e.message.id,
                    user_id: e.message.user_id,
                    user: e.message.user,
                    body: e.message.body,
                    created_at: e.message.created_at
                });

                setTimeout(function () {
                    chat_body.scrollTop = chat_body.scrollHeight;
                }, 200);
            })
            .listenForWhisper('typing', (e) => {
                this.typingUser = e.typingUser;
                this.typing = e.typing;

                // remove is typing indicator after 0.9s
                setTimeout(function() {
                    _this.typing = false
                }, 9000);
            });
        },

        isTyping() {
            let channel = Echo.private('chat');
            let self = this;

            setTimeout(function() {
                channel.whisper('typing', {
                    typingUser: self.authuser.name,
                    typing: true
                });
            }, 3000);
        },

        notTyping() {
            this.typing = false;
        },

        sendMessage() {
            if (this.conversation == null) {
                return
            }

            if (this.newMessage == "") {
                return;
            }

            let user_id = this.conversation.person.id;
            let message = this.newMessage;
            let url = `/send-message/${user_id}`;

            axios.post(url, {  user_id: user_id, message: message })
            .then(response => {
                this.messages.push(response.data.message);
                this.newMessage = "";

                var chat_body = document.getElementById("chatbody");

                setTimeout(function () {
                    chat_body.scrollTop = chat_body.scrollHeight;
                }, 200);

                //Refresh all conversations and set the receiver to the latest convo
                this.getConversations();
            })
            .catch(error => {
                error.response.data.error.message ? (this.errors.message = error.response.data.error.message) : null
            });
        },

        async initializeVideo(conversation) {
            if (conversation != null) {
                Echo.private('video.' + conversation.id)
                .listen('VideoChatStart', (data) => {

                    // VALIDATOR: since the other user is getting the broadcast, data.to will now be the authuser while data.from will be the other user. It's reversed
                    if(data.from != this.otheruser.id && data.to != this.authuser.id){
                        return;
                    }

                    if(data.type === 'signal') {
                        this.onSignalMessage(data);
                    } else if(data.type === 'text') {
                        console.log('received text message from ' + data.from + ', content: ' + data.content);
                    } else{
                        console.log('received unknown message type ' + data.type + ' from ' + data.from);
                    }
                });

                // Set the video element
                this.myVideo = document.getElementById("localVideo");
                this.remoteVideo = document.getElementById("remoteVideo");

                // Create peer connection
                this.createPeerConnection();

                // Event listeners
                this.onIceCandidates();
                this.onAddStream();
            }
        },

        async requestVideoCall() {
            if (this.conversation == null || this.conversation.length == 0) {
                return;
            }

            if (this.videoCalling == true) {
                return;
            }

            log(`${this.authuser.name} wants to start a call`); 

            this.isCaller = true;
            $('#videoCall').modal('show');

            await this.getUserMedia();
            await this.getAudioVideo();

            this.startVideoCall();
        },

        async getUserMedia() {
            log(`Requesting ${this.authuser.name} video stream`);
            if ("mediaDevices" in navigator) {
                try {
                    const stream = await navigator.mediaDevices.getUserMedia(this.constraints);
                    this.myVideo.srcObject = stream;
                    this.localStream = stream;
                    log("Received local video stream");
                } catch (error) {
                    log(`getUserMedia error: ${error}`);
                }
            }
        },

        getAudioVideo() {
            const video = this.localStream.getVideoTracks();
            const audio = this.localStream.getAudioTracks();
            if (video.length > 0) log(`Using video device: ${video[0].label}`);
            if (audio.length > 0) log(`Using audio device: ${audio[0].label}`);
        },

        // Send signaling data via Scaledrone
        async sendSignal(details) {
            let authuser = this.authuser.id; 
            let otheruser = this.otheruser.id;
            //return console.log(details['content'])

            var message = { from: authuser, to: otheruser, type: details['type'], subtype: details['subtype'], content: details['content'], time: new Date() };
            await axios.post('/trigger-video-call', {message: message});
        },

        startVideoCall() {
            // Add local stream
            this.addLocalStream();
            this.videoCalling = true;

            if (this.isCaller) {
                this.callFriend();
            } else {
                this.createAnswer()
            }
            
        },

        createPeerConnection() {
            this.pc = new RTCPeerConnection(this.configuration);
            log(`Created ${this.authuser.name} peer connection object`);
        },

        addLocalStream(){
            this.pc.addStream(this.localStream)
        },

        onIceCandidates() {
            // send any ice candidates to the other peer
            log(`${this.authuser.name} starting onice candidate`);
            var limit = 0;
            this.pc.onicecandidate = ({ candidate }) => {
                if (limit == 0) {
                    var details = [];
            
                    details['type'] = 'signal';
                    details['subtype'] = 'candidate';
                    details['content'] = candidate;

                    this.sendSignal(details);
                    limit = 1;
                } else {
                    return;
                }
            };
        },

         onAddStream() {
            log(`${this.authuser.name} starting onadd stream`);

            this.pc.onaddstream = (event) => {
                if(!this.remoteVideo.srcObject && event.stream) {
                    this.remoteStream = event.stream
                    this.remoteVideo.srcObject = this.remoteStream ;
                }
            }
        },

        callFriend() {
            log(`${this.authuser.name} wants to start a call`);   
            this.createOffer();
        },

        async setRemoteDescription(remoteDesc) {
            try {
                log(`${this.authuser.name} setRemoteDescription: start`);
                await this.pc.setRemoteDescription(remoteDesc);
                log(`${this.authuser.name} setRemoteDescription: finished`);
            } catch (error) {
                log(`Error setting the RemoteDescription in ${this.authuser.name}. Error: ${error}`);
            }
        },

        async createAnswer() {
            log(`${this.authuser.name} create an answer: start`);
            try {
                const answer = await this.pc.createAnswer();

                log(`Answer from ${this.authuser.name}\n ${answer.sdp}`);
                log(`${this.authuser.name} setLocalDescription: start`);
                
                await this.pc.setLocalDescription(answer);
                
                log(`${this.authuser.name} setLocalDescription: finished`);
                this.sendSignalingMessage(this.pc.localDescription, false);
            } catch (error) {
                log(`Error creating the answer from ${this.authuser.name}. Error: ${error}`);
            }
        },

        async createOffer() {
            log(`${this.authuser.name} create an offer: start`);
            
            try {
                const offer = await this.pc.createOffer(this.offerOptions);

                log(`Offer from ${this.authuser.name}\n ${offer.sdp}`);
                log(`${this.authuser.name} setLocalDescription: start`);
                
                await this.pc.setLocalDescription(offer);
                
                log(`${this.authuser.name} setLocalDescription: finished`);
                
                this.sendSignalingMessage(this.pc.localDescription, true);
            } catch (error) {
                log(`Error creating the offer from ${this.authuser.name}. Error: ${error}`);
            }
        },

        sendSignalingMessage(desc, offer) {
            const isOffer = offer ? "offer" : "answer";
            log(`${this.authuser.name} sends the ${isOffer} through the signal channel`);
            // send the offer to the other peer
            var details = [];
            
            details['type'] = 'signal';
            details['subtype'] = isOffer;
            details['content'] = desc;

            this.sendSignal(details);
        },

        onSignalMessage(m) {
            log(m.subtype);
            
            if(m.subtype === 'offer') {
                log('got remote offer from ' + m.from + ', content ' + m.content);
                this.onSignalOffer(m.content);
            } else if(m.subtype === 'answer') {
                this.onSignalAnswer(m.content);
            } else if(m.subtype === 'candidate') {
                log('got remote candidate from ' + m.from + ', content ' + m.content);
                this.onSignalCandidate(m.content);
            } else if(m.subtype === 'close') {
                this.onSignalClose();
            } else {
                console.log('unknown signal type ' + m.subtype);
            }
        },

        async onSignalOffer(offer) {
            log('onsignal offer')
            this.offer = offer;
            
            var data = {
                type: this.offer.type,
                sdp: this.offer.sdp += "\n"
            }
            await this.setRemoteDescription(data);
            $('#videoAnswer').modal('show');
        },

        answerCall() {
            this.isCaller = false;

            $('#videoAnswer').modal('hide');
            this.startAnswer()
        },

        async startAnswer() {
            log(`Requesting ${this.authuser.name} video stream`);
            
            await this.getUserMedia();
            await this.getAudioVideo();

            this.startVideoCall();
        },

        async onSignalAnswer(answer) {
            log('onRemoteAnswer : ' + answer);

            var data = {
                type: answer.type,
                sdp: answer.sdp += "\n"
            }
            await this.setRemoteDescription(data);
            
            this.onSetRemoteSuccess(this.pc);
        },

        onSetRemoteSuccess(pc) {
            $('#videoCall').modal('hide');
            log(pc + ' setRemoteDescription complete');
        },

        async onSignalCandidate(candidate) {
            try {
                log(`${this.authuser.name} attempting to add a candidate`);
                await this.pc.addIceCandidate(new RTCIceCandidate(candidate));
                log(`Candidate added`);
            } catch (error) {
                log(`Error adding a candidate in ${this.authuser.name}. Error: ${error}`)
            }
        },

        onSignalClose() {
            log('Ending call');
            this.pc.close();
            this.pc = null;

            this.videoCalling = false;

            this.closeMedia();
            this.clearView();
        },

        stopVideoCall() {
            this.pc.close();
            this.pc = null;

            this.videoCalling = false;
            
            this.closeMedia();
            this.clearView();

            $('#videoCall').modal('hide')
        },

        closeMedia(){
            this.localStream.getTracks().forEach(function(track){track.stop();});
        },

        clearView(){
            this.myVideo.srcObject = null;
            this.remoteVideo.srcObject = null;
        },

        //Video call already going on and member wants to end it
        endVideoCall() {
            let details = [];

            details['type'] = 'signal';
            details['subtype'] = 'close';
            details['content'] = 'ending the call';

            this.sendSignal(details);

            log('Ending call');
            this.pc.close();
            this.pc = null;

            this.videoCalling = false;

            this.closeMedia();
            this.clearView();
        }
    }
};
</script>

<style scoped>
input[type="text"]:disabled, button:disabled {
    cursor: not-allowed! important; 
}

.videoRID {
    width: 100%;
}

.video {
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
}

.videoUID {
    position: relative;
    right: 0;
    top: 0;
    bottom: 0;
    padding: 0 !important;
}
</style>