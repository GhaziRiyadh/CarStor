<?php
/**
 * Manage all database from this file.
 *
 * PHP version 7.4
 *
 * @category  PHP
 * @package   Carstor_Riyadhghazi
 * @author    Riyadh Ghazi <devghaziriyadh2@gmail.com>
 * @copyright 2021 Riyadh Ghazi
 * @license   https://github.com/GhaziRiyadh/CarStor MIT
 * @link      https://github.com/GhaziRiyadh/CarStor
 */
namespace App\Http\Controllers;

use App\Models\Car;
use App\Models\CarDtl;
use App\Models\CarPhotos;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\LazyCollection;

class DatabaseManagementController extends Controller
{
    // /**
    //  * Get pagenation data for any classes.
    //  *
    //  * @param mixed $className   Get classname from user to return the pagination.
    //  * @param int   $numberOfRow Get number of rows you want to get.
    //  *
    //  * @return App/Models/$classnName
    //  */
    // public static function fromCarTable()
    // {
    //     return LazyCollection::make(function(){
    //         $data = Car::get();
    //         $image =  CarPhotos::get();
    //         $dtl = CarDtl::get();

    //         $image->car();
    //         yield
    //     });
    // }

}
