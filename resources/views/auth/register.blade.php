@extends('layouts.app')

@section('content')
<section class="login-form dark-bg page-section-ptb bg-overlay-black-30 bg" style="background: url(/images/pattern/02.png) no-repeat 0 0;">
    <div class="container">
        <div class="row  justify-content-center">
            <div class="col-md-6">
                <form method="POST" action="{{ route('register') }}">
                    @csrf
                    <div class="login-1-form register-1-form clearfix">
                        <h4 class="title divider-3 mb-3 text-white">{{ __('Sign Up') }}</h4>
                        <div class="section-field mb-3">
                            <div class="field-widget"> <i class="fa fa-user"></i>
                                <input id="name" class="web @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" type="text" placeholder="Create a display name">
                            </div>
                            @error('name')
                                <span class="invalid-feedback" role="alert" style="display: block">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                        
                        <div class="section-field mb-3">
                            <div class="field-widget"> <i class="fa fa-envelope-o" aria-hidden="true"></i>
                                <input id="email" class="email @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" type="email" placeholder="Enter your email address">
                            </div>
                            @error('email')
                                <span class="invalid-feedback" role="alert" style="display: block">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                        
                        <div class="section-field mb-3">
                            <div class="field-widget"> <i class="fa fa-lock"></i>
                                <input id="Password" class="Password @error('password') is-invalid @enderror" name="password" required autocomplete="new-password" type="password" placeholder="Create a password">
                            </div>
                            @error('password')
                                <span class="invalid-feedback" role="alert" style="display: block">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>

                        <div class="section-field mb-3">
                            <div class="field-widget"> <i class="fa fa-lock"></i>
                                <input id="ConfirmPassword" class="Password" name="password_confirmation" type="password" placeholder="Confirm your password">
                            </div>
                        </div>
                        
                        <div class="clearfix"></div>

                        <div class="section-field text-uppercase text-right mt-2">
                            <button type="submit" class="button btn-lg btn-theme full-rounded animated right-icn">
                                <span>next<i class="glyph-icon flaticon-hearts" aria-hidden="true"></i></span>
                            </button>
                        </div>
                        
                        <div class="clearfix"></div>
                        
                        <div class="section-field mt-2 text-center text-white">
                            <p class="lead mb-0">Have an account? <a class="text-white" href="{{ route('login') }}"> <u> Sign In!</u> </a></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
@endsection
