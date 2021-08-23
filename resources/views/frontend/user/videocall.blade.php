<html>
    <head>
        <meta charset="utf-8">
        <meta name="description" content="WebRTC reference app">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1">
        <meta itemprop="description" content="Video chat using the reference WebRTC application">
        <meta itemprop="image" content="/images/webrtc-icon-192x192.png">
        <meta itemprop="name" content="AppRTC">
        <meta name="mobile-web-app-capable" content="yes">
        <meta id="theme-color" name="theme-color" content="#1e1e1e">

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
    
        <base target="_blank">
    
        <title>Video Chat</title>

        <link rel="icon" sizes="192x192" href="/images/webrtc-icon-192x192.png">
    
        <link rel="canonical" href="">
    
        <link rel="stylesheet" href="{{ asset('css/main.css') }}">
  
  </head>
  
  <body data-gr-c-s-loaded="true">
    <div id="app">
        <videocall />
    </div>

    <script src="{{ asset('js/app.js') }}"></script>
    <script src="/js/apprtc.debug.js"></script>
</body>
</html>