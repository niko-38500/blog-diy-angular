<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Controller\CommentController;
use App\Repository\CommentsRepository;
use Doctrine\ORM\Mapping as ORM;
use phpDocumentor\Reflection\DocBlock\Tags\Method;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=CommentsRepository::class)
 */
#[ApiResource()]
class Comments
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    #[Groups(["postes:read"])]
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Postes::class, inversedBy="comments")
     * @ORM\JoinColumn(nullable=false)
     */
    private $post;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="comments")
     */
    #[Groups(["postes:read"])]
    private $author;

    /**
     * @ORM\Column(type="text")
     */
    #[Groups(["postes:read"])]
    private $content;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPost(): ?Postes
    {
        return $this->post;
    }

    public function setPost(?Postes $post): self
    {
        $this->post = $post;

        return $this;
    }

    public function getAuthor(): ?User
    {
        return $this->author;
    }

    public function setAuthor(?User $author): self
    {
        $this->author = $author;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): self
    {
        $this->content = $content;

        return $this;
    }
}
