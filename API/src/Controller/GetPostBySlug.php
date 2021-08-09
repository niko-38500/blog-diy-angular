<?php


namespace App\Controller;


use ApiPlatform\Core\OpenApi\Model\Response;
use App\Repository\PostesRepository;
use Symfony\Component\HttpFoundation\Request;

class GetPostBySlug
{
    public function __construct(
        public PostesRepository $repository
    ){}

    public function __invoke(Request $req)
    {
        return $this->repository->findOneBy(['slug' => $req->get('slug')]);
    }
}