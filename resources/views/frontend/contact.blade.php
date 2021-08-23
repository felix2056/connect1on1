@extends('layouts.app')

@section('content')
<section class="inner-intro bg bg-fixed bg-overlay-black-60" style="background-image:url(/images/bg/inner-bg-1.jpg);">
    <div class="container">
      <div class="row intro-title text-center">
        <div class="col-md-12">
          <div class="section-title">
            <h1 class="position-relative divider">Contact<span class="sub-title">Contact</span></h1>
          </div>
        </div>
        <div class="col-md-12 mt-7">
          <ul class="page-breadcrumb">
            <li><a href="index-default.html"><i class="fa fa-home"></i> Home</a> <i class="fa fa-angle-double-right"></i></li>
            <li><a href="contact-1.html">contact</a> <i class="fa fa-angle-double-right"></i></li>
            <li><span>contact 1</span> </li>
          </ul>
        </div>
      </div>
    </div>
</section>

<section class="contact-sec page-section-pt gray-bg">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <div class="row mb-3">
            <div class="col-md-12 text-center">
              <h4 class="title divider-3 text-uppercase text-center mb-5">we are the one</h4>
              <p class="text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took.</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-3">
              <div class="address-block fill">
                <h3 class="title text-uppercase">Address :</h3>
                <address>
                T317 Timber Oak Drive <br>
                Sundown, TX 79372 <br>
                Sundown  - 12345
                </address>
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <div class="address-block fill">
                <h3 class="title text-uppercase">Email Address:</h3>
                <a href="#">info@belgradetraining.com</a> <a href="#">support@cupidlove.com</a> <a href="#">contacus@cupidlove.com</a> </div>
            </div>
            </div>
            <div class="row">
            <div class="col-md-6">
              <div class="address-block fill">
                <h3 class="title text-uppercase">Phone :</h3>
                <span>Landline : <a href="tel:+911234567890">+91-123-456-7890</a></span> <span>Mobile : <a href="tel:+912345678900">+91-234-567-8900</a></span> </div>
            </div>
            <div class="col-md-6">
              <div class="address-block fill">
                <h3 class="title text-uppercase">Social Media :</h3>
                <div class="social-icons color-hover">
                  <ul>
                    <li class="social-facebook"><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li class="social-twitter"><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li class="social-gplus"><a href="#"><i class="fa fa-google-plus"></i></a></li>
                    <li class="social-youtube"><a href="#"><i class="fa fa-youtube"></i></a></li>
                    <li class="social-linkedin"><a href="#"><i class="fa fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 mb-5 sm-mb-3">
          <div class="row mb-3">
            <div class="col-md-12 text-center">
              <h4 class="title divider-3 text-uppercase text-center mb-3">contact form</h4>
            </div>
          </div>
          <div class="defoult-form">
            <div id="formmessage" style="display:none">Success/Error Message Goes Here</div>
            <form id="contactform" method="post" action="php/contact-form.php">
              <div class="form-group">
                <input type="text" class="form-control" id="InputName" placeholder="Name">
              </div>
              <div class="form-group">
                <input type="email" class="form-control" id="InputEmail1" placeholder="Email">
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="InputSubject" placeholder="Subject">
              </div>
              <div class="form-group">
                <div class="input-group">
                  <textarea class="form-control input-message" placeholder="Comment*" rows="5" name="message"></textarea>
                </div>
              </div>
              <div class="form-group">
                <input type="hidden" name="action" value="sendEmail">
                <button id="submit" name="submit" type="submit" value="Send" class="button btn-lg btn-theme full-rounded animated right-icn"><span>Submit Now<i class="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></button>
              </div>
            </form>
            <div id="ajaxloader" style="display:none"><img class="center-block" src="/images/loading.gif" alt=""></div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid pt-60">
      <div class="row no-gutter">
        <div class="col-md-12 ">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8351288872545!2d144.9556518!3d-37.8173306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1443621171568" height="400" style="width:100%;vertical-align:top;border:0;" allowfullscreen=""></iframe>
        </div>
      </div>
    </div>
</section>
@endsection