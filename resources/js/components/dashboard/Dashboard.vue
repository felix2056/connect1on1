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
                    <a href="#" class="dark-light-switcher" data-toggle="tooltip" title="" data-placement="right" data-original-title="Light mode">
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
                
                <div class="sidebar-body" style="overflow: hidden; outline: currentcolor none medium;" tabindex="2">
                    <ul class="list-group list-group-flush">
                        <li v-for="conversation in conversations" :key="conversation.person.id" @click="select(conversation)" :class="{ 'open-chat': openChat == conversation }" class="list-group-item">
                            <figure class="avatar avatar-state-success">
                                <img :src="conversation.person.photo_url" class="rounded-circle" :alt="conversation.person.name">
                            </figure>
                                
                            <div class="users-list-body">
                                <div>
                                    <h5 :class="{ 'text-primary': conversation.has_unread > 0 }">{{ conversation.person.name }}</h5>
                                    <p v-if="conversation.last_message[0] != null">{{ conversation.last_message[0].body.substring(0, 50) }}</p>
                                </div>
                                <div class="users-list-action">
                                    <div v-if="conversation.has_unread > 0" class="new-message-count">{{ conversation.has_unread }}</div>

                                    <small v-if="conversation.last_message[0] != null" :class="{ 'text-primary': conversation.has_unread > 0 }">
                                        <timeago :datetime="conversation.last_message[0].created_at" :auto-update="60"></timeago>
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

        <!-- chat -->
        <chat-component :user="user" :conversation="openChat"></chat-component>
        <!-- ./ chat -->
        
        <div v-if="openChat != null" class="sidebar-group mobile-open">
            <div id="contact-information" class="sidebar active">
                <header>
                    <span>Profile</span>
                    <ul class="list-inline">
                        <li class="list-inline-item">
                            <a href="#" class="btn btn-outline-light text-danger sidebar-close">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </a>
                        </li>
                    </ul>
                </header>
                <div class="sidebar-body" tabindex="6">
                    <div class="pl-4 pr-4">
                        <div class="text-center">
                            <figure class="avatar avatar-xl mb-4">
                                <img :src="openChat.person.photo_url" class="rounded-circle" :alt="openChat.person.name">
                            </figure>
                            <h5 class="mb-1">{{ openChat.person.name }}</h5>
                            <small class="text-muted font-italic">Last seen: Today</small>

                            <ul class="nav nav-tabs justify-content-center mt-5" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Media</a>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <p class="text-muted">{{ openChat.person.about }}</p>
                                <div class="mt-4 mb-4">
                                    <h6>Gender</h6>
                                    <p class="text-muted">{{ openChat.person.gender }}</p>
                                </div>
                                <div class="mt-4 mb-4">
                                    <h6>Interested In</h6>
                                    <p v-if="openChat.person.interest == 'male_interest'" class="text-muted">Men</p>
                                    <p v-if="openChat.person.interest == 'female_interest'" class="text-muted">Women</p>
                                </div>
                                <div class="mt-4 mb-4">
                                    <h6>City</h6>
                                    <p class="text-muted">Germany / Berlin</p>
                                </div>
                                <div class="mt-4 mb-4">
                                    <h6 class="mb-3">Social media accounts</h6>
                                    <ul class="list-inline social-links">
                                        <li class="list-inline-item">
                                            <a href="#" class="btn btn-sm btn-floating btn-facebook" data-toggle="tooltip" title="" data-original-title="Facebook">
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#" class="btn btn-sm btn-floating btn-twitter" data-toggle="tooltip" title="" data-original-title="Twitter">
                                                <i class="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#" class="btn btn-sm btn-floating btn-dribbble" data-toggle="tooltip" title="" data-original-title="Dribbble">
                                                <i class="fa fa-dribbble"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#" class="btn btn-sm btn-floating btn-whatsapp" data-toggle="tooltip" title="" data-original-title="Whatsapp">
                                                <i class="fa fa-whatsapp"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#" class="btn btn-sm btn-floating btn-linkedin" data-toggle="tooltip" title="" data-original-title="Linkedin">
                                                <i class="fa fa-linkedin"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#" class="btn btn-sm btn-floating btn-google" data-toggle="tooltip" title="" data-original-title="Google">
                                                <i class="fa fa-google"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#" class="btn btn-sm btn-floating btn-behance" data-toggle="tooltip" title="" data-original-title="Behance">
                                                <i class="fa fa-behance"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#" class="btn btn-sm btn-floating btn-instagram" data-toggle="tooltip" title="" data-original-title="Instagram">
                                                <i class="fa fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="mt-4 mb-4">
                                    <h6 class="mb-3">Settings</h6>
                                    <div class="form-group">
                                        <div class="form-item custom-control custom-switch">
                                            <input type="checkbox" class="custom-control-input" id="customSwitch11">
                                            <label class="custom-control-label" for="customSwitch11">Block</label>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="form-item custom-control custom-switch">
                                            <input type="checkbox" class="custom-control-input" checked="" id="customSwitch12">
                                            <label class="custom-control-label" for="customSwitch12">Mute</label>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="form-item custom-control custom-switch">
                                            <input type="checkbox" class="custom-control-input" id="customSwitch13">
                                            <label class="custom-control-label" for="customSwitch13">Get
                                                notification</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <h6 class="mb-3 d-flex align-items-center justify-content-between">
                                    <span>Recent Files</span>
                                    <a href="#" class="btn btn-link small">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-upload mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg> Upload
                                    </a>
                                </h6>
                                <div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item pl-0 pr-0 d-flex align-items-center">
                                            <a href="#">
                                                <i class="fa fa-file-pdf-o text-danger mr-2"></i> report4221.pdf
                                            </a>
                                        </li>
                                        <li class="list-group-item pl-0 pr-0 d-flex align-items-center">
                                            <a href="#">
                                                <i class="fa fa-image text-muted mr-2"></i> avatar_image.png
                                            </a>
                                        </li>
                                        <li class="list-group-item pl-0 pr-0 d-flex align-items-center">
                                            <a href="#">
                                                <i class="fa fa-file-excel-o text-success mr-2"></i>
                                                excel_report_file2020.xlsx
                                            </a>
                                        </li>
                                        <li class="list-group-item pl-0 pr-0 d-flex align-items-center">
                                            <a href="#">
                                                <i class="fa fa-file-text-o text-warning mr-2"></i> articles342133.txt
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ./ content -->
</div>
</template>

<script>
import ChatComponent from "./ChatComponent";

export default {
    props: ['user', 'conversations'],

    components: {
        ChatComponent,
    },

    data() {
        return {
            openChat: null
        }
    },

    methods: {
        async select(conversation) {
            if (this.openChat == conversation) {
                return;
            }

            conversation.has_unread = 0;

            await this.set(conversation).then(() => {
                if (this.openChat != null) {
                    this.$emit('chat_selected');   
                }
            })
        },

        async set(conversation) {
            this.openChat = conversation;
        }
    }
}
</script>