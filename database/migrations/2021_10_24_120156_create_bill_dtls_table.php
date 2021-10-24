<?php

use App\Models\billMst;
use App\Models\Car;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBillDtlsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bill_dtls', function (Blueprint $table) {
            $table->id();
            $table->double('uprice');
            $table->timestamp('quantity');
            $table->double('quantity_price');
            $table->double('discount');
            $table->float('tex');
            $table->foreignId('cid')->on(Car::class)->onDelete('cascade');
            $table->foreignId('bid')->on(billMst::class)->onDelete('cascade');
            $table->foreign('vin')->on(Car::class)->references('vin')->onDelete('cascade');
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
        Schema::dropIfExists('bill_dtls');
    }
}
