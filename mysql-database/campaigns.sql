-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 27, 2021 at 12:18 AM
-- Server version: 8.0.25-0ubuntu0.20.04.1
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `campaigns`
--

-- --------------------------------------------------------

--
-- Table structure for table `campaigns`
--

CREATE TABLE `campaigns` (
  `campaigns_id` bigint NOT NULL,
  `title` text,
  `total_amount` float NOT NULL DEFAULT '0',
  `backers_count` bigint NOT NULL DEFAULT '0',
  `end_date` date DEFAULT NULL,
  `created_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `campaigns`
--

INSERT INTO `campaigns` (`campaigns_id`, `title`, `total_amount`, `backers_count`, `end_date`, `created_at`) VALUES
(1, 'Test campaigns text 1', 100, 10, '2021-06-30', '2021-06-01'),
(2, 'Test campaigns text 2', 120, 2, '2021-05-30', '2021-05-01'),
(3, 'Test campaigns text 3', 105, 4, '2021-06-29', '2021-06-01'),
(4, 'Test campaigns text 4', 130, 105, '2021-07-09', '2021-06-01'),
(5, 'Test campaigns text 5', 95, 16, '2021-07-05', '2021-05-01'),
(6, 'Test campaigns text 6', 78, 55, '2021-06-24', '2021-06-01'),
(7, 'Test campaigns text 7', 45, 4, '2021-06-21', '2021-06-02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `campaigns`
--
ALTER TABLE `campaigns`
  ADD PRIMARY KEY (`campaigns_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `campaigns`
--
ALTER TABLE `campaigns`
  MODIFY `campaigns_id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
