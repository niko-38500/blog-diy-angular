<?php


namespace App\Controller;


use App\Entity\User;
use http\Client\Request;

class RegisterController extends \Symfony\Bundle\FrameworkBundle\Controller\AbstractController
{
    public function __invoke(Request $request) {
        $pseudo = $request->get('pseudo');
    }
}