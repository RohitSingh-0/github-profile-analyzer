CREATE TABLE `profiles` (
`id` int NOT NULL AUTO_INCREMENT,
`github_id` bigint DEFAULT NULL,
`login` varchar(255) DEFAULT NULL,
`followers` int DEFAULT NULL,
`following` int DEFAULT NULL,
`public_repos` int DEFAULT NULL,
`bio` text,
`avatar_url` text,
`created_at` datetime DEFAULT NULL,
`updated_at` datetime DEFAULT NULL,
PRIMARY KEY (`id`),
UNIQUE KEY `github_id` (`github_id`),
UNIQUE KEY `login` (`login`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
