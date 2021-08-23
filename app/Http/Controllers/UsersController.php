<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

use App\User;
use App\Message;
use App\Conversation;

class UsersController extends Controller
{
    public function changeBackground(Request $request)
    {
        $background = $request->background;

        $user = User::find(Auth::user()->id);
        $user->background_preference = $background;
        $user->save();
    }

    public function index(Request $request)
    {
        /*foreach($users as $user) {

            $user->conversations = [];

            $sender_conversations = Conversation::where('second_user_id', $user->id)
                ->latest()
                ->get();

            if ( count($sender_conversations) ) {
                foreach ($sender_conversations as $convo) {
                    $convo['person'] = User::find($convo->first_user_id);
                }       
            }

            $receiver_conversations = Conversation::where('first_user_id', $user->id)
                ->latest()
                ->get();

            if ( count($receiver_conversations) ) {
                foreach ($receiver_conversations as $convo) {
                    $convo['person'] = User::find($convo->second_user_id);
                }       
            }
            
            $user->conversations = array_merge($sender_conversations->toArray(), $receiver_conversations->toArray());
        }*/

        return view('frontend.members');
    }

    public function getMembers()
    {
        $authuser = null;

        if (Auth::check()) {
            $authuser = User::find(Auth::user()->id);    
        }

        $users = User::all();

        return response()->json([
            'authuser' => $authuser,
            'users' => $users
        ]);
    }

    public function search(Request $request)
    {
        $gender = $request->gender;
        $seeking = $request->seeking;
        $from = $request->from;
        $to = $request->to;

        if ( $seeking == "Man" ) {
            $seeking = "male";
        } elseif( $seeking == "Woman" ) {
            $seeking = "female";
        }
        else{
            $seeking = "female";
        }
        

        $users = User::where('gender', $seeking)
            ->where('age', '>=', $from)
            ->where('age', '<=', $to)
            ->paginate(30);

        return view('frontend.members', compact('users'));
    }

    public function browse(Request $request)
    {
        return view('frontend.browse');
    }

    public function update(Request $request)
    {
        $user = User::find(Auth::user()->id);

        if (!$user) {
            return abort(404);
        }

        if($request->isMethod('post')) {
            $this->validate($request, [
                'gender' => 'required',
                'interest' => 'required',
                'age_min' => 'required',
                'age_max' => 'required',
                'distance_min' => 'required',
                'distance_max' => 'required',
                'about' => 'required',
                'photo' => 'image|mimes:jpeg,jpg,png'
            ]);

            if($request->hasFile('photo')) {
                $file = $request->file('photo');

                $exists = Storage::exists('public/profiles/'. $user->photo);
    
                if ($exists) {
                    Storage::delete('public/profiles/'. $user->photo);
                }

                $filename = time().'_'. $user->name. '.' .$request->file('photo')->getClientOriginalExtension();
                $path = $request->file('photo')->storeAs('public/profiles', $filename);
    
                $user->photo = $filename;           
            }
        
            $user->gender = $request->gender;
            $user->interest = $request->interest;
            $user->age_min = $request->age_min;
            $user->age_max = $request->age_max;
            $user->distance_min = $request->distance_min;
            $user->distance_max = $request->distance_max;
            $user->about = $request->about;

            $user->profile_completed = 1;
    
            $user->save();
            
            //return redirect()->route('user.dashboard')->with('completed_profile_success');
            return redirect()->route('home');
        }
        
        return view('frontend.user.editprofile');
    }

    public function dashboard(Request $request)
    {
        $user = User::find(Auth::user()->id);

        //return response($user->conversations);

        $conversations = [];

        $sender_conversations = Conversation::where('second_user_id', $user->id)
            ->latest()
            ->get();

        if ( count($sender_conversations) ) {
            foreach ($sender_conversations as $convo) {
                $convo['person'] = User::find($convo->first_user_id);
            }       
        }

        $receiver_conversations = Conversation::where('first_user_id', $user->id)
            ->latest()
            ->get();

        if ( count($receiver_conversations) ) {
            foreach ($receiver_conversations as $convo) {
                $convo['person'] = User::find($convo->second_user_id);
            }       
        }
        
        $conversations = array_merge($sender_conversations->toArray(), $receiver_conversations->toArray());

        //return response($conversations);
        return view('frontend.user.dashboard', compact('conversations', 'user'));
    }

    public function show($slug)
    {
        $profile = User::where('slug', $slug)
            ->first();
        
        return view('frontend.profile', compact('profile'));
    }

    // public function videoCall($slug)
    // {
    //     $user = User::find(Auth::user()->id);
    //     $otherUser = User::where('slug', $slug);

    //     $conversation = Conversation::where(function ($query) use ($user, $otherUser) {
    //         $query->where('first_user_id', $user->id)->where('second_user_id', $otherUser->id);
    //     })->orWhere(function ($query) use ($user, $otherUser) {
    //         $query->where('first_user_id', $otherUser->id)->where('second_user_id', $user->id);
    //     })->first();
        

    // if (!$conversation) {
    //     return redirect()->back();
    // }


    //     return view('frontend.user.videocall');
    // }
}
