<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('slug');
            $table->integer('age')->nullable();
            $table->string('gender')->nullable();
            $table->string('interest')->nullable();
            $table->integer('age_min')->nullable();
            $table->integer('age_max')->nullable();
            $table->integer('distance_min')->nullable();
            $table->integer('distance_max')->nullable();
            $table->string('country')->nullable();
            $table->string('provider')->nullable();
            $table->string('provider_id')->nullable();
            $table->string('password');
            $table->string('photo')->nullable();
            $table->text('about')->nullable();
            $table->string('background_preference')->nullable()->default('dark');
            $table->rememberToken();
            $table->boolean('profile_completed')->default(false);
            $table->datetime('last_login_at')->nullable();
            $table->string('last_login_ip')->nullable();
            $table->softDeletes();
            $table->unsignedBigInteger('created_by')->nullable();
            $table->unsignedBigInteger('updated_by')->nullable();
            $table->unsignedBigInteger('deleted_by')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
