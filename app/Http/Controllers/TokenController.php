<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Twilio\Jwt\AccessToken;
use Twilio\Jwt\Grants\ChatGrant;
use Twilio\Jwt\Grants\VideoGrant;

class TokenController extends Controller
{
    public function generate(Request $request)
    {
        $token = new AccessToken(
            env('TWILIO_AUTH_SID'),
            env('TWILIO_API_SID'),
            env('TWILIO_API_SECRET'),
            3600,
            $request->email
        );

        $chatGrant = new ChatGrant();
        $chatGrant->setServiceSid(env('TWILIO_SERVICE_SID'));
        $token->addGrant($chatGrant);

        return response()->json([
            'token' => $token->toJWT()
        ]);
    }

    public function generateVideo(Request $request)
    {
        // Substitute your Twilio Account SID and API Key details
        $accountSid = env('TWILIO_ACCOUNT_SID');
        $apiKeySid = env('TWILIO_API_KEY_SID');
        $apiKeySecret = env('TWILIO_API_KEY_SECRET');

        // Create an Access Token
        $token = new AccessToken(
            $accountSid,
            $apiKeySid,
            $apiKeySecret,
            3600,
            $request->email
        );

        // Grant access to Video
        $grant = new VideoGrant();
        $grant->setRoom('Video Room');
        $token->addGrant($grant);

        return response()->json([
            'token' => $token->toJWT()
        ]);
    }
}
