<?php

use App\Models\Car;
use App\Models\Client;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBillMstsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bill_msts', function (Blueprint $table) {
            $table->id();
            $table->char('serial', 255);
            $table->date('dateb');
            $table->double('totalPrice');
            $table->foreignId('cid')->on(Client::class)->onDelete('cascade');
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
        Schema::dropIfExists('bill_msts');
    }
}
