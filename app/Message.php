<?php

namespace App;

use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;

use App\User;
use App\Conversation;

class Message extends Model
{
    protected $fillable = ['user_id', 'conversation_id', 'body', 'seen'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function conversation()
    {
        return $this->belongsTo(Conversation::class);
    }
}
