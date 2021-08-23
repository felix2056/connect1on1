@extends('layouts.app')

@section('content')
<section class="page-section-ptb pt-3 profile-slider">
    <div class="container">
        <div class="row justify-content-center mb-5 sm-mb-3">
            <div class="col-md-8 text-center">
                <h2 class="title divider">Matches</h2>
            </div>
        </div>
        
        <members />
        
        <div class="row">
            <div class="col-md-12 text-center">
                <a class="button  btn-lg btn-theme full-rounded animated right-icn">
                    <span>Show More<i class="glyph-icon flaticon-hearts" aria-hidden="true"></i></span>
                </a>
                
            </div>
        </div>
    </div>
</section>
@endsection