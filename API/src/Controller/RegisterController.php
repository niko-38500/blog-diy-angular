<?php


namespace App\Controller;


use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class RegisterController extends AbstractController
{
    public function __invoke(Request $request, UserPasswordHasherInterface $passwordEncoder) {
        $user = new User();
        $em = $this->getDoctrine()->getManager();
        $requestData = $request->toArray();
        extract($requestData);
        $user->setPseudo($pseudo);
        $user->setEmail($email);
        $user->setPassword($passwordEncoder->hashPassword($user, $password));
        $em->persist($user);
        $em->flush();
        return new Response("{}", 201, [
            "Content-Type" => "application/json"
        ]);
    }
}