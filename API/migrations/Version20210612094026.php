<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210612094026 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE comments (id INT AUTO_INCREMENT NOT NULL, post_id_id INT NOT NULL, author_id_id INT DEFAULT NULL, title VARCHAR(255) NOT NULL, content LONGTEXT NOT NULL, INDEX IDX_5F9E962AE85F12B8 (post_id_id), INDEX IDX_5F9E962A69CCBE9A (author_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE friends_list (id INT AUTO_INCREMENT NOT NULL, user1_id_id INT NOT NULL, user2_id_id INT NOT NULL, INDEX IDX_C913D5EA4BA75E4E (user1_id_id), INDEX IDX_C913D5EA7A4F44D3 (user2_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE postes (id INT AUTO_INCREMENT NOT NULL, user_id_id INT DEFAULT NULL, title VARCHAR(255) NOT NULL, content LONGTEXT NOT NULL, INDEX IDX_5A763C649D86650F (user_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE users (id INT AUTO_INCREMENT NOT NULL, pseudo VARCHAR(50) NOT NULL, email VARCHAR(150) NOT NULL, password VARCHAR(60) NOT NULL, role VARCHAR(40) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE comments ADD CONSTRAINT FK_5F9E962AE85F12B8 FOREIGN KEY (post_id_id) REFERENCES postes (id)');
        $this->addSql('ALTER TABLE comments ADD CONSTRAINT FK_5F9E962A69CCBE9A FOREIGN KEY (author_id_id) REFERENCES users (id)');
        $this->addSql('ALTER TABLE friends_list ADD CONSTRAINT FK_C913D5EA4BA75E4E FOREIGN KEY (user1_id_id) REFERENCES users (id)');
        $this->addSql('ALTER TABLE friends_list ADD CONSTRAINT FK_C913D5EA7A4F44D3 FOREIGN KEY (user2_id_id) REFERENCES users (id)');
        $this->addSql('ALTER TABLE postes ADD CONSTRAINT FK_5A763C649D86650F FOREIGN KEY (user_id_id) REFERENCES users (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE comments DROP FOREIGN KEY FK_5F9E962AE85F12B8');
        $this->addSql('ALTER TABLE comments DROP FOREIGN KEY FK_5F9E962A69CCBE9A');
        $this->addSql('ALTER TABLE friends_list DROP FOREIGN KEY FK_C913D5EA4BA75E4E');
        $this->addSql('ALTER TABLE friends_list DROP FOREIGN KEY FK_C913D5EA7A4F44D3');
        $this->addSql('ALTER TABLE postes DROP FOREIGN KEY FK_5A763C649D86650F');
        $this->addSql('DROP TABLE comments');
        $this->addSql('DROP TABLE friends_list');
        $this->addSql('DROP TABLE postes');
        $this->addSql('DROP TABLE users');
    }
}
