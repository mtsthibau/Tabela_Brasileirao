-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 05-Jun-2020 às 06:13
-- Versão do servidor: 10.4.6-MariaDB
-- versão do PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `brasileirao`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `classificacao`
--

CREATE TABLE `classificacao` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nome_clube` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pontos` int(11) NOT NULL,
  `jogos_disputados` int(11) NOT NULL,
  `vitorias` int(11) NOT NULL,
  `empates` int(11) NOT NULL,
  `derrotas` int(11) NOT NULL,
  `gols_pro` int(11) NOT NULL,
  `gols_contra` int(11) NOT NULL,
  `saldo_gols` int(11) NOT NULL,
  `brasao` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `classificacao`
--

INSERT INTO `classificacao` (`id`, `nome_clube`, `pontos`, `jogos_disputados`, `vitorias`, `empates`, `derrotas`, `gols_pro`, `gols_contra`, `saldo_gols`, `brasao`, `created_at`, `updated_at`) VALUES
(182, 'Atlético-PR', 0, 0, 0, 0, 0, 0, 0, 0, 'Athletico-PR.svg', '2020-06-05 03:00:00', '2020-06-05 06:38:57'),
(183, 'Atlético-GO', 0, 0, 0, 0, 0, 0, 0, 0, 'atletico-go.svg', '2020-06-05 03:00:00', '2020-06-05 06:38:57'),
(184, 'Atlético-MG', 0, 0, 0, 0, 0, 0, 0, 0, 'atletico-mg.svg', '2020-06-05 03:00:00', '2020-06-05 07:08:43'),
(185, 'Bahia', 0, 0, 0, 0, 0, 0, 0, 0, 'bahia.svg', '2020-06-05 03:00:00', '2020-06-05 03:00:00'),
(186, 'Botafogo', 0, 0, 0, 0, 0, 0, 0, 0, 'botafogo-svg.svg', '2020-06-05 03:00:00', '2020-06-05 03:00:00'),
(187, 'Bragantino', 0, 0, 0, 0, 0, 0, 0, 0, 'bragantino.svg', '2020-06-05 03:00:00', '2020-06-05 03:00:00'),
(188, 'Ceará', 0, 0, 0, 0, 0, 0, 0, 0, 'ceara.svg', '2020-06-05 03:00:00', '2020-06-05 03:00:00'),
(189, 'Corinthians', 0, 0, 0, 0, 0, 0, 0, 0, 'Corinthians.svg', '2020-06-05 03:00:00', '2020-06-05 03:00:00'),
(190, 'Coritiba', 0, 0, 0, 0, 0, 0, 0, 0, 'coritiba.svg', '2020-06-05 03:00:00', '2020-06-05 03:00:00'),
(191, 'Flamengo', 0, 0, 0, 0, 0, 0, 0, 0, 'Flamengo-2018.svg', '2020-06-05 03:00:00', '2020-06-05 07:08:43'),
(192, 'Fluminense', 0, 0, 0, 0, 0, 0, 0, 0, 'fluminense.svg', '2020-06-05 03:00:00', '2020-06-05 03:00:00'),
(193, 'Fortaleza', 0, 0, 0, 0, 0, 0, 0, 0, 'fortaleza.svg', '2020-06-05 03:00:00', '2020-06-05 03:00:00'),
(194, 'Goiás', 0, 0, 0, 0, 0, 0, 0, 0, 'Goias_SVG.svg', '2020-06-05 03:00:00', '2020-06-05 03:00:00'),
(195, 'Grêmio', 0, 0, 0, 0, 0, 0, 0, 0, 'gremio.svg', '2020-06-05 03:00:00', '2020-06-05 03:00:00'),
(196, 'Internacional', 0, 0, 0, 0, 0, 0, 0, 0, 'internacional.svg', '2020-06-05 03:00:00', '2020-06-05 03:00:00'),
(197, 'Palmeiras', 0, 0, 0, 0, 0, 0, 0, 0, 'Palmeiras.svg', '2020-06-05 03:00:00', '2020-06-05 03:00:00'),
(198, 'Santos', 0, 0, 0, 0, 0, 0, 0, 0, 'santos.svg', '2020-06-05 03:00:00', '2020-06-05 03:00:00'),
(199, 'São Paulo', 0, 0, 0, 0, 0, 0, 0, 0, 'sao-paulo.svg', '2020-06-05 03:00:00', '2020-06-05 03:00:00'),
(200, 'Sport', 0, 0, 0, 0, 0, 0, 0, 0, 'sport.svg', '2020-06-05 03:00:00', '2020-06-05 03:00:00'),
(201, 'Vasco', 0, 0, 0, 0, 0, 0, 0, 0, 'vasco.svg', '2020-06-05 03:00:00', '2020-06-05 03:00:00');

-- --------------------------------------------------------

--
-- Estrutura da tabela `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2020_06_04_204657_create_classificacao', 1);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `classificacao`
--
ALTER TABLE `classificacao`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `classificacao`
--
ALTER TABLE `classificacao`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=202;

--
-- AUTO_INCREMENT de tabela `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
