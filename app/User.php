<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;


use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;
use Wildside\Userstamps\Userstamps;

use App\Conversation;

class User extends Authenticatable
{
    use Notifiable, SoftDeletes, Userstamps, HasSlug;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 
        'email',
        'email_verified_at',
        'country', 
        'provider', 
        'provider_id', 
        'password', 
        'profile_completed',
        'gender',
        'interest',
        'age_min',
        'age_max',
        'distance_min',
        'distance_max',
        'photo',
        'about',
        'last_login_at',
        'last_login_ip'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The attributes that should be cast to appends types.
     *
     * @var array
    */
    protected $appends = ['photo_url'];



    public function getSlugOptions() : SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('name')
            ->saveSlugsTo('slug');
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function getPhotoUrlAttribute()
    {
        if ($this->photo == null) {
            switch ($this->gender) {
                case 'male':
                    return '/images/default/male.jpg';
                    break;
                
                case 'female':
                    return '/images/default/female.jpg';
                    break;
            }
        }
        else{
            return '/storage/profiles/'.$this->photo;
        }
    }

    public function messages()
    {
        return $this->hasManyThrough(Message::class, Conversation::class);
    }

    public function conversations(){
		return $this->hasMany(Conversation::class, 'user_id');
    }

    public function canJoinConversation($user, $conversation)
    {
        $conversation = Conversation::find($conversation);

        if ($conversation) {
            if (($conversation->first_user_id == $user->id) || ($conversation->second_user_id == $user->id)) {
                return true;
            }
        }

        return false;
    }
}
