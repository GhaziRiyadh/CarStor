<?php

use App\Models\Car;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePreserveDtlsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('preserve_dtls', function (Blueprint $table) {
            $table->id();
            $table->foreignId('cid')->on()->onDelete();
            $table->date('datep');
            $table->foreign('vin')->references('vin')->on(Car::class)->onDelete('cascade');
            $table->double('price');
            $table->integer('remains');
            $table->text('note');
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
        Schema::dropIfExists('preserve_dtls');
    }
}
