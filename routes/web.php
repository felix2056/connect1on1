<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Auth::routes();

Route::group(['middleware' => ['auth']], function() {
    Route::group(['prefix' => 'api'], function () {
        Route::post('/change-background', 'UsersController@changeBackground')->name('user.change.background');
        Route::get('/get-conversations', 'MessageController@getConversations')->name('messages.conversations');
        // Route::get('/messages/user/{id}', 'MessageController@chat')->name('messages.chat');

        //Get messages for mini chat popup (with conversation)
        Route::get('/mini-messages/{conversation_id}', 'MessageController@fetchMiniMessages')->name('user.messages.fetchMiniMessages');
        //Get messages for mini chat popup (without conversation)
        Route::get('/mini-messages-without-convo/{user_id}', 'MessageController@fetchMiniMessagesWithoutConvo')->name('user.messages.fetchMiniMessagesWithoutConvo');
        
        //Get messages for normal chat page (with conversation)
        Route::get('/messages/{conversation_id}', 'MessageController@fetchMessages')->name('user.messages.fetch');
        
        Route::post('/send-message/{conversation_id}', 'MessageController@sendMessage')->name('user.messages.send');
        Route::post('/send-message-without-convo/{user_id}', 'MessageController@sendMessageWithoutConvo')->name('user.messagesWithoutConvo.send');

        
        Route::post('/trigger-video-call', 'MessageController@triggerVideoCall')->name('user.triggerVideoCall');
        
        //Broadcast Video Call to bigger video page
        // Route::get('/videocall/user/{slug}', 'UsersController@videoCall')->name('frontend.video.call');
        
    });

    Route::any('/chat', 'MessageController@chat')->name('user.chat');

    Route::group(['prefix' => '@me'], function () {
        Route::any('/', 'UsersController@dashboard')->name('user.dashboard')->middleware('profile_completed');
        Route::any('/edit-profile', 'UsersController@update')->name('user.update');
    });
});

Route::get('/', 'HomeController@index')->name('home');
Route::get('/about-us', 'HomeController@about')->name('about');
Route::get('/contact-us', 'HomeController@contact')->name('contact');

//Members page
Route::get('/members', 'UsersController@index')->name('frontend.members.index');
Route::get('/api/get-members', 'UsersController@getMembers')->name('frontend.members.get.members');

Route::get('/profile/{slug}', 'UsersController@show')->name('frontend.members.show');
Route::get('/browse', 'UsersController@browse')->name('frontend.members.browse');
