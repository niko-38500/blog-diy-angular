<?php

namespace App\Controller;

use App\Repository\PostesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TestController extends AbstractController
{
    public function __construct(
        private PostesRepository $repo
    ){}

    #[Route('/test', name: 'test')]
    public function index(): Response
    {
        $test = $this->repo->findBy(['slug' => 'premier-poste']);
        dd($test);
        return $this->render('test/index.html.twig', [
            'controller_name' => 'TestController',
        ]);
    }
}
