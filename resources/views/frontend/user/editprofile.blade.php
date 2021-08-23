@extends('layouts.app')

@section('content')
<section class="page-section-ptb text-white" style="background: url(/images/pattern/04.png) no-repeat 0 0; background-size: cover;">
  <div class="container">
    <div class="row justify-content-center">
     <div class="col-md-8">
        <div class="step-form">
          <div class="stepwizard">
            <div class="stepwizard-row setup-panel">
              <div class="stepwizard-step">
                <a href="#step-1" class="btn btn-circle active completed">1 
                  <span>
                    <i class="fa fa-check" aria-hidden="true"></i>
                  </span>
                </a>
                <p>Photo</p>
              </div>
              
              <div class="stepwizard-step"> 
                <a href="#step-2" class="btn btn-circle" disabled="disabled">2 
                  <span><i class="fa fa-check" aria-hidden="true"></i></span>
                </a>
                <p>about you</p>
              </div>
              
              <div class="stepwizard-step"> 
                <a href="#step-3" class="btn btn-circle" disabled="disabled">3 
                  <span><i class="fa fa-check" aria-hidden="true"></i></span>
                </a>
                <p>preferences</p>
              </div>
            </div>
          </div>

          <form action="{{ route('user.update') }}" method="POST" enctype="multipart/form-data" class="text-center mt-3">
            @csrf
            <div class="row justify-content-center setup-content" id="step-1" style="display: flex;">
              <div class="col-md-10">
                <h4 class="title divider-3 mb-5">Photo</h4>
                <div class="row  justify-content-center">
                  <div class="col-md-8">
                    <div class="form-group">
                      <div class="row">
                        <div class="col-md-8 offset-md-2 pr-15">
                          <img id="upload-photo" class="img-center w-100" src="{{ Auth::user()->profile_completed ? Auth::user()->photo_url : '/images/step/01.png' }}" alt="" style="cursor: pointer">
                          <input type="file" accept="image/x-png,image/jpg,image/jpeg" onchange="preview_image(event)" name="photo" id="user-photo" style="display: none;">
                        </div>
                      </div>
                    </div>
                    
                    <div class="form-group">
                      <div class="step-social mt-3 mb-2 text-center clearfix">
                        <ul class="list-inline text-capitalize">
                          <li><a href="#"><i class="fa fa-facebook-official" aria-hidden="true"></i>import</a></li>
                          <li><a href="#"><i class="fa fa-file-image-o" aria-hidden="true"></i> import</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="form-group">
                  <div class="profile-info">
                    <p class="mb-0"><i class="fa fa-info-circle" aria-hidden="true"></i> profiles with photo gets 10 times as many responses</p>
                  </div>
                </div>
                <div class="form-group mb-0">
                  <button type="button" id="step1-button" class="button btn-theme full-rounded btn nextBtn btn-lg mt-2 animated right-icn">
                    <span>Next<i class="fa fa-check" aria-hidden="true"></i></span>
                  </button>
                </div>
              </div>
            </div>
            
            <div class="row setup-content" id="step-2" style="display: none;">
              <div class="col-md-12">
                <div class="row justify-content-center">
                  <div class="col-md-8 text-left text-capitalize text-white">
                    <div class="form-group mb-0">
                      <label class="title divider-3 mb-3">gender</label>
                      <div class="row sm-mt-2">
                        <div class="col-md-4">
                          <div class="radio">
                            @if(Auth::user()->profile_completed)
                              <input name="gender" @if(Auth::user()->gender == 'female') checked="checked" @endif value="female" id="radio1" type="radio">
                            @else
                              <input name="gender" checked="checked" value="female" id="radio1" type="radio">
                            @endif
                            <label for="radio1">female</label>
                          </div>
                        </div>
                        <div class="col-md-4 sm-mt-2">
                          <div class="radio">
                            @if(Auth::user()->profile_completed)
                              <input name="gender" @if(Auth::user()->gender == 'male') checked="checked" @endif value="male" id="radio1" type="radio">
                            @else
                            <input name="gender" value="male" id="radio2" type="radio">
                            @endif
                            <label for="radio2">male</label>
                          </div>
                        </div>
                      </div>

                      <div class="form-group mt-5">
                        <label class="title divider-3 mb-3">age</label>
                        <input name="age" type="number" min="18" max="70" id="user-age" class="form-control" @if(Auth::user()->age != null) value="{{ Auth::user()->age }}" @endif style="background: rgba(0, 0, 0, 0.2);" />
                      </div>
                      
                      <div class="form-group mt-5">
                        <label class="title divider-3 mb-3">about me</label>
                        <textarea name="about" id="user-about" class="form-control" rows="3" spellcheck="false">
                          {{ Auth::user()->about != null ? Auth::user()->about : null }}
                        </textarea>
                      </div>

                      <div class="form-group mb-0">
                        <button type="button" id="step2-button" class="button btn-theme full-rounded btn nextBtn btn-lg mt-2 animated right-icn">
                          <span>Next<i class="fa fa-check" aria-hidden="true"></i></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            
            <div class="row setup-content" id="step-3" style="display: none;">
              <div class="col-md-12">
                <div class="row  justify-content-center">
                  <div class="col-md-8 text-left text-capitalize text-white">
                    <div class="form-group mb-0">
                      <label class="title divider-3 mb-3">intrested in</label>
                      <div class="row sm-mt-2">
                        <div class="col-md-4">
                          <div class="radio">
                            @if(Auth::user()->profile_completed)
                              <input name="interest" @if(Auth::user()->interest == 'female_interest') checked="checked" @endif value="female_interest" id="radio3" type="radio">
                            @else
                              <input name="interest" value="female_interest" id="radio3" type="radio">
                            @endif
                            <label for="radio3">female</label>
                          </div>
                        </div>
                        <div class="col-md-4 sm-mt-2">
                          <div class="radio">
                            @if(Auth::user()->profile_completed)
                              <input name="interest" @if(Auth::user()->interest == 'male_interest') checked="checked" @endif value="female_interest" id="radio3" type="radio">
                            @else
                            <input name="interest" checked="checked" value="male_interest" id="radio4" type="radio">
                            @endif
                            <label for="radio4">male</label>
                          </div>
                        </div>
                      </div>
                      
                      <div class="form-group mt-5">
                        <label class="title divider-3 mb-4">age preference</label>
                        <div>
                          @if(Auth::user()->profile_completed)
                            <input name="age_min" id="slider1" class="range-slider" data-slider-id="ex1Slider1" type="text" data-slider-min="18" data-slider-max="30" data-slider-step="1" data-slider-value="{{ Auth::user()->age_min }}" style="display: none;" data-value="{{ Auth::user()->age_min }}" value="{{ Auth::user()->age_min }}">
                            <input name="age_max" id="slider2" class="range-slider" data-slider-id="ex1Slider2" type="text" data-slider-min="30" data-slider-max="70" data-slider-step="1" data-slider-value="{{ Auth::user()->age_max }}" style="display: none;" data-value="{{ Auth::user()->age_max }}" value="{{ Auth::user()->age_max }}">
                          @else
                            <input name="age_min" id="slider1" class="range-slider" data-slider-id="ex1Slider1" type="text" data-slider-min="18" data-slider-max="30" data-slider-step="1" data-slider-value="25" style="display: none;" data-value="25" value="25">
                            <input name="age_max" id="slider2" class="range-slider" data-slider-id="ex1Slider2" type="text" data-slider-min="30" data-slider-max="70" data-slider-step="1" data-slider-value="45" style="display: none;" data-value="45" value="45">
                          @endif
                        </div>
                      </div>
                      
                      <div class="form-group mt-5">
                        <label class="title divider-3 mb-4">distance preference (miles)</label>
                        <div>
                          @if(Auth::user()->profile_completed)
                            <input name="distance_min" id="slider3" class="range-slider" data-slider-id="ex1Slider1" type="text" data-slider-min="10" data-slider-max="100" data-slider-step="1" data-slider-value="30" style="display: none;" data-value="{{ Auth::user()->distance_min }}" value="{{ Auth::user()->distance_min }}">
                            <input name="distance_max" id="slider4" class="range-slider" data-slider-id="ex1Slider2" type="text" data-slider-min="110" data-slider-max="200" data-slider-step="1" data-slider-value="160" style="display: none;" data-value="{{ Auth::user()->distance_max }}" value="{{ Auth::user()->distance_max }}">
                          @else
                            <input name="distance_min" id="slider3" class="range-slider" data-slider-id="ex1Slider1" type="text" data-slider-min="10" data-slider-max="100" data-slider-step="1" data-slider-value="30" style="display: none;" data-value="30" value="30">
                            <input name="distance_max" id="slider4" class="range-slider" data-slider-id="ex1Slider2" type="text" data-slider-min="110" data-slider-max="200" data-slider-step="1" data-slider-value="160" style="display: none;" data-value="160" value="160">
                          @endif
                        </div>
                      </div>
                  
                      <div class="form-group mt-5">
                        <label class="title divider-3 mb-4">location access</label>
                        <div class="checkbox">
                          <input name="check" id="check2" type="checkbox">
                          <label for="check">allow to access your location</label>
                        </div>
                      </div>
                      <div class="form-group text-center">
                        <div class="profile-info">
                          <p class="mb-0"><i class="fa fa-info-circle" aria-hidden="true"></i> by clicking submit you are agreeing to our terms and conditions of use.</p>
                        </div>
                      </div>
                      <div class="form-group mb-0 text-center">
                        <button type="submit" class="button btn-theme full-rounded btn btn-lg mt-2 animated right-icn">
                          <span>submit<i class="fa fa-arrow-right" aria-hidden="true"></i></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
@endsection

@section('scripts')
<script type='text/javascript'>
$(document).ready(function() {
  $("#upload-photo" ).on( "click", function() {
    $( "#user-photo" ).trigger( "click" );
  });
});

function preview_image(event) {
  var reader = new FileReader();
  reader.onload = function()
  {
    var output = document.getElementById('upload-photo');
    output.src = reader.result;
  }
  reader.readAsDataURL(event.target.files[0]);

  console.log(event.target.files[0])
}

function checkStep1() {
  var step1_button = $("#step1-button");
  var photo = $("#user-photo");
  console.log(photo)

  /*if( photo.get(0).files.length === 0 ) {
    step1_button.prop('disabled', true); 
    console.log("no files selected");
  }
  else{
    step1_button.prop('disabled', false); 
  }*/
}

function checkStep2() {
  var step2_button = $("#step2-button");
  var age = $("#user-age");
  var text = $("#user-about");
  console.log(text)

  if( text.val() == "" ) {
    step2_button.prop('disabled', true); 
  }
  else if( age.val() == "" || age.val() < "18" || age.val() > "70" ) {
    step2_button.prop('disabled', true); 
  }
  else{
    step2_button.prop('disabled', false); 
  }
}

$(document).ready(function() {
  $('#user-photo').val('')

  //setInterval(checkStep1, 3000);
  setInterval(checkStep2, 3000);
});

</script>
@endsection