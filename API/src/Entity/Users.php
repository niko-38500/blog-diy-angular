<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\UsersRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=UsersRepository::class)
 */
#[ApiResource()]
class Users
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $pseudo;

    /**
     * @ORM\Column(type="string", length=150)
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=60)
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=40, nullable=true)
     */
    private $role;

    /**
     * @ORM\OneToMany(targetEntity=Postes::class, mappedBy="user_id")
     */
    private $postes;

    /**
     * @ORM\OneToMany(targetEntity=Comments::class, mappedBy="author_id")
     */
    private $comments;

    /**
     * @ORM\OneToMany(targetEntity=FriendsList::class, mappedBy="user1_id", orphanRemoval=true)
     */
    private $friendsLists;

    /**
     * @ORM\OneToMany(targetEntity=FriendsList::class, mappedBy="user2_id", orphanRemoval=true)
     */
    private $friendsLists2;

    public function __construct()
    {
        $this->friendsLists2 = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPseudo(): ?string
    {
        return $this->pseudo;
    }

    public function setPseudo(string $pseudo): self
    {
        $this->pseudo = $pseudo;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    public function getRole(): ?string
    {
        return $this->role;
    }

    public function setRole(?string $role): self
    {
        $this->role = $role;

        return $this;
    }

    /**
     * @return Collection|Postes[]
     */
    public function getPostes(): Collection
    {
        return $this->postes;
    }

    public function addPoste(Postes $poste): self
    {
        if (!$this->postes->contains($poste)) {
            $this->postes[] = $poste;
            $poste->setUserId($this);
        }

        return $this;
    }

    public function removePoste(Postes $poste): self
    {
        if ($this->postes->removeElement($poste)) {
            // set the owning side to null (unless already changed)
            if ($poste->getUserId() === $this) {
                $poste->setUserId(null);
            }
        }

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
            $comment->setAuthorId($this);
        }

        return $this;
    }

    public function removeComment(Comments $comment): self
    {
        if ($this->comments->removeElement($comment)) {
            // set the owning side to null (unless already changed)
            if ($comment->getAuthorId() === $this) {
                $comment->setAuthorId(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|FriendsList[]
     */
    public function getFriendsLists(): Collection
    {
        return $this->friendsLists;
    }

    public function addFriendsList(FriendsList $friendsList): self
    {
        if (!$this->friendsLists->contains($friendsList)) {
            $this->friendsLists[] = $friendsList;
            $friendsList->setUser1Id($this);
        }

        return $this;
    }

    public function removeFriendsList(FriendsList $friendsList): self
    {
        if ($this->friendsLists->removeElement($friendsList)) {
            // set the owning side to null (unless already changed)
            if ($friendsList->getUser1Id() === $this) {
                $friendsList->setUser1Id(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|FriendsList[]
     */
    public function getFriendsLists2(): Collection
    {
        return $this->friendsLists2;
    }

    public function addFriendsLists2(FriendsList $friendsLists2): self
    {
        if (!$this->friendsLists2->contains($friendsLists2)) {
            $this->friendsLists2[] = $friendsLists2;
            $friendsLists2->setUser2Id($this);
        }

        return $this;
    }

    public function removeFriendsLists2(FriendsList $friendsLists2): self
    {
        if ($this->friendsLists2->removeElement($friendsLists2)) {
            // set the owning side to null (unless already changed)
            if ($friendsLists2->getUser2Id() === $this) {
                $friendsLists2->setUser2Id(null);
            }
        }

        return $this;
    }
}
