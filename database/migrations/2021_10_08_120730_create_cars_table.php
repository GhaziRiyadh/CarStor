<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cars', function (Blueprint $table) {
            $table->id();
            $table->char('vin', 255)->unique();
            $table->char('brand', 255);
            $table->char('color', 255);
            $table->char('year', 255);
            $table->char('style', 255);
            $table->integer('gear');
            $table->char('gear_type', 255);
            $table->integer('cylinder');
            $table->double('cost');
            $table->double('price');
            $table->char('drive_type', 255);
            $table->char('fual_type', 255);
            $table->integer('seats_num');
            $table->date('date');
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
        Schema::dropIfExists('cars');
    }
}
