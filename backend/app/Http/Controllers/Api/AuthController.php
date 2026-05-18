<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    /**
     * Register user baru
     */
    public function register(RegisterRequest $request): JsonResponse
    {
        // Simpan user ke database (password di-hash)
        $user = User::create([
            'name'     => $request->name,
            'email'    => $request->email,
            'password' => Hash::make($request->password),
        ]);

        // Buat token login (Sanctum)
        $token = $user->createToken('auth_token')->plainTextToken;

        // Response ke frontend
        return response()->json([
            'message' => 'Registrasi berhasil',
            'user'    => $user,
            'token'   => $token,
        ], 201); // 201 = berhasil create
    }

    /**
     * Login user
     */
    public function login(LoginRequest $request): JsonResponse
    {
        // Cek email & password
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'message' => 'Email atau password salah',
            ], 401); // 401 = unauthorized
        }

        // Ambil data user
        $user = User::where('email', $request->email)->firstOrFail();

        // Buat token baru
        $token = $user->createToken('auth_token')->plainTextToken;

        // Response
        return response()->json([
            'message' => 'Login berhasil',
            'user'    => $user,
            'token'   => $token,
        ]);
    }

    /**
     * Logout user
     */
    public function logout(Request $request): JsonResponse
    {
        // Hapus token yang sedang dipakai
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Logout berhasil',
        ]);
    }

    /**
     * Ambil data user login
     */
    public function user(Request $request): JsonResponse
    {
        // Return data user dari token
        return response()->json([
            'user' => $request->user(),
        ]);
    }
}