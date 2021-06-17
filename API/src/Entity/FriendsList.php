<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\FriendsListRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=FriendsListRepository::class)
 */
#[ApiResource()]
class FriendsList
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Users::class, inversedBy="friendsLists")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user1_id;

    /**
     * @ORM\ManyToOne(targetEntity=Users::class, inversedBy="friendsLists2")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user2_id;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser1Id(): ?Users
    {
        return $this->user1_id;
    }

    public function setUser1Id(?Users $user1_id): self
    {
        $this->user1_id = $user1_id;

        return $this;
    }

    public function getUser2Id(): ?Users
    {
        return $this->user2_id;
    }

    public function setUser2Id(?Users $user2_id): self
    {
        $this->user2_id = $user2_id;

        return $this;
    }
}
