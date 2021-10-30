<?php
/**
 * CarPhotos controller.
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

use App\Models\CarPhotos;

/**
 * This class for CarPhotos model.
 *
 * @category  PHP
 * @package   Carstor_Riyadhghazi
 * @author    Riyadh Ghazi <devghaziriyadh2@gmail.com>
 * @copyright 2021 Riyadh Ghazi
 * @license   https://github.com/GhaziRiyadh/CarStor MIT
 * @link      https://github.com/GhaziRiyadh/CarStor
 */
class CarPhotosController extends Controller
{
    /**
     * Processes this test, when one of its tokens is encountered.
     *
     * @return void
     */
    public function homeSliderPagination()
    {
        return DatabaseManagementController::getPagination(CarPhotos::class, 6);
    }



}
