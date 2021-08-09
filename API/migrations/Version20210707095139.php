<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210707095139 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE category (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE postes ADD category_id_id INT NOT NULL');
        $this->addSql('ALTER TABLE postes ADD CONSTRAINT FK_5A763C649777D11E FOREIGN KEY (category_id_id) REFERENCES category (id)');
        $this->addSql('CREATE INDEX IDX_5A763C649777D11E ON postes (category_id_id)');
        $this->addSql('DROP INDEX users_email_uindex ON users');
        $this->addSql('ALTER TABLE users CHANGE password password VARCHAR(60) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE postes DROP FOREIGN KEY FK_5A763C649777D11E');
        $this->addSql('DROP TABLE category');
        $this->addSql('DROP INDEX IDX_5A763C649777D11E ON postes');
        $this->addSql('ALTER TABLE postes DROP category_id_id');
        $this->addSql('ALTER TABLE users CHANGE password password VARCHAR(60) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('CREATE UNIQUE INDEX users_email_uindex ON users (email)');
    }
}
