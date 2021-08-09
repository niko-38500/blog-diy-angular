<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Controller\GetPostBySlug;
use App\Repository\PostesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=PostesRepository::class)
 */
#[ApiResource(
    collectionOperations: [
        "get",
        "post",
        'getBySlug' => [
            "method" => "GET",
            "path" => "/post/{slug}",
            "controller" => GetPostBySlug::class,
            "pagination_enabled" => false,
            "openapi_context" => [
                "summary" => "get post by slug",
                "parameters" => [
                    [
                        'in' => "path",
                        'name' => "slug",
                        'type' => "string"
                    ]
                ],
            ]
        ],
        "lastPostes" => [
            "method" => 'GET',
            "path" => '/postes/latest',
            "pagination_enabled" => true,
            "pagination_items_per_page" => 5
        ]
    ],
    itemOperations: [
        'put',
        'delete',
        'get'
    ],
    denormalizationContext: ['groups' => ['postes:write']],
    normalizationContext: ['groups' => ['postes:read']]
)]
class Postes
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    #[Groups(["postes:read"])]
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="postes")
     */
    #[Groups(["postes:read", 'postes:write'])]
    private $author;

    /**
     * @ORM\Column(type="string", length=255)
     */
    #[Groups(["postes:read", 'postes:write'])]
    private $title;

    /**
     * @ORM\Column(type="text")
     */
    #[Groups(["postes:read", 'postes:write'])]
    private $content;

    /**
     * @ORM\OneToMany(targetEntity=Comments::class, mappedBy="post", orphanRemoval=true)
     */
    #[Groups(["postes:read"])]
    private $comments;

    /**
     * @ORM\ManyToOne(targetEntity=Category::class, inversedBy="postes")
     * @ORM\JoinColumn(nullable=false)
     */
    #[Groups(["postes:read", 'postes:write'])]
    private $category;

    /**
     * @ORM\Column(type="string", length=255)
     */
    #[Groups(["postes:read", 'postes:write'])]
    private $slug;

    public function getId(): ?int
    {
        return $this->id;
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

    /**
     * @return Collection|Comments[]
     */
    public function getComments(): Collection
    {
        return $this->comments;
    }

    public function addComment(Comments $comment): self
    {
        if (!$this->comments->contains($comment)) {
            $this->comments[] = $comment;
            $comment->setPostId($this);
        }

        return $this;
    }

    public function removeComment(Comments $comment): self
    {
        if ($this->comments->removeElement($comment)) {
            // set the owning side to null (unless already changed)
            if ($comment->getPostId() === $this) {
                $comment->setPostId(null);
            }
        }

        return $this;
    }

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): self
    {
        $this->category = $category;

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): self
    {
        $this->slug = $slug;

        return $this;
    }
}
