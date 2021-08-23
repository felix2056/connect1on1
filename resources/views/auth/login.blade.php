@extends('layouts.app')

@section('content')

<section class="login-form dark-bg page-section-ptb bg-overlay-black-30 bg" style="background: url(/images/pattern/02.png) no-repeat 0 0;">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <form method="POST" action="{{ route('login') }}">
            @csrf
            <div class="login-1-form clearfix text-center">
                <h4 class="title divider-3 text-white">SIGN IN</h4>
                
                <div class="login-1-social mt-5 mb-5 text-center clearfix">
                    <ul class="list-inline text-capitalize">
                    <li><a class="fb" href="#"><i class="fa fa-facebook"></i> Facebook</a></li>
                    <li><a class="gplus" href="#"><i class="fa fa-google-plus"></i> google+</a></li>
                    </ul>
                </div>
                
                <div class="section-field mb-2">
                    <div class="field-widget"> <i class="fa fa-envelope-o"></i>
                    <input id="email" class="web @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus type="email" placeholder="Enter your email">
                    </div>
                    @error('email')
                        <span class="invalid-feedback" role="alert" style="display: block">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                
                <div class="section-field mb-1">
                    <div class="field-widget"> <i class="fa fa-lock"></i>
                    <input id="Password" class="Password @error('password') is-invalid @enderror" name="password" required autocomplete="current-password" type="password" placeholder="Password" name="Enter your password">
                    </div>
                    @error('password')
                        <span class="invalid-feedback" role="alert" style="display: block">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>

                <div class="section-field mb-1">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                        <label class="form-check-label" for="remember">
                            {{ __('Remember Me') }}
                        </label>
                    </div>
                </div>

                @if (Route::has('password.request'))
                    <div class="section-field text-uppercase">
                        <a class="float-right text-white" href="{{ route('password.request') }}">
                            {{ __('Forgot Your Password?') }}
                        </a>
                    </div>
                @endif
               
                
                <div class="clearfix"></div>
                
                <div class="section-field text-uppercase text-right mt-2">
                    <button class="button btn-lg btn-theme full-rounded animated right-icn">
                        <span>sign in
                            <i class="glyph-icon flaticon-hearts" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>
                <div class="clearfix"></div>
                <div class="section-field mt-2 text-center text-white">
                    <p class="lead mb-0">Don’t have an account? <a class="text-white" href="{{ route('register') }}"><u>Register now!</u> </a></p>
                </div>
            </div>
        </form>
      </div>
    </div>
  </div>
</section>
@endsection
