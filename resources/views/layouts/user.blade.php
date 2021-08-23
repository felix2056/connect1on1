<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="gr__slek_laborasyon_com" style="--vh:4.48px;" lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    
    <title>Chat | Connect1on1</title>

    <!-- Favicon -->
    <link rel="shortcut icon" href="/images/favicon.ico">

    <!-- Bundle Styles -->
    <link rel="stylesheet" href="{{ asset('css/dashboard/bundle.css') }}">

    <link rel="stylesheet" href="{{ asset('css/dashboard/enjoyhint.css') }}">

    <!-- App styles -->
    <link rel="stylesheet" href="{{ asset('css/dashboard/app.min.css') }}">
</head>

<body class="{{ Auth::user()->background_preference }}" data-gr-c-s-loaded="true">

<!-- page loading -->

<!-- ./ page loading -->

@if (Session::has('completed_profile_success'))
  <!-- page tour modal -->
  <div class="modal fade" id="pageTour" tabindex="-1" role="dialog" style="display: none;" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-zoom" role="document">
        <div class="modal-content">
            <div class="modal-body text-center pt-5">
                <div class="row">
                    <div class="col-md-6 offset-3">
                        <figure>
                            <img src="{{ asset('images/dashboard/undraw_product_tour_foyt.svg') }}" class="img-fluid" alt="image">
                        </figure>
                        <p class="lead mt-5">Would you like to take a short page tour?</p>
                    </div>
                </div>
            </div>
            <div class="modal-footer justify-content-center">
                <button type="button" class="btn btn-primary start-tour">Start Tour</button>
                <button type="button" class="btn btn-link" data-dismiss="modal" aria-label="Close">Close</button>
            </div>
        </div>
    </div>
</div>
@endif
<!-- ./ page tour modal -->



<!-- layout -->
<div id="app">
    @yield('content')
</div>
<!-- ./ layout -->

<!-- App -->
<script src="https://cdn.jsdelivr.net/npm/vue-chat-scroll/dist/vue-chat-scroll.min.js"></script>

<script src="{{ asset('js/app.js') }}"></script>

<!-- Bundle -->
<script src="{{ asset('js/dashboard/bundle.js') }}"></script>

<script src="{{ asset('js/dashboard/enjoyhint.min.js') }}"></script>

<!-- App scripts -->
<script src="{{ asset('js/dashboard/app.min.js') }}"></script>

<!-- Examples -->
<script src="{{ asset('js/dashboard/examples.js') }}"></script>

<script src='https://cdn.scaledrone.com/scaledrone.min.js'></script>
</body>
</html>