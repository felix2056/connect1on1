<?php

use Illuminate\Database\Seeder;

use App\Setting;
use App\AboutContent;
use Carbon\Carbon;
use Faker\Factory;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

use App\User;

class DemoSiteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //truncate previous data
        echo 'deleting old data.....';
        $this->deletePreviousData();

        //seed common settings
        echo PHP_EOL , 'seeding settings...';
        $this->settingsData();

        //contact details
        echo PHP_EOL , 'seeding faq...';
        $this->faqs();

        //contact details
        echo PHP_EOL , 'seeding contact info...';
        $this->contactData();

        //about us data
        echo PHP_EOL , 'seeding about us...';
        $this->aboutSectionData();

        //user data
        echo PHP_EOL , 'seeding users...';
        $this->usersData();


        echo PHP_EOL , 'seeding completed.';

    }


    private function deletePreviousData()
    {
        /***
         * This code is MYSQL specific
         */
        app()['cache']->forget('spatie.permission.cache');

        DB::statement("SET foreign_key_checks=0");

        Setting::truncate();
        AboutContent::truncate();
        User::truncate();

        DB::statement("SET foreign_key_checks=1");

        //delete images
        $storagePath = storage_path('app/public');
        $dirs = [
        	$storagePath.'/profiles'
        ];

        /*foreach ($dirs as $dir){
            system("rm -rf ".escapeshellarg($dir));
        }*/
    }

    private function settingsData()
    {
        $profile_path = storage_path('app').'/public/profiles/';

        if(!is_dir($profile_path)) {
            mkdir($profile_path);
        }

        $site_name = 'Dating Site';
        Setting::updateOrCreate(
            ['meta_key' => 'site_name'],
            ['meta_value' => $site_name]
        );

        $short_name = 'DS';
        Setting::updateOrCreate(
            ['meta_key' => 'short_name'],
            ['meta_value' => $short_name]
        );

        $site_desc = 'Dating Site - Site For Dating';
        Setting::updateOrCreate(
            ['meta_key' => 'site_desc'],
            ['meta_value' => $site_desc]
        );

        $keywords = 'dating, site';
        Setting::updateOrCreate(
            ['meta_key' => 'keywords'],
            ['meta_value' => $keywords]
        );

        $social['facebook'] = 'www.facebook.com/dating';
        $social['instagram'] = 'www.instagram.com/dating';
        $social['twitter'] = 'www.twitter.com/dating';

        Setting::updateOrCreate(
            ['meta_key' => 'social'],
            ['meta_value' => json_encode($social)]
        );
    }
    
    
    private function faqs()
    {
        $data1 = [
            'question' => 'WHAT IS DATING?',
            'answer' => 'Dating is a thing.'
        ];

        $data2 = [
            'question' => 'HOW TO DATE?',
            'answer' => 'I do not know'
        ];

        Setting::create(
            [
                'meta_key' => 'faq',
                'meta_value' => json_encode($data1)
            ]
        );
        Setting::create(
            [
                'meta_key' => 'faq',
                'meta_value' => json_encode($data2)
            ]
        );
    }
    
    private function contactData()
    {
        //now crate or update model
        Setting::updateOrCreate(
            ['meta_key' => 'contact_address'],
            [ 'meta_value' => 'United States-1207']
        );
        Setting::updateOrCreate(
            ['meta_key' => 'contact_phone'],
            [ 'meta_value' => '+880258685']
        );
        Setting::updateOrCreate(
            ['meta_key' => 'contact_email'],
            [ 'meta_value' => 'info@dating.net']
        );
        Setting::updateOrCreate(
            ['meta_key' => 'contact_latlong'],
            [ 'meta_value' => '23.7340076,90.3841824']
        );
    }

    
    private function aboutSectionData()
    {

        $data = [
            'why_content' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy.',
            'key_point_1_title' => 'Key point 1',
            'key_point_1_content' => 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
            'key_point_2_title' => 'Key point 2',
            'key_point_2_content' => 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
            'about_us' => 'it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            'who_we_are' => 'it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution',
            'intro_video_embed_code' => '<iframe src="https://www.youtube.com/embed/6sa1G_9jCb0" frameborder="0"  allowfullscreen></iframe>',
            'video_site_link' => 'https://www.youtube.com',

        ];

        //now crate or update model
        AboutContent::updateOrCreate(
            ['id' => 1],
           $data
        );
    }

    private function usersData()
    {
        $faker = Factory::create();

        for($i = 0; $i < 25; $i++) {
            $user = User::create([
                'name' => $faker->name(),
                'email' => $faker->unique()->safeEmail,
                'password' => Hash::make('password'),
                'age' => rand(18, 70),
                'gender' => 'male',
                'interest' => 'female_interest',
                'age_min' => rand(18, 30),
                'age_max' => rand(30, 70),

                'distance_min' => rand(10, 100),
                'distance_max' => rand(110, 200),
            ]);
        }

        for($i = 0; $i < 25; $i++) {
            $user = User::create([
                'name' => $faker->name(),
                'email' => $faker->unique()->safeEmail,
                'password' => Hash::make('password'),
                'age' => rand(18, 70),
                'gender' => 'female',
                'interest' => 'male_interest',
                'age_min' => rand(18, 30),
                'age_max' => rand(30, 70),

                'distance_min' => rand(10, 100),
                'distance_max' => rand(110, 200),
            ]);
        }
    }
}
