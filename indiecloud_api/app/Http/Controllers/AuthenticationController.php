<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthenticationController extends Controller
{
    public function register(Request $request)
    {
        return 'sdgf';
//        $this->validate($request, [
//            'name'=>'required',
//            'email'=>'required',
//            'password' => 'required'
//        ]);
//
//        User::create([
//            'name' => $request['name'],
//            'email' => $request['email'],
//            'password' => Hash::make($request['password']),
//        ]);

    }
}
