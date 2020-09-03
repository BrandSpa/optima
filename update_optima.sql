CREATE TABLE `solicitudes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `company_id` int(10) unsigned NOT NULL,
  `contact_id` int(10) unsigned NOT NULL,
  `comment` text COLLATE utf8_unicode_ci NOT NULL,
  `mail_message` text COLLATE utf8_unicode_ci NOT NULL,
  `offer` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `mail_recipient_1` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `mail_recipient_2` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `status` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Borrador',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `sent_at` timestamp NULL DEFAULT NULL,
  `sent_in` timestamp NULL DEFAULT NULL,
  `sent_confirmed_diff` timestamp NULL DEFAULT NULL,
  `rethink_from` int(11) DEFAULT NULL,
  `type` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `type_category` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `advisor` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `found_us` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `client_type` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status_cause` text COLLATE utf8_unicode_ci,
  `status_note` text COLLATE utf8_unicode_ci,
  `created_sent_diff` int(11) DEFAULT NULL,
  `service_approval` tinyint(1) DEFAULT NULL,
  `priority` int(11) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

ALTER TABLE `optima`.`products` 
ADD COLUMN `solicitudes_id` INT NULL AFTER `position`,
CHANGE COLUMN `created_at` `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
CHANGE COLUMN `updated_at` `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ;

ALTER TABLE `optima`.`todos` 
ADD COLUMN `solicitudes_id` INT NULL AFTER `created_at`,
CHANGE COLUMN `created_at` `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
CHANGE COLUMN `updated_at` `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ;

ALTER TABLE `optima`.`activities` 
ADD COLUMN `solicitudes_id` INT NULL AFTER `created_at`,
CHANGE COLUMN `created_at` `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
CHANGE COLUMN `updated_at` `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ;

ALTER TABLE `optima`.`trackings` 
ADD COLUMN `solicitudes_id` INT NULL AFTER `created_at`,
CHANGE COLUMN `created_at` `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
CHANGE COLUMN `updated_at` `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ;

ALTER TABLE `optima`.`quotation_service` 
ADD COLUMN `solicitudes_id` INT NULL AFTER `service_id`;