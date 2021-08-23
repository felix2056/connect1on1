<?php

namespace App\Http\Middleware;

use Closure;

class hasUpdatedProfile
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ($request->user()->profile_completed) {
            return $next($request);
        }
        return redirect()->route('user.update');
    }
}
