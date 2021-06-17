<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\CommentsRepository;
use Doctrine\ORM\Mapping as ORM;

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
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Postes::class, inversedBy="comments")
     * @ORM\JoinColumn(nullable=false)
     */
    private $post_id;

    /**
     * @ORM\ManyToOne(targetEntity=Users::class, inversedBy="comments")
     */
    private $author_id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @ORM\Column(type="text")
     */
    private $content;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPostId(): ?Postes
    {
        return $this->post_id;
    }

    public function setPostId(?Postes $post_id): self
    {
        $this->post_id = $post_id;

        return $this;
    }

    public function getAuthorId(): ?Users
    {
        return $this->author_id;
    }

    public function setAuthorId(?Users $author_id): self
    {
        $this->author_id = $author_id;

        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

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
