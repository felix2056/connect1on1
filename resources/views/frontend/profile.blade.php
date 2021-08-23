@extends('layouts.app')

@section('content')

<section>
<section class="inner-intro details-page bg bg-fixed bg-overlay-black-20 position-relative" style="background-image:url(/images/bg/inner-bg-2.jpg);">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="profile-cntn text-white">
                    <ul>
                        <li>
                            <img src="{{ $profile->photo_url }}" alt="{{ $profile->name }}">
                        </li>
                        <li>
                            <div class="profile-text">
                                <h2>{{ $profile->name }}</h2>
                                <h5>{{ $profile->age }} Years Old USA</h5>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="col-md-12">
              <a href="{{-- route('user.chat', ['slug' => $profile->slug]) --}}" disabled class="button btn-sm btn-theme full-rounded animated right-icn" style="position: absolute;top: 220px;right: 0;">
                <span>Chat <i class="fa fa-comment" aria-hidden="true"></i></span>
              </a>

              <!--<a class="button btn-sm btn-theme full-rounded animated right-icn" style="position: absolute;top: 220px;right: 0;">
                <span>Add friend <i class="fa fa-user-plus" aria-hidden="true"></i></span>
              </a>-->
            </div>
        </div>
    </div>
</section>

<section class="page-section-ptb pt-10 text-left">
    <div class="container">
    <div class="row mt-5 sm-mt-0">
    <div class="col-md-12 ">
    <h4 class="title divider-3 mb-5 sm-mb-3">Basic Details</h4>
    </div>
    </div>
            <div class="row">
            <div class="col-md-12">
    <div class="table-responsive">
  <table class="table table-bordered text-center mb-0">
    <tbody>
      <tr>
        <td>Gender</td>
        <td>Female</td>
        <td>Education</td>
        <td>Diploma in Design</td>
      </tr>
      <tr class="tr-bg">
        <td>Age</td> 
        <td>25 Years old</td>
        <td>Language</td>
        <td>English, Spanish</td>
      </tr>
      <tr>
        <td>Country</td>
        <td>usa</td>
        <td>Height</td>
        <td>168 cm</td>
      </tr>
      <tr class="tr-bg">
        <td>Birth Date</td>
        <td>24 May 1991</td>
        <td>Smoking</td>
        <td>Rarely</td>
      </tr>
      <tr>
        <td>Relationship</td>
        <td>Single</td>
        <td>Eye Colour</td>
        <td>Black</td>
      </tr>
      <tr class="tr-bg">
        <td>Looking For a</td>
        <td>Man</td>
        <td>Marital Status</td>
        <td>Single</td>
      </tr>
      <tr>
        <td>Work as</td>
        <td>Designer</td>
        <td>Diet</td>
        <td>Vegetarian</td>
      </tr>
      <tr class="tr-bg">
        <td>Birth Date</td>
        <td>24 May 1991</td>
        <td>Kids</td>
        <td>No</td>
      </tr>
    </tbody>
  </table>
  </div>
            </div>
          </div>
  
  <div class="row mt-5 sm-mt-3">
  <div class="col-md-12 text-left">
  <h4 class="title divider-3 mb-5 sm-mb-3">About Me</h4>
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
  non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error
  sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
  sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
  ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
  magnam aliquam quaerat voluptatem Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. in voluptate velit esse cillum dolore eu fugiat nulla
  </p>
  </div>
  </div>
  
          </div>
</section>
@endsection