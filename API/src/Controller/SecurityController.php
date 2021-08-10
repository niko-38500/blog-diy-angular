<?php


namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class SecurityController extends AbstractController
{
    #[Route(path: '/api/login', name: 'api_login', methods: ['POST'])]
    public function login() : JsonResponse
    {
        $user = $this->getUser();
        return $this->json([
            'pseudo' => $user->getPseudo(),
            'username' => $user->getUserIdentifier(),
            'roles' => $user->getRoles()
        ]);
    }
}