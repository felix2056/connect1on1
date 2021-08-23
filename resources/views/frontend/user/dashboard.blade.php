@extends('layouts.user')

@section('content')
    <dashboard :user="{{ json_encode($user) }}" :conversations="{{ json_encode($conversations) }}" />
@endsection