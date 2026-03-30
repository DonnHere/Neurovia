<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'password' => Hash::make('password123'),
            'role' => 'admin',
        ]);

        User::create([
            'name' => 'Pasien Satu',
            'email' => 'pasien@example.com',
            'password' => Hash::make('pasien123'),
            'role' => 'pasien',
        ]);
    }
}
//password pasien@gmailcom password123