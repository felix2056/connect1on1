@extends('layouts.user')

@section('content')
    <chat :authuser="{{ json_encode($user) }}" />
@endsection