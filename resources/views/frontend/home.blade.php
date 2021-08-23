@extends('layouts.app')

@section('content')
<!--preloader -->
  <div id="preloader" style="display: block;">
    <div class="clear-loading loading-effect"><img src="/images/loading.gif" alt=""></div>
  </div>
  
<!--=================================
banner -->
<!--<section id="main-slider" class="fullscreen" style="height: 750px !important;">
  <div class="banner banner-3 bg-1 bg-overlay-red" style="background-image: url(/images/bg/bg-6.jpg);">
    <div class="slider-static">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7 col-md-12 align-self-center">
                                <h1 class="animated3 text-white">CONNECT1ON1.COM IS A 100% FREE SITE</h1>
                            </div>
                            <div class="col-lg-5 col-md-12 mt-5 sm-mt-0">
                                <div class="banner-form">
                                    <h4>dating with Cupid love Your perfect match is just a click away</h4>
                                    <form action="{{ route('frontend.members.index') }}" method="GET" class="form-inner">  
                                        <div class="form-group">
                                            <label class="col-md-4 control-label">I am a</label>
                                            <div class="col-md-8">
                                                <select class="selectpicker" name="gender" tabindex="-98">
                                                    <option>Man</option>
                                                    <option>Woman</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-md-4 control-label">Seeking a</label>
                                            <div class="col-md-8">
                                                <select class="selectpicker" name="seeking" tabindex="-98">
                                                    <option>Woman</option>
                                                    <option>Man</option>
                                                </select>
                                            </div>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label class="col-md-4 control-label">From</label>
                                            <div class="col-md-8">
                                                <select class="selectpicker" name="from" tabindex="-98">
                                                    <option>18</option>
                                                    <option>19</option>
                                                    <option>20</option>
                                                    <option>21</option>
                                                    <option>22</option>
                                                    <option>23</option>
                                                    <option>24</option>
                                                    <option>25</option>
                                                    <option>26</option>
                                                    <option>27</option>
                                                    <option>28</option>
                                                    <option>29</option>
                                                    <option>30</option>
                                                    <option>31</option>
                                                    <option>32</option>
                                                    <option>33</option>
                                                    <option>34</option>
                                                    <option>35</option>
                                                    <option>36</option>
                                                    <option>37</option>
                                                    <option>38</option>
                                                    <option>39</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-md-4 control-label">To</label>
                                            <div class="col-md-8">
                                                <select class="selectpicker" name="to" tabindex="-98">
                                                    <option>40</option>
                                                    <option>41</option>
                                                    <option>42</option>
                                                    <option>43</option>
                                                    <option>44</option>
                                                    <option>45</option>
                                                    <option>46</option>
                                                    <option>47</option>
                                                    <option>48</option>
                                                    <option>49</option>
                                                    <option>50</option>
                                                    <option>51</option>
                                                    <option>52</option>
                                                    <option>53</option>
                                                    <option>54</option>
                                                    <option>55</option>
                                                    <option>56</option>
                                                    <option>57</option>
                                                    <option>58</option>
                                                    <option>59</option>
                                                    <option>60</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group mb-0 text-right col-md-12"> 
                                            <button type="submit" class="button btn-lg btn-theme full-rounded animated right-icn">
                                                <span>start flirting <i class="fa fa-search" aria-hidden="true"></i></span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>-->
        

        <section id="home-slider" class="fullscreen">
          <div id="main-slider" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item h-100 bg-overlay-red active" style="background: url(/images/bg/bg-1.jpg) no-repeat 0 0; background-size: cover;">
                <div class="slider-content">
                  <div class="container">
                    <div class="row carousel-caption align-items-center h-100">
                      <div class="col-md-12 text-right">
                        <div class="slider-1">
                          <h2 class="animated2 text-white">CONNECT1ON1.COM IS A <span>100% FREE SITE</span></h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item h-100 bg-overlay-red" style="background: url(/images/bg/bg-2.jpg ) no-repeat 0 0; background-size: cover;">
                <div class="slider-content">
                  <div class="container">
                    <div class="row carousel-caption align-items-center h-100">
                      <div class="col-md-12 text-left">
                        <div class="slider-1">
                          <h2 class="animated7 text-white">CONNECT WITH <span> SEXY SINGLES!</span></h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item h-100 bg-overlay-red" style="background: url(/images/bg/bg-3.jpg ) no-repeat 0 0; background-size: cover;">
                <div class="slider-content">
                  <div class="container">
                    <div class="row carousel-caption align-items-center h-100">
                      <div class="col-md-12 text-left">
                        <div class="slider-1">
                          <h2 class="animated7 text-white">Chat Via <span>Audio, Webcam Or Text!</span></h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a class="left carousel-control" href="#main-slider" data-slide="prev"> <span><i class="fa fa-angle-left"></i></span> </a> <a class="right carousel-control" href="#main-slider" data-slide="next"> <span><i class="fa fa-angle-right"></i></span> </a> </div>
        </section>

        

        <section class="form-1 py-3">
          <div class="container">
            <div class="banner-form">
              <form action="{{ route('frontend.members.index') }}" method="GET">  
                <div class="row">
                  <div class="col-md-3">
                    <div class="form-group row">
                      <div class="col-lg-4 col-md-12">
                        <label class="control-label text-white">I am a</label>
                      </div>
                      <div class="col-lg-8 col-md-12">
                        <div class="btn-group bootstrap-select">
                          <select class="selectpicker" name="gender" tabindex="-98">
                            <option>Man</option>
                            <option>Woman</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-group row">
                      <div class="col-lg-5 col-md-12">
                        <label class="control-label text-white">Seeking a</label>
                      </div>
                      <div class="col-lg-7 col-md-12">
                        <div class="btn-group bootstrap-select">
                          <select class="selectpicker" name="seeking" tabindex="-98">
                            <option>Woman</option>
                            <option>Man</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group row">
                          <div class="col-lg-4 col-md-12">
                            <label class="control-label text-white">From</label>
                          </div>
                          <div class="col-lg-8 col-md-12">
                            <div class="btn-group bootstrap-select">
                              <select class="selectpicker" name="from" tabindex="-98">
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                                <option>25</option>
                                <option>26</option>
                                <option>27</option>
                                <option>28</option>
                                <option>29</option>
                                <option>30</option>
                                <option>31</option>
                                <option>32</option>
                                <option>33</option>
                                <option>34</option>
                                <option>35</option>
                                <option>36</option>
                                <option>37</option>
                                <option>38</option>
                                <option>39</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group row">
                          <div class="col-lg-4 col-md-12">
                            <label class="control-label text-white pl-0">To</label>
                          </div>
                          <div class="col-lg-8 col-md-12">
                            <div class="btn-group bootstrap-select">
                              <select class="selectpicker" name="to" tabindex="-98">
                                <option>40</option>
                                <option>41</option>
                                <option>42</option>
                                <option>43</option>
                                <option>44</option>
                                <option>45</option>
                                <option>46</option>
                                <option>47</option>
                                <option>48</option>
                                <option>49</option>
                                <option>50</option>
                                <option>51</option>
                                <option>52</option>
                                <option>53</option>
                                <option>54</option>
                                <option>55</option>
                                <option>56</option>
                                <option>57</option>
                                <option>58</option>
                                <option>59</option>
                                <option>60</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <button type="submit" class="button btn-lg btn-theme full-rounded animated right-icn">
                      <span>search <i class="fa fa-search" aria-hidden="true"></i></span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        
        <!--=================================
         banner --> 
        
        <!--=================================
         Page Section --> 
        
        <!--=================================
        Step to find your Soul Mate -->
        
        <section class="page-section-ptb position-relative timeline-section">
          <div class="container">
            <div class="row justify-content-center mb-5 sm-mb-3">
              <div class="col-md-10 text-center">
                <h2 class="title divider mb-3">START DATING TODAY !</h2>
                <p class="lead">You find us, finally, and you are already in love. More than 5.000.000 around the world already shared the same
                  experience and uses our system. Joining us today just got easier!</p>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-lg-10 col-md-12">
                <ul class="timeline list-inline">
                  <li>
                    <div class="timeline-badge"><img class="img-fluid" src="/images/timeline/01.png" alt=""></div>
                    <div class="timeline-panel">
                      <div class="timeline-heading text-center">
                        <h4 class="timeline-title divider-3">CREATE YOUR PROFILE</h4>
                      </div>
                      <div class="timeline-body">
                        <p>Create your profile and add images that capture what you're about, whether it's running 5Ks or taking cooking classes.</p>
                      </div>
                    </div>
                  </li>
                  <li class="timeline-inverted">
                    <div class="timeline-badge"><img class="img-fluid" src="/images/timeline/02.png" alt=""></div>
                    <div class="timeline-panel">
                      <div class="timeline-heading text-center">
                        <h4 class="timeline-title divider-3">UPLOAD PERSONAL VIDEOS</h4>
                      </div>
                      <div class="timeline-body">
                        <p>Connect1on1 lets you connect with others via video profiles. Make your profiles come to live and put them up for everyone to see, or only share them with your matches. </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="timeline-badge"><img class="img-fluid" src="/images/timeline/03.png" alt=""></div>
                    <div class="timeline-panel">
                      <div class="timeline-heading text-center">
                        <h4 class="timeline-title divider-3">PRIVATE 1-1 LIVE WEBCAM DATE</h4>
                      </div>
                      <div class="timeline-body">
                        <p>This and much more is what you can do in front of the person with whom you want to chat ... because you can see each other and talk seriously!</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <!--=================================
        Connect 1on1 -->
        <section class="bg-white common_section feature_section">
          <div class="container">
              <header class="header01">
                  <h2 class="text-center color-pink wow fadeInDown  animated" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInDown;">FEATURES</h2>
                  <p class="text-center wow fadeInDown  animated" data-wow-delay="0.4s" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInDown;">Ready to take your dating chatting experience to the next level? To start using video chat on dating.com , be sure your<br class="hidden-xs hidden-md hidden-sm"> webcam is in working order and then follow a few easy setup and start video chat</p>
              </header>
              <ul class="list-unstyled">
                  <li>
                      <div class="description wow fadeInLeft  animated" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInLeft;">            
                          <mark>1</mark>
                          <div class="matter">
                              <h3 class="color-pink">CONNECT WITH SEXY SINGLES!</h3>
                              <p>You can get notifications for your<br> dating.com through SMS on your phone.</p>
                          </div>
                      </div>
                      <figure class=""><img alt="img" class="img-responsive wow fadeInDown  animated" data-wow-delay="0.2s" src="{{ asset('images/story/feature-img01.png') }}" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInDown;"></figure>
                  </li>
                  <li>
                      <div class="description wow fadeInLeft  animated" data-wow-delay="0.4s" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInLeft;">
                          <hgroup>
                              <mark>2</mark>             
                          </hgroup>
                          <div class="matter">
                              <h3 class="color-darkblue">CHAT VIA AUDIO, WEBCAM OR TEXT! </h3>
                              <p>Make you profile complete by uploading <br>videos</p>
                          </div></div>
                      <figure class=""><img alt="img" class="img-responsive wow fadeInDown  animated" data-wow-delay="0.4s" src="{{ asset('images/story/feature-img02.png') }}" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInDown;"></figure>
                  </li>
                  <li>
                      <div class="description wow fadeInLeft  animated" data-wow-delay="0.6s" style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInLeft;">
                          <hgroup>
                              <mark>3</mark>              
                          </hgroup>
                          <div class="matter">
                              <h3 class="color-lightgreen">SHARE VIDEO, AUDIO PROFILES!</h3>
                              <p>Our Dating chatroom is for anyone. If you want to<br class="hidden-xs"> chat about Face to Face only, please click JOIN<br class="hidden-xs"> or login.</p>
                          </div></div>
                      <figure><img alt="img" class="img-responsive wow fadeInDown  animated" data-wow-delay="0.6s" src="{{ asset('images/story/feature-img03.png') }}" style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInDown;"></figure>
                  </li>
              </ul>
          </div></section>
    
        
        <section class="page-section-ptb text-white bg-overlay-black-70 bg text-center" style="background: url(/images/bg/bg-4.jpg) no-repeat 0 0; background-size: cover;">
          <div class="container">
            <div class="row justify-content-center mb-5 sm-mb-3">
              <div class="col-md-10">
                <h2 class="title divider mb-3">START VIDEO CHAT</h2>
                <p class="lead">Ready to take your dating chatting experience to the next level? To start using video chat on dating.com , be sure your webcam is in working order and then follow a few easy setup and start video chat.</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <h5 class="title mb-3">see video</h5>
                <div class="popup-gallery">
                  <a href="#" data-target="#imageModal" data-toggle="modal" class="play-btn popup-youtube">
                    <span>
                      <i class="fa fa-play" style="font-size: 40px; margin-top: 6px;"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Set up your HTML -->
        
        <!--=================================
        Last added profile -->
        
        @if (count(App\User::all()))
        <section class="page-section-ptb profile-slider pb-5">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-8 text-center">
                <h2 class="title divider">Last Added Profiles</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="owl-carousel">
                  @foreach (App\User::latest()->limit(10)->get() as $user)
                  <div class="item">
                    <a href="profile-details.html" class="profile-item">
                      <div class="profile-image clearfix">
                        <img class="img-fluid w-100" src="{{ $user->photo_url }}" alt="{{ $user->name }}" style="max-height: 50vh;">
                      </div>
                      <div class="profile-details text-center">
                        <h5 class="title">{{ $user->name }}</h5>
                        <span>{{ $user->age }} years old</span>
                      </div>
                    </a>
                  </div>
                  @endforeach
                </div>
              </div>
            </div>
          </div>
        </section>
        @endif


        <!--=================================
        Dating Principles -->

        <section class="bg-white dating_principle">
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-lg-6 col-md-6 col-sm-6 left-section col-lg-push-6 col-md-push-6 col-sm-push-6">
                      <header class="header01 m-b-0">
                          <h2 class="color-pink wow fadeInDown  animated">DATING <span>PRINCIPLE!</span><br>
                              Love is more than a <span>coincidence</span>.</h2>
                          <p class="lead" data-wow-delay="0.4s">So we can bring you the matches with the most potential for a happy and long-lasting relationship, we rely on findings from 40 years of research in this field: The Dating.com analyzes 32 personality traits and is based on a matching algorithm of 136 rules.</p>
                      </header>   
                  </div> 
                  <div class="col-lg-6 col-md-6 col-sm-6 col-md-pull-6 right-section col-lg-pull-6 col-sm-pull-6 wow fadeInUp  animated" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
                      <img src="{{ asset('images/bg/datingprinciple-img.jpg') }}" class="img-responsive" alt="img">
                  </div>  
              </div>
          </div>
      </section>
        
        <!--=================================
        they found true love --> 
        
        <!--=================================
        Counter -->
        <section class="page-section-ptb  text-white" style="background: url(/images/pattern/02.png) no-repeat 0 0; background-size: cover;">
          <div class="container">
            <div class="row justify-content-center mb-5 sm-mb-3">
              <div class="col-md-8 text-center">
                <h2 class="title divider">Animated Fun Facts</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3 text-center">
                <div class="counter"> <img src="/images/counter/01.png" alt=""> <span class="timer" data-to="1600" data-speed="10000">1600</span>
                  <label>Total Members</label>
                </div>
              </div>
              <div class="col-md-3 text-center">
                <div class="counter"> <img src="/images/counter/02.png" alt=""> <span class="timer" data-to="750" data-speed="10000">750</span>
                  <label>Online Members</label>
                </div>
              </div>
              <div class="col-md-3 text-center">
                <div class="counter"> <img src="/images/counter/03.png" alt=""> <span class="timer" data-to="380" data-speed="10000">380</span>
                  <label>Men Online</label>
                </div>
              </div>
              <div class="col-md-3 text-center">
                <div class="counter"> <img src="/images/counter/04.png" alt=""> <span class="timer" data-to="370" data-speed="10000">370</span>
                  <label>Women Online</label>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <!--=================================
        Testimonial-->
        
        <section class="page-section-ptb pb-130 sm-pb-6 gray-bg">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 text-center">
                        <h2 class="title divider">Testimonials</h2>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <div class="owl-carousel-testimonial">
                            <div class="item">
                                <div class="testimonial left_pos">
                                    <div class="testimonial-avatar">
                                        <img alt="" src="/images/thumbnail/thum-2.jpg">
                                    </div>
                                    <div class="testimonial-info">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                                    </div>
                                    <div class="author-info">
                                        <strong>Miss Jorina Akter - <span>Iraq</span></strong>
                                    </div>
                                </div>
                            </div>
                                
                               
                            <div class="item">
                                <div class="testimonial left_pos">
                                    <div class="testimonial-avatar"> <img alt="" src="/images/thumbnail/thum-3.jpg"> </div>
                                    <div class="testimonial-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</div>
                                    <div class="author-info"> <strong>Adam Cooper - <span> New york</span></strong> </div>
                                </div>
                            </div>
                  
                            <div class="item">
                                <div class="testimonial left_pos">
                                <div class="testimonial-avatar"> <img alt="" src="/images/thumbnail/thum-1.jpg"> </div>
                                <div class="testimonial-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</div>
                                <div class="author-info"> <strong>Jack Thompson - <span>Usa</span></strong> </div>
                                </div>
                            </div>
                  
                            <div class="item">
                                <div class="testimonial left_pos">
                                <div class="testimonial-avatar"> <img alt="" src="/images/thumbnail/thum-2.jpg"> </div>
                                <div class="testimonial-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</div>
                                <div class="author-info"> <strong>Miss Jorina Akter - <span>Iraq</span></strong> </div>
                                </div>
                            </div>
                  
                            <div class="item">
                                <div class="testimonial left_pos">
                                <div class="testimonial-avatar"> <img alt="" src="/images/thumbnail/thum-3.jpg"> </div>
                                <div class="testimonial-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</div>
                                <div class="author-info"> <strong>Adam Cooper - <span> New york</span></strong> </div>
                                </div>
                            </div>
                            
                            <div class="item">
                                <div class="testimonial left_pos">
                                <div class="testimonial-avatar"> <img alt="" src="/images/thumbnail/thum-1.jpg"> </div>
                                <div class="testimonial-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</div>
                                <div class="author-info"> <strong>Jack Thompson - <span>Usa</span></strong> </div>
                                </div>
                            </div>
                            
                            <div class="item">
                                <div class="testimonial left_pos">
                                <div class="testimonial-avatar"> <img alt="" src="/images/thumbnail/thum-2.jpg"> </div>
                                <div class="testimonial-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</div>
                                <div class="author-info"> <strong>Miss Jorina Akter - <span>Iraq</span></strong> </div>
                                </div>
                            </div>
                
                
                <!--<div class="owl-controls">
                    <div class="owl-nav">
                        <div class="owl-prev" style="display: none;">
                            <i class="fa fa-angle-left fa-2x"></i>
                        </div>
                        <div class="owl-next" style="display: none;">
                            <i class="fa fa-angle-right fa-2x"></i>
                        </div>
                    </div>
                    <div style="" class="owl-dots">
                        <div class="owl-dot active">
                            <span></span>
                        </div>
                        <div class="owl-dot">
                            <span></span>
                        </div>
                        <div class="owl-dot">
                            <span></span>
                        </div>
                    </div>
                </div>-->

              </div>
            </div>
          </div>
        </section>
        
        <section class="page-section-ptb">
          <div class="container">
            <div class="row justify-content-center mb-5 sm-mb-3">
              <div class="col-md-8 text-center">
                <h2 class="title divider mb-3">Our team member</h2>
                <p class="lead">Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu, diam erant convenire et vis. Et essent evertitur sea, vis cu ubique referrentur, sed eu dicant expetendis. Eum cu</p>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <div class="team boxed">
                  <div class="team-images"> <img class="img-fluid" src="/images/team/team1.png" alt=""> </div>
                  <div class="team-description">
                    <h5 class="title"><a href="team-single.html">Bill Nelson</a></h5>
                    <span>Founder</span>
                    <p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc.</p>
                    <div class="team-social-icon social-icons color-hover">
                      <ul>
                        <li class="social-facebook"><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li class="social-twitter"><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li class="social-gplus"><a href="#"><i class="fa fa-google-plus"></i></a></li>
                        <li class="social-dribbble"><a href="#"><i class="fa fa-dribbble"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="team boxed">
                  <div class="team-images"> <img class="img-fluid" src="/images/team/team2.png" alt=""> </div>
                  <div class="team-description">
                    <h5 class="title"><a href="team-single.html">Francisco Pierce</a></h5>
                    <span>Photographer</span>
                    <p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc.</p>
                    <div class="team-social-icon social-icons color-hover">
                      <ul>
                        <li class="social-facebook"><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li class="social-twitter"><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li class="social-gplus"><a href="#"><i class="fa fa-google-plus"></i></a></li>
                        <li class="social-dribbble"><a href="#"><i class="fa fa-dribbble"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="team boxed">
                  <div class="team-images"> <img class="img-fluid" src="/images/team/team3.png" alt=""> </div>
                  <div class="team-description">
                    <h5 class="title"><a href="team-single.html">Nelle Townsend</a></h5>
                    <span>Interpreter</span>
                    <p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc.</p>
                    <div class="team-social-icon social-icons color-hover">
                      <ul>
                        <li class="social-facebook"><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li class="social-twitter"><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li class="social-gplus"><a href="#"><i class="fa fa-google-plus"></i></a></li>
                        <li class="social-dribbble"><a href="#"><i class="fa fa-dribbble"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="team boxed">
                  <div class="team-images"> <img class="img-fluid" src="/images/team/team4.png" alt=""> </div>
                  <div class="team-description">
                    <div class="team-tilte">
                      <h5 class="title"><a href="team-single.html">Glen Bell</a></h5>
                      <span>Administrator</span> </div>
                    <p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc.</p>
                    <div class="team-social-icon social-icons color-hover">
                      <ul>
                        <li class="social-facebook"><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li class="social-twitter"><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li class="social-gplus"><a href="#"><i class="fa fa-google-plus"></i></a></li>
                        <li class="social-dribbble"><a href="#"><i class="fa fa-dribbble"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <!--=================================
         page-section -->
        
        <section class="page-section-ptb bg fixed text-white bg-overlay-black-50" style="background-image:url(/images/bg/bg-5.jpg)">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-8 text-center">
                <h2 class="title title2 divider mb-3">Get The Best
                  <label>Dating</label>
                  Team Now</h2>
                <h5 class="pb-20">Want to hear more story, subscribe for our newsletter</h5>
                <a class="button  btn-lg btn-theme full-rounded animated right-icn"><span>Subscribe<i class="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></a> </div>
            </div>
          </div>
        </section>

        <!--Modal: Name-->
        <div class="modal fade" id="imageModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">
                <img src="/images/close_modal.png">
              </button>
            </div>
            <!--Content-->
            <div class="modal-content">
              <!--Body-->
              <div class="modal-body mb-0 p-0">
                <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                  <video
                    id="my-video"
                    class="video-js"
                    controls
                    preload="auto"
                    poster="/images/bg/bg-1.jpg"
                  >
                    <source src="/connect1on1video.mp4" type="video/mp4" />
                    <source src="/connect1on1video.webm" type="video/webm" />
                    <p class="vjs-no-js">
                      To view this video please enable JavaScript, and consider upgrading to a
                      web browser that
                      <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                    </p>
                  </video>
                </div>
              </div>
            </div>
            <!--/.Content-->
          </div>
        </div>
        <!--Modal: Name-->
@endsection