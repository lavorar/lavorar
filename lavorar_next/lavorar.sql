-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 15-11-2022 a las 15:21:07
-- Versión del servidor: 5.7.33
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `lavorar`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `admin_permissions`
--

CREATE TABLE `admin_permissions` (
  `id` int(10) UNSIGNED NOT NULL,
  `action` varchar(255) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `properties` json DEFAULT NULL,
  `conditions` json DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `created_by_id` int(10) UNSIGNED DEFAULT NULL,
  `updated_by_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `admin_permissions`
--

INSERT INTO `admin_permissions` (`id`, `action`, `subject`, `properties`, `conditions`, `created_at`, `updated_at`, `created_by_id`, `updated_by_id`) VALUES
(1, 'plugin::content-manager.explorer.create', 'api::category.category', '{\"fields\": [\"name\", \"state\", \"city\", \"services\", \"lender\", \"Slug\"]}', '[]', '2022-10-13 22:58:15.246000', '2022-11-09 18:06:39.574000', NULL, NULL),
(2, 'plugin::content-manager.explorer.create', 'api::city.city', '{\"fields\": [\"name\", \"categories\", \"slug\"]}', '[]', '2022-10-13 22:58:15.257000', '2022-11-04 23:48:52.281000', NULL, NULL),
(3, 'plugin::content-manager.explorer.create', 'api::lender.lender', '{\"fields\": [\"users_lender\", \"categories\", \"service\", \"reviews\"]}', '[]', '2022-10-13 22:58:15.266000', '2022-10-13 22:58:15.266000', NULL, NULL),
(4, 'plugin::content-manager.explorer.create', 'api::province.province', '{\"fields\": [\"name\", \"cities\", \"categories\"]}', '[]', '2022-10-13 22:58:15.272000', '2022-10-21 17:21:41.468000', NULL, NULL),
(5, 'plugin::content-manager.explorer.create', 'api::review.review', '{\"fields\": [\"rating\", \"comment\", \"lender\", \"users_review_creator\", \"service\"]}', '[]', '2022-10-13 22:58:15.278000', '2022-10-13 22:58:15.278000', NULL, NULL),
(7, 'plugin::content-manager.explorer.create', 'api::service.service', '{\"fields\": [\"price\", \"finished_at\", \"category\", \"lender\", \"users_recruiter\", \"review\"]}', '[]', '2022-10-13 22:58:15.289000', '2022-10-13 22:58:15.289000', NULL, NULL),
(8, 'plugin::content-manager.explorer.read', 'api::category.category', '{\"fields\": [\"name\", \"state\", \"city\", \"services\", \"lender\", \"Slug\"]}', '[]', '2022-10-13 22:58:15.295000', '2022-11-09 18:06:39.574000', NULL, NULL),
(9, 'plugin::content-manager.explorer.read', 'api::city.city', '{\"fields\": [\"name\", \"categories\", \"slug\"]}', '[]', '2022-10-13 22:58:15.300000', '2022-11-04 23:48:52.282000', NULL, NULL),
(10, 'plugin::content-manager.explorer.read', 'api::lender.lender', '{\"fields\": [\"users_lender\", \"categories\", \"service\", \"reviews\"]}', '[]', '2022-10-13 22:58:15.307000', '2022-10-13 22:58:15.307000', NULL, NULL),
(11, 'plugin::content-manager.explorer.read', 'api::province.province', '{\"fields\": [\"name\", \"cities\", \"categories\"]}', '[]', '2022-10-13 22:58:15.313000', '2022-10-21 17:21:41.468000', NULL, NULL),
(12, 'plugin::content-manager.explorer.read', 'api::review.review', '{\"fields\": [\"rating\", \"comment\", \"lender\", \"users_review_creator\", \"service\"]}', '[]', '2022-10-13 22:58:15.319000', '2022-10-13 22:58:15.319000', NULL, NULL),
(14, 'plugin::content-manager.explorer.read', 'api::service.service', '{\"fields\": [\"price\", \"finished_at\", \"category\", \"lender\", \"users_recruiter\", \"review\"]}', '[]', '2022-10-13 22:58:15.329000', '2022-10-13 22:58:15.329000', NULL, NULL),
(15, 'plugin::content-manager.explorer.update', 'api::category.category', '{\"fields\": [\"name\", \"state\", \"city\", \"services\", \"lender\", \"Slug\"]}', '[]', '2022-10-13 22:58:15.334000', '2022-11-09 18:06:39.574000', NULL, NULL),
(16, 'plugin::content-manager.explorer.update', 'api::city.city', '{\"fields\": [\"name\", \"categories\", \"slug\"]}', '[]', '2022-10-13 22:58:15.340000', '2022-11-04 23:48:52.282000', NULL, NULL),
(17, 'plugin::content-manager.explorer.update', 'api::lender.lender', '{\"fields\": [\"users_lender\", \"categories\", \"service\", \"reviews\"]}', '[]', '2022-10-13 22:58:15.345000', '2022-10-13 22:58:15.345000', NULL, NULL),
(18, 'plugin::content-manager.explorer.update', 'api::province.province', '{\"fields\": [\"name\", \"cities\", \"categories\"]}', '[]', '2022-10-13 22:58:15.351000', '2022-10-21 17:21:41.468000', NULL, NULL),
(19, 'plugin::content-manager.explorer.update', 'api::review.review', '{\"fields\": [\"rating\", \"comment\", \"lender\", \"users_review_creator\", \"service\"]}', '[]', '2022-10-13 22:58:15.357000', '2022-10-13 22:58:15.357000', NULL, NULL),
(21, 'plugin::content-manager.explorer.update', 'api::service.service', '{\"fields\": [\"price\", \"finished_at\", \"category\", \"lender\", \"users_recruiter\", \"review\"]}', '[]', '2022-10-13 22:58:15.369000', '2022-10-13 22:58:15.369000', NULL, NULL),
(22, 'plugin::content-manager.explorer.delete', 'api::category.category', '{}', '[]', '2022-10-13 22:58:15.374000', '2022-10-13 22:58:15.374000', NULL, NULL),
(23, 'plugin::content-manager.explorer.delete', 'api::city.city', '{}', '[]', '2022-10-13 22:58:15.380000', '2022-10-13 22:58:15.380000', NULL, NULL),
(24, 'plugin::content-manager.explorer.delete', 'api::lender.lender', '{}', '[]', '2022-10-13 22:58:15.386000', '2022-10-13 22:58:15.386000', NULL, NULL),
(25, 'plugin::content-manager.explorer.delete', 'api::province.province', '{}', '[]', '2022-10-13 22:58:15.392000', '2022-10-13 22:58:15.392000', NULL, NULL),
(26, 'plugin::content-manager.explorer.delete', 'api::review.review', '{}', '[]', '2022-10-13 22:58:15.398000', '2022-10-13 22:58:15.398000', NULL, NULL),
(28, 'plugin::content-manager.explorer.delete', 'api::service.service', '{}', '[]', '2022-10-13 22:58:15.411000', '2022-10-13 22:58:15.411000', NULL, NULL),
(29, 'plugin::content-manager.explorer.publish', 'api::category.category', '{}', '[]', '2022-10-13 22:58:15.418000', '2022-10-13 22:58:15.418000', NULL, NULL),
(30, 'plugin::content-manager.explorer.publish', 'api::city.city', '{}', '[]', '2022-10-13 22:58:15.423000', '2022-10-13 22:58:15.423000', NULL, NULL),
(31, 'plugin::content-manager.explorer.publish', 'api::lender.lender', '{}', '[]', '2022-10-13 22:58:15.428000', '2022-10-13 22:58:15.428000', NULL, NULL),
(32, 'plugin::content-manager.explorer.publish', 'api::province.province', '{}', '[]', '2022-10-13 22:58:15.434000', '2022-10-13 22:58:15.434000', NULL, NULL),
(33, 'plugin::content-manager.explorer.publish', 'api::review.review', '{}', '[]', '2022-10-13 22:58:15.439000', '2022-10-13 22:58:15.439000', NULL, NULL),
(35, 'plugin::content-manager.explorer.publish', 'api::service.service', '{}', '[]', '2022-10-13 22:58:15.452000', '2022-10-13 22:58:15.452000', NULL, NULL),
(36, 'plugin::upload.read', NULL, '{}', '[]', '2022-10-13 22:58:15.458000', '2022-10-13 22:58:15.458000', NULL, NULL),
(37, 'plugin::upload.assets.create', NULL, '{}', '[]', '2022-10-13 22:58:15.464000', '2022-10-13 22:58:15.464000', NULL, NULL),
(38, 'plugin::upload.assets.update', NULL, '{}', '[]', '2022-10-13 22:58:15.469000', '2022-10-13 22:58:15.469000', NULL, NULL),
(39, 'plugin::upload.assets.download', NULL, '{}', '[]', '2022-10-13 22:58:15.474000', '2022-10-13 22:58:15.474000', NULL, NULL),
(40, 'plugin::upload.assets.copy-link', NULL, '{}', '[]', '2022-10-13 22:58:15.481000', '2022-10-13 22:58:15.481000', NULL, NULL),
(41, 'plugin::content-manager.explorer.create', 'api::category.category', '{\"fields\": [\"name\", \"state\", \"city\", \"services\", \"lender\", \"Slug\"]}', '[\"admin::is-creator\"]', '2022-10-13 22:58:15.490000', '2022-11-09 18:06:39.574000', NULL, NULL),
(42, 'plugin::content-manager.explorer.create', 'api::city.city', '{\"fields\": [\"name\", \"categories\", \"slug\"]}', '[\"admin::is-creator\"]', '2022-10-13 22:58:15.495000', '2022-11-04 23:48:52.282000', NULL, NULL),
(43, 'plugin::content-manager.explorer.create', 'api::lender.lender', '{\"fields\": [\"users_lender\", \"categories\", \"service\", \"reviews\"]}', '[\"admin::is-creator\"]', '2022-10-13 22:58:15.500000', '2022-10-13 22:58:15.500000', NULL, NULL),
(44, 'plugin::content-manager.explorer.create', 'api::province.province', '{\"fields\": [\"name\", \"cities\", \"categories\"]}', '[\"admin::is-creator\"]', '2022-10-13 22:58:15.506000', '2022-10-21 17:21:41.468000', NULL, NULL),
(45, 'plugin::content-manager.explorer.create', 'api::review.review', '{\"fields\": [\"rating\", \"comment\", \"lender\", \"users_review_creator\", \"service\"]}', '[\"admin::is-creator\"]', '2022-10-13 22:58:15.513000', '2022-10-13 22:58:15.513000', NULL, NULL),
(47, 'plugin::content-manager.explorer.create', 'api::service.service', '{\"fields\": [\"price\", \"finished_at\", \"category\", \"lender\", \"users_recruiter\", \"review\"]}', '[\"admin::is-creator\"]', '2022-10-13 22:58:15.525000', '2022-10-13 22:58:15.525000', NULL, NULL),
(48, 'plugin::content-manager.explorer.read', 'api::category.category', '{\"fields\": [\"name\", \"state\", \"city\", \"services\", \"lender\", \"Slug\"]}', '[\"admin::is-creator\"]', '2022-10-13 22:58:15.530000', '2022-11-09 18:06:39.574000', NULL, NULL),
(49, 'plugin::content-manager.explorer.read', 'api::city.city', '{\"fields\": [\"name\", \"categories\", \"slug\"]}', '[\"admin::is-creator\"]', '2022-10-13 22:58:15.536000', '2022-11-04 23:48:52.282000', NULL, NULL),
(50, 'plugin::content-manager.explorer.read', 'api::lender.lender', '{\"fields\": [\"users_lender\", \"categories\", \"service\", \"reviews\"]}', '[\"admin::is-creator\"]', '2022-10-13 22:58:15.541000', '2022-10-13 22:58:15.541000', NULL, NULL),
(51, 'plugin::content-manager.explorer.read', 'api::province.province', '{\"fields\": [\"name\", \"cities\", \"categories\"]}', '[\"admin::is-creator\"]', '2022-10-13 22:58:15.549000', '2022-10-21 17:21:41.468000', NULL, NULL),
(52, 'plugin::content-manager.explorer.read', 'api::review.review', '{\"fields\": [\"rating\", \"comment\", \"lender\", \"users_review_creator\", \"service\"]}', '[\"admin::is-creator\"]', '2022-10-13 22:58:15.555000', '2022-10-13 22:58:15.555000', NULL, NULL),
(54, 'plugin::content-manager.explorer.read', 'api::service.service', '{\"fields\": [\"price\", \"finished_at\", \"category\", \"lender\", \"users_recruiter\", \"review\"]}', '[\"admin::is-creator\"]', '2022-10-13 22:58:15.567000', '2022-10-13 22:58:15.567000', NULL, NULL),
(55, 'plugin::content-manager.explorer.update', 'api::category.category', '{\"fields\": [\"name\", \"state\", \"city\", \"services\", \"lender\", \"Slug\"]}', '[\"admin::is-creator\"]', '2022-10-13 22:58:15.574000', '2022-11-09 18:06:39.574000', NULL, NULL),
(56, 'plugin::content-manager.explorer.update', 'api::city.city', '{\"fields\": [\"name\", \"categories\", \"slug\"]}', '[\"admin::is-creator\"]', '2022-10-13 22:58:15.583000', '2022-11-04 23:48:52.282000', NULL, NULL),
(57, 'plugin::content-manager.explorer.update', 'api::lender.lender', '{\"fields\": [\"users_lender\", \"categories\", \"service\", \"reviews\"]}', '[\"admin::is-creator\"]', '2022-10-13 22:58:15.593000', '2022-10-13 22:58:15.593000', NULL, NULL),
(58, 'plugin::content-manager.explorer.update', 'api::province.province', '{\"fields\": [\"name\", \"cities\", \"categories\"]}', '[\"admin::is-creator\"]', '2022-10-13 22:58:15.601000', '2022-10-21 17:21:41.468000', NULL, NULL),
(59, 'plugin::content-manager.explorer.update', 'api::review.review', '{\"fields\": [\"rating\", \"comment\", \"lender\", \"users_review_creator\", \"service\"]}', '[\"admin::is-creator\"]', '2022-10-13 22:58:15.610000', '2022-10-13 22:58:15.610000', NULL, NULL),
(61, 'plugin::content-manager.explorer.update', 'api::service.service', '{\"fields\": [\"price\", \"finished_at\", \"category\", \"lender\", \"users_recruiter\", \"review\"]}', '[\"admin::is-creator\"]', '2022-10-13 22:58:15.629000', '2022-10-13 22:58:15.629000', NULL, NULL),
(62, 'plugin::content-manager.explorer.delete', 'api::category.category', '{}', '[\"admin::is-creator\"]', '2022-10-13 22:58:15.638000', '2022-10-13 22:58:15.638000', NULL, NULL),
(63, 'plugin::content-manager.explorer.delete', 'api::city.city', '{}', '[\"admin::is-creator\"]', '2022-10-13 22:58:15.646000', '2022-10-13 22:58:15.646000', NULL, NULL),
(64, 'plugin::content-manager.explorer.delete', 'api::lender.lender', '{}', '[\"admin::is-creator\"]', '2022-10-13 22:58:15.654000', '2022-10-13 22:58:15.654000', NULL, NULL),
(65, 'plugin::content-manager.explorer.delete', 'api::province.province', '{}', '[\"admin::is-creator\"]', '2022-10-13 22:58:15.660000', '2022-10-13 22:58:15.660000', NULL, NULL),
(66, 'plugin::content-manager.explorer.delete', 'api::review.review', '{}', '[\"admin::is-creator\"]', '2022-10-13 22:58:15.665000', '2022-10-13 22:58:15.665000', NULL, NULL),
(68, 'plugin::content-manager.explorer.delete', 'api::service.service', '{}', '[\"admin::is-creator\"]', '2022-10-13 22:58:15.676000', '2022-10-13 22:58:15.676000', NULL, NULL),
(69, 'plugin::upload.read', NULL, '{}', '[\"admin::is-creator\"]', '2022-10-13 22:58:15.681000', '2022-10-13 22:58:15.681000', NULL, NULL),
(70, 'plugin::upload.assets.create', NULL, '{}', '[]', '2022-10-13 22:58:15.687000', '2022-10-13 22:58:15.687000', NULL, NULL),
(71, 'plugin::upload.assets.update', NULL, '{}', '[\"admin::is-creator\"]', '2022-10-13 22:58:15.692000', '2022-10-13 22:58:15.692000', NULL, NULL),
(72, 'plugin::upload.assets.download', NULL, '{}', '[]', '2022-10-13 22:58:15.698000', '2022-10-13 22:58:15.698000', NULL, NULL),
(73, 'plugin::upload.assets.copy-link', NULL, '{}', '[]', '2022-10-13 22:58:15.703000', '2022-10-13 22:58:15.703000', NULL, NULL),
(77, 'plugin::content-manager.explorer.create', 'api::lender.lender', '{\"fields\": [\"users_lender\", \"categories\", \"service\", \"reviews\"]}', '[]', '2022-10-13 22:58:15.763000', '2022-10-13 22:58:15.763000', NULL, NULL),
(79, 'plugin::content-manager.explorer.create', 'api::review.review', '{\"fields\": [\"rating\", \"comment\", \"lender\", \"users_review_creator\", \"service\"]}', '[]', '2022-10-13 22:58:15.774000', '2022-10-13 22:58:15.774000', NULL, NULL),
(81, 'plugin::content-manager.explorer.create', 'api::service.service', '{\"fields\": [\"price\", \"finished_at\", \"category\", \"lender\", \"users_recruiter\", \"review\"]}', '[]', '2022-10-13 22:58:15.785000', '2022-10-13 22:58:15.785000', NULL, NULL),
(85, 'plugin::content-manager.explorer.read', 'api::lender.lender', '{\"fields\": [\"users_lender\", \"categories\", \"service\", \"reviews\"]}', '[]', '2022-10-13 22:58:15.808000', '2022-10-13 22:58:15.808000', NULL, NULL),
(87, 'plugin::content-manager.explorer.read', 'api::review.review', '{\"fields\": [\"rating\", \"comment\", \"lender\", \"users_review_creator\", \"service\"]}', '[]', '2022-10-13 22:58:15.820000', '2022-10-13 22:58:15.820000', NULL, NULL),
(89, 'plugin::content-manager.explorer.read', 'api::service.service', '{\"fields\": [\"price\", \"finished_at\", \"category\", \"lender\", \"users_recruiter\", \"review\"]}', '[]', '2022-10-13 22:58:15.832000', '2022-10-13 22:58:15.832000', NULL, NULL),
(93, 'plugin::content-manager.explorer.update', 'api::lender.lender', '{\"fields\": [\"users_lender\", \"categories\", \"service\", \"reviews\"]}', '[]', '2022-10-13 22:58:15.857000', '2022-10-13 22:58:15.857000', NULL, NULL),
(95, 'plugin::content-manager.explorer.update', 'api::review.review', '{\"fields\": [\"rating\", \"comment\", \"lender\", \"users_review_creator\", \"service\"]}', '[]', '2022-10-13 22:58:15.869000', '2022-10-13 22:58:15.869000', NULL, NULL),
(97, 'plugin::content-manager.explorer.update', 'api::service.service', '{\"fields\": [\"price\", \"finished_at\", \"category\", \"lender\", \"users_recruiter\", \"review\"]}', '[]', '2022-10-13 22:58:15.882000', '2022-10-13 22:58:15.882000', NULL, NULL),
(98, 'plugin::content-manager.explorer.delete', 'plugin::users-permissions.user', '{}', '[]', '2022-10-13 22:58:15.888000', '2022-10-13 22:58:15.888000', NULL, NULL),
(99, 'plugin::content-manager.explorer.delete', 'api::category.category', '{}', '[]', '2022-10-13 22:58:15.894000', '2022-10-13 22:58:15.894000', NULL, NULL),
(100, 'plugin::content-manager.explorer.delete', 'api::city.city', '{}', '[]', '2022-10-13 22:58:15.900000', '2022-10-13 22:58:15.900000', NULL, NULL),
(101, 'plugin::content-manager.explorer.delete', 'api::lender.lender', '{}', '[]', '2022-10-13 22:58:15.906000', '2022-10-13 22:58:15.906000', NULL, NULL),
(102, 'plugin::content-manager.explorer.delete', 'api::province.province', '{}', '[]', '2022-10-13 22:58:15.912000', '2022-10-13 22:58:15.912000', NULL, NULL),
(103, 'plugin::content-manager.explorer.delete', 'api::review.review', '{}', '[]', '2022-10-13 22:58:15.917000', '2022-10-13 22:58:15.917000', NULL, NULL),
(105, 'plugin::content-manager.explorer.delete', 'api::service.service', '{}', '[]', '2022-10-13 22:58:15.929000', '2022-10-13 22:58:15.929000', NULL, NULL),
(106, 'plugin::content-manager.explorer.publish', 'api::category.category', '{}', '[]', '2022-10-13 22:58:15.936000', '2022-10-13 22:58:15.936000', NULL, NULL),
(107, 'plugin::content-manager.explorer.publish', 'api::city.city', '{}', '[]', '2022-10-13 22:58:15.941000', '2022-10-13 22:58:15.941000', NULL, NULL),
(108, 'plugin::content-manager.explorer.publish', 'api::lender.lender', '{}', '[]', '2022-10-13 22:58:15.948000', '2022-10-13 22:58:15.948000', NULL, NULL),
(109, 'plugin::content-manager.explorer.publish', 'api::province.province', '{}', '[]', '2022-10-13 22:58:15.955000', '2022-10-13 22:58:15.955000', NULL, NULL),
(110, 'plugin::content-manager.explorer.publish', 'api::review.review', '{}', '[]', '2022-10-13 22:58:15.960000', '2022-10-13 22:58:15.960000', NULL, NULL),
(112, 'plugin::content-manager.explorer.publish', 'api::service.service', '{}', '[]', '2022-10-13 22:58:15.975000', '2022-10-13 22:58:15.975000', NULL, NULL),
(113, 'plugin::content-manager.single-types.configure-view', NULL, '{}', '[]', '2022-10-13 22:58:15.981000', '2022-10-13 22:58:15.981000', NULL, NULL),
(114, 'plugin::content-manager.collection-types.configure-view', NULL, '{}', '[]', '2022-10-13 22:58:15.987000', '2022-10-13 22:58:15.987000', NULL, NULL),
(115, 'plugin::content-manager.components.configure-layout', NULL, '{}', '[]', '2022-10-13 22:58:15.993000', '2022-10-13 22:58:15.993000', NULL, NULL),
(116, 'plugin::content-type-builder.read', NULL, '{}', '[]', '2022-10-13 22:58:15.999000', '2022-10-13 22:58:15.999000', NULL, NULL),
(117, 'plugin::email.settings.read', NULL, '{}', '[]', '2022-10-13 22:58:16.005000', '2022-10-13 22:58:16.005000', NULL, NULL),
(118, 'plugin::upload.read', NULL, '{}', '[]', '2022-10-13 22:58:16.011000', '2022-10-13 22:58:16.011000', NULL, NULL),
(119, 'plugin::upload.assets.create', NULL, '{}', '[]', '2022-10-13 22:58:16.017000', '2022-10-13 22:58:16.017000', NULL, NULL),
(120, 'plugin::upload.assets.update', NULL, '{}', '[]', '2022-10-13 22:58:16.022000', '2022-10-13 22:58:16.022000', NULL, NULL),
(121, 'plugin::upload.assets.download', NULL, '{}', '[]', '2022-10-13 22:58:16.027000', '2022-10-13 22:58:16.027000', NULL, NULL),
(122, 'plugin::upload.assets.copy-link', NULL, '{}', '[]', '2022-10-13 22:58:16.033000', '2022-10-13 22:58:16.033000', NULL, NULL),
(123, 'plugin::upload.settings.read', NULL, '{}', '[]', '2022-10-13 22:58:16.039000', '2022-10-13 22:58:16.039000', NULL, NULL),
(124, 'plugin::users-permissions.roles.create', NULL, '{}', '[]', '2022-10-13 22:58:16.044000', '2022-10-13 22:58:16.044000', NULL, NULL),
(125, 'plugin::users-permissions.roles.read', NULL, '{}', '[]', '2022-10-13 22:58:16.051000', '2022-10-13 22:58:16.051000', NULL, NULL),
(126, 'plugin::users-permissions.roles.update', NULL, '{}', '[]', '2022-10-13 22:58:16.057000', '2022-10-13 22:58:16.057000', NULL, NULL),
(127, 'plugin::users-permissions.roles.delete', NULL, '{}', '[]', '2022-10-13 22:58:16.063000', '2022-10-13 22:58:16.063000', NULL, NULL),
(128, 'plugin::users-permissions.providers.read', NULL, '{}', '[]', '2022-10-13 22:58:16.068000', '2022-10-13 22:58:16.068000', NULL, NULL),
(129, 'plugin::users-permissions.providers.update', NULL, '{}', '[]', '2022-10-13 22:58:16.074000', '2022-10-13 22:58:16.074000', NULL, NULL),
(130, 'plugin::users-permissions.email-templates.read', NULL, '{}', '[]', '2022-10-13 22:58:16.080000', '2022-10-13 22:58:16.080000', NULL, NULL),
(131, 'plugin::users-permissions.email-templates.update', NULL, '{}', '[]', '2022-10-13 22:58:16.085000', '2022-10-13 22:58:16.085000', NULL, NULL),
(132, 'plugin::users-permissions.advanced-settings.read', NULL, '{}', '[]', '2022-10-13 22:58:16.092000', '2022-10-13 22:58:16.092000', NULL, NULL),
(133, 'plugin::users-permissions.advanced-settings.update', NULL, '{}', '[]', '2022-10-13 22:58:16.098000', '2022-10-13 22:58:16.098000', NULL, NULL),
(134, 'plugin::i18n.locale.create', NULL, '{}', '[]', '2022-10-13 22:58:16.105000', '2022-10-13 22:58:16.105000', NULL, NULL),
(135, 'plugin::i18n.locale.read', NULL, '{}', '[]', '2022-10-13 22:58:16.111000', '2022-10-13 22:58:16.111000', NULL, NULL),
(136, 'plugin::i18n.locale.update', NULL, '{}', '[]', '2022-10-13 22:58:16.117000', '2022-10-13 22:58:16.117000', NULL, NULL),
(137, 'plugin::i18n.locale.delete', NULL, '{}', '[]', '2022-10-13 22:58:16.123000', '2022-10-13 22:58:16.123000', NULL, NULL),
(138, 'admin::marketplace.read', NULL, '{}', '[]', '2022-10-13 22:58:16.131000', '2022-10-13 22:58:16.131000', NULL, NULL),
(139, 'admin::marketplace.plugins.install', NULL, '{}', '[]', '2022-10-13 22:58:16.137000', '2022-10-13 22:58:16.137000', NULL, NULL),
(140, 'admin::marketplace.plugins.uninstall', NULL, '{}', '[]', '2022-10-13 22:58:16.142000', '2022-10-13 22:58:16.142000', NULL, NULL),
(141, 'admin::webhooks.create', NULL, '{}', '[]', '2022-10-13 22:58:16.148000', '2022-10-13 22:58:16.148000', NULL, NULL),
(142, 'admin::webhooks.read', NULL, '{}', '[]', '2022-10-13 22:58:16.154000', '2022-10-13 22:58:16.154000', NULL, NULL),
(143, 'admin::webhooks.update', NULL, '{}', '[]', '2022-10-13 22:58:16.160000', '2022-10-13 22:58:16.160000', NULL, NULL),
(144, 'admin::webhooks.delete', NULL, '{}', '[]', '2022-10-13 22:58:16.169000', '2022-10-13 22:58:16.169000', NULL, NULL),
(145, 'admin::users.create', NULL, '{}', '[]', '2022-10-13 22:58:16.175000', '2022-10-13 22:58:16.175000', NULL, NULL),
(146, 'admin::users.read', NULL, '{}', '[]', '2022-10-13 22:58:16.182000', '2022-10-13 22:58:16.182000', NULL, NULL),
(147, 'admin::users.update', NULL, '{}', '[]', '2022-10-13 22:58:16.188000', '2022-10-13 22:58:16.188000', NULL, NULL),
(148, 'admin::users.delete', NULL, '{}', '[]', '2022-10-13 22:58:16.194000', '2022-10-13 22:58:16.194000', NULL, NULL),
(149, 'admin::roles.create', NULL, '{}', '[]', '2022-10-13 22:58:16.200000', '2022-10-13 22:58:16.200000', NULL, NULL),
(150, 'admin::roles.read', NULL, '{}', '[]', '2022-10-13 22:58:16.205000', '2022-10-13 22:58:16.205000', NULL, NULL),
(151, 'admin::roles.update', NULL, '{}', '[]', '2022-10-13 22:58:16.211000', '2022-10-13 22:58:16.211000', NULL, NULL),
(152, 'admin::roles.delete', NULL, '{}', '[]', '2022-10-13 22:58:16.216000', '2022-10-13 22:58:16.216000', NULL, NULL),
(153, 'admin::api-tokens.access', NULL, '{}', '[]', '2022-10-13 22:58:16.222000', '2022-10-13 22:58:16.222000', NULL, NULL),
(154, 'admin::api-tokens.create', NULL, '{}', '[]', '2022-10-13 22:58:16.227000', '2022-10-13 22:58:16.227000', NULL, NULL),
(155, 'admin::api-tokens.read', NULL, '{}', '[]', '2022-10-13 22:58:16.232000', '2022-10-13 22:58:16.232000', NULL, NULL),
(156, 'admin::api-tokens.update', NULL, '{}', '[]', '2022-10-13 22:58:16.238000', '2022-10-13 22:58:16.238000', NULL, NULL),
(157, 'admin::api-tokens.regenerate', NULL, '{}', '[]', '2022-10-13 22:58:16.243000', '2022-10-13 22:58:16.243000', NULL, NULL),
(158, 'admin::api-tokens.delete', NULL, '{}', '[]', '2022-10-13 22:58:16.251000', '2022-10-13 22:58:16.251000', NULL, NULL),
(159, 'admin::project-settings.update', NULL, '{}', '[]', '2022-10-13 22:58:16.256000', '2022-10-13 22:58:16.256000', NULL, NULL),
(160, 'admin::project-settings.read', NULL, '{}', '[]', '2022-10-13 22:58:16.262000', '2022-10-13 22:58:16.262000', NULL, NULL),
(262, 'plugin::content-manager.explorer.create', 'api::province.province', '{\"fields\": [\"name\", \"cities\", \"categories\", \"users\", \"identificador\", \"Slug\"]}', '[]', '2022-11-04 23:17:02.319000', '2022-11-04 23:17:02.319000', NULL, NULL),
(263, 'plugin::content-manager.explorer.read', 'api::province.province', '{\"fields\": [\"name\", \"cities\", \"categories\", \"users\", \"identificador\", \"Slug\"]}', '[]', '2022-11-04 23:17:02.335000', '2022-11-04 23:17:02.335000', NULL, NULL),
(264, 'plugin::content-manager.explorer.update', 'api::province.province', '{\"fields\": [\"name\", \"cities\", \"categories\", \"users\", \"identificador\", \"Slug\"]}', '[]', '2022-11-04 23:17:02.340000', '2022-11-04 23:17:02.340000', NULL, NULL),
(265, 'plugin::content-manager.explorer.create', 'api::city.city', '{\"fields\": [\"name\", \"categories\", \"users\", \"identificador\", \"province\", \"slug\"]}', '[]', '2022-11-04 23:48:52.183000', '2022-11-04 23:48:52.183000', NULL, NULL),
(266, 'plugin::content-manager.explorer.read', 'api::city.city', '{\"fields\": [\"name\", \"categories\", \"users\", \"identificador\", \"province\", \"slug\"]}', '[]', '2022-11-04 23:48:52.189000', '2022-11-04 23:48:52.189000', NULL, NULL),
(267, 'plugin::content-manager.explorer.update', 'api::city.city', '{\"fields\": [\"name\", \"categories\", \"users\", \"identificador\", \"province\", \"slug\"]}', '[]', '2022-11-04 23:48:52.195000', '2022-11-04 23:48:52.195000', NULL, NULL),
(290, 'plugin::content-manager.explorer.create', 'api::category.category', '{\"fields\": [\"name\", \"state\", \"city\", \"services\", \"lender\", \"provinces\", \"Slug\"]}', '[]', '2022-11-09 18:06:39.423000', '2022-11-09 18:06:39.423000', NULL, NULL),
(292, 'plugin::content-manager.explorer.read', 'api::category.category', '{\"fields\": [\"name\", \"state\", \"city\", \"services\", \"lender\", \"provinces\", \"Slug\"]}', '[]', '2022-11-09 18:06:39.438000', '2022-11-09 18:06:39.438000', NULL, NULL),
(294, 'plugin::content-manager.explorer.update', 'api::category.category', '{\"fields\": [\"name\", \"state\", \"city\", \"services\", \"lender\", \"provinces\", \"Slug\"]}', '[]', '2022-11-09 18:06:39.451000', '2022-11-09 18:06:39.451000', NULL, NULL),
(295, 'plugin::content-manager.explorer.create', 'plugin::users-permissions.user', '{\"fields\": [\"username\", \"email\", \"provider\", \"password\", \"resetPasswordToken\", \"confirmationToken\", \"confirmed\", \"blocked\", \"role\", \"categories\", \"service_recruiter\", \"lender\", \"reviews\", \"phone\", \"is_lender\", \"aboutme\", \"birth\", \"provincia\", \"localidad\", \"name\", \"Slug\", \"profile_pic\", \"firstName\", \"lastName\"]}', '[]', '2022-11-10 21:48:35.437000', '2022-11-10 21:48:35.437000', NULL, NULL),
(296, 'plugin::content-manager.explorer.read', 'plugin::users-permissions.user', '{\"fields\": [\"username\", \"email\", \"provider\", \"password\", \"resetPasswordToken\", \"confirmationToken\", \"confirmed\", \"blocked\", \"role\", \"categories\", \"service_recruiter\", \"lender\", \"reviews\", \"phone\", \"is_lender\", \"aboutme\", \"birth\", \"provincia\", \"localidad\", \"name\", \"Slug\", \"profile_pic\", \"firstName\", \"lastName\"]}', '[]', '2022-11-10 21:48:35.444000', '2022-11-10 21:48:35.444000', NULL, NULL),
(297, 'plugin::content-manager.explorer.update', 'plugin::users-permissions.user', '{\"fields\": [\"username\", \"email\", \"provider\", \"password\", \"resetPasswordToken\", \"confirmationToken\", \"confirmed\", \"blocked\", \"role\", \"categories\", \"service_recruiter\", \"lender\", \"reviews\", \"phone\", \"is_lender\", \"aboutme\", \"birth\", \"provincia\", \"localidad\", \"name\", \"Slug\", \"profile_pic\", \"firstName\", \"lastName\"]}', '[]', '2022-11-10 21:48:35.449000', '2022-11-10 21:48:35.449000', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `admin_permissions_role_links`
--

CREATE TABLE `admin_permissions_role_links` (
  `id` int(10) UNSIGNED NOT NULL,
  `permission_id` int(10) UNSIGNED DEFAULT NULL,
  `role_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `admin_permissions_role_links`
--

INSERT INTO `admin_permissions_role_links` (`id`, `permission_id`, `role_id`) VALUES
(1, 1, 2),
(2, 2, 2),
(3, 3, 2),
(4, 4, 2),
(5, 5, 2),
(7, 7, 2),
(8, 8, 2),
(9, 9, 2),
(10, 10, 2),
(11, 11, 2),
(12, 12, 2),
(14, 14, 2),
(15, 15, 2),
(16, 16, 2),
(17, 17, 2),
(18, 18, 2),
(19, 19, 2),
(21, 21, 2),
(22, 22, 2),
(23, 23, 2),
(24, 24, 2),
(25, 25, 2),
(26, 26, 2),
(28, 28, 2),
(29, 29, 2),
(30, 30, 2),
(31, 31, 2),
(32, 32, 2),
(33, 33, 2),
(35, 35, 2),
(36, 36, 2),
(37, 37, 2),
(38, 38, 2),
(39, 39, 2),
(40, 40, 2),
(41, 41, 3),
(42, 42, 3),
(43, 43, 3),
(44, 44, 3),
(45, 45, 3),
(47, 47, 3),
(48, 48, 3),
(49, 49, 3),
(50, 50, 3),
(51, 51, 3),
(52, 52, 3),
(54, 54, 3),
(55, 55, 3),
(56, 56, 3),
(57, 57, 3),
(58, 58, 3),
(59, 59, 3),
(61, 61, 3),
(62, 62, 3),
(63, 63, 3),
(64, 64, 3),
(65, 65, 3),
(66, 66, 3),
(68, 68, 3),
(69, 69, 3),
(70, 70, 3),
(71, 71, 3),
(72, 72, 3),
(73, 73, 3),
(77, 77, 1),
(79, 79, 1),
(81, 81, 1),
(85, 85, 1),
(87, 87, 1),
(89, 89, 1),
(93, 93, 1),
(95, 95, 1),
(97, 97, 1),
(98, 98, 1),
(99, 99, 1),
(100, 100, 1),
(101, 101, 1),
(102, 102, 1),
(103, 103, 1),
(105, 105, 1),
(106, 106, 1),
(107, 107, 1),
(108, 108, 1),
(109, 109, 1),
(110, 110, 1),
(112, 112, 1),
(113, 113, 1),
(114, 114, 1),
(115, 115, 1),
(116, 116, 1),
(117, 117, 1),
(118, 118, 1),
(119, 119, 1),
(120, 120, 1),
(121, 121, 1),
(122, 122, 1),
(123, 123, 1),
(124, 124, 1),
(125, 125, 1),
(126, 126, 1),
(127, 127, 1),
(128, 128, 1),
(129, 129, 1),
(130, 130, 1),
(131, 131, 1),
(132, 132, 1),
(133, 133, 1),
(134, 134, 1),
(135, 135, 1),
(136, 136, 1),
(137, 137, 1),
(138, 138, 1),
(139, 139, 1),
(140, 140, 1),
(141, 141, 1),
(142, 142, 1),
(143, 143, 1),
(144, 144, 1),
(145, 145, 1),
(146, 146, 1),
(147, 147, 1),
(148, 148, 1),
(149, 149, 1),
(150, 150, 1),
(151, 151, 1),
(152, 152, 1),
(153, 153, 1),
(154, 154, 1),
(155, 155, 1),
(156, 156, 1),
(157, 157, 1),
(158, 158, 1),
(159, 159, 1),
(160, 160, 1),
(262, 262, 1),
(263, 263, 1),
(264, 264, 1),
(265, 265, 1),
(266, 266, 1),
(267, 267, 1),
(290, 290, 1),
(292, 292, 1),
(294, 294, 1),
(295, 295, 1),
(296, 296, 1),
(297, 297, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `admin_roles`
--

CREATE TABLE `admin_roles` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `created_by_id` int(10) UNSIGNED DEFAULT NULL,
  `updated_by_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `admin_roles`
--

INSERT INTO `admin_roles` (`id`, `name`, `code`, `description`, `created_at`, `updated_at`, `created_by_id`, `updated_by_id`) VALUES
(1, 'Super Admin', 'strapi-super-admin', 'Super Admins can access and manage all features and settings.', '2022-10-13 22:58:15.210000', '2022-10-13 22:58:15.210000', NULL, NULL),
(2, 'Editor', 'strapi-editor', 'Editors can manage and publish contents including those of other users.', '2022-10-13 22:58:15.221000', '2022-10-13 22:58:15.221000', NULL, NULL),
(3, 'Author', 'strapi-author', 'Authors can manage the content they have created.', '2022-10-13 22:58:15.225000', '2022-10-13 22:58:15.225000', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `admin_users`
--

CREATE TABLE `admin_users` (
  `id` int(10) UNSIGNED NOT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `reset_password_token` varchar(255) DEFAULT NULL,
  `registration_token` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `blocked` tinyint(1) DEFAULT NULL,
  `prefered_language` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `created_by_id` int(10) UNSIGNED DEFAULT NULL,
  `updated_by_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `admin_users`
--

INSERT INTO `admin_users` (`id`, `firstname`, `lastname`, `username`, `email`, `password`, `reset_password_token`, `registration_token`, `is_active`, `blocked`, `prefered_language`, `created_at`, `updated_at`, `created_by_id`, `updated_by_id`) VALUES
(1, 'santiago', 'avilez', NULL, 'santiagolingreed@gmail.com', '$2a$10$cXB7sRybFL9XMuX9bw2b4u4Z4gXDEQZ3.7DltZ9kyWdPLrKagHrOe', NULL, NULL, 1, 0, NULL, '2022-10-13 22:59:02.026000', '2022-10-13 22:59:02.026000', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `admin_users_roles_links`
--

CREATE TABLE `admin_users_roles_links` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `role_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `admin_users_roles_links`
--

INSERT INTO `admin_users_roles_links` (`id`, `user_id`, `role_id`) VALUES
(1, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `state` tinyint(1) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `published_at` datetime(6) DEFAULT NULL,
  `created_by_id` int(10) UNSIGNED DEFAULT NULL,
  `updated_by_id` int(10) UNSIGNED DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`, `state`, `created_at`, `updated_at`, `published_at`, `created_by_id`, `updated_by_id`, `slug`) VALUES
(1, 'Niñera', 1, '2022-10-13 23:06:45.809000', '2022-11-13 20:20:06.545000', '2022-10-13 23:06:51.776000', 1, 1, 'ninera'),
(2, 'Construcción', 1, '2022-10-24 21:02:53.527000', '2022-11-13 20:20:15.776000', '2022-10-24 21:03:26.926000', 1, 1, 'construccion'),
(3, 'Ama de casa', 1, '2022-10-24 21:03:04.789000', '2022-11-13 20:20:23.788000', '2022-10-24 21:03:31.354000', 1, 1, 'ama-de-casa'),
(4, 'Electricista', 1, '2022-10-24 21:03:44.472000', '2022-11-13 20:19:10.062000', '2022-10-24 21:03:45.804000', 1, 1, 'electricista'),
(5, 'Paseador de perros', 1, '2022-10-24 21:04:04.368000', '2022-11-13 20:19:21.306000', '2022-10-24 21:04:04.975000', 1, 1, 'paseador-de-perros');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories_city_links`
--

CREATE TABLE `categories_city_links` (
  `id` int(10) UNSIGNED NOT NULL,
  `category_id` int(10) UNSIGNED DEFAULT NULL,
  `city_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories_lender_links`
--

CREATE TABLE `categories_lender_links` (
  `id` int(10) UNSIGNED NOT NULL,
  `category_id` int(10) UNSIGNED DEFAULT NULL,
  `lender_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories_provinces_links`
--

CREATE TABLE `categories_provinces_links` (
  `id` int(10) UNSIGNED NOT NULL,
  `category_id` int(10) UNSIGNED DEFAULT NULL,
  `province_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cities`
--

CREATE TABLE `cities` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `published_at` datetime(6) DEFAULT NULL,
  `created_by_id` int(10) UNSIGNED DEFAULT NULL,
  `updated_by_id` int(10) UNSIGNED DEFAULT NULL,
  `identificador` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `cities`
--

INSERT INTO `cities` (`id`, `name`, `created_at`, `updated_at`, `published_at`, `created_by_id`, `updated_by_id`, `identificador`, `slug`) VALUES
(62, 'El Condor', '2022-11-01 14:52:07.294000', '2022-11-04 23:49:31.649000', '2022-11-01 14:52:07.292000', NULL, 1, '62007020000', 'el-condor'),
(73, 'General Roca', '2022-11-01 18:54:12.877000', '2022-11-04 23:49:39.778000', '2022-11-01 18:54:12.875000', NULL, 1, '62042450000', 'general-roca'),
(74, 'Azara', '2022-11-01 19:15:45.363000', '2022-11-05 00:12:32.498000', '2022-11-01 19:15:45.355000', NULL, 1, '54007020000', 'azara'),
(76, 'Candelaria', '2022-11-05 16:04:31.940000', '2022-11-05 16:04:31.940000', '2022-11-05 16:04:31.938000', NULL, NULL, '74007010000', 'candelaria'),
(77, 'Colonia Suiza', '2022-11-05 17:16:57.010000', '2022-11-05 17:18:54.828000', '2022-11-05 17:16:57.007000', NULL, 1, '62021020000', 'colonia-suiza'),
(78, 'Lamarque', '2022-11-05 17:19:35.883000', '2022-11-05 17:19:35.883000', '2022-11-05 17:19:35.881000', NULL, NULL, '62014070000', 'lamarque'),
(79, 'Santa Rosa', '2022-11-09 18:48:32.841000', '2022-11-09 18:48:32.841000', '2022-11-09 18:48:32.839000', NULL, NULL, '42021020000', 'santa-rosa'),
(80, 'Guardia Mitre', '2022-11-10 21:22:44.410000', '2022-11-10 21:22:44.410000', '2022-11-10 21:22:44.405000', NULL, NULL, '62007040000', 'guardia-mitre'),
(81, 'Ushuaia', '2022-11-10 21:23:41.419000', '2022-11-10 21:23:41.419000', '2022-11-10 21:23:41.415000', NULL, NULL, '94015020000', 'ushuaia'),
(82, 'General Fernandez Oro', '2022-11-13 17:04:35.219000', '2022-11-13 17:04:35.219000', '2022-11-13 17:04:35.215000', NULL, NULL, '62042440000', 'general-fernandez-oro'),
(83, 'El Juncal', '2022-11-13 20:14:12.244000', '2022-11-13 20:14:12.244000', '2022-11-13 20:14:12.242000', NULL, NULL, '62007030000', 'el-juncal');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cities_province_links`
--

CREATE TABLE `cities_province_links` (
  `id` int(10) UNSIGNED NOT NULL,
  `city_id` int(10) UNSIGNED DEFAULT NULL,
  `province_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `cities_province_links`
--

INSERT INTO `cities_province_links` (`id`, `city_id`, `province_id`) VALUES
(18, 62, 4),
(19, 73, 4),
(20, 74, 4),
(21, 76, 13),
(22, 77, 4),
(23, 78, 4),
(24, 79, 19),
(25, 80, 4),
(26, 81, 20);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `files`
--

CREATE TABLE `files` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `alternative_text` varchar(255) DEFAULT NULL,
  `caption` varchar(255) DEFAULT NULL,
  `width` int(11) DEFAULT NULL,
  `height` int(11) DEFAULT NULL,
  `formats` json DEFAULT NULL,
  `hash` varchar(255) DEFAULT NULL,
  `ext` varchar(255) DEFAULT NULL,
  `mime` varchar(255) DEFAULT NULL,
  `size` decimal(10,2) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `preview_url` varchar(255) DEFAULT NULL,
  `provider` varchar(255) DEFAULT NULL,
  `provider_metadata` json DEFAULT NULL,
  `folder_path` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `created_by_id` int(10) UNSIGNED DEFAULT NULL,
  `updated_by_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `files`
--

INSERT INTO `files` (`id`, `name`, `alternative_text`, `caption`, `width`, `height`, `formats`, `hash`, `ext`, `mime`, `size`, `url`, `preview_url`, `provider`, `provider_metadata`, `folder_path`, `created_at`, `updated_at`, `created_by_id`, `updated_by_id`) VALUES
(1, 'Recorrido-3K.jpg', 'Recorrido-3K.jpg', 'Recorrido-3K.jpg', 855, 688, '{\"small\": {\"ext\": \".jpg\", \"url\": \"/uploads/small_Recorrido_3_K_e2145fa2be.jpg\", \"hash\": \"small_Recorrido_3_K_e2145fa2be\", \"mime\": \"image/jpeg\", \"name\": \"small_Recorrido-3K.jpg\", \"path\": null, \"size\": 37.97, \"width\": 500, \"height\": 402}, \"medium\": {\"ext\": \".jpg\", \"url\": \"/uploads/medium_Recorrido_3_K_e2145fa2be.jpg\", \"hash\": \"medium_Recorrido_3_K_e2145fa2be\", \"mime\": \"image/jpeg\", \"name\": \"medium_Recorrido-3K.jpg\", \"path\": null, \"size\": 68.27, \"width\": 750, \"height\": 604}, \"thumbnail\": {\"ext\": \".jpg\", \"url\": \"/uploads/thumbnail_Recorrido_3_K_e2145fa2be.jpg\", \"hash\": \"thumbnail_Recorrido_3_K_e2145fa2be\", \"mime\": \"image/jpeg\", \"name\": \"thumbnail_Recorrido-3K.jpg\", \"path\": null, \"size\": 9.49, \"width\": 194, \"height\": 156}}', 'Recorrido_3_K_e2145fa2be', '.jpg', 'image/jpeg', '81.37', '/uploads/Recorrido_3_K_e2145fa2be.jpg', NULL, 'local', NULL, '/', '2022-11-09 16:01:45.949000', '2022-11-14 20:58:00.853000', 1, 1),
(41, 'Portada.png', NULL, NULL, 1920, 1080, '{\"large\": {\"ext\": \".png\", \"url\": \"/uploads/large_Portada_b365cc4120.png\", \"hash\": \"large_Portada_b365cc4120\", \"mime\": \"image/png\", \"name\": \"large_Portada.png\", \"path\": null, \"size\": 712.96, \"width\": 1000, \"height\": 563}, \"small\": {\"ext\": \".png\", \"url\": \"/uploads/small_Portada_b365cc4120.png\", \"hash\": \"small_Portada_b365cc4120\", \"mime\": \"image/png\", \"name\": \"small_Portada.png\", \"path\": null, \"size\": 192.89, \"width\": 500, \"height\": 281}, \"medium\": {\"ext\": \".png\", \"url\": \"/uploads/medium_Portada_b365cc4120.png\", \"hash\": \"medium_Portada_b365cc4120\", \"mime\": \"image/png\", \"name\": \"medium_Portada.png\", \"path\": null, \"size\": 407.78, \"width\": 750, \"height\": 422}, \"thumbnail\": {\"ext\": \".png\", \"url\": \"/uploads/thumbnail_Portada_b365cc4120.png\", \"hash\": \"thumbnail_Portada_b365cc4120\", \"mime\": \"image/png\", \"name\": \"thumbnail_Portada.png\", \"path\": null, \"size\": 57.07, \"width\": 245, \"height\": 138}}', 'Portada_b365cc4120', '.png', 'image/png', '1814.50', '/uploads/Portada_b365cc4120.png', NULL, 'local', NULL, '/1', '2022-11-09 17:51:45.132000', '2022-11-09 17:51:45.132000', NULL, NULL),
(42, 'Recorrido-3K.jpg', NULL, NULL, 855, 688, '{\"small\": {\"ext\": \".jpg\", \"url\": \"/uploads/small_Recorrido_3_K_424a07cb5f.jpg\", \"hash\": \"small_Recorrido_3_K_424a07cb5f\", \"mime\": \"image/jpeg\", \"name\": \"small_Recorrido-3K.jpg\", \"path\": null, \"size\": 37.97, \"width\": 500, \"height\": 402}, \"medium\": {\"ext\": \".jpg\", \"url\": \"/uploads/medium_Recorrido_3_K_424a07cb5f.jpg\", \"hash\": \"medium_Recorrido_3_K_424a07cb5f\", \"mime\": \"image/jpeg\", \"name\": \"medium_Recorrido-3K.jpg\", \"path\": null, \"size\": 68.27, \"width\": 750, \"height\": 604}, \"thumbnail\": {\"ext\": \".jpg\", \"url\": \"/uploads/thumbnail_Recorrido_3_K_424a07cb5f.jpg\", \"hash\": \"thumbnail_Recorrido_3_K_424a07cb5f\", \"mime\": \"image/jpeg\", \"name\": \"thumbnail_Recorrido-3K.jpg\", \"path\": null, \"size\": 9.49, \"width\": 194, \"height\": 156}}', 'Recorrido_3_K_424a07cb5f', '.jpg', 'image/jpeg', '81.37', '/uploads/Recorrido_3_K_424a07cb5f.jpg', NULL, 'local', NULL, '/1', '2022-11-10 19:35:15.398000', '2022-11-10 19:35:15.398000', NULL, NULL),
(43, '20220930_141320.jpg', NULL, NULL, 4160, 3120, '{\"large\": {\"ext\": \".jpg\", \"url\": \"/uploads/large_20220930_141320_7c202b689a.jpg\", \"hash\": \"large_20220930_141320_7c202b689a\", \"mime\": \"image/jpeg\", \"name\": \"large_20220930_141320.jpg\", \"path\": null, \"size\": 82.06, \"width\": 1000, \"height\": 750}, \"small\": {\"ext\": \".jpg\", \"url\": \"/uploads/small_20220930_141320_7c202b689a.jpg\", \"hash\": \"small_20220930_141320_7c202b689a\", \"mime\": \"image/jpeg\", \"name\": \"small_20220930_141320.jpg\", \"path\": null, \"size\": 25.05, \"width\": 500, \"height\": 375}, \"medium\": {\"ext\": \".jpg\", \"url\": \"/uploads/medium_20220930_141320_7c202b689a.jpg\", \"hash\": \"medium_20220930_141320_7c202b689a\", \"mime\": \"image/jpeg\", \"name\": \"medium_20220930_141320.jpg\", \"path\": null, \"size\": 50.07, \"width\": 750, \"height\": 563}, \"thumbnail\": {\"ext\": \".jpg\", \"url\": \"/uploads/thumbnail_20220930_141320_7c202b689a.jpg\", \"hash\": \"thumbnail_20220930_141320_7c202b689a\", \"mime\": \"image/jpeg\", \"name\": \"thumbnail_20220930_141320.jpg\", \"path\": null, \"size\": 5.63, \"width\": 208, \"height\": 156}}', '20220930_141320_7c202b689a', '.jpg', 'image/jpeg', '1608.00', '/uploads/20220930_141320_7c202b689a.jpg', NULL, 'local', NULL, '/1', '2022-11-10 19:38:33.675000', '2022-11-10 19:38:33.675000', NULL, NULL),
(45, 'Logo negativo.png', NULL, NULL, 383, 383, '{\"thumbnail\": {\"ext\": \".png\", \"url\": \"/uploads/thumbnail_Logo_negativo_405b49038a.png\", \"hash\": \"thumbnail_Logo_negativo_405b49038a\", \"mime\": \"image/png\", \"name\": \"thumbnail_Logo negativo.png\", \"path\": null, \"size\": 8.11, \"width\": 156, \"height\": 156}}', 'Logo_negativo_405b49038a', '.png', 'image/png', '9.07', '/uploads/Logo_negativo_405b49038a.png', NULL, 'local', NULL, '/1', '2022-11-10 19:41:42.241000', '2022-11-10 19:41:42.241000', NULL, NULL),
(46, 'UNCO_ACT_50_ST_1.jpg', NULL, NULL, 1081, 1921, '{\"large\": {\"ext\": \".jpg\", \"url\": \"/uploads/large_UNCO_ACT_50_ST_1_c077b595a3.jpg\", \"hash\": \"large_UNCO_ACT_50_ST_1_c077b595a3\", \"mime\": \"image/jpeg\", \"name\": \"large_UNCO_ACT_50_ST_1.jpg\", \"path\": null, \"size\": 129.4, \"width\": 563, \"height\": 1000}, \"small\": {\"ext\": \".jpg\", \"url\": \"/uploads/small_UNCO_ACT_50_ST_1_c077b595a3.jpg\", \"hash\": \"small_UNCO_ACT_50_ST_1_c077b595a3\", \"mime\": \"image/jpeg\", \"name\": \"small_UNCO_ACT_50_ST_1.jpg\", \"path\": null, \"size\": 42.85, \"width\": 281, \"height\": 500}, \"medium\": {\"ext\": \".jpg\", \"url\": \"/uploads/medium_UNCO_ACT_50_ST_1_c077b595a3.jpg\", \"hash\": \"medium_UNCO_ACT_50_ST_1_c077b595a3\", \"mime\": \"image/jpeg\", \"name\": \"medium_UNCO_ACT_50_ST_1.jpg\", \"path\": null, \"size\": 83.53, \"width\": 422, \"height\": 750}, \"thumbnail\": {\"ext\": \".jpg\", \"url\": \"/uploads/thumbnail_UNCO_ACT_50_ST_1_c077b595a3.jpg\", \"hash\": \"thumbnail_UNCO_ACT_50_ST_1_c077b595a3\", \"mime\": \"image/jpeg\", \"name\": \"thumbnail_UNCO_ACT_50_ST_1.jpg\", \"path\": null, \"size\": 5.11, \"width\": 88, \"height\": 156}}', 'UNCO_ACT_50_ST_1_c077b595a3', '.jpg', 'image/jpeg', '302.98', '/uploads/UNCO_ACT_50_ST_1_c077b595a3.jpg', NULL, 'local', NULL, '/1', '2022-11-10 19:42:11.664000', '2022-11-10 19:42:11.664000', NULL, NULL),
(53, 'Logo negativo.png', NULL, NULL, 383, 383, '{\"thumbnail\": {\"ext\": \".png\", \"url\": \"/uploads/thumbnail_Logo_negativo_4c1086cd96.png\", \"hash\": \"thumbnail_Logo_negativo_4c1086cd96\", \"mime\": \"image/png\", \"name\": \"thumbnail_Logo negativo.png\", \"path\": null, \"size\": 8.11, \"width\": 156, \"height\": 156}}', 'Logo_negativo_4c1086cd96', '.png', 'image/png', '9.07', '/uploads/Logo_negativo_4c1086cd96.png', NULL, 'local', NULL, '/1', '2022-11-13 17:40:18.503000', '2022-11-13 17:40:18.503000', NULL, NULL),
(54, 'Logo negativo.png', NULL, NULL, 383, 383, '{\"thumbnail\": {\"ext\": \".png\", \"url\": \"/uploads/thumbnail_Logo_negativo_ea64c4f8b9.png\", \"hash\": \"thumbnail_Logo_negativo_ea64c4f8b9\", \"mime\": \"image/png\", \"name\": \"thumbnail_Logo negativo.png\", \"path\": null, \"size\": 8.11, \"width\": 156, \"height\": 156}}', 'Logo_negativo_ea64c4f8b9', '.png', 'image/png', '9.07', '/uploads/Logo_negativo_ea64c4f8b9.png', NULL, 'local', NULL, '/1', '2022-11-13 17:41:14.072000', '2022-11-13 17:41:14.072000', NULL, NULL),
(55, 'Logo negativo.png', NULL, NULL, 383, 383, '{\"thumbnail\": {\"ext\": \".png\", \"url\": \"/uploads/thumbnail_Logo_negativo_23e4c56d53.png\", \"hash\": \"thumbnail_Logo_negativo_23e4c56d53\", \"mime\": \"image/png\", \"name\": \"thumbnail_Logo negativo.png\", \"path\": null, \"size\": 8.11, \"width\": 156, \"height\": 156}}', 'Logo_negativo_23e4c56d53', '.png', 'image/png', '9.07', '/uploads/Logo_negativo_23e4c56d53.png', NULL, 'local', NULL, '/1', '2022-11-13 21:34:31.765000', '2022-11-13 21:34:31.765000', NULL, NULL),
(56, 'Logo negativo.png', NULL, NULL, 383, 383, '{\"thumbnail\": {\"ext\": \".png\", \"url\": \"/uploads/thumbnail_Logo_negativo_ba890a7533.png\", \"hash\": \"thumbnail_Logo_negativo_ba890a7533\", \"mime\": \"image/png\", \"name\": \"thumbnail_Logo negativo.png\", \"path\": null, \"size\": 8.11, \"width\": 156, \"height\": 156}}', 'Logo_negativo_ba890a7533', '.png', 'image/png', '9.07', '/uploads/Logo_negativo_ba890a7533.png', NULL, 'local', NULL, '/1', '2022-11-14 20:40:46.527000', '2022-11-14 20:40:46.527000', NULL, NULL),
(57, 'Logo negativo.png', NULL, NULL, 383, 383, '{\"thumbnail\": {\"ext\": \".png\", \"url\": \"/uploads/thumbnail_Logo_negativo_6b0d48909c.png\", \"hash\": \"thumbnail_Logo_negativo_6b0d48909c\", \"mime\": \"image/png\", \"name\": \"thumbnail_Logo negativo.png\", \"path\": null, \"size\": 8.11, \"width\": 156, \"height\": 156}}', 'Logo_negativo_6b0d48909c', '.png', 'image/png', '9.07', '/uploads/Logo_negativo_6b0d48909c.png', NULL, 'local', NULL, '/1', '2022-11-15 12:20:21.839000', '2022-11-15 12:20:21.839000', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `files_folder_links`
--

CREATE TABLE `files_folder_links` (
  `id` int(10) UNSIGNED NOT NULL,
  `file_id` int(10) UNSIGNED DEFAULT NULL,
  `folder_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `files_folder_links`
--

INSERT INTO `files_folder_links` (`id`, `file_id`, `folder_id`) VALUES
(40, 41, 1),
(41, 42, 1),
(42, 43, 1),
(44, 45, 1),
(45, 46, 1),
(53, 53, 1),
(54, 54, 1),
(55, 55, 1),
(56, 56, 1),
(57, 57, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `files_related_morphs`
--

CREATE TABLE `files_related_morphs` (
  `id` int(10) UNSIGNED NOT NULL,
  `file_id` int(10) UNSIGNED DEFAULT NULL,
  `related_id` int(10) UNSIGNED DEFAULT NULL,
  `related_type` varchar(255) DEFAULT NULL,
  `field` varchar(255) DEFAULT NULL,
  `order` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `files_related_morphs`
--

INSERT INTO `files_related_morphs` (`id`, `file_id`, `related_id`, `related_type`, `field`, `order`) VALUES
(16, 1, 59, 'plugin::users-permissions.user', 'profile_pic', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `i18n_locale`
--

CREATE TABLE `i18n_locale` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `created_by_id` int(10) UNSIGNED DEFAULT NULL,
  `updated_by_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `i18n_locale`
--

INSERT INTO `i18n_locale` (`id`, `name`, `code`, `created_at`, `updated_at`, `created_by_id`, `updated_by_id`) VALUES
(1, 'English (en)', 'en', '2022-10-13 22:58:15.155000', '2022-10-13 22:58:15.155000', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lenders`
--

CREATE TABLE `lenders` (
  `id` int(10) UNSIGNED NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `published_at` datetime(6) DEFAULT NULL,
  `created_by_id` int(10) UNSIGNED DEFAULT NULL,
  `updated_by_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lenders_service_links`
--

CREATE TABLE `lenders_service_links` (
  `id` int(10) UNSIGNED NOT NULL,
  `lender_id` int(10) UNSIGNED DEFAULT NULL,
  `service_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `provinces`
--

CREATE TABLE `provinces` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `published_at` datetime(6) DEFAULT NULL,
  `created_by_id` int(10) UNSIGNED DEFAULT NULL,
  `updated_by_id` int(10) UNSIGNED DEFAULT NULL,
  `identificador` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `provinces`
--

INSERT INTO `provinces` (`id`, `name`, `created_at`, `updated_at`, `published_at`, `created_by_id`, `updated_by_id`, `identificador`, `slug`) VALUES
(4, 'Río Negro', '2022-10-31 20:33:14.756000', '2022-11-04 23:44:11.363000', '2022-10-31 20:33:14.751000', NULL, 1, '62', 'rio-negro'),
(10, 'Misiones', '2022-11-01 19:15:45.363000', '2022-11-04 23:44:20.159000', '2022-11-01 19:15:45.359000', NULL, 1, '54', 'misiones'),
(13, 'San Luis', '2022-11-05 16:04:24.863000', '2022-11-05 16:04:24.863000', '2022-11-05 16:04:24.858000', NULL, NULL, '74', 'san-luis'),
(16, 'Chubut', '2022-11-05 16:39:10.032000', '2022-11-05 16:39:10.032000', '2022-11-05 16:39:10.028000', NULL, NULL, '26', 'chubut'),
(17, 'La Rioja', '2022-11-05 16:40:47.268000', '2022-11-05 16:40:47.268000', '2022-11-05 16:40:47.263000', NULL, NULL, '46', 'la-rioja'),
(18, 'Catamarca', '2022-11-05 16:41:43.105000', '2022-11-05 16:41:43.105000', '2022-11-05 16:41:43.101000', NULL, NULL, '10', 'catamarca'),
(19, 'La Pampa', '2022-11-09 18:48:32.799000', '2022-11-09 18:48:32.799000', '2022-11-09 18:48:32.795000', NULL, NULL, '42', 'la-pampa'),
(20, 'Tierra del Fuego, Antártida e Islas del Atlántico Sur', '2022-11-10 21:23:41.371000', '2022-11-10 21:23:41.371000', '2022-11-10 21:23:41.366000', NULL, NULL, '94', 'tierra-del-fuego-antartida-e-islas-del-atlantico-sur');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reviews`
--

CREATE TABLE `reviews` (
  `id` int(10) UNSIGNED NOT NULL,
  `rating` int(11) DEFAULT NULL,
  `comment` longtext,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `published_at` datetime(6) DEFAULT NULL,
  `created_by_id` int(10) UNSIGNED DEFAULT NULL,
  `updated_by_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reviews_lender_links`
--

CREATE TABLE `reviews_lender_links` (
  `id` int(10) UNSIGNED NOT NULL,
  `review_id` int(10) UNSIGNED DEFAULT NULL,
  `lender_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reviews_service_links`
--

CREATE TABLE `reviews_service_links` (
  `id` int(10) UNSIGNED NOT NULL,
  `review_id` int(10) UNSIGNED DEFAULT NULL,
  `service_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reviews_users_review_creator_links`
--

CREATE TABLE `reviews_users_review_creator_links` (
  `id` int(10) UNSIGNED NOT NULL,
  `review_id` int(10) UNSIGNED DEFAULT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `services`
--

CREATE TABLE `services` (
  `id` int(10) UNSIGNED NOT NULL,
  `price` int(11) DEFAULT NULL,
  `finished_at` date DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `published_at` datetime(6) DEFAULT NULL,
  `created_by_id` int(10) UNSIGNED DEFAULT NULL,
  `updated_by_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `services_category_links`
--

CREATE TABLE `services_category_links` (
  `id` int(10) UNSIGNED NOT NULL,
  `service_id` int(10) UNSIGNED DEFAULT NULL,
  `category_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `services_lender_links`
--

CREATE TABLE `services_lender_links` (
  `id` int(10) UNSIGNED NOT NULL,
  `service_id` int(10) UNSIGNED DEFAULT NULL,
  `lender_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `services_review_links`
--

CREATE TABLE `services_review_links` (
  `id` int(10) UNSIGNED NOT NULL,
  `service_id` int(10) UNSIGNED DEFAULT NULL,
  `review_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `services_users_recruiter_links`
--

CREATE TABLE `services_users_recruiter_links` (
  `id` int(10) UNSIGNED NOT NULL,
  `service_id` int(10) UNSIGNED DEFAULT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `strapi_api_tokens`
--

CREATE TABLE `strapi_api_tokens` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `access_key` varchar(255) DEFAULT NULL,
  `last_used_at` datetime(6) DEFAULT NULL,
  `expires_at` datetime(6) DEFAULT NULL,
  `lifespan` int(11) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `created_by_id` int(10) UNSIGNED DEFAULT NULL,
  `updated_by_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `strapi_api_token_permissions`
--

CREATE TABLE `strapi_api_token_permissions` (
  `id` int(10) UNSIGNED NOT NULL,
  `action` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `created_by_id` int(10) UNSIGNED DEFAULT NULL,
  `updated_by_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `strapi_api_token_permissions_token_links`
--

CREATE TABLE `strapi_api_token_permissions_token_links` (
  `id` int(10) UNSIGNED NOT NULL,
  `api_token_permission_id` int(10) UNSIGNED DEFAULT NULL,
  `api_token_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `strapi_core_store_settings`
--

CREATE TABLE `strapi_core_store_settings` (
  `id` int(10) UNSIGNED NOT NULL,
  `key` varchar(255) DEFAULT NULL,
  `value` longtext,
  `type` varchar(255) DEFAULT NULL,
  `environment` varchar(255) DEFAULT NULL,
  `tag` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `strapi_core_store_settings`
--

INSERT INTO `strapi_core_store_settings` (`id`, `key`, `value`, `type`, `environment`, `tag`) VALUES
(1, 'strapi_content_types_schema', '{\"admin::permission\":{\"collectionName\":\"admin_permissions\",\"info\":{\"name\":\"Permission\",\"description\":\"\",\"singularName\":\"permission\",\"pluralName\":\"permissions\",\"displayName\":\"Permission\"},\"options\":{},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"action\":{\"type\":\"string\",\"minLength\":1,\"configurable\":false,\"required\":true},\"subject\":{\"type\":\"string\",\"minLength\":1,\"configurable\":false,\"required\":false},\"properties\":{\"type\":\"json\",\"configurable\":false,\"required\":false,\"default\":{}},\"conditions\":{\"type\":\"json\",\"configurable\":false,\"required\":false,\"default\":[]},\"role\":{\"configurable\":false,\"type\":\"relation\",\"relation\":\"manyToOne\",\"inversedBy\":\"permissions\",\"target\":\"admin::role\"},\"createdAt\":{\"type\":\"datetime\"},\"updatedAt\":{\"type\":\"datetime\"},\"createdBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true},\"updatedBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true}},\"kind\":\"collectionType\",\"__schema__\":{\"collectionName\":\"admin_permissions\",\"info\":{\"name\":\"Permission\",\"description\":\"\",\"singularName\":\"permission\",\"pluralName\":\"permissions\",\"displayName\":\"Permission\"},\"options\":{},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"action\":{\"type\":\"string\",\"minLength\":1,\"configurable\":false,\"required\":true},\"subject\":{\"type\":\"string\",\"minLength\":1,\"configurable\":false,\"required\":false},\"properties\":{\"type\":\"json\",\"configurable\":false,\"required\":false,\"default\":{}},\"conditions\":{\"type\":\"json\",\"configurable\":false,\"required\":false,\"default\":[]},\"role\":{\"configurable\":false,\"type\":\"relation\",\"relation\":\"manyToOne\",\"inversedBy\":\"permissions\",\"target\":\"admin::role\"}},\"kind\":\"collectionType\"},\"modelType\":\"contentType\",\"modelName\":\"permission\",\"connection\":\"default\",\"uid\":\"admin::permission\",\"plugin\":\"admin\",\"globalId\":\"AdminPermission\"},\"admin::user\":{\"collectionName\":\"admin_users\",\"info\":{\"name\":\"User\",\"description\":\"\",\"singularName\":\"user\",\"pluralName\":\"users\",\"displayName\":\"User\"},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"firstname\":{\"type\":\"string\",\"unique\":false,\"minLength\":1,\"configurable\":false,\"required\":false},\"lastname\":{\"type\":\"string\",\"unique\":false,\"minLength\":1,\"configurable\":false,\"required\":false},\"username\":{\"type\":\"string\",\"unique\":false,\"configurable\":false,\"required\":false},\"email\":{\"type\":\"email\",\"minLength\":6,\"configurable\":false,\"required\":true,\"unique\":true,\"private\":true},\"password\":{\"type\":\"password\",\"minLength\":6,\"configurable\":false,\"required\":false,\"private\":true},\"resetPasswordToken\":{\"type\":\"string\",\"configurable\":false,\"private\":true},\"registrationToken\":{\"type\":\"string\",\"configurable\":false,\"private\":true},\"isActive\":{\"type\":\"boolean\",\"default\":false,\"configurable\":false,\"private\":true},\"roles\":{\"configurable\":false,\"private\":true,\"type\":\"relation\",\"relation\":\"manyToMany\",\"inversedBy\":\"users\",\"target\":\"admin::role\",\"collectionName\":\"strapi_users_roles\"},\"blocked\":{\"type\":\"boolean\",\"default\":false,\"configurable\":false,\"private\":true},\"preferedLanguage\":{\"type\":\"string\",\"configurable\":false,\"required\":false},\"createdAt\":{\"type\":\"datetime\"},\"updatedAt\":{\"type\":\"datetime\"},\"createdBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true},\"updatedBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true}},\"kind\":\"collectionType\",\"__schema__\":{\"collectionName\":\"admin_users\",\"info\":{\"name\":\"User\",\"description\":\"\",\"singularName\":\"user\",\"pluralName\":\"users\",\"displayName\":\"User\"},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"firstname\":{\"type\":\"string\",\"unique\":false,\"minLength\":1,\"configurable\":false,\"required\":false},\"lastname\":{\"type\":\"string\",\"unique\":false,\"minLength\":1,\"configurable\":false,\"required\":false},\"username\":{\"type\":\"string\",\"unique\":false,\"configurable\":false,\"required\":false},\"email\":{\"type\":\"email\",\"minLength\":6,\"configurable\":false,\"required\":true,\"unique\":true,\"private\":true},\"password\":{\"type\":\"password\",\"minLength\":6,\"configurable\":false,\"required\":false,\"private\":true},\"resetPasswordToken\":{\"type\":\"string\",\"configurable\":false,\"private\":true},\"registrationToken\":{\"type\":\"string\",\"configurable\":false,\"private\":true},\"isActive\":{\"type\":\"boolean\",\"default\":false,\"configurable\":false,\"private\":true},\"roles\":{\"configurable\":false,\"private\":true,\"type\":\"relation\",\"relation\":\"manyToMany\",\"inversedBy\":\"users\",\"target\":\"admin::role\",\"collectionName\":\"strapi_users_roles\"},\"blocked\":{\"type\":\"boolean\",\"default\":false,\"configurable\":false,\"private\":true},\"preferedLanguage\":{\"type\":\"string\",\"configurable\":false,\"required\":false}},\"kind\":\"collectionType\"},\"modelType\":\"contentType\",\"modelName\":\"user\",\"connection\":\"default\",\"uid\":\"admin::user\",\"plugin\":\"admin\",\"globalId\":\"AdminUser\"},\"admin::role\":{\"collectionName\":\"admin_roles\",\"info\":{\"name\":\"Role\",\"description\":\"\",\"singularName\":\"role\",\"pluralName\":\"roles\",\"displayName\":\"Role\"},\"options\":{},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"name\":{\"type\":\"string\",\"minLength\":1,\"unique\":true,\"configurable\":false,\"required\":true},\"code\":{\"type\":\"string\",\"minLength\":1,\"unique\":true,\"configurable\":false,\"required\":true},\"description\":{\"type\":\"string\",\"configurable\":false},\"users\":{\"configurable\":false,\"type\":\"relation\",\"relation\":\"manyToMany\",\"mappedBy\":\"roles\",\"target\":\"admin::user\"},\"permissions\":{\"configurable\":false,\"type\":\"relation\",\"relation\":\"oneToMany\",\"mappedBy\":\"role\",\"target\":\"admin::permission\"},\"createdAt\":{\"type\":\"datetime\"},\"updatedAt\":{\"type\":\"datetime\"},\"createdBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true},\"updatedBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true}},\"kind\":\"collectionType\",\"__schema__\":{\"collectionName\":\"admin_roles\",\"info\":{\"name\":\"Role\",\"description\":\"\",\"singularName\":\"role\",\"pluralName\":\"roles\",\"displayName\":\"Role\"},\"options\":{},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"name\":{\"type\":\"string\",\"minLength\":1,\"unique\":true,\"configurable\":false,\"required\":true},\"code\":{\"type\":\"string\",\"minLength\":1,\"unique\":true,\"configurable\":false,\"required\":true},\"description\":{\"type\":\"string\",\"configurable\":false},\"users\":{\"configurable\":false,\"type\":\"relation\",\"relation\":\"manyToMany\",\"mappedBy\":\"roles\",\"target\":\"admin::user\"},\"permissions\":{\"configurable\":false,\"type\":\"relation\",\"relation\":\"oneToMany\",\"mappedBy\":\"role\",\"target\":\"admin::permission\"}},\"kind\":\"collectionType\"},\"modelType\":\"contentType\",\"modelName\":\"role\",\"connection\":\"default\",\"uid\":\"admin::role\",\"plugin\":\"admin\",\"globalId\":\"AdminRole\"},\"admin::api-token\":{\"collectionName\":\"strapi_api_tokens\",\"info\":{\"name\":\"Api Token\",\"singularName\":\"api-token\",\"pluralName\":\"api-tokens\",\"displayName\":\"Api Token\",\"description\":\"\"},\"options\":{},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"name\":{\"type\":\"string\",\"minLength\":1,\"configurable\":false,\"required\":true,\"unique\":true},\"description\":{\"type\":\"string\",\"minLength\":1,\"configurable\":false,\"required\":false,\"default\":\"\"},\"type\":{\"type\":\"enumeration\",\"enum\":[\"read-only\",\"full-access\",\"custom\"],\"configurable\":false,\"required\":true,\"default\":\"read-only\"},\"accessKey\":{\"type\":\"string\",\"minLength\":1,\"configurable\":false,\"required\":true},\"lastUsedAt\":{\"type\":\"datetime\",\"configurable\":false,\"required\":false},\"permissions\":{\"type\":\"relation\",\"target\":\"admin::api-token-permission\",\"relation\":\"oneToMany\",\"mappedBy\":\"token\",\"configurable\":false,\"required\":false},\"expiresAt\":{\"type\":\"datetime\",\"configurable\":false,\"required\":false},\"lifespan\":{\"type\":\"integer\",\"configurable\":false,\"required\":false},\"createdAt\":{\"type\":\"datetime\"},\"updatedAt\":{\"type\":\"datetime\"},\"createdBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true},\"updatedBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true}},\"kind\":\"collectionType\",\"__schema__\":{\"collectionName\":\"strapi_api_tokens\",\"info\":{\"name\":\"Api Token\",\"singularName\":\"api-token\",\"pluralName\":\"api-tokens\",\"displayName\":\"Api Token\",\"description\":\"\"},\"options\":{},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"name\":{\"type\":\"string\",\"minLength\":1,\"configurable\":false,\"required\":true,\"unique\":true},\"description\":{\"type\":\"string\",\"minLength\":1,\"configurable\":false,\"required\":false,\"default\":\"\"},\"type\":{\"type\":\"enumeration\",\"enum\":[\"read-only\",\"full-access\",\"custom\"],\"configurable\":false,\"required\":true,\"default\":\"read-only\"},\"accessKey\":{\"type\":\"string\",\"minLength\":1,\"configurable\":false,\"required\":true},\"lastUsedAt\":{\"type\":\"datetime\",\"configurable\":false,\"required\":false},\"permissions\":{\"type\":\"relation\",\"target\":\"admin::api-token-permission\",\"relation\":\"oneToMany\",\"mappedBy\":\"token\",\"configurable\":false,\"required\":false},\"expiresAt\":{\"type\":\"datetime\",\"configurable\":false,\"required\":false},\"lifespan\":{\"type\":\"integer\",\"configurable\":false,\"required\":false}},\"kind\":\"collectionType\"},\"modelType\":\"contentType\",\"modelName\":\"api-token\",\"connection\":\"default\",\"uid\":\"admin::api-token\",\"plugin\":\"admin\",\"globalId\":\"AdminApiToken\"},\"admin::api-token-permission\":{\"collectionName\":\"strapi_api_token_permissions\",\"info\":{\"name\":\"API Token Permission\",\"description\":\"\",\"singularName\":\"api-token-permission\",\"pluralName\":\"api-token-permissions\",\"displayName\":\"API Token Permission\"},\"options\":{},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"action\":{\"type\":\"string\",\"minLength\":1,\"configurable\":false,\"required\":true},\"token\":{\"configurable\":false,\"type\":\"relation\",\"relation\":\"manyToOne\",\"inversedBy\":\"permissions\",\"target\":\"admin::api-token\"},\"createdAt\":{\"type\":\"datetime\"},\"updatedAt\":{\"type\":\"datetime\"},\"createdBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true},\"updatedBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true}},\"kind\":\"collectionType\",\"__schema__\":{\"collectionName\":\"strapi_api_token_permissions\",\"info\":{\"name\":\"API Token Permission\",\"description\":\"\",\"singularName\":\"api-token-permission\",\"pluralName\":\"api-token-permissions\",\"displayName\":\"API Token Permission\"},\"options\":{},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"action\":{\"type\":\"string\",\"minLength\":1,\"configurable\":false,\"required\":true},\"token\":{\"configurable\":false,\"type\":\"relation\",\"relation\":\"manyToOne\",\"inversedBy\":\"permissions\",\"target\":\"admin::api-token\"}},\"kind\":\"collectionType\"},\"modelType\":\"contentType\",\"modelName\":\"api-token-permission\",\"connection\":\"default\",\"uid\":\"admin::api-token-permission\",\"plugin\":\"admin\",\"globalId\":\"AdminApiTokenPermission\"},\"plugin::upload.file\":{\"collectionName\":\"files\",\"info\":{\"singularName\":\"file\",\"pluralName\":\"files\",\"displayName\":\"File\",\"description\":\"\"},\"options\":{},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"name\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"alternativeText\":{\"type\":\"string\",\"configurable\":false},\"caption\":{\"type\":\"string\",\"configurable\":false},\"width\":{\"type\":\"integer\",\"configurable\":false},\"height\":{\"type\":\"integer\",\"configurable\":false},\"formats\":{\"type\":\"json\",\"configurable\":false},\"hash\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"ext\":{\"type\":\"string\",\"configurable\":false},\"mime\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"size\":{\"type\":\"decimal\",\"configurable\":false,\"required\":true},\"url\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"previewUrl\":{\"type\":\"string\",\"configurable\":false},\"provider\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"provider_metadata\":{\"type\":\"json\",\"configurable\":false},\"related\":{\"type\":\"relation\",\"relation\":\"morphToMany\",\"configurable\":false},\"folder\":{\"type\":\"relation\",\"relation\":\"manyToOne\",\"target\":\"plugin::upload.folder\",\"inversedBy\":\"files\",\"private\":true},\"folderPath\":{\"type\":\"string\",\"min\":1,\"required\":true,\"private\":true},\"createdAt\":{\"type\":\"datetime\"},\"updatedAt\":{\"type\":\"datetime\"},\"createdBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true},\"updatedBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true}},\"indexes\":[{\"name\":\"upload_files_folder_path_index\",\"columns\":[\"folder_path\"],\"type\":null}],\"kind\":\"collectionType\",\"__schema__\":{\"collectionName\":\"files\",\"info\":{\"singularName\":\"file\",\"pluralName\":\"files\",\"displayName\":\"File\",\"description\":\"\"},\"options\":{},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"name\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"alternativeText\":{\"type\":\"string\",\"configurable\":false},\"caption\":{\"type\":\"string\",\"configurable\":false},\"width\":{\"type\":\"integer\",\"configurable\":false},\"height\":{\"type\":\"integer\",\"configurable\":false},\"formats\":{\"type\":\"json\",\"configurable\":false},\"hash\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"ext\":{\"type\":\"string\",\"configurable\":false},\"mime\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"size\":{\"type\":\"decimal\",\"configurable\":false,\"required\":true},\"url\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"previewUrl\":{\"type\":\"string\",\"configurable\":false},\"provider\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"provider_metadata\":{\"type\":\"json\",\"configurable\":false},\"related\":{\"type\":\"relation\",\"relation\":\"morphToMany\",\"configurable\":false},\"folder\":{\"type\":\"relation\",\"relation\":\"manyToOne\",\"target\":\"plugin::upload.folder\",\"inversedBy\":\"files\",\"private\":true},\"folderPath\":{\"type\":\"string\",\"min\":1,\"required\":true,\"private\":true}},\"kind\":\"collectionType\"},\"modelType\":\"contentType\",\"modelName\":\"file\",\"connection\":\"default\",\"uid\":\"plugin::upload.file\",\"plugin\":\"upload\",\"globalId\":\"UploadFile\"},\"plugin::upload.folder\":{\"collectionName\":\"upload_folders\",\"info\":{\"singularName\":\"folder\",\"pluralName\":\"folders\",\"displayName\":\"Folder\"},\"options\":{},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"name\":{\"type\":\"string\",\"min\":1,\"required\":true},\"pathId\":{\"type\":\"integer\",\"unique\":true,\"required\":true},\"parent\":{\"type\":\"relation\",\"relation\":\"manyToOne\",\"target\":\"plugin::upload.folder\",\"inversedBy\":\"children\"},\"children\":{\"type\":\"relation\",\"relation\":\"oneToMany\",\"target\":\"plugin::upload.folder\",\"mappedBy\":\"parent\"},\"files\":{\"type\":\"relation\",\"relation\":\"oneToMany\",\"target\":\"plugin::upload.file\",\"mappedBy\":\"folder\"},\"path\":{\"type\":\"string\",\"min\":1,\"required\":true},\"createdAt\":{\"type\":\"datetime\"},\"updatedAt\":{\"type\":\"datetime\"},\"createdBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true},\"updatedBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true}},\"indexes\":[{\"name\":\"upload_folders_path_id_index\",\"columns\":[\"path_id\"],\"type\":\"unique\"},{\"name\":\"upload_folders_path_index\",\"columns\":[\"path\"],\"type\":\"unique\"}],\"kind\":\"collectionType\",\"__schema__\":{\"collectionName\":\"upload_folders\",\"info\":{\"singularName\":\"folder\",\"pluralName\":\"folders\",\"displayName\":\"Folder\"},\"options\":{},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"name\":{\"type\":\"string\",\"min\":1,\"required\":true},\"pathId\":{\"type\":\"integer\",\"unique\":true,\"required\":true},\"parent\":{\"type\":\"relation\",\"relation\":\"manyToOne\",\"target\":\"plugin::upload.folder\",\"inversedBy\":\"children\"},\"children\":{\"type\":\"relation\",\"relation\":\"oneToMany\",\"target\":\"plugin::upload.folder\",\"mappedBy\":\"parent\"},\"files\":{\"type\":\"relation\",\"relation\":\"oneToMany\",\"target\":\"plugin::upload.file\",\"mappedBy\":\"folder\"},\"path\":{\"type\":\"string\",\"min\":1,\"required\":true}},\"kind\":\"collectionType\"},\"modelType\":\"contentType\",\"modelName\":\"folder\",\"connection\":\"default\",\"uid\":\"plugin::upload.folder\",\"plugin\":\"upload\",\"globalId\":\"UploadFolder\"},\"plugin::users-permissions.permission\":{\"collectionName\":\"up_permissions\",\"info\":{\"name\":\"permission\",\"description\":\"\",\"singularName\":\"permission\",\"pluralName\":\"permissions\",\"displayName\":\"Permission\"},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"action\":{\"type\":\"string\",\"required\":true,\"configurable\":false},\"role\":{\"type\":\"relation\",\"relation\":\"manyToOne\",\"target\":\"plugin::users-permissions.role\",\"inversedBy\":\"permissions\",\"configurable\":false},\"createdAt\":{\"type\":\"datetime\"},\"updatedAt\":{\"type\":\"datetime\"},\"createdBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true},\"updatedBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true}},\"kind\":\"collectionType\",\"__schema__\":{\"collectionName\":\"up_permissions\",\"info\":{\"name\":\"permission\",\"description\":\"\",\"singularName\":\"permission\",\"pluralName\":\"permissions\",\"displayName\":\"Permission\"},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"action\":{\"type\":\"string\",\"required\":true,\"configurable\":false},\"role\":{\"type\":\"relation\",\"relation\":\"manyToOne\",\"target\":\"plugin::users-permissions.role\",\"inversedBy\":\"permissions\",\"configurable\":false}},\"kind\":\"collectionType\"},\"modelType\":\"contentType\",\"modelName\":\"permission\",\"connection\":\"default\",\"uid\":\"plugin::users-permissions.permission\",\"plugin\":\"users-permissions\",\"globalId\":\"UsersPermissionsPermission\"},\"plugin::users-permissions.role\":{\"collectionName\":\"up_roles\",\"info\":{\"name\":\"role\",\"description\":\"\",\"singularName\":\"role\",\"pluralName\":\"roles\",\"displayName\":\"Role\"},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"name\":{\"type\":\"string\",\"minLength\":3,\"required\":true,\"configurable\":false},\"description\":{\"type\":\"string\",\"configurable\":false},\"type\":{\"type\":\"string\",\"unique\":true,\"configurable\":false},\"permissions\":{\"type\":\"relation\",\"relation\":\"oneToMany\",\"target\":\"plugin::users-permissions.permission\",\"mappedBy\":\"role\",\"configurable\":false},\"users\":{\"type\":\"relation\",\"relation\":\"oneToMany\",\"target\":\"plugin::users-permissions.user\",\"mappedBy\":\"role\",\"configurable\":false},\"createdAt\":{\"type\":\"datetime\"},\"updatedAt\":{\"type\":\"datetime\"},\"createdBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true},\"updatedBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true}},\"kind\":\"collectionType\",\"__schema__\":{\"collectionName\":\"up_roles\",\"info\":{\"name\":\"role\",\"description\":\"\",\"singularName\":\"role\",\"pluralName\":\"roles\",\"displayName\":\"Role\"},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"name\":{\"type\":\"string\",\"minLength\":3,\"required\":true,\"configurable\":false},\"description\":{\"type\":\"string\",\"configurable\":false},\"type\":{\"type\":\"string\",\"unique\":true,\"configurable\":false},\"permissions\":{\"type\":\"relation\",\"relation\":\"oneToMany\",\"target\":\"plugin::users-permissions.permission\",\"mappedBy\":\"role\",\"configurable\":false},\"users\":{\"type\":\"relation\",\"relation\":\"oneToMany\",\"target\":\"plugin::users-permissions.user\",\"mappedBy\":\"role\",\"configurable\":false}},\"kind\":\"collectionType\"},\"modelType\":\"contentType\",\"modelName\":\"role\",\"connection\":\"default\",\"uid\":\"plugin::users-permissions.role\",\"plugin\":\"users-permissions\",\"globalId\":\"UsersPermissionsRole\"},\"plugin::users-permissions.user\":{\"collectionName\":\"up_users\",\"info\":{\"name\":\"user\",\"description\":\"\",\"singularName\":\"user\",\"pluralName\":\"users\",\"displayName\":\"User\"},\"options\":{\"draftAndPublish\":false,\"timestamps\":true},\"attributes\":{\"username\":{\"type\":\"string\",\"minLength\":3,\"unique\":true,\"configurable\":false,\"required\":true},\"email\":{\"type\":\"email\",\"minLength\":6,\"configurable\":false,\"required\":true},\"provider\":{\"type\":\"string\",\"configurable\":false},\"password\":{\"type\":\"password\",\"minLength\":6,\"configurable\":false,\"private\":true},\"resetPasswordToken\":{\"type\":\"string\",\"configurable\":false,\"private\":true},\"confirmationToken\":{\"type\":\"string\",\"configurable\":false,\"private\":true},\"confirmed\":{\"type\":\"boolean\",\"default\":false,\"configurable\":false},\"blocked\":{\"type\":\"boolean\",\"default\":false,\"configurable\":false},\"role\":{\"type\":\"relation\",\"relation\":\"manyToOne\",\"target\":\"plugin::users-permissions.role\",\"inversedBy\":\"users\",\"configurable\":false},\"categories\":{\"type\":\"relation\",\"relation\":\"oneToMany\",\"target\":\"api::category.category\"},\"service_recruiter\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"api::service.service\",\"mappedBy\":\"users_recruiter\"},\"lender\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"api::lender.lender\",\"inversedBy\":\"users_lender\"},\"reviews\":{\"type\":\"relation\",\"relation\":\"oneToMany\",\"target\":\"api::review.review\",\"mappedBy\":\"users_review_creator\"},\"phone\":{\"type\":\"biginteger\"},\"is_lender\":{\"type\":\"boolean\"},\"aboutme\":{\"type\":\"richtext\"},\"birth\":{\"type\":\"date\"},\"provincia\":{\"type\":\"relation\",\"relation\":\"manyToOne\",\"target\":\"api::province.province\",\"inversedBy\":\"users\"},\"localidad\":{\"type\":\"relation\",\"relation\":\"manyToOne\",\"target\":\"api::city.city\",\"inversedBy\":\"users\"},\"name\":{\"type\":\"string\",\"required\":true},\"Slug\":{\"type\":\"uid\",\"targetField\":\"name\"},\"profile_pic\":{\"type\":\"media\",\"multiple\":false,\"required\":false,\"allowedTypes\":[\"images\"]},\"firstName\":{\"type\":\"string\"},\"lastName\":{\"type\":\"string\"},\"createdAt\":{\"type\":\"datetime\"},\"updatedAt\":{\"type\":\"datetime\"},\"createdBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true},\"updatedBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true}},\"config\":{\"attributes\":{\"resetPasswordToken\":{\"hidden\":true},\"confirmationToken\":{\"hidden\":true},\"provider\":{\"hidden\":true}}},\"kind\":\"collectionType\",\"__filename__\":\"schema.json\",\"__schema__\":{\"collectionName\":\"up_users\",\"info\":{\"name\":\"user\",\"description\":\"\",\"singularName\":\"user\",\"pluralName\":\"users\",\"displayName\":\"User\"},\"options\":{\"draftAndPublish\":false,\"timestamps\":true},\"attributes\":{\"username\":{\"type\":\"string\",\"minLength\":3,\"unique\":true,\"configurable\":false,\"required\":true},\"email\":{\"type\":\"email\",\"minLength\":6,\"configurable\":false,\"required\":true},\"provider\":{\"type\":\"string\",\"configurable\":false},\"password\":{\"type\":\"password\",\"minLength\":6,\"configurable\":false,\"private\":true},\"resetPasswordToken\":{\"type\":\"string\",\"configurable\":false,\"private\":true},\"confirmationToken\":{\"type\":\"string\",\"configurable\":false,\"private\":true},\"confirmed\":{\"type\":\"boolean\",\"default\":false,\"configurable\":false},\"blocked\":{\"type\":\"boolean\",\"default\":false,\"configurable\":false},\"role\":{\"type\":\"relation\",\"relation\":\"manyToOne\",\"target\":\"plugin::users-permissions.role\",\"inversedBy\":\"users\",\"configurable\":false},\"categories\":{\"type\":\"relation\",\"relation\":\"oneToMany\",\"target\":\"api::category.category\"},\"service_recruiter\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"api::service.service\",\"mappedBy\":\"users_recruiter\"},\"lender\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"api::lender.lender\",\"inversedBy\":\"users_lender\"},\"reviews\":{\"type\":\"relation\",\"relation\":\"oneToMany\",\"target\":\"api::review.review\",\"mappedBy\":\"users_review_creator\"},\"phone\":{\"type\":\"biginteger\"},\"is_lender\":{\"type\":\"boolean\"},\"aboutme\":{\"type\":\"richtext\"},\"birth\":{\"type\":\"date\"},\"provincia\":{\"type\":\"relation\",\"relation\":\"manyToOne\",\"target\":\"api::province.province\",\"inversedBy\":\"users\"},\"localidad\":{\"type\":\"relation\",\"relation\":\"manyToOne\",\"target\":\"api::city.city\",\"inversedBy\":\"users\"},\"name\":{\"type\":\"string\",\"required\":true},\"Slug\":{\"type\":\"uid\",\"targetField\":\"name\"},\"profile_pic\":{\"type\":\"media\",\"multiple\":false,\"required\":false,\"allowedTypes\":[\"images\"]},\"firstName\":{\"type\":\"string\"},\"lastName\":{\"type\":\"string\"}},\"kind\":\"collectionType\"},\"modelType\":\"contentType\",\"modelName\":\"user\",\"connection\":\"default\",\"uid\":\"plugin::users-permissions.user\",\"plugin\":\"users-permissions\",\"globalId\":\"UsersPermissionsUser\"},\"plugin::i18n.locale\":{\"info\":{\"singularName\":\"locale\",\"pluralName\":\"locales\",\"collectionName\":\"locales\",\"displayName\":\"Locale\",\"description\":\"\"},\"options\":{\"draftAndPublish\":false},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"name\":{\"type\":\"string\",\"min\":1,\"max\":50,\"configurable\":false},\"code\":{\"type\":\"string\",\"unique\":true,\"configurable\":false},\"createdAt\":{\"type\":\"datetime\"},\"updatedAt\":{\"type\":\"datetime\"},\"createdBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true},\"updatedBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true}},\"kind\":\"collectionType\",\"__schema__\":{\"info\":{\"singularName\":\"locale\",\"pluralName\":\"locales\",\"collectionName\":\"locales\",\"displayName\":\"Locale\",\"description\":\"\"},\"options\":{\"draftAndPublish\":false},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"name\":{\"type\":\"string\",\"min\":1,\"max\":50,\"configurable\":false},\"code\":{\"type\":\"string\",\"unique\":true,\"configurable\":false}},\"kind\":\"collectionType\"},\"modelType\":\"contentType\",\"modelName\":\"locale\",\"connection\":\"default\",\"uid\":\"plugin::i18n.locale\",\"plugin\":\"i18n\",\"collectionName\":\"i18n_locale\",\"globalId\":\"I18NLocale\"},\"api::category.category\":{\"kind\":\"collectionType\",\"collectionName\":\"categories\",\"info\":{\"singularName\":\"category\",\"pluralName\":\"categories\",\"displayName\":\"category\",\"description\":\"\"},\"options\":{\"draftAndPublish\":true},\"pluginOptions\":{},\"attributes\":{\"name\":{\"type\":\"string\"},\"state\":{\"type\":\"boolean\"},\"city\":{\"type\":\"relation\",\"relation\":\"manyToOne\",\"target\":\"api::city.city\",\"inversedBy\":\"categories\"},\"services\":{\"type\":\"relation\",\"relation\":\"oneToMany\",\"target\":\"api::service.service\",\"mappedBy\":\"category\"},\"lender\":{\"type\":\"relation\",\"relation\":\"manyToOne\",\"target\":\"api::lender.lender\",\"inversedBy\":\"categories\"},\"provinces\":{\"type\":\"relation\",\"relation\":\"manyToMany\",\"target\":\"api::province.province\",\"inversedBy\":\"categories\"},\"Slug\":{\"type\":\"uid\",\"targetField\":\"name\",\"required\":true},\"createdAt\":{\"type\":\"datetime\"},\"updatedAt\":{\"type\":\"datetime\"},\"publishedAt\":{\"type\":\"datetime\",\"configurable\":false,\"writable\":true,\"visible\":false},\"createdBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true},\"updatedBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true}},\"__schema__\":{\"collectionName\":\"categories\",\"info\":{\"singularName\":\"category\",\"pluralName\":\"categories\",\"displayName\":\"category\",\"description\":\"\"},\"options\":{\"draftAndPublish\":true},\"pluginOptions\":{},\"attributes\":{\"name\":{\"type\":\"string\"},\"state\":{\"type\":\"boolean\"},\"city\":{\"type\":\"relation\",\"relation\":\"manyToOne\",\"target\":\"api::city.city\",\"inversedBy\":\"categories\"},\"services\":{\"type\":\"relation\",\"relation\":\"oneToMany\",\"target\":\"api::service.service\",\"mappedBy\":\"category\"},\"lender\":{\"type\":\"relation\",\"relation\":\"manyToOne\",\"target\":\"api::lender.lender\",\"inversedBy\":\"categories\"},\"provinces\":{\"type\":\"relation\",\"relation\":\"manyToMany\",\"target\":\"api::province.province\",\"inversedBy\":\"categories\"},\"Slug\":{\"type\":\"uid\",\"targetField\":\"name\",\"required\":true}},\"kind\":\"collectionType\"},\"modelType\":\"contentType\",\"modelName\":\"category\",\"connection\":\"default\",\"uid\":\"api::category.category\",\"apiName\":\"category\",\"globalId\":\"Category\",\"actions\":{},\"lifecycles\":{}},\"api::city.city\":{\"kind\":\"collectionType\",\"collectionName\":\"cities\",\"info\":{\"singularName\":\"city\",\"pluralName\":\"cities\",\"displayName\":\"city\",\"description\":\"\"},\"options\":{\"draftAndPublish\":true},\"pluginOptions\":{},\"attributes\":{\"name\":{\"type\":\"string\"},\"categories\":{\"type\":\"relation\",\"relation\":\"oneToMany\",\"target\":\"api::category.category\",\"mappedBy\":\"city\"},\"users\":{\"type\":\"relation\",\"relation\":\"oneToMany\",\"target\":\"plugin::users-permissions.user\",\"mappedBy\":\"localidad\"},\"identificador\":{\"type\":\"uid\"},\"province\":{\"type\":\"relation\",\"relation\":\"manyToOne\",\"target\":\"api::province.province\",\"inversedBy\":\"cities\"},\"slug\":{\"type\":\"string\",\"required\":true},\"createdAt\":{\"type\":\"datetime\"},\"updatedAt\":{\"type\":\"datetime\"},\"publishedAt\":{\"type\":\"datetime\",\"configurable\":false,\"writable\":true,\"visible\":false},\"createdBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true},\"updatedBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true}},\"__schema__\":{\"collectionName\":\"cities\",\"info\":{\"singularName\":\"city\",\"pluralName\":\"cities\",\"displayName\":\"city\",\"description\":\"\"},\"options\":{\"draftAndPublish\":true},\"pluginOptions\":{},\"attributes\":{\"name\":{\"type\":\"string\"},\"categories\":{\"type\":\"relation\",\"relation\":\"oneToMany\",\"target\":\"api::category.category\",\"mappedBy\":\"city\"},\"users\":{\"type\":\"relation\",\"relation\":\"oneToMany\",\"target\":\"plugin::users-permissions.user\",\"mappedBy\":\"localidad\"},\"identificador\":{\"type\":\"uid\"},\"province\":{\"type\":\"relation\",\"relation\":\"manyToOne\",\"target\":\"api::province.province\",\"inversedBy\":\"cities\"},\"slug\":{\"type\":\"string\",\"required\":true}},\"kind\":\"collectionType\"},\"modelType\":\"contentType\",\"modelName\":\"city\",\"connection\":\"default\",\"uid\":\"api::city.city\",\"apiName\":\"city\",\"globalId\":\"City\",\"actions\":{},\"lifecycles\":{}},\"api::lender.lender\":{\"kind\":\"collectionType\",\"collectionName\":\"lenders\",\"info\":{\"singularName\":\"lender\",\"pluralName\":\"lenders\",\"displayName\":\"lender\"},\"options\":{\"draftAndPublish\":true},\"pluginOptions\":{},\"attributes\":{\"users_lender\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"plugin::users-permissions.user\",\"mappedBy\":\"lender\"},\"categories\":{\"type\":\"relation\",\"relation\":\"oneToMany\",\"target\":\"api::category.category\",\"mappedBy\":\"lender\"},\"service\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"api::service.service\",\"inversedBy\":\"lender\"},\"reviews\":{\"type\":\"relation\",\"relation\":\"oneToMany\",\"target\":\"api::review.review\",\"mappedBy\":\"lender\"},\"createdAt\":{\"type\":\"datetime\"},\"updatedAt\":{\"type\":\"datetime\"},\"publishedAt\":{\"type\":\"datetime\",\"configurable\":false,\"writable\":true,\"visible\":false},\"createdBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true},\"updatedBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true}},\"__schema__\":{\"collectionName\":\"lenders\",\"info\":{\"singularName\":\"lender\",\"pluralName\":\"lenders\",\"displayName\":\"lender\"},\"options\":{\"draftAndPublish\":true},\"pluginOptions\":{},\"attributes\":{\"users_lender\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"plugin::users-permissions.user\",\"mappedBy\":\"lender\"},\"categories\":{\"type\":\"relation\",\"relation\":\"oneToMany\",\"target\":\"api::category.category\",\"mappedBy\":\"lender\"},\"service\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"api::service.service\",\"inversedBy\":\"lender\"},\"reviews\":{\"type\":\"relation\",\"relation\":\"oneToMany\",\"target\":\"api::review.review\",\"mappedBy\":\"lender\"}},\"kind\":\"collectionType\"},\"modelType\":\"contentType\",\"modelName\":\"lender\",\"connection\":\"default\",\"uid\":\"api::lender.lender\",\"apiName\":\"lender\",\"globalId\":\"Lender\",\"actions\":{},\"lifecycles\":{}},\"api::province.province\":{\"kind\":\"collectionType\",\"collectionName\":\"provinces\",\"info\":{\"singularName\":\"province\",\"pluralName\":\"provinces\",\"displayName\":\"province\",\"description\":\"\"},\"options\":{\"draftAndPublish\":true},\"pluginOptions\":{},\"attributes\":{\"name\":{\"type\":\"string\",\"unique\":true,\"required\":true},\"cities\":{\"type\":\"relation\",\"relation\":\"oneToMany\",\"target\":\"api::city.city\",\"mappedBy\":\"province\"},\"categories\":{\"type\":\"relation\",\"relation\":\"manyToMany\",\"target\":\"api::category.category\",\"mappedBy\":\"provinces\"},\"users\":{\"type\":\"relation\",\"relation\":\"oneToMany\",\"target\":\"plugin::users-permissions.user\",\"mappedBy\":\"provincia\"},\"identificador\":{\"type\":\"uid\"},\"Slug\":{\"type\":\"uid\",\"targetField\":\"name\"},\"createdAt\":{\"type\":\"datetime\"},\"updatedAt\":{\"type\":\"datetime\"},\"publishedAt\":{\"type\":\"datetime\",\"configurable\":false,\"writable\":true,\"visible\":false},\"createdBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true},\"updatedBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true}},\"__schema__\":{\"collectionName\":\"provinces\",\"info\":{\"singularName\":\"province\",\"pluralName\":\"provinces\",\"displayName\":\"province\",\"description\":\"\"},\"options\":{\"draftAndPublish\":true},\"pluginOptions\":{},\"attributes\":{\"name\":{\"type\":\"string\",\"unique\":true,\"required\":true},\"cities\":{\"type\":\"relation\",\"relation\":\"oneToMany\",\"target\":\"api::city.city\",\"mappedBy\":\"province\"},\"categories\":{\"type\":\"relation\",\"relation\":\"manyToMany\",\"target\":\"api::category.category\",\"mappedBy\":\"provinces\"},\"users\":{\"type\":\"relation\",\"relation\":\"oneToMany\",\"target\":\"plugin::users-permissions.user\",\"mappedBy\":\"provincia\"},\"identificador\":{\"type\":\"uid\"},\"Slug\":{\"type\":\"uid\",\"targetField\":\"name\"}},\"kind\":\"collectionType\"},\"modelType\":\"contentType\",\"modelName\":\"province\",\"connection\":\"default\",\"uid\":\"api::province.province\",\"apiName\":\"province\",\"globalId\":\"Province\",\"actions\":{},\"lifecycles\":{}},\"api::review.review\":{\"kind\":\"collectionType\",\"collectionName\":\"reviews\",\"info\":{\"singularName\":\"review\",\"pluralName\":\"reviews\",\"displayName\":\"review\",\"description\":\"\"},\"options\":{\"draftAndPublish\":true},\"pluginOptions\":{},\"attributes\":{\"rating\":{\"type\":\"integer\"},\"comment\":{\"type\":\"richtext\"},\"lender\":{\"type\":\"relation\",\"relation\":\"manyToOne\",\"target\":\"api::lender.lender\",\"inversedBy\":\"reviews\"},\"users_review_creator\":{\"type\":\"relation\",\"relation\":\"manyToOne\",\"target\":\"plugin::users-permissions.user\",\"inversedBy\":\"reviews\"},\"service\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"api::service.service\",\"inversedBy\":\"review\"},\"createdAt\":{\"type\":\"datetime\"},\"updatedAt\":{\"type\":\"datetime\"},\"publishedAt\":{\"type\":\"datetime\",\"configurable\":false,\"writable\":true,\"visible\":false},\"createdBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true},\"updatedBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true}},\"__schema__\":{\"collectionName\":\"reviews\",\"info\":{\"singularName\":\"review\",\"pluralName\":\"reviews\",\"displayName\":\"review\",\"description\":\"\"},\"options\":{\"draftAndPublish\":true},\"pluginOptions\":{},\"attributes\":{\"rating\":{\"type\":\"integer\"},\"comment\":{\"type\":\"richtext\"},\"lender\":{\"type\":\"relation\",\"relation\":\"manyToOne\",\"target\":\"api::lender.lender\",\"inversedBy\":\"reviews\"},\"users_review_creator\":{\"type\":\"relation\",\"relation\":\"manyToOne\",\"target\":\"plugin::users-permissions.user\",\"inversedBy\":\"reviews\"},\"service\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"api::service.service\",\"inversedBy\":\"review\"}},\"kind\":\"collectionType\"},\"modelType\":\"contentType\",\"modelName\":\"review\",\"connection\":\"default\",\"uid\":\"api::review.review\",\"apiName\":\"review\",\"globalId\":\"Review\",\"actions\":{},\"lifecycles\":{}},\"api::service.service\":{\"kind\":\"collectionType\",\"collectionName\":\"services\",\"info\":{\"singularName\":\"service\",\"pluralName\":\"services\",\"displayName\":\"service\",\"description\":\"\"},\"options\":{\"draftAndPublish\":true},\"pluginOptions\":{},\"attributes\":{\"price\":{\"type\":\"integer\"},\"finished_at\":{\"type\":\"date\"},\"category\":{\"type\":\"relation\",\"relation\":\"manyToOne\",\"target\":\"api::category.category\",\"inversedBy\":\"services\"},\"lender\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"api::lender.lender\",\"inversedBy\":\"service\"},\"users_recruiter\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"plugin::users-permissions.user\",\"inversedBy\":\"service_recruiter\"},\"review\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"api::review.review\",\"inversedBy\":\"service\"},\"createdAt\":{\"type\":\"datetime\"},\"updatedAt\":{\"type\":\"datetime\"},\"publishedAt\":{\"type\":\"datetime\",\"configurable\":false,\"writable\":true,\"visible\":false},\"createdBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true},\"updatedBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true}},\"__schema__\":{\"collectionName\":\"services\",\"info\":{\"singularName\":\"service\",\"pluralName\":\"services\",\"displayName\":\"service\",\"description\":\"\"},\"options\":{\"draftAndPublish\":true},\"pluginOptions\":{},\"attributes\":{\"price\":{\"type\":\"integer\"},\"finished_at\":{\"type\":\"date\"},\"category\":{\"type\":\"relation\",\"relation\":\"manyToOne\",\"target\":\"api::category.category\",\"inversedBy\":\"services\"},\"lender\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"api::lender.lender\",\"inversedBy\":\"service\"},\"users_recruiter\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"plugin::users-permissions.user\",\"inversedBy\":\"service_recruiter\"},\"review\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"api::review.review\",\"inversedBy\":\"service\"}},\"kind\":\"collectionType\"},\"modelType\":\"contentType\",\"modelName\":\"service\",\"connection\":\"default\",\"uid\":\"api::service.service\",\"apiName\":\"service\",\"globalId\":\"Service\",\"actions\":{},\"lifecycles\":{}}}', 'object', NULL, NULL),
(2, 'plugin_content_manager_configuration_content_types::admin::permission', '{\"uid\":\"admin::permission\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"action\",\"defaultSortBy\":\"action\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"id\",\"searchable\":true,\"sortable\":true}},\"action\":{\"edit\":{\"label\":\"action\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"action\",\"searchable\":true,\"sortable\":true}},\"subject\":{\"edit\":{\"label\":\"subject\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"subject\",\"searchable\":true,\"sortable\":true}},\"properties\":{\"edit\":{\"label\":\"properties\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"properties\",\"searchable\":false,\"sortable\":false}},\"conditions\":{\"edit\":{\"label\":\"conditions\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"conditions\",\"searchable\":false,\"sortable\":false}},\"role\":{\"edit\":{\"label\":\"role\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"name\"},\"list\":{\"label\":\"role\",\"searchable\":true,\"sortable\":true}},\"createdAt\":{\"edit\":{\"label\":\"createdAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"createdAt\",\"searchable\":true,\"sortable\":true}},\"updatedAt\":{\"edit\":{\"label\":\"updatedAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"updatedAt\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"action\",\"subject\",\"role\"],\"editRelations\":[\"role\"],\"edit\":[[{\"name\":\"action\",\"size\":6},{\"name\":\"subject\",\"size\":6}],[{\"name\":\"properties\",\"size\":12}],[{\"name\":\"conditions\",\"size\":12}]]}}', 'object', NULL, NULL);
INSERT INTO `strapi_core_store_settings` (`id`, `key`, `value`, `type`, `environment`, `tag`) VALUES
(3, 'plugin_content_manager_configuration_content_types::admin::user', '{\"uid\":\"admin::user\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"firstname\",\"defaultSortBy\":\"firstname\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"id\",\"searchable\":true,\"sortable\":true}},\"firstname\":{\"edit\":{\"label\":\"firstname\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"firstname\",\"searchable\":true,\"sortable\":true}},\"lastname\":{\"edit\":{\"label\":\"lastname\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"lastname\",\"searchable\":true,\"sortable\":true}},\"username\":{\"edit\":{\"label\":\"username\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"username\",\"searchable\":true,\"sortable\":true}},\"email\":{\"edit\":{\"label\":\"email\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"email\",\"searchable\":true,\"sortable\":true}},\"password\":{\"edit\":{\"label\":\"password\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"password\",\"searchable\":true,\"sortable\":true}},\"resetPasswordToken\":{\"edit\":{\"label\":\"resetPasswordToken\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"resetPasswordToken\",\"searchable\":true,\"sortable\":true}},\"registrationToken\":{\"edit\":{\"label\":\"registrationToken\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"registrationToken\",\"searchable\":true,\"sortable\":true}},\"isActive\":{\"edit\":{\"label\":\"isActive\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"isActive\",\"searchable\":true,\"sortable\":true}},\"roles\":{\"edit\":{\"label\":\"roles\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"name\"},\"list\":{\"label\":\"roles\",\"searchable\":false,\"sortable\":false}},\"blocked\":{\"edit\":{\"label\":\"blocked\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"blocked\",\"searchable\":true,\"sortable\":true}},\"preferedLanguage\":{\"edit\":{\"label\":\"preferedLanguage\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"preferedLanguage\",\"searchable\":true,\"sortable\":true}},\"createdAt\":{\"edit\":{\"label\":\"createdAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"createdAt\",\"searchable\":true,\"sortable\":true}},\"updatedAt\":{\"edit\":{\"label\":\"updatedAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"updatedAt\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"firstname\",\"lastname\",\"username\"],\"editRelations\":[\"roles\"],\"edit\":[[{\"name\":\"firstname\",\"size\":6},{\"name\":\"lastname\",\"size\":6}],[{\"name\":\"username\",\"size\":6},{\"name\":\"email\",\"size\":6}],[{\"name\":\"password\",\"size\":6},{\"name\":\"resetPasswordToken\",\"size\":6}],[{\"name\":\"registrationToken\",\"size\":6},{\"name\":\"isActive\",\"size\":4}],[{\"name\":\"blocked\",\"size\":4},{\"name\":\"preferedLanguage\",\"size\":6}]]}}', 'object', NULL, NULL),
(4, 'plugin_content_manager_configuration_content_types::admin::role', '{\"uid\":\"admin::role\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"name\",\"defaultSortBy\":\"name\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"id\",\"searchable\":true,\"sortable\":true}},\"name\":{\"edit\":{\"label\":\"name\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"name\",\"searchable\":true,\"sortable\":true}},\"code\":{\"edit\":{\"label\":\"code\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"code\",\"searchable\":true,\"sortable\":true}},\"description\":{\"edit\":{\"label\":\"description\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"description\",\"searchable\":true,\"sortable\":true}},\"users\":{\"edit\":{\"label\":\"users\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"firstname\"},\"list\":{\"label\":\"users\",\"searchable\":false,\"sortable\":false}},\"permissions\":{\"edit\":{\"label\":\"permissions\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"action\"},\"list\":{\"label\":\"permissions\",\"searchable\":false,\"sortable\":false}},\"createdAt\":{\"edit\":{\"label\":\"createdAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"createdAt\",\"searchable\":true,\"sortable\":true}},\"updatedAt\":{\"edit\":{\"label\":\"updatedAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"updatedAt\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"name\",\"code\",\"description\"],\"editRelations\":[\"users\",\"permissions\"],\"edit\":[[{\"name\":\"name\",\"size\":6},{\"name\":\"code\",\"size\":6}],[{\"name\":\"description\",\"size\":6}]]}}', 'object', NULL, NULL),
(5, 'plugin_content_manager_configuration_content_types::admin::api-token-permission', '{\"uid\":\"admin::api-token-permission\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"action\",\"defaultSortBy\":\"action\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"id\",\"searchable\":true,\"sortable\":true}},\"action\":{\"edit\":{\"label\":\"action\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"action\",\"searchable\":true,\"sortable\":true}},\"token\":{\"edit\":{\"label\":\"token\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"name\"},\"list\":{\"label\":\"token\",\"searchable\":true,\"sortable\":true}},\"createdAt\":{\"edit\":{\"label\":\"createdAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"createdAt\",\"searchable\":true,\"sortable\":true}},\"updatedAt\":{\"edit\":{\"label\":\"updatedAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"updatedAt\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"action\",\"token\",\"createdAt\"],\"editRelations\":[\"token\"],\"edit\":[[{\"name\":\"action\",\"size\":6}]]}}', 'object', NULL, NULL),
(6, 'plugin_content_manager_configuration_content_types::plugin::upload.file', '{\"uid\":\"plugin::upload.file\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"name\",\"defaultSortBy\":\"name\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"id\",\"searchable\":true,\"sortable\":true}},\"name\":{\"edit\":{\"label\":\"name\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"name\",\"searchable\":true,\"sortable\":true}},\"alternativeText\":{\"edit\":{\"label\":\"alternativeText\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"alternativeText\",\"searchable\":true,\"sortable\":true}},\"caption\":{\"edit\":{\"label\":\"caption\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"caption\",\"searchable\":true,\"sortable\":true}},\"width\":{\"edit\":{\"label\":\"width\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"width\",\"searchable\":true,\"sortable\":true}},\"height\":{\"edit\":{\"label\":\"height\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"height\",\"searchable\":true,\"sortable\":true}},\"formats\":{\"edit\":{\"label\":\"formats\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"formats\",\"searchable\":false,\"sortable\":false}},\"hash\":{\"edit\":{\"label\":\"hash\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"hash\",\"searchable\":true,\"sortable\":true}},\"ext\":{\"edit\":{\"label\":\"ext\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"ext\",\"searchable\":true,\"sortable\":true}},\"mime\":{\"edit\":{\"label\":\"mime\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"mime\",\"searchable\":true,\"sortable\":true}},\"size\":{\"edit\":{\"label\":\"size\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"size\",\"searchable\":true,\"sortable\":true}},\"url\":{\"edit\":{\"label\":\"url\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"url\",\"searchable\":true,\"sortable\":true}},\"previewUrl\":{\"edit\":{\"label\":\"previewUrl\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"previewUrl\",\"searchable\":true,\"sortable\":true}},\"provider\":{\"edit\":{\"label\":\"provider\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"provider\",\"searchable\":true,\"sortable\":true}},\"provider_metadata\":{\"edit\":{\"label\":\"provider_metadata\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"provider_metadata\",\"searchable\":false,\"sortable\":false}},\"folder\":{\"edit\":{\"label\":\"folder\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"name\"},\"list\":{\"label\":\"folder\",\"searchable\":true,\"sortable\":true}},\"folderPath\":{\"edit\":{\"label\":\"folderPath\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"folderPath\",\"searchable\":true,\"sortable\":true}},\"createdAt\":{\"edit\":{\"label\":\"createdAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"createdAt\",\"searchable\":true,\"sortable\":true}},\"updatedAt\":{\"edit\":{\"label\":\"updatedAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"updatedAt\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"name\",\"alternativeText\",\"caption\"],\"editRelations\":[\"folder\"],\"edit\":[[{\"name\":\"name\",\"size\":6},{\"name\":\"alternativeText\",\"size\":6}],[{\"name\":\"caption\",\"size\":6},{\"name\":\"width\",\"size\":4}],[{\"name\":\"height\",\"size\":4}],[{\"name\":\"formats\",\"size\":12}],[{\"name\":\"hash\",\"size\":6},{\"name\":\"ext\",\"size\":6}],[{\"name\":\"mime\",\"size\":6},{\"name\":\"size\",\"size\":4}],[{\"name\":\"url\",\"size\":6},{\"name\":\"previewUrl\",\"size\":6}],[{\"name\":\"provider\",\"size\":6}],[{\"name\":\"provider_metadata\",\"size\":12}],[{\"name\":\"folderPath\",\"size\":6}]]}}', 'object', NULL, NULL),
(7, 'plugin_content_manager_configuration_content_types::plugin::users-permissions.permission', '{\"uid\":\"plugin::users-permissions.permission\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"action\",\"defaultSortBy\":\"action\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"id\",\"searchable\":true,\"sortable\":true}},\"action\":{\"edit\":{\"label\":\"action\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"action\",\"searchable\":true,\"sortable\":true}},\"role\":{\"edit\":{\"label\":\"role\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"name\"},\"list\":{\"label\":\"role\",\"searchable\":true,\"sortable\":true}},\"createdAt\":{\"edit\":{\"label\":\"createdAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"createdAt\",\"searchable\":true,\"sortable\":true}},\"updatedAt\":{\"edit\":{\"label\":\"updatedAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"updatedAt\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"action\",\"role\",\"createdAt\"],\"editRelations\":[\"role\"],\"edit\":[[{\"name\":\"action\",\"size\":6}]]}}', 'object', NULL, NULL),
(8, 'plugin_content_manager_configuration_content_types::plugin::upload.folder', '{\"uid\":\"plugin::upload.folder\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"name\",\"defaultSortBy\":\"name\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"id\",\"searchable\":true,\"sortable\":true}},\"name\":{\"edit\":{\"label\":\"name\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"name\",\"searchable\":true,\"sortable\":true}},\"pathId\":{\"edit\":{\"label\":\"pathId\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"pathId\",\"searchable\":true,\"sortable\":true}},\"parent\":{\"edit\":{\"label\":\"parent\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"name\"},\"list\":{\"label\":\"parent\",\"searchable\":true,\"sortable\":true}},\"children\":{\"edit\":{\"label\":\"children\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"name\"},\"list\":{\"label\":\"children\",\"searchable\":false,\"sortable\":false}},\"files\":{\"edit\":{\"label\":\"files\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"name\"},\"list\":{\"label\":\"files\",\"searchable\":false,\"sortable\":false}},\"path\":{\"edit\":{\"label\":\"path\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"path\",\"searchable\":true,\"sortable\":true}},\"createdAt\":{\"edit\":{\"label\":\"createdAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"createdAt\",\"searchable\":true,\"sortable\":true}},\"updatedAt\":{\"edit\":{\"label\":\"updatedAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"updatedAt\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"name\",\"pathId\",\"parent\"],\"editRelations\":[\"parent\",\"children\",\"files\"],\"edit\":[[{\"name\":\"name\",\"size\":6},{\"name\":\"pathId\",\"size\":4}],[{\"name\":\"path\",\"size\":6}]]}}', 'object', NULL, NULL),
(9, 'plugin_content_manager_configuration_content_types::plugin::users-permissions.role', '{\"uid\":\"plugin::users-permissions.role\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"name\",\"defaultSortBy\":\"name\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"id\",\"searchable\":true,\"sortable\":true}},\"name\":{\"edit\":{\"label\":\"name\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"name\",\"searchable\":true,\"sortable\":true}},\"description\":{\"edit\":{\"label\":\"description\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"description\",\"searchable\":true,\"sortable\":true}},\"type\":{\"edit\":{\"label\":\"type\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"type\",\"searchable\":true,\"sortable\":true}},\"permissions\":{\"edit\":{\"label\":\"permissions\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"action\"},\"list\":{\"label\":\"permissions\",\"searchable\":false,\"sortable\":false}},\"users\":{\"edit\":{\"label\":\"users\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"username\"},\"list\":{\"label\":\"users\",\"searchable\":false,\"sortable\":false}},\"createdAt\":{\"edit\":{\"label\":\"createdAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"createdAt\",\"searchable\":true,\"sortable\":true}},\"updatedAt\":{\"edit\":{\"label\":\"updatedAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"updatedAt\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"name\",\"description\",\"type\"],\"editRelations\":[\"permissions\",\"users\"],\"edit\":[[{\"name\":\"name\",\"size\":6},{\"name\":\"description\",\"size\":6}],[{\"name\":\"type\",\"size\":6}]]}}', 'object', NULL, NULL),
(10, 'plugin_content_manager_configuration_content_types::api::city.city', '{\"uid\":\"api::city.city\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"name\",\"defaultSortBy\":\"name\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"id\",\"searchable\":true,\"sortable\":true}},\"name\":{\"edit\":{\"label\":\"name\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"name\",\"searchable\":true,\"sortable\":true}},\"categories\":{\"edit\":{\"label\":\"categories\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"name\"},\"list\":{\"label\":\"categories\",\"searchable\":false,\"sortable\":false}},\"users\":{\"edit\":{\"label\":\"users\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"username\"},\"list\":{\"label\":\"users\",\"searchable\":false,\"sortable\":false}},\"identificador\":{\"edit\":{\"label\":\"identificador\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"identificador\",\"searchable\":true,\"sortable\":true}},\"province\":{\"edit\":{\"label\":\"province\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"name\"},\"list\":{\"label\":\"province\",\"searchable\":true,\"sortable\":true}},\"slug\":{\"edit\":{\"label\":\"slug\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"slug\",\"searchable\":true,\"sortable\":true}},\"createdAt\":{\"edit\":{\"label\":\"createdAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"createdAt\",\"searchable\":true,\"sortable\":true}},\"updatedAt\":{\"edit\":{\"label\":\"updatedAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"updatedAt\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"name\",\"province\",\"users\",\"identificador\"],\"edit\":[[{\"name\":\"name\",\"size\":6},{\"name\":\"identificador\",\"size\":6}],[{\"name\":\"slug\",\"size\":6}]],\"editRelations\":[\"categories\",\"users\",\"province\"]}}', 'object', NULL, NULL),
(11, 'plugin_content_manager_configuration_content_types::api::review.review', '{\"uid\":\"api::review.review\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"id\",\"defaultSortBy\":\"id\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"id\",\"searchable\":true,\"sortable\":true}},\"rating\":{\"edit\":{\"label\":\"rating\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"rating\",\"searchable\":true,\"sortable\":true}},\"comment\":{\"edit\":{\"label\":\"comment\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"comment\",\"searchable\":false,\"sortable\":false}},\"lender\":{\"edit\":{\"label\":\"lender\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"id\"},\"list\":{\"label\":\"lender\",\"searchable\":true,\"sortable\":true}},\"users_review_creator\":{\"edit\":{\"label\":\"users_review_creator\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"username\"},\"list\":{\"label\":\"users_review_creator\",\"searchable\":true,\"sortable\":true}},\"service\":{\"edit\":{\"label\":\"service\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"id\"},\"list\":{\"label\":\"service\",\"searchable\":true,\"sortable\":true}},\"createdAt\":{\"edit\":{\"label\":\"createdAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"createdAt\",\"searchable\":true,\"sortable\":true}},\"updatedAt\":{\"edit\":{\"label\":\"updatedAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"updatedAt\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"rating\",\"lender\",\"users_review_creator\"],\"editRelations\":[\"lender\",\"users_review_creator\",\"service\"],\"edit\":[[{\"name\":\"rating\",\"size\":4}],[{\"name\":\"comment\",\"size\":12}]]}}', 'object', NULL, NULL),
(12, 'plugin_content_manager_configuration_content_types::admin::api-token', '{\"uid\":\"admin::api-token\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"name\",\"defaultSortBy\":\"name\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"id\",\"searchable\":true,\"sortable\":true}},\"name\":{\"edit\":{\"label\":\"name\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"name\",\"searchable\":true,\"sortable\":true}},\"description\":{\"edit\":{\"label\":\"description\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"description\",\"searchable\":true,\"sortable\":true}},\"type\":{\"edit\":{\"label\":\"type\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"type\",\"searchable\":true,\"sortable\":true}},\"accessKey\":{\"edit\":{\"label\":\"accessKey\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"accessKey\",\"searchable\":true,\"sortable\":true}},\"lastUsedAt\":{\"edit\":{\"label\":\"lastUsedAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"lastUsedAt\",\"searchable\":true,\"sortable\":true}},\"permissions\":{\"edit\":{\"label\":\"permissions\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"action\"},\"list\":{\"label\":\"permissions\",\"searchable\":false,\"sortable\":false}},\"expiresAt\":{\"edit\":{\"label\":\"expiresAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"expiresAt\",\"searchable\":true,\"sortable\":true}},\"lifespan\":{\"edit\":{\"label\":\"lifespan\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"lifespan\",\"searchable\":true,\"sortable\":true}},\"createdAt\":{\"edit\":{\"label\":\"createdAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"createdAt\",\"searchable\":true,\"sortable\":true}},\"updatedAt\":{\"edit\":{\"label\":\"updatedAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"updatedAt\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"name\",\"description\",\"type\"],\"editRelations\":[\"permissions\"],\"edit\":[[{\"name\":\"name\",\"size\":6},{\"name\":\"description\",\"size\":6}],[{\"name\":\"type\",\"size\":6},{\"name\":\"accessKey\",\"size\":6}],[{\"name\":\"lastUsedAt\",\"size\":6},{\"name\":\"expiresAt\",\"size\":6}],[{\"name\":\"lifespan\",\"size\":4}]]}}', 'object', NULL, NULL),
(13, 'plugin_content_manager_configuration_content_types::api::service.service', '{\"uid\":\"api::service.service\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"id\",\"defaultSortBy\":\"id\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"id\",\"searchable\":true,\"sortable\":true}},\"price\":{\"edit\":{\"label\":\"price\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"price\",\"searchable\":true,\"sortable\":true}},\"finished_at\":{\"edit\":{\"label\":\"finished_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"finished_at\",\"searchable\":true,\"sortable\":true}},\"category\":{\"edit\":{\"label\":\"category\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"name\"},\"list\":{\"label\":\"category\",\"searchable\":true,\"sortable\":true}},\"lender\":{\"edit\":{\"label\":\"lender\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"id\"},\"list\":{\"label\":\"lender\",\"searchable\":true,\"sortable\":true}},\"users_recruiter\":{\"edit\":{\"label\":\"users_recruiter\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"username\"},\"list\":{\"label\":\"users_recruiter\",\"searchable\":true,\"sortable\":true}},\"review\":{\"edit\":{\"label\":\"review\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"id\"},\"list\":{\"label\":\"review\",\"searchable\":true,\"sortable\":true}},\"createdAt\":{\"edit\":{\"label\":\"createdAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"createdAt\",\"searchable\":true,\"sortable\":true}},\"updatedAt\":{\"edit\":{\"label\":\"updatedAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"updatedAt\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"price\",\"finished_at\",\"category\"],\"editRelations\":[\"category\",\"lender\",\"users_recruiter\",\"review\"],\"edit\":[[{\"name\":\"price\",\"size\":4},{\"name\":\"finished_at\",\"size\":4}]]}}', 'object', NULL, NULL),
(15, 'plugin_content_manager_configuration_content_types::plugin::i18n.locale', '{\"uid\":\"plugin::i18n.locale\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"name\",\"defaultSortBy\":\"name\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"id\",\"searchable\":true,\"sortable\":true}},\"name\":{\"edit\":{\"label\":\"name\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"name\",\"searchable\":true,\"sortable\":true}},\"code\":{\"edit\":{\"label\":\"code\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"code\",\"searchable\":true,\"sortable\":true}},\"createdAt\":{\"edit\":{\"label\":\"createdAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"createdAt\",\"searchable\":true,\"sortable\":true}},\"updatedAt\":{\"edit\":{\"label\":\"updatedAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"updatedAt\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"name\",\"code\",\"createdAt\"],\"editRelations\":[],\"edit\":[[{\"name\":\"name\",\"size\":6},{\"name\":\"code\",\"size\":6}]]}}', 'object', NULL, NULL),
(16, 'plugin_content_manager_configuration_content_types::plugin::users-permissions.user', '{\"uid\":\"plugin::users-permissions.user\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"username\",\"defaultSortBy\":\"username\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"id\",\"searchable\":true,\"sortable\":true}},\"username\":{\"edit\":{\"label\":\"username\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"username\",\"searchable\":true,\"sortable\":true}},\"email\":{\"edit\":{\"label\":\"email\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"email\",\"searchable\":true,\"sortable\":true}},\"provider\":{\"edit\":{\"label\":\"provider\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"provider\",\"searchable\":true,\"sortable\":true}},\"password\":{\"edit\":{\"label\":\"password\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"password\",\"searchable\":true,\"sortable\":true}},\"resetPasswordToken\":{\"edit\":{\"label\":\"resetPasswordToken\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"resetPasswordToken\",\"searchable\":true,\"sortable\":true}},\"confirmationToken\":{\"edit\":{\"label\":\"confirmationToken\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"confirmationToken\",\"searchable\":true,\"sortable\":true}},\"confirmed\":{\"edit\":{\"label\":\"confirmed\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"confirmed\",\"searchable\":true,\"sortable\":true}},\"blocked\":{\"edit\":{\"label\":\"blocked\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"blocked\",\"searchable\":true,\"sortable\":true}},\"role\":{\"edit\":{\"label\":\"role\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"name\"},\"list\":{\"label\":\"role\",\"searchable\":true,\"sortable\":true}},\"categories\":{\"edit\":{\"label\":\"categories\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"name\"},\"list\":{\"label\":\"categories\",\"searchable\":false,\"sortable\":false}},\"service_recruiter\":{\"edit\":{\"label\":\"service_recruiter\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"id\"},\"list\":{\"label\":\"service_recruiter\",\"searchable\":true,\"sortable\":true}},\"lender\":{\"edit\":{\"label\":\"lender\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"id\"},\"list\":{\"label\":\"lender\",\"searchable\":true,\"sortable\":true}},\"reviews\":{\"edit\":{\"label\":\"reviews\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"id\"},\"list\":{\"label\":\"reviews\",\"searchable\":false,\"sortable\":false}},\"phone\":{\"edit\":{\"label\":\"phone\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"phone\",\"searchable\":true,\"sortable\":true}},\"is_lender\":{\"edit\":{\"label\":\"is_lender\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"is_lender\",\"searchable\":true,\"sortable\":true}},\"aboutme\":{\"edit\":{\"label\":\"aboutme\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"aboutme\",\"searchable\":false,\"sortable\":false}},\"birth\":{\"edit\":{\"label\":\"birth\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"birth\",\"searchable\":true,\"sortable\":true}},\"provincia\":{\"edit\":{\"label\":\"provincia\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"name\"},\"list\":{\"label\":\"provincia\",\"searchable\":true,\"sortable\":true}},\"localidad\":{\"edit\":{\"label\":\"localidad\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"name\"},\"list\":{\"label\":\"localidad\",\"searchable\":true,\"sortable\":true}},\"name\":{\"edit\":{\"label\":\"name\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"name\",\"searchable\":true,\"sortable\":true}},\"Slug\":{\"edit\":{\"label\":\"Slug\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Slug\",\"searchable\":true,\"sortable\":true}},\"profile_pic\":{\"edit\":{\"label\":\"profile_pic\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"profile_pic\",\"searchable\":false,\"sortable\":false}},\"firstName\":{\"edit\":{\"label\":\"firstName\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"firstName\",\"searchable\":true,\"sortable\":true}},\"lastName\":{\"edit\":{\"label\":\"lastName\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"lastName\",\"searchable\":true,\"sortable\":true}},\"createdAt\":{\"edit\":{\"label\":\"createdAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"createdAt\",\"searchable\":true,\"sortable\":true}},\"updatedAt\":{\"edit\":{\"label\":\"updatedAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"updatedAt\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"username\",\"email\",\"confirmed\"],\"edit\":[[{\"name\":\"username\",\"size\":6},{\"name\":\"email\",\"size\":6}],[{\"name\":\"password\",\"size\":6},{\"name\":\"confirmed\",\"size\":4}],[{\"name\":\"blocked\",\"size\":4}],[{\"name\":\"phone\",\"size\":4}],[{\"name\":\"is_lender\",\"size\":4}],[{\"name\":\"aboutme\",\"size\":12}],[{\"name\":\"birth\",\"size\":4},{\"name\":\"name\",\"size\":6}],[{\"name\":\"Slug\",\"size\":6},{\"name\":\"profile_pic\",\"size\":6}],[{\"name\":\"firstName\",\"size\":6},{\"name\":\"lastName\",\"size\":6}]],\"editRelations\":[\"role\",\"categories\",\"service_recruiter\",\"lender\",\"reviews\",\"provincia\",\"localidad\"]}}', 'object', NULL, NULL),
(17, 'plugin_content_manager_configuration_content_types::api::lender.lender', '{\"uid\":\"api::lender.lender\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"id\",\"defaultSortBy\":\"id\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"id\",\"searchable\":true,\"sortable\":true}},\"users_lender\":{\"edit\":{\"label\":\"users_lender\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"username\"},\"list\":{\"label\":\"users_lender\",\"searchable\":true,\"sortable\":true}},\"categories\":{\"edit\":{\"label\":\"categories\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"name\"},\"list\":{\"label\":\"categories\",\"searchable\":false,\"sortable\":false}},\"service\":{\"edit\":{\"label\":\"service\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"id\"},\"list\":{\"label\":\"service\",\"searchable\":true,\"sortable\":true}},\"reviews\":{\"edit\":{\"label\":\"reviews\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"id\"},\"list\":{\"label\":\"reviews\",\"searchable\":false,\"sortable\":false}},\"createdAt\":{\"edit\":{\"label\":\"createdAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"createdAt\",\"searchable\":true,\"sortable\":true}},\"updatedAt\":{\"edit\":{\"label\":\"updatedAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"updatedAt\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"users_lender\",\"categories\",\"service\"],\"editRelations\":[\"users_lender\",\"categories\",\"service\",\"reviews\"],\"edit\":[]}}', 'object', NULL, NULL),
(18, 'plugin_content_manager_configuration_content_types::api::category.category', '{\"uid\":\"api::category.category\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"name\",\"defaultSortBy\":\"name\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"id\",\"searchable\":true,\"sortable\":true}},\"name\":{\"edit\":{\"label\":\"name\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"name\",\"searchable\":true,\"sortable\":true}},\"state\":{\"edit\":{\"label\":\"state\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"state\",\"searchable\":true,\"sortable\":true}},\"city\":{\"edit\":{\"label\":\"city\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"name\"},\"list\":{\"label\":\"city\",\"searchable\":true,\"sortable\":true}},\"services\":{\"edit\":{\"label\":\"services\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"id\"},\"list\":{\"label\":\"services\",\"searchable\":false,\"sortable\":false}},\"lender\":{\"edit\":{\"label\":\"lender\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"id\"},\"list\":{\"label\":\"lender\",\"searchable\":true,\"sortable\":true}},\"provinces\":{\"edit\":{\"label\":\"provinces\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"name\"},\"list\":{\"label\":\"provinces\",\"searchable\":false,\"sortable\":false}},\"Slug\":{\"edit\":{\"label\":\"Slug\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Slug\",\"searchable\":true,\"sortable\":true}},\"createdAt\":{\"edit\":{\"label\":\"createdAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"createdAt\",\"searchable\":true,\"sortable\":true}},\"updatedAt\":{\"edit\":{\"label\":\"updatedAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"updatedAt\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"name\",\"state\",\"provinces\"],\"edit\":[[{\"name\":\"name\",\"size\":6},{\"name\":\"state\",\"size\":4}],[{\"name\":\"Slug\",\"size\":6}]],\"editRelations\":[\"city\",\"services\",\"lender\",\"provinces\"]}}', 'object', NULL, NULL),
(19, 'plugin_content_manager_configuration_content_types::api::province.province', '{\"uid\":\"api::province.province\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"name\",\"defaultSortBy\":\"name\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"id\",\"searchable\":true,\"sortable\":true}},\"name\":{\"edit\":{\"label\":\"name\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"name\",\"searchable\":true,\"sortable\":true}},\"cities\":{\"edit\":{\"label\":\"cities\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"name\"},\"list\":{\"label\":\"cities\",\"searchable\":false,\"sortable\":false}},\"categories\":{\"edit\":{\"label\":\"categories\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"name\"},\"list\":{\"label\":\"categories\",\"searchable\":false,\"sortable\":false}},\"users\":{\"edit\":{\"label\":\"users\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"username\"},\"list\":{\"label\":\"users\",\"searchable\":false,\"sortable\":false}},\"identificador\":{\"edit\":{\"label\":\"identificador\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"identificador\",\"searchable\":true,\"sortable\":true}},\"Slug\":{\"edit\":{\"label\":\"Slug\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Slug\",\"searchable\":true,\"sortable\":true}},\"createdAt\":{\"edit\":{\"label\":\"createdAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"createdAt\",\"searchable\":true,\"sortable\":true}},\"updatedAt\":{\"edit\":{\"label\":\"updatedAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"updatedAt\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"name\",\"identificador\",\"cities\",\"categories\"],\"edit\":[[{\"name\":\"name\",\"size\":6},{\"name\":\"identificador\",\"size\":6}],[{\"name\":\"Slug\",\"size\":6}]],\"editRelations\":[\"cities\",\"categories\",\"users\"]}}', 'object', NULL, NULL),
(20, 'plugin_upload_settings', '{\"sizeOptimization\":true,\"responsiveDimensions\":true,\"autoOrientation\":false}', 'object', NULL, NULL),
(21, 'plugin_upload_metrics', '{\"weeklySchedule\":\"15 3 23 * * 4\",\"lastWeeklyUpdate\":1668132195032}', 'object', NULL, NULL),
(22, 'plugin_users-permissions_grant', '{\"email\":{\"enabled\":true,\"icon\":\"envelope\"},\"discord\":{\"enabled\":false,\"icon\":\"discord\",\"key\":\"\",\"secret\":\"\",\"callback\":\"api/auth/discord/callback\",\"scope\":[\"identify\",\"email\"]},\"facebook\":{\"enabled\":false,\"icon\":\"facebook-square\",\"key\":\"\",\"secret\":\"\",\"callback\":\"api/auth/facebook/callback\",\"scope\":[\"email\"]},\"google\":{\"enabled\":false,\"icon\":\"google\",\"key\":\"\",\"secret\":\"\",\"callback\":\"api/auth/google/callback\",\"scope\":[\"email\"]},\"github\":{\"enabled\":false,\"icon\":\"github\",\"key\":\"\",\"secret\":\"\",\"callback\":\"api/auth/github/callback\",\"scope\":[\"user\",\"user:email\"]},\"microsoft\":{\"enabled\":false,\"icon\":\"windows\",\"key\":\"\",\"secret\":\"\",\"callback\":\"api/auth/microsoft/callback\",\"scope\":[\"user.read\"]},\"twitter\":{\"enabled\":false,\"icon\":\"twitter\",\"key\":\"\",\"secret\":\"\",\"callback\":\"api/auth/twitter/callback\"},\"instagram\":{\"enabled\":false,\"icon\":\"instagram\",\"key\":\"\",\"secret\":\"\",\"callback\":\"api/auth/instagram/callback\",\"scope\":[\"user_profile\"]},\"vk\":{\"enabled\":false,\"icon\":\"vk\",\"key\":\"\",\"secret\":\"\",\"callback\":\"api/auth/vk/callback\",\"scope\":[\"email\"]},\"twitch\":{\"enabled\":false,\"icon\":\"twitch\",\"key\":\"\",\"secret\":\"\",\"callback\":\"api/auth/twitch/callback\",\"scope\":[\"user:read:email\"]},\"linkedin\":{\"enabled\":false,\"icon\":\"linkedin\",\"key\":\"\",\"secret\":\"\",\"callback\":\"api/auth/linkedin/callback\",\"scope\":[\"r_liteprofile\",\"r_emailaddress\"]},\"cognito\":{\"enabled\":false,\"icon\":\"aws\",\"key\":\"\",\"secret\":\"\",\"subdomain\":\"my.subdomain.com\",\"callback\":\"api/auth/cognito/callback\",\"scope\":[\"email\",\"openid\",\"profile\"]},\"reddit\":{\"enabled\":false,\"icon\":\"reddit\",\"key\":\"\",\"secret\":\"\",\"state\":true,\"callback\":\"api/auth/reddit/callback\",\"scope\":[\"identity\"]},\"auth0\":{\"enabled\":false,\"icon\":\"\",\"key\":\"\",\"secret\":\"\",\"subdomain\":\"my-tenant.eu\",\"callback\":\"api/auth/auth0/callback\",\"scope\":[\"openid\",\"email\",\"profile\"]},\"cas\":{\"enabled\":false,\"icon\":\"book\",\"key\":\"\",\"secret\":\"\",\"callback\":\"api/auth/cas/callback\",\"scope\":[\"openid email\"],\"subdomain\":\"my.subdomain.com/cas\"}}', 'object', NULL, NULL),
(23, 'plugin_users-permissions_email', '{\"reset_password\":{\"display\":\"Email.template.reset_password\",\"icon\":\"sync\",\"options\":{\"from\":{\"name\":\"Administration Panel\",\"email\":\"no-reply@strapi.io\"},\"response_email\":\"\",\"object\":\"Reset password\",\"message\":\"<p>We heard that you lost your password. Sorry about that!</p>\\n\\n<p>But don’t worry! You can use the following link to reset your password:</p>\\n<p><%= URL %>?code=<%= TOKEN %></p>\\n\\n<p>Thanks.</p>\"}},\"email_confirmation\":{\"display\":\"Email.template.email_confirmation\",\"icon\":\"check-square\",\"options\":{\"from\":{\"name\":\"Administration Panel\",\"email\":\"no-reply@strapi.io\"},\"response_email\":\"\",\"object\":\"Account confirmation\",\"message\":\"<p>Thank you for registering!</p>\\n\\n<p>You have to confirm your email address. Please click on the link below.</p>\\n\\n<p><%= URL %>?confirmation=<%= CODE %></p>\\n\\n<p>Thanks.</p>\"}}}', 'object', NULL, NULL),
(24, 'plugin_users-permissions_advanced', '{\"unique_email\":true,\"allow_register\":true,\"email_confirmation\":false,\"email_reset_password\":null,\"email_confirmation_redirection\":null,\"default_role\":\"authenticated\"}', 'object', NULL, NULL),
(25, 'plugin_i18n_default_locale', '\"en\"', 'string', NULL, NULL),
(26, 'core_admin_auth', '{\"providers\":{\"autoRegister\":false,\"defaultRole\":null}}', 'object', NULL, NULL),
(27, 'plugin_upload_api-folder', '{\"id\":1}', 'object', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `strapi_database_schema`
--

CREATE TABLE `strapi_database_schema` (
  `id` int(10) UNSIGNED NOT NULL,
  `schema` json DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  `hash` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `strapi_database_schema`
--

INSERT INTO `strapi_database_schema` (`id`, `schema`, `time`, `hash`) VALUES
(28, '{\"tables\": [{\"name\": \"strapi_core_store_settings\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [], \"name\": \"key\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [\"longtext\"], \"name\": \"value\", \"type\": \"text\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"type\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"environment\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"tag\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [], \"foreignKeys\": []}, {\"name\": \"strapi_webhooks\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [], \"name\": \"name\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [\"longtext\"], \"name\": \"url\", \"type\": \"text\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"headers\", \"type\": \"jsonb\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"events\", \"type\": \"jsonb\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"enabled\", \"type\": \"boolean\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [], \"foreignKeys\": []}, {\"name\": \"admin_permissions\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [], \"name\": \"action\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"subject\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"properties\", \"type\": \"jsonb\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"conditions\", \"type\": \"jsonb\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [{\"useTz\": false, \"precision\": 6}], \"name\": \"created_at\", \"type\": \"datetime\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [{\"useTz\": false, \"precision\": 6}], \"name\": \"updated_at\", \"type\": \"datetime\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"created_by_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"updated_by_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [{\"name\": \"admin_permissions_created_by_id_fk\", \"columns\": [\"created_by_id\"]}, {\"name\": \"admin_permissions_updated_by_id_fk\", \"columns\": [\"updated_by_id\"]}], \"foreignKeys\": [{\"name\": \"admin_permissions_created_by_id_fk\", \"columns\": [\"created_by_id\"], \"onDelete\": \"SET NULL\", \"referencedTable\": \"admin_users\", \"referencedColumns\": [\"id\"]}, {\"name\": \"admin_permissions_updated_by_id_fk\", \"columns\": [\"updated_by_id\"], \"onDelete\": \"SET NULL\", \"referencedTable\": \"admin_users\", \"referencedColumns\": [\"id\"]}]}, {\"name\": \"admin_users\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [], \"name\": \"firstname\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"lastname\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"username\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"email\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"password\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"reset_password_token\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"registration_token\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"is_active\", \"type\": \"boolean\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"blocked\", \"type\": \"boolean\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"prefered_language\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [{\"useTz\": false, \"precision\": 6}], \"name\": \"created_at\", \"type\": \"datetime\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [{\"useTz\": false, \"precision\": 6}], \"name\": \"updated_at\", \"type\": \"datetime\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"created_by_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"updated_by_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [{\"name\": \"admin_users_created_by_id_fk\", \"columns\": [\"created_by_id\"]}, {\"name\": \"admin_users_updated_by_id_fk\", \"columns\": [\"updated_by_id\"]}], \"foreignKeys\": [{\"name\": \"admin_users_created_by_id_fk\", \"columns\": [\"created_by_id\"], \"onDelete\": \"SET NULL\", \"referencedTable\": \"admin_users\", \"referencedColumns\": [\"id\"]}, {\"name\": \"admin_users_updated_by_id_fk\", \"columns\": [\"updated_by_id\"], \"onDelete\": \"SET NULL\", \"referencedTable\": \"admin_users\", \"referencedColumns\": [\"id\"]}]}, {\"name\": \"admin_roles\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [], \"name\": \"name\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"code\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"description\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [{\"useTz\": false, \"precision\": 6}], \"name\": \"created_at\", \"type\": \"datetime\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [{\"useTz\": false, \"precision\": 6}], \"name\": \"updated_at\", \"type\": \"datetime\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"created_by_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"updated_by_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [{\"name\": \"admin_roles_created_by_id_fk\", \"columns\": [\"created_by_id\"]}, {\"name\": \"admin_roles_updated_by_id_fk\", \"columns\": [\"updated_by_id\"]}], \"foreignKeys\": [{\"name\": \"admin_roles_created_by_id_fk\", \"columns\": [\"created_by_id\"], \"onDelete\": \"SET NULL\", \"referencedTable\": \"admin_users\", \"referencedColumns\": [\"id\"]}, {\"name\": \"admin_roles_updated_by_id_fk\", \"columns\": [\"updated_by_id\"], \"onDelete\": \"SET NULL\", \"referencedTable\": \"admin_users\", \"referencedColumns\": [\"id\"]}]}, {\"name\": \"strapi_api_tokens\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [], \"name\": \"name\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"description\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"type\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"access_key\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [{\"useTz\": false, \"precision\": 6}], \"name\": \"last_used_at\", \"type\": \"datetime\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [{\"useTz\": false, \"precision\": 6}], \"name\": \"expires_at\", \"type\": \"datetime\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"lifespan\", \"type\": \"integer\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [{\"useTz\": false, \"precision\": 6}], \"name\": \"created_at\", \"type\": \"datetime\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [{\"useTz\": false, \"precision\": 6}], \"name\": \"updated_at\", \"type\": \"datetime\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"created_by_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"updated_by_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [{\"name\": \"strapi_api_tokens_created_by_id_fk\", \"columns\": [\"created_by_id\"]}, {\"name\": \"strapi_api_tokens_updated_by_id_fk\", \"columns\": [\"updated_by_id\"]}], \"foreignKeys\": [{\"name\": \"strapi_api_tokens_created_by_id_fk\", \"columns\": [\"created_by_id\"], \"onDelete\": \"SET NULL\", \"referencedTable\": \"admin_users\", \"referencedColumns\": [\"id\"]}, {\"name\": \"strapi_api_tokens_updated_by_id_fk\", \"columns\": [\"updated_by_id\"], \"onDelete\": \"SET NULL\", \"referencedTable\": \"admin_users\", \"referencedColumns\": [\"id\"]}]}, {\"name\": \"strapi_api_token_permissions\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [], \"name\": \"action\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [{\"useTz\": false, \"precision\": 6}], \"name\": \"created_at\", \"type\": \"datetime\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [{\"useTz\": false, \"precision\": 6}], \"name\": \"updated_at\", \"type\": \"datetime\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"created_by_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"updated_by_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [{\"name\": \"strapi_api_token_permissions_created_by_id_fk\", \"columns\": [\"created_by_id\"]}, {\"name\": \"strapi_api_token_permissions_updated_by_id_fk\", \"columns\": [\"updated_by_id\"]}], \"foreignKeys\": [{\"name\": \"strapi_api_token_permissions_created_by_id_fk\", \"columns\": [\"created_by_id\"], \"onDelete\": \"SET NULL\", \"referencedTable\": \"admin_users\", \"referencedColumns\": [\"id\"]}, {\"name\": \"strapi_api_token_permissions_updated_by_id_fk\", \"columns\": [\"updated_by_id\"], \"onDelete\": \"SET NULL\", \"referencedTable\": \"admin_users\", \"referencedColumns\": [\"id\"]}]}, {\"name\": \"files\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [], \"name\": \"name\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"alternative_text\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"caption\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"width\", \"type\": \"integer\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"height\", \"type\": \"integer\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"formats\", \"type\": \"jsonb\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"hash\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"ext\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"mime\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [10, 2], \"name\": \"size\", \"type\": \"decimal\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"url\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"preview_url\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"provider\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"provider_metadata\", \"type\": \"jsonb\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"folder_path\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [{\"useTz\": false, \"precision\": 6}], \"name\": \"created_at\", \"type\": \"datetime\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [{\"useTz\": false, \"precision\": 6}], \"name\": \"updated_at\", \"type\": \"datetime\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"created_by_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"updated_by_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [{\"name\": \"upload_files_folder_path_index\", \"type\": null, \"columns\": [\"folder_path\"]}, {\"name\": \"files_created_by_id_fk\", \"columns\": [\"created_by_id\"]}, {\"name\": \"files_updated_by_id_fk\", \"columns\": [\"updated_by_id\"]}], \"foreignKeys\": [{\"name\": \"files_created_by_id_fk\", \"columns\": [\"created_by_id\"], \"onDelete\": \"SET NULL\", \"referencedTable\": \"admin_users\", \"referencedColumns\": [\"id\"]}, {\"name\": \"files_updated_by_id_fk\", \"columns\": [\"updated_by_id\"], \"onDelete\": \"SET NULL\", \"referencedTable\": \"admin_users\", \"referencedColumns\": [\"id\"]}]}, {\"name\": \"upload_folders\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [], \"name\": \"name\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"path_id\", \"type\": \"integer\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"path\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [{\"useTz\": false, \"precision\": 6}], \"name\": \"created_at\", \"type\": \"datetime\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [{\"useTz\": false, \"precision\": 6}], \"name\": \"updated_at\", \"type\": \"datetime\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"created_by_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"updated_by_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [{\"name\": \"upload_folders_path_id_index\", \"type\": \"unique\", \"columns\": [\"path_id\"]}, {\"name\": \"upload_folders_path_index\", \"type\": \"unique\", \"columns\": [\"path\"]}, {\"name\": \"upload_folders_created_by_id_fk\", \"columns\": [\"created_by_id\"]}, {\"name\": \"upload_folders_updated_by_id_fk\", \"columns\": [\"updated_by_id\"]}], \"foreignKeys\": [{\"name\": \"upload_folders_created_by_id_fk\", \"columns\": [\"created_by_id\"], \"onDelete\": \"SET NULL\", \"referencedTable\": \"admin_users\", \"referencedColumns\": [\"id\"]}, {\"name\": \"upload_folders_updated_by_id_fk\", \"columns\": [\"updated_by_id\"], \"onDelete\": \"SET NULL\", \"referencedTable\": \"admin_users\", \"referencedColumns\": [\"id\"]}]}, {\"name\": \"up_permissions\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [], \"name\": \"action\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [{\"useTz\": false, \"precision\": 6}], \"name\": \"created_at\", \"type\": \"datetime\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [{\"useTz\": false, \"precision\": 6}], \"name\": \"updated_at\", \"type\": \"datetime\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"created_by_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"updated_by_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [{\"name\": \"up_permissions_created_by_id_fk\", \"columns\": [\"created_by_id\"]}, {\"name\": \"up_permissions_updated_by_id_fk\", \"columns\": [\"updated_by_id\"]}], \"foreignKeys\": [{\"name\": \"up_permissions_created_by_id_fk\", \"columns\": [\"created_by_id\"], \"onDelete\": \"SET NULL\", \"referencedTable\": \"admin_users\", \"referencedColumns\": [\"id\"]}, {\"name\": \"up_permissions_updated_by_id_fk\", \"columns\": [\"updated_by_id\"], \"onDelete\": \"SET NULL\", \"referencedTable\": \"admin_users\", \"referencedColumns\": [\"id\"]}]}, {\"name\": \"up_roles\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [], \"name\": \"name\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"description\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"type\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [{\"useTz\": false, \"precision\": 6}], \"name\": \"created_at\", \"type\": \"datetime\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [{\"useTz\": false, \"precision\": 6}], \"name\": \"updated_at\", \"type\": \"datetime\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"created_by_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"updated_by_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [{\"name\": \"up_roles_created_by_id_fk\", \"columns\": [\"created_by_id\"]}, {\"name\": \"up_roles_updated_by_id_fk\", \"columns\": [\"updated_by_id\"]}], \"foreignKeys\": [{\"name\": \"up_roles_created_by_id_fk\", \"columns\": [\"created_by_id\"], \"onDelete\": \"SET NULL\", \"referencedTable\": \"admin_users\", \"referencedColumns\": [\"id\"]}, {\"name\": \"up_roles_updated_by_id_fk\", \"columns\": [\"updated_by_id\"], \"onDelete\": \"SET NULL\", \"referencedTable\": \"admin_users\", \"referencedColumns\": [\"id\"]}]}, {\"name\": \"up_users\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [], \"name\": \"username\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"email\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"provider\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"password\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"reset_password_token\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"confirmation_token\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"confirmed\", \"type\": \"boolean\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"blocked\", \"type\": \"boolean\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"phone\", \"type\": \"bigInteger\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"is_lender\", \"type\": \"boolean\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [\"longtext\"], \"name\": \"aboutme\", \"type\": \"text\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"birth\", \"type\": \"date\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"name\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"slug\", \"type\": \"string\", \"unique\": true, \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"first_name\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"last_name\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [{\"useTz\": false, \"precision\": 6}], \"name\": \"created_at\", \"type\": \"datetime\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [{\"useTz\": false, \"precision\": 6}], \"name\": \"updated_at\", \"type\": \"datetime\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"created_by_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"updated_by_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [{\"name\": \"up_users_slug_unique\", \"type\": \"unique\", \"columns\": [\"slug\"]}, {\"name\": \"up_users_created_by_id_fk\", \"columns\": [\"created_by_id\"]}, {\"name\": \"up_users_updated_by_id_fk\", \"columns\": [\"updated_by_id\"]}], \"foreignKeys\": [{\"name\": \"up_users_created_by_id_fk\", \"columns\": [\"created_by_id\"], \"onDelete\": \"SET NULL\", \"referencedTable\": \"admin_users\", \"referencedColumns\": [\"id\"]}, {\"name\": \"up_users_updated_by_id_fk\", \"columns\": [\"updated_by_id\"], \"onDelete\": \"SET NULL\", \"referencedTable\": \"admin_users\", \"referencedColumns\": [\"id\"]}]}, {\"name\": \"i18n_locale\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [], \"name\": \"name\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"code\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [{\"useTz\": false, \"precision\": 6}], \"name\": \"created_at\", \"type\": \"datetime\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [{\"useTz\": false, \"precision\": 6}], \"name\": \"updated_at\", \"type\": \"datetime\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"created_by_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"updated_by_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [{\"name\": \"i18n_locale_created_by_id_fk\", \"columns\": [\"created_by_id\"]}, {\"name\": \"i18n_locale_updated_by_id_fk\", \"columns\": [\"updated_by_id\"]}], \"foreignKeys\": [{\"name\": \"i18n_locale_created_by_id_fk\", \"columns\": [\"created_by_id\"], \"onDelete\": \"SET NULL\", \"referencedTable\": \"admin_users\", \"referencedColumns\": [\"id\"]}, {\"name\": \"i18n_locale_updated_by_id_fk\", \"columns\": [\"updated_by_id\"], \"onDelete\": \"SET NULL\", \"referencedTable\": \"admin_users\", \"referencedColumns\": [\"id\"]}]}, {\"name\": \"categories\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [], \"name\": \"name\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"state\", \"type\": \"boolean\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"slug\", \"type\": \"string\", \"unique\": true, \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [{\"useTz\": false, \"precision\": 6}], \"name\": \"created_at\", \"type\": \"datetime\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [{\"useTz\": false, \"precision\": 6}], \"name\": \"updated_at\", \"type\": \"datetime\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [{\"useTz\": false, \"precision\": 6}], \"name\": \"published_at\", \"type\": \"datetime\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"created_by_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"updated_by_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [{\"name\": \"categories_slug_unique\", \"type\": \"unique\", \"columns\": [\"slug\"]}, {\"name\": \"categories_created_by_id_fk\", \"columns\": [\"created_by_id\"]}, {\"name\": \"categories_updated_by_id_fk\", \"columns\": [\"updated_by_id\"]}], \"foreignKeys\": [{\"name\": \"categories_created_by_id_fk\", \"columns\": [\"created_by_id\"], \"onDelete\": \"SET NULL\", \"referencedTable\": \"admin_users\", \"referencedColumns\": [\"id\"]}, {\"name\": \"categories_updated_by_id_fk\", \"columns\": [\"updated_by_id\"], \"onDelete\": \"SET NULL\", \"referencedTable\": \"admin_users\", \"referencedColumns\": [\"id\"]}]}, {\"name\": \"cities\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [], \"name\": \"name\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"identificador\", \"type\": \"string\", \"unique\": true, \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"slug\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [{\"useTz\": false, \"precision\": 6}], \"name\": \"created_at\", \"type\": \"datetime\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [{\"useTz\": false, \"precision\": 6}], \"name\": \"updated_at\", \"type\": \"datetime\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [{\"useTz\": false, \"precision\": 6}], \"name\": \"published_at\", \"type\": \"datetime\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"created_by_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"updated_by_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [{\"name\": \"cities_identificador_unique\", \"type\": \"unique\", \"columns\": [\"identificador\"]}, {\"name\": \"cities_created_by_id_fk\", \"columns\": [\"created_by_id\"]}, {\"name\": \"cities_updated_by_id_fk\", \"columns\": [\"updated_by_id\"]}], \"foreignKeys\": [{\"name\": \"cities_created_by_id_fk\", \"columns\": [\"created_by_id\"], \"onDelete\": \"SET NULL\", \"referencedTable\": \"admin_users\", \"referencedColumns\": [\"id\"]}, {\"name\": \"cities_updated_by_id_fk\", \"columns\": [\"updated_by_id\"], \"onDelete\": \"SET NULL\", \"referencedTable\": \"admin_users\", \"referencedColumns\": [\"id\"]}]}, {\"name\": \"lenders\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [{\"useTz\": false, \"precision\": 6}], \"name\": \"created_at\", \"type\": \"datetime\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [{\"useTz\": false, \"precision\": 6}], \"name\": \"updated_at\", \"type\": \"datetime\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [{\"useTz\": false, \"precision\": 6}], \"name\": \"published_at\", \"type\": \"datetime\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"created_by_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"updated_by_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [{\"name\": \"lenders_created_by_id_fk\", \"columns\": [\"created_by_id\"]}, {\"name\": \"lenders_updated_by_id_fk\", \"columns\": [\"updated_by_id\"]}], \"foreignKeys\": [{\"name\": \"lenders_created_by_id_fk\", \"columns\": [\"created_by_id\"], \"onDelete\": \"SET NULL\", \"referencedTable\": \"admin_users\", \"referencedColumns\": [\"id\"]}, {\"name\": \"lenders_updated_by_id_fk\", \"columns\": [\"updated_by_id\"], \"onDelete\": \"SET NULL\", \"referencedTable\": \"admin_users\", \"referencedColumns\": [\"id\"]}]}, {\"name\": \"provinces\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [], \"name\": \"name\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"identificador\", \"type\": \"string\", \"unique\": true, \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"slug\", \"type\": \"string\", \"unique\": true, \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [{\"useTz\": false, \"precision\": 6}], \"name\": \"created_at\", \"type\": \"datetime\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [{\"useTz\": false, \"precision\": 6}], \"name\": \"updated_at\", \"type\": \"datetime\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [{\"useTz\": false, \"precision\": 6}], \"name\": \"published_at\", \"type\": \"datetime\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"created_by_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"updated_by_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [{\"name\": \"provinces_identificador_unique\", \"type\": \"unique\", \"columns\": [\"identificador\"]}, {\"name\": \"provinces_slug_unique\", \"type\": \"unique\", \"columns\": [\"slug\"]}, {\"name\": \"provinces_created_by_id_fk\", \"columns\": [\"created_by_id\"]}, {\"name\": \"provinces_updated_by_id_fk\", \"columns\": [\"updated_by_id\"]}], \"foreignKeys\": [{\"name\": \"provinces_created_by_id_fk\", \"columns\": [\"created_by_id\"], \"onDelete\": \"SET NULL\", \"referencedTable\": \"admin_users\", \"referencedColumns\": [\"id\"]}, {\"name\": \"provinces_updated_by_id_fk\", \"columns\": [\"updated_by_id\"], \"onDelete\": \"SET NULL\", \"referencedTable\": \"admin_users\", \"referencedColumns\": [\"id\"]}]}, {\"name\": \"reviews\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [], \"name\": \"rating\", \"type\": \"integer\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [\"longtext\"], \"name\": \"comment\", \"type\": \"text\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [{\"useTz\": false, \"precision\": 6}], \"name\": \"created_at\", \"type\": \"datetime\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [{\"useTz\": false, \"precision\": 6}], \"name\": \"updated_at\", \"type\": \"datetime\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [{\"useTz\": false, \"precision\": 6}], \"name\": \"published_at\", \"type\": \"datetime\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"created_by_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"updated_by_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [{\"name\": \"reviews_created_by_id_fk\", \"columns\": [\"created_by_id\"]}, {\"name\": \"reviews_updated_by_id_fk\", \"columns\": [\"updated_by_id\"]}], \"foreignKeys\": [{\"name\": \"reviews_created_by_id_fk\", \"columns\": [\"created_by_id\"], \"onDelete\": \"SET NULL\", \"referencedTable\": \"admin_users\", \"referencedColumns\": [\"id\"]}, {\"name\": \"reviews_updated_by_id_fk\", \"columns\": [\"updated_by_id\"], \"onDelete\": \"SET NULL\", \"referencedTable\": \"admin_users\", \"referencedColumns\": [\"id\"]}]}, {\"name\": \"services\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [], \"name\": \"price\", \"type\": \"integer\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"finished_at\", \"type\": \"date\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [{\"useTz\": false, \"precision\": 6}], \"name\": \"created_at\", \"type\": \"datetime\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [{\"useTz\": false, \"precision\": 6}], \"name\": \"updated_at\", \"type\": \"datetime\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [{\"useTz\": false, \"precision\": 6}], \"name\": \"published_at\", \"type\": \"datetime\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"created_by_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"updated_by_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [{\"name\": \"services_created_by_id_fk\", \"columns\": [\"created_by_id\"]}, {\"name\": \"services_updated_by_id_fk\", \"columns\": [\"updated_by_id\"]}], \"foreignKeys\": [{\"name\": \"services_created_by_id_fk\", \"columns\": [\"created_by_id\"], \"onDelete\": \"SET NULL\", \"referencedTable\": \"admin_users\", \"referencedColumns\": [\"id\"]}, {\"name\": \"services_updated_by_id_fk\", \"columns\": [\"updated_by_id\"], \"onDelete\": \"SET NULL\", \"referencedTable\": \"admin_users\", \"referencedColumns\": [\"id\"]}]}, {\"name\": \"admin_permissions_role_links\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [], \"name\": \"permission_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"role_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [{\"name\": \"admin_permissions_role_links_fk\", \"columns\": [\"permission_id\"]}, {\"name\": \"admin_permissions_role_links_inv_fk\", \"columns\": [\"role_id\"]}], \"foreignKeys\": [{\"name\": \"admin_permissions_role_links_fk\", \"columns\": [\"permission_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"admin_permissions\", \"referencedColumns\": [\"id\"]}, {\"name\": \"admin_permissions_role_links_inv_fk\", \"columns\": [\"role_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"admin_roles\", \"referencedColumns\": [\"id\"]}]}, {\"name\": \"admin_users_roles_links\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [], \"name\": \"user_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"role_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [{\"name\": \"admin_users_roles_links_fk\", \"columns\": [\"user_id\"]}, {\"name\": \"admin_users_roles_links_inv_fk\", \"columns\": [\"role_id\"]}], \"foreignKeys\": [{\"name\": \"admin_users_roles_links_fk\", \"columns\": [\"user_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"admin_users\", \"referencedColumns\": [\"id\"]}, {\"name\": \"admin_users_roles_links_inv_fk\", \"columns\": [\"role_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"admin_roles\", \"referencedColumns\": [\"id\"]}]}, {\"name\": \"strapi_api_token_permissions_token_links\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [], \"name\": \"api_token_permission_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"api_token_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [{\"name\": \"strapi_api_token_permissions_token_links_fk\", \"columns\": [\"api_token_permission_id\"]}, {\"name\": \"strapi_api_token_permissions_token_links_inv_fk\", \"columns\": [\"api_token_id\"]}], \"foreignKeys\": [{\"name\": \"strapi_api_token_permissions_token_links_fk\", \"columns\": [\"api_token_permission_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"strapi_api_token_permissions\", \"referencedColumns\": [\"id\"]}, {\"name\": \"strapi_api_token_permissions_token_links_inv_fk\", \"columns\": [\"api_token_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"strapi_api_tokens\", \"referencedColumns\": [\"id\"]}]}, {\"name\": \"files_related_morphs\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [], \"name\": \"file_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"related_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"related_type\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"field\", \"type\": \"string\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"order\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [{\"name\": \"files_related_morphs_fk\", \"columns\": [\"file_id\"]}], \"foreignKeys\": [{\"name\": \"files_related_morphs_fk\", \"columns\": [\"file_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"files\", \"referencedColumns\": [\"id\"]}]}, {\"name\": \"files_folder_links\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [], \"name\": \"file_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"folder_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [{\"name\": \"files_folder_links_fk\", \"columns\": [\"file_id\"]}, {\"name\": \"files_folder_links_inv_fk\", \"columns\": [\"folder_id\"]}], \"foreignKeys\": [{\"name\": \"files_folder_links_fk\", \"columns\": [\"file_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"files\", \"referencedColumns\": [\"id\"]}, {\"name\": \"files_folder_links_inv_fk\", \"columns\": [\"folder_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"upload_folders\", \"referencedColumns\": [\"id\"]}]}, {\"name\": \"upload_folders_parent_links\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [], \"name\": \"folder_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"inv_folder_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [{\"name\": \"upload_folders_parent_links_fk\", \"columns\": [\"folder_id\"]}, {\"name\": \"upload_folders_parent_links_inv_fk\", \"columns\": [\"inv_folder_id\"]}], \"foreignKeys\": [{\"name\": \"upload_folders_parent_links_fk\", \"columns\": [\"folder_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"upload_folders\", \"referencedColumns\": [\"id\"]}, {\"name\": \"upload_folders_parent_links_inv_fk\", \"columns\": [\"inv_folder_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"upload_folders\", \"referencedColumns\": [\"id\"]}]}, {\"name\": \"up_permissions_role_links\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [], \"name\": \"permission_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"role_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [{\"name\": \"up_permissions_role_links_fk\", \"columns\": [\"permission_id\"]}, {\"name\": \"up_permissions_role_links_inv_fk\", \"columns\": [\"role_id\"]}], \"foreignKeys\": [{\"name\": \"up_permissions_role_links_fk\", \"columns\": [\"permission_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"up_permissions\", \"referencedColumns\": [\"id\"]}, {\"name\": \"up_permissions_role_links_inv_fk\", \"columns\": [\"role_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"up_roles\", \"referencedColumns\": [\"id\"]}]}, {\"name\": \"up_users_role_links\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [], \"name\": \"user_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"role_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [{\"name\": \"up_users_role_links_fk\", \"columns\": [\"user_id\"]}, {\"name\": \"up_users_role_links_inv_fk\", \"columns\": [\"role_id\"]}], \"foreignKeys\": [{\"name\": \"up_users_role_links_fk\", \"columns\": [\"user_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"up_users\", \"referencedColumns\": [\"id\"]}, {\"name\": \"up_users_role_links_inv_fk\", \"columns\": [\"role_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"up_roles\", \"referencedColumns\": [\"id\"]}]}, {\"name\": \"up_users_categories_links\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [], \"name\": \"user_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"category_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [{\"name\": \"up_users_categories_links_fk\", \"columns\": [\"user_id\"]}, {\"name\": \"up_users_categories_links_inv_fk\", \"columns\": [\"category_id\"]}], \"foreignKeys\": [{\"name\": \"up_users_categories_links_fk\", \"columns\": [\"user_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"up_users\", \"referencedColumns\": [\"id\"]}, {\"name\": \"up_users_categories_links_inv_fk\", \"columns\": [\"category_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"categories\", \"referencedColumns\": [\"id\"]}]}, {\"name\": \"up_users_lender_links\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [], \"name\": \"user_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"lender_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [{\"name\": \"up_users_lender_links_fk\", \"columns\": [\"user_id\"]}, {\"name\": \"up_users_lender_links_inv_fk\", \"columns\": [\"lender_id\"]}], \"foreignKeys\": [{\"name\": \"up_users_lender_links_fk\", \"columns\": [\"user_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"up_users\", \"referencedColumns\": [\"id\"]}, {\"name\": \"up_users_lender_links_inv_fk\", \"columns\": [\"lender_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"lenders\", \"referencedColumns\": [\"id\"]}]}, {\"name\": \"up_users_provincia_links\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [], \"name\": \"user_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"province_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [{\"name\": \"up_users_provincia_links_fk\", \"columns\": [\"user_id\"]}, {\"name\": \"up_users_provincia_links_inv_fk\", \"columns\": [\"province_id\"]}], \"foreignKeys\": [{\"name\": \"up_users_provincia_links_fk\", \"columns\": [\"user_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"up_users\", \"referencedColumns\": [\"id\"]}, {\"name\": \"up_users_provincia_links_inv_fk\", \"columns\": [\"province_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"provinces\", \"referencedColumns\": [\"id\"]}]}, {\"name\": \"up_users_localidad_links\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [], \"name\": \"user_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"city_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [{\"name\": \"up_users_localidad_links_fk\", \"columns\": [\"user_id\"]}, {\"name\": \"up_users_localidad_links_inv_fk\", \"columns\": [\"city_id\"]}], \"foreignKeys\": [{\"name\": \"up_users_localidad_links_fk\", \"columns\": [\"user_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"up_users\", \"referencedColumns\": [\"id\"]}, {\"name\": \"up_users_localidad_links_inv_fk\", \"columns\": [\"city_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"cities\", \"referencedColumns\": [\"id\"]}]}, {\"name\": \"categories_city_links\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [], \"name\": \"category_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"city_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [{\"name\": \"categories_city_links_fk\", \"columns\": [\"category_id\"]}, {\"name\": \"categories_city_links_inv_fk\", \"columns\": [\"city_id\"]}], \"foreignKeys\": [{\"name\": \"categories_city_links_fk\", \"columns\": [\"category_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"categories\", \"referencedColumns\": [\"id\"]}, {\"name\": \"categories_city_links_inv_fk\", \"columns\": [\"city_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"cities\", \"referencedColumns\": [\"id\"]}]}, {\"name\": \"categories_lender_links\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [], \"name\": \"category_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"lender_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [{\"name\": \"categories_lender_links_fk\", \"columns\": [\"category_id\"]}, {\"name\": \"categories_lender_links_inv_fk\", \"columns\": [\"lender_id\"]}], \"foreignKeys\": [{\"name\": \"categories_lender_links_fk\", \"columns\": [\"category_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"categories\", \"referencedColumns\": [\"id\"]}, {\"name\": \"categories_lender_links_inv_fk\", \"columns\": [\"lender_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"lenders\", \"referencedColumns\": [\"id\"]}]}, {\"name\": \"categories_provinces_links\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [], \"name\": \"category_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"province_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [{\"name\": \"categories_provinces_links_fk\", \"columns\": [\"category_id\"]}, {\"name\": \"categories_provinces_links_inv_fk\", \"columns\": [\"province_id\"]}], \"foreignKeys\": [{\"name\": \"categories_provinces_links_fk\", \"columns\": [\"category_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"categories\", \"referencedColumns\": [\"id\"]}, {\"name\": \"categories_provinces_links_inv_fk\", \"columns\": [\"province_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"provinces\", \"referencedColumns\": [\"id\"]}]}, {\"name\": \"cities_province_links\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [], \"name\": \"city_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"province_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [{\"name\": \"cities_province_links_fk\", \"columns\": [\"city_id\"]}, {\"name\": \"cities_province_links_inv_fk\", \"columns\": [\"province_id\"]}], \"foreignKeys\": [{\"name\": \"cities_province_links_fk\", \"columns\": [\"city_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"cities\", \"referencedColumns\": [\"id\"]}, {\"name\": \"cities_province_links_inv_fk\", \"columns\": [\"province_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"provinces\", \"referencedColumns\": [\"id\"]}]}, {\"name\": \"lenders_service_links\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [], \"name\": \"lender_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"service_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [{\"name\": \"lenders_service_links_fk\", \"columns\": [\"lender_id\"]}, {\"name\": \"lenders_service_links_inv_fk\", \"columns\": [\"service_id\"]}], \"foreignKeys\": [{\"name\": \"lenders_service_links_fk\", \"columns\": [\"lender_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"lenders\", \"referencedColumns\": [\"id\"]}, {\"name\": \"lenders_service_links_inv_fk\", \"columns\": [\"service_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"services\", \"referencedColumns\": [\"id\"]}]}, {\"name\": \"reviews_lender_links\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [], \"name\": \"review_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"lender_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [{\"name\": \"reviews_lender_links_fk\", \"columns\": [\"review_id\"]}, {\"name\": \"reviews_lender_links_inv_fk\", \"columns\": [\"lender_id\"]}], \"foreignKeys\": [{\"name\": \"reviews_lender_links_fk\", \"columns\": [\"review_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"reviews\", \"referencedColumns\": [\"id\"]}, {\"name\": \"reviews_lender_links_inv_fk\", \"columns\": [\"lender_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"lenders\", \"referencedColumns\": [\"id\"]}]}, {\"name\": \"reviews_users_review_creator_links\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [], \"name\": \"review_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"user_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [{\"name\": \"reviews_users_review_creator_links_fk\", \"columns\": [\"review_id\"]}, {\"name\": \"reviews_users_review_creator_links_inv_fk\", \"columns\": [\"user_id\"]}], \"foreignKeys\": [{\"name\": \"reviews_users_review_creator_links_fk\", \"columns\": [\"review_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"reviews\", \"referencedColumns\": [\"id\"]}, {\"name\": \"reviews_users_review_creator_links_inv_fk\", \"columns\": [\"user_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"up_users\", \"referencedColumns\": [\"id\"]}]}, {\"name\": \"reviews_service_links\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [], \"name\": \"review_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"service_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [{\"name\": \"reviews_service_links_fk\", \"columns\": [\"review_id\"]}, {\"name\": \"reviews_service_links_inv_fk\", \"columns\": [\"service_id\"]}], \"foreignKeys\": [{\"name\": \"reviews_service_links_fk\", \"columns\": [\"review_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"reviews\", \"referencedColumns\": [\"id\"]}, {\"name\": \"reviews_service_links_inv_fk\", \"columns\": [\"service_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"services\", \"referencedColumns\": [\"id\"]}]}, {\"name\": \"services_category_links\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [], \"name\": \"service_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"category_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [{\"name\": \"services_category_links_fk\", \"columns\": [\"service_id\"]}, {\"name\": \"services_category_links_inv_fk\", \"columns\": [\"category_id\"]}], \"foreignKeys\": [{\"name\": \"services_category_links_fk\", \"columns\": [\"service_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"services\", \"referencedColumns\": [\"id\"]}, {\"name\": \"services_category_links_inv_fk\", \"columns\": [\"category_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"categories\", \"referencedColumns\": [\"id\"]}]}, {\"name\": \"services_lender_links\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [], \"name\": \"service_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"lender_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [{\"name\": \"services_lender_links_fk\", \"columns\": [\"service_id\"]}, {\"name\": \"services_lender_links_inv_fk\", \"columns\": [\"lender_id\"]}], \"foreignKeys\": [{\"name\": \"services_lender_links_fk\", \"columns\": [\"service_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"services\", \"referencedColumns\": [\"id\"]}, {\"name\": \"services_lender_links_inv_fk\", \"columns\": [\"lender_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"lenders\", \"referencedColumns\": [\"id\"]}]}, {\"name\": \"services_users_recruiter_links\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [], \"name\": \"service_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"user_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [{\"name\": \"services_users_recruiter_links_fk\", \"columns\": [\"service_id\"]}, {\"name\": \"services_users_recruiter_links_inv_fk\", \"columns\": [\"user_id\"]}], \"foreignKeys\": [{\"name\": \"services_users_recruiter_links_fk\", \"columns\": [\"service_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"services\", \"referencedColumns\": [\"id\"]}, {\"name\": \"services_users_recruiter_links_inv_fk\", \"columns\": [\"user_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"up_users\", \"referencedColumns\": [\"id\"]}]}, {\"name\": \"services_review_links\", \"columns\": [{\"args\": [{\"primary\": true, \"primaryKey\": true}], \"name\": \"id\", \"type\": \"increments\", \"unsigned\": false, \"defaultTo\": null, \"notNullable\": true}, {\"args\": [], \"name\": \"service_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}, {\"args\": [], \"name\": \"review_id\", \"type\": \"integer\", \"unsigned\": true, \"defaultTo\": null, \"notNullable\": false}], \"indexes\": [{\"name\": \"services_review_links_fk\", \"columns\": [\"service_id\"]}, {\"name\": \"services_review_links_inv_fk\", \"columns\": [\"review_id\"]}], \"foreignKeys\": [{\"name\": \"services_review_links_fk\", \"columns\": [\"service_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"services\", \"referencedColumns\": [\"id\"]}, {\"name\": \"services_review_links_inv_fk\", \"columns\": [\"review_id\"], \"onDelete\": \"CASCADE\", \"referencedTable\": \"reviews\", \"referencedColumns\": [\"id\"]}]}]}', '2022-11-10 21:48:35', 'caabebcb4984b4d874b10c81b4091111');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `strapi_migrations`
--

CREATE TABLE `strapi_migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `strapi_webhooks`
--

CREATE TABLE `strapi_webhooks` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `url` longtext,
  `headers` json DEFAULT NULL,
  `events` json DEFAULT NULL,
  `enabled` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `upload_folders`
--

CREATE TABLE `upload_folders` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `path_id` int(11) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `created_by_id` int(10) UNSIGNED DEFAULT NULL,
  `updated_by_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `upload_folders`
--

INSERT INTO `upload_folders` (`id`, `name`, `path_id`, `path`, `created_at`, `updated_at`, `created_by_id`, `updated_by_id`) VALUES
(1, 'API Uploads', 1, '/1', '2022-11-09 17:31:49.244000', '2022-11-09 17:31:49.244000', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `upload_folders_parent_links`
--

CREATE TABLE `upload_folders_parent_links` (
  `id` int(10) UNSIGNED NOT NULL,
  `folder_id` int(10) UNSIGNED DEFAULT NULL,
  `inv_folder_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `up_permissions`
--

CREATE TABLE `up_permissions` (
  `id` int(10) UNSIGNED NOT NULL,
  `action` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `created_by_id` int(10) UNSIGNED DEFAULT NULL,
  `updated_by_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `up_permissions`
--

INSERT INTO `up_permissions` (`id`, `action`, `created_at`, `updated_at`, `created_by_id`, `updated_by_id`) VALUES
(1, 'plugin::users-permissions.user.me', '2022-10-13 22:58:15.118000', '2022-10-13 22:58:15.118000', NULL, NULL),
(2, 'plugin::users-permissions.auth.changePassword', '2022-10-13 22:58:15.118000', '2022-10-13 22:58:15.118000', NULL, NULL),
(3, 'plugin::users-permissions.auth.callback', '2022-10-13 22:58:15.135000', '2022-10-13 22:58:15.135000', NULL, NULL),
(4, 'plugin::users-permissions.auth.connect', '2022-10-13 22:58:15.135000', '2022-10-13 22:58:15.135000', NULL, NULL),
(5, 'plugin::users-permissions.auth.resetPassword', '2022-10-13 22:58:15.135000', '2022-10-13 22:58:15.135000', NULL, NULL),
(6, 'plugin::users-permissions.auth.forgotPassword', '2022-10-13 22:58:15.135000', '2022-10-13 22:58:15.135000', NULL, NULL),
(7, 'plugin::users-permissions.auth.emailConfirmation', '2022-10-13 22:58:15.135000', '2022-10-13 22:58:15.135000', NULL, NULL),
(8, 'plugin::users-permissions.auth.sendEmailConfirmation', '2022-10-13 22:58:15.135000', '2022-10-13 22:58:15.135000', NULL, NULL),
(9, 'plugin::users-permissions.auth.register', '2022-10-13 22:58:15.135000', '2022-10-13 22:58:15.135000', NULL, NULL),
(10, 'api::category.category.find', '2022-10-13 23:04:06.681000', '2022-10-13 23:04:06.681000', NULL, NULL),
(11, 'api::category.category.findOne', '2022-10-13 23:04:06.681000', '2022-10-13 23:04:06.681000', NULL, NULL),
(12, 'api::category.category.create', '2022-10-13 23:04:06.681000', '2022-10-13 23:04:06.681000', NULL, NULL),
(13, 'api::category.category.update', '2022-10-13 23:04:06.681000', '2022-10-13 23:04:06.681000', NULL, NULL),
(14, 'plugin::users-permissions.auth.changePassword', '2022-10-19 14:08:01.683000', '2022-10-19 14:08:01.683000', NULL, NULL),
(15, 'plugin::users-permissions.user.create', '2022-10-19 14:08:01.683000', '2022-10-19 14:08:01.683000', NULL, NULL),
(16, 'plugin::users-permissions.user.find', '2022-10-19 14:08:01.683000', '2022-10-19 14:08:01.683000', NULL, NULL),
(22, 'plugin::users-permissions.auth.callback', '2022-10-21 00:15:32.389000', '2022-10-21 00:15:32.389000', NULL, NULL),
(23, 'plugin::users-permissions.auth.changePassword', '2022-10-21 00:15:32.389000', '2022-10-21 00:15:32.389000', NULL, NULL),
(24, 'plugin::users-permissions.auth.resetPassword', '2022-10-21 00:15:32.389000', '2022-10-21 00:15:32.389000', NULL, NULL),
(25, 'plugin::users-permissions.auth.forgotPassword', '2022-10-21 00:15:32.389000', '2022-10-21 00:15:32.389000', NULL, NULL),
(26, 'plugin::users-permissions.auth.sendEmailConfirmation', '2022-10-21 00:15:32.390000', '2022-10-21 00:15:32.390000', NULL, NULL),
(27, 'plugin::users-permissions.user.me', '2022-10-21 00:15:32.390000', '2022-10-21 00:15:32.390000', NULL, NULL),
(28, 'plugin::users-permissions.permissions.getPermissions', '2022-10-21 00:15:32.390000', '2022-10-21 00:15:32.390000', NULL, NULL),
(29, 'plugin::users-permissions.user.update', '2022-10-21 00:15:32.390000', '2022-10-21 00:15:32.390000', NULL, NULL),
(30, 'plugin::users-permissions.auth.register', '2022-10-21 00:15:32.390000', '2022-10-21 00:15:32.390000', NULL, NULL),
(31, 'plugin::users-permissions.user.find', '2022-10-21 00:15:32.390000', '2022-10-21 00:15:32.390000', NULL, NULL),
(32, 'plugin::users-permissions.auth.emailConfirmation', '2022-10-21 00:15:32.390000', '2022-10-21 00:15:32.390000', NULL, NULL),
(33, 'plugin::users-permissions.user.findOne', '2022-10-21 00:15:32.390000', '2022-10-21 00:15:32.390000', NULL, NULL),
(34, 'plugin::users-permissions.auth.connect', '2022-10-21 00:15:32.389000', '2022-10-21 00:15:32.389000', NULL, NULL),
(35, 'plugin::users-permissions.role.findOne', '2022-10-21 00:16:34.387000', '2022-10-21 00:16:34.387000', NULL, NULL),
(36, 'plugin::users-permissions.role.find', '2022-10-21 00:16:34.387000', '2022-10-21 00:16:34.387000', NULL, NULL),
(37, 'plugin::users-permissions.role.updateRole', '2022-10-21 00:16:34.387000', '2022-10-21 00:16:34.387000', NULL, NULL),
(38, 'plugin::users-permissions.auth.callback', '2022-10-21 00:22:22.321000', '2022-10-21 00:22:22.321000', NULL, NULL),
(39, 'plugin::users-permissions.auth.resetPassword', '2022-10-21 00:22:22.321000', '2022-10-21 00:22:22.321000', NULL, NULL),
(40, 'plugin::users-permissions.auth.connect', '2022-10-21 00:22:22.321000', '2022-10-21 00:22:22.321000', NULL, NULL),
(41, 'plugin::users-permissions.auth.sendEmailConfirmation', '2022-10-21 00:22:22.321000', '2022-10-21 00:22:22.321000', NULL, NULL),
(42, 'plugin::users-permissions.auth.emailConfirmation', '2022-10-21 00:22:22.321000', '2022-10-21 00:22:22.321000', NULL, NULL),
(43, 'plugin::users-permissions.auth.forgotPassword', '2022-10-21 00:22:22.321000', '2022-10-21 00:22:22.321000', NULL, NULL),
(44, 'plugin::users-permissions.user.update', '2022-10-21 00:22:22.321000', '2022-10-21 00:22:22.321000', NULL, NULL),
(45, 'plugin::users-permissions.user.find', '2022-10-21 00:22:22.322000', '2022-10-21 00:22:22.322000', NULL, NULL),
(46, 'plugin::users-permissions.user.findOne', '2022-10-21 00:22:22.322000', '2022-10-21 00:22:22.322000', NULL, NULL),
(47, 'plugin::users-permissions.role.findOne', '2022-10-21 00:22:22.322000', '2022-10-21 00:22:22.322000', NULL, NULL),
(48, 'plugin::users-permissions.role.updateRole', '2022-10-21 00:22:22.322000', '2022-10-21 00:22:22.322000', NULL, NULL),
(49, 'plugin::users-permissions.role.find', '2022-10-21 00:22:22.322000', '2022-10-21 00:22:22.322000', NULL, NULL),
(51, 'api::category.category.find', '2022-10-25 14:17:17.734000', '2022-10-25 14:17:17.734000', NULL, NULL),
(52, 'api::category.category.findOne', '2022-10-25 14:17:17.734000', '2022-10-25 14:17:17.734000', NULL, NULL),
(53, 'api::category.category.update', '2022-10-25 14:17:17.734000', '2022-10-25 14:17:17.734000', NULL, NULL),
(54, 'api::city.city.find', '2022-10-28 22:44:32.522000', '2022-10-28 22:44:32.522000', NULL, NULL),
(55, 'api::city.city.create', '2022-10-28 22:44:32.522000', '2022-10-28 22:44:32.522000', NULL, NULL),
(56, 'api::city.city.findOne', '2022-10-28 22:44:32.522000', '2022-10-28 22:44:32.522000', NULL, NULL),
(57, 'api::province.province.find', '2022-10-28 22:44:32.522000', '2022-10-28 22:44:32.522000', NULL, NULL),
(58, 'api::province.province.findOne', '2022-10-28 22:44:32.522000', '2022-10-28 22:44:32.522000', NULL, NULL),
(59, 'api::province.province.create', '2022-10-28 22:44:32.522000', '2022-10-28 22:44:32.522000', NULL, NULL),
(61, 'api::city.city.find', '2022-10-29 15:52:41.447000', '2022-10-29 15:52:41.447000', NULL, NULL),
(62, 'api::city.city.findOne', '2022-10-29 15:52:41.447000', '2022-10-29 15:52:41.447000', NULL, NULL),
(63, 'api::city.city.create', '2022-10-29 15:52:41.447000', '2022-10-29 15:52:41.447000', NULL, NULL),
(64, 'api::city.city.update', '2022-10-29 15:52:52.943000', '2022-10-29 15:52:52.943000', NULL, NULL),
(65, 'api::province.province.find', '2022-10-29 15:52:52.943000', '2022-10-29 15:52:52.943000', NULL, NULL),
(66, 'api::province.province.findOne', '2022-10-29 15:52:52.943000', '2022-10-29 15:52:52.943000', NULL, NULL),
(67, 'api::province.province.create', '2022-10-29 15:52:52.943000', '2022-10-29 15:52:52.943000', NULL, NULL),
(68, 'api::province.province.update', '2022-10-29 15:52:52.943000', '2022-10-29 15:52:52.943000', NULL, NULL),
(72, 'api::category.category.find', '2022-11-05 15:20:46.911000', '2022-11-05 15:20:46.911000', NULL, NULL),
(73, 'api::category.category.findOne', '2022-11-05 15:20:46.911000', '2022-11-05 15:20:46.911000', NULL, NULL),
(74, 'api::category.category.update', '2022-11-05 15:20:46.911000', '2022-11-05 15:20:46.911000', NULL, NULL),
(75, 'api::city.city.findOne', '2022-11-05 15:20:46.911000', '2022-11-05 15:20:46.911000', NULL, NULL),
(76, 'api::province.province.find', '2022-11-05 15:20:46.911000', '2022-11-05 15:20:46.911000', NULL, NULL),
(77, 'api::province.province.create', '2022-11-05 15:20:46.911000', '2022-11-05 15:20:46.911000', NULL, NULL),
(78, 'api::city.city.find', '2022-11-05 15:20:46.911000', '2022-11-05 15:20:46.911000', NULL, NULL),
(79, 'api::city.city.create', '2022-11-05 15:20:46.911000', '2022-11-05 15:20:46.911000', NULL, NULL),
(80, 'api::city.city.delete', '2022-11-05 15:20:46.911000', '2022-11-05 15:20:46.911000', NULL, NULL),
(81, 'api::review.review.findOne', '2022-11-05 15:20:46.911000', '2022-11-05 15:20:46.911000', NULL, NULL),
(82, 'api::province.province.findOne', '2022-11-05 15:20:46.911000', '2022-11-05 15:20:46.911000', NULL, NULL),
(83, 'api::province.province.delete', '2022-11-05 15:20:46.911000', '2022-11-05 15:20:46.911000', NULL, NULL),
(84, 'api::service.service.find', '2022-11-05 15:20:46.911000', '2022-11-05 15:20:46.911000', NULL, NULL),
(85, 'api::service.service.findOne', '2022-11-05 15:20:46.911000', '2022-11-05 15:20:46.911000', NULL, NULL),
(86, 'api::service.service.create', '2022-11-05 15:20:46.911000', '2022-11-05 15:20:46.911000', NULL, NULL),
(87, 'api::service.service.update', '2022-11-05 15:20:46.911000', '2022-11-05 15:20:46.911000', NULL, NULL),
(88, 'api::service.service.delete', '2022-11-05 15:20:46.911000', '2022-11-05 15:20:46.911000', NULL, NULL),
(89, 'plugin::users-permissions.user.updateLoggedInUser', '2022-11-05 15:20:46.911000', '2022-11-05 15:20:46.911000', NULL, NULL),
(90, 'api::review.review.find', '2022-11-05 15:20:46.911000', '2022-11-05 15:20:46.911000', NULL, NULL),
(91, 'api::review.review.find', '2022-11-05 23:06:34.938000', '2022-11-05 23:06:34.938000', NULL, NULL),
(92, 'api::review.review.findOne', '2022-11-05 23:06:34.939000', '2022-11-05 23:06:34.939000', NULL, NULL),
(93, 'api::review.review.create', '2022-11-05 23:06:34.939000', '2022-11-05 23:06:34.939000', NULL, NULL),
(94, 'api::service.service.find', '2022-11-05 23:06:34.939000', '2022-11-05 23:06:34.939000', NULL, NULL),
(95, 'api::service.service.findOne', '2022-11-05 23:06:34.939000', '2022-11-05 23:06:34.939000', NULL, NULL),
(96, 'api::review.review.find', '2022-11-05 23:07:14.310000', '2022-11-05 23:07:14.310000', NULL, NULL),
(97, 'api::review.review.findOne', '2022-11-05 23:07:14.310000', '2022-11-05 23:07:14.310000', NULL, NULL),
(98, 'api::service.service.find', '2022-11-05 23:07:14.310000', '2022-11-05 23:07:14.310000', NULL, NULL),
(99, 'api::service.service.findOne', '2022-11-05 23:07:14.310000', '2022-11-05 23:07:14.310000', NULL, NULL),
(100, 'plugin::content-type-builder.content-types.getContentTypes', '2022-11-05 23:07:14.310000', '2022-11-05 23:07:14.310000', NULL, NULL),
(101, 'plugin::content-type-builder.content-types.getContentType', '2022-11-05 23:07:14.310000', '2022-11-05 23:07:14.310000', NULL, NULL),
(102, 'plugin::users-permissions.role.findOne', '2022-11-05 23:07:14.310000', '2022-11-05 23:07:14.310000', NULL, NULL),
(103, 'plugin::users-permissions.role.find', '2022-11-05 23:07:14.310000', '2022-11-05 23:07:14.310000', NULL, NULL),
(104, 'plugin::users-permissions.user.findOne', '2022-11-07 21:57:42.620000', '2022-11-07 21:57:42.620000', NULL, NULL),
(105, 'plugin::upload.content-api.find', '2022-11-09 17:27:20.781000', '2022-11-09 17:27:20.781000', NULL, NULL),
(106, 'plugin::upload.content-api.upload', '2022-11-09 17:27:20.781000', '2022-11-09 17:27:20.781000', NULL, NULL),
(107, 'plugin::upload.content-api.findOne', '2022-11-09 17:27:20.781000', '2022-11-09 17:27:20.781000', NULL, NULL),
(108, 'plugin::upload.content-api.find', '2022-11-09 17:28:38.731000', '2022-11-09 17:28:38.731000', NULL, NULL),
(109, 'plugin::upload.content-api.upload', '2022-11-09 17:28:38.731000', '2022-11-09 17:28:38.731000', NULL, NULL),
(110, 'plugin::upload.content-api.findOne', '2022-11-09 17:28:38.731000', '2022-11-09 17:28:38.731000', NULL, NULL),
(111, 'plugin::upload.content-api.find', '2022-11-09 17:28:46.143000', '2022-11-09 17:28:46.143000', NULL, NULL),
(112, 'plugin::upload.content-api.findOne', '2022-11-09 17:28:46.143000', '2022-11-09 17:28:46.143000', NULL, NULL),
(113, 'plugin::upload.content-api.upload', '2022-11-09 17:28:46.143000', '2022-11-09 17:28:46.143000', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `up_permissions_role_links`
--

CREATE TABLE `up_permissions_role_links` (
  `id` int(10) UNSIGNED NOT NULL,
  `permission_id` int(10) UNSIGNED DEFAULT NULL,
  `role_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `up_permissions_role_links`
--

INSERT INTO `up_permissions_role_links` (`id`, `permission_id`, `role_id`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 2),
(4, 4, 2),
(5, 6, 2),
(6, 5, 2),
(7, 9, 2),
(8, 8, 2),
(9, 7, 2),
(10, 10, 2),
(11, 11, 2),
(12, 12, 2),
(13, 13, 2),
(14, 16, 2),
(15, 14, 2),
(16, 15, 2),
(22, 22, 3),
(23, 31, 3),
(24, 23, 3),
(25, 32, 3),
(26, 24, 3),
(27, 25, 3),
(28, 26, 3),
(29, 33, 3),
(30, 28, 3),
(31, 29, 3),
(32, 27, 3),
(33, 30, 3),
(34, 34, 3),
(35, 35, 3),
(36, 37, 3),
(37, 36, 3),
(38, 38, 1),
(39, 39, 1),
(40, 41, 1),
(41, 40, 1),
(42, 44, 1),
(43, 42, 1),
(44, 43, 1),
(45, 47, 1),
(46, 46, 1),
(47, 45, 1),
(48, 48, 1),
(49, 49, 1),
(51, 51, 1),
(52, 52, 1),
(53, 53, 1),
(54, 54, 2),
(55, 55, 2),
(56, 59, 2),
(57, 58, 2),
(58, 56, 2),
(59, 57, 2),
(61, 61, 1),
(62, 62, 1),
(63, 63, 1),
(64, 65, 1),
(65, 66, 1),
(66, 64, 1),
(67, 67, 1),
(68, 68, 1),
(72, 72, 3),
(73, 73, 3),
(74, 74, 3),
(75, 76, 3),
(76, 79, 3),
(77, 81, 3),
(78, 75, 3),
(79, 88, 3),
(80, 82, 3),
(81, 80, 3),
(82, 78, 3),
(83, 89, 3),
(84, 86, 3),
(85, 90, 3),
(86, 83, 3),
(87, 85, 3),
(88, 77, 3),
(89, 87, 3),
(90, 84, 3),
(91, 91, 1),
(92, 92, 1),
(93, 95, 1),
(94, 94, 1),
(95, 93, 1),
(96, 96, 2),
(97, 97, 2),
(98, 98, 2),
(99, 103, 2),
(100, 102, 2),
(101, 101, 2),
(102, 99, 2),
(103, 100, 2),
(104, 104, 2),
(105, 105, 1),
(106, 106, 1),
(107, 107, 1),
(108, 108, 2),
(109, 109, 2),
(110, 110, 2),
(111, 111, 3),
(112, 113, 3),
(113, 112, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `up_roles`
--

CREATE TABLE `up_roles` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `created_by_id` int(10) UNSIGNED DEFAULT NULL,
  `updated_by_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `up_roles`
--

INSERT INTO `up_roles` (`id`, `name`, `description`, `type`, `created_at`, `updated_at`, `created_by_id`, `updated_by_id`) VALUES
(1, 'Authenticated', 'Default role given to authenticated user.', 'authenticated', '2022-10-13 22:58:15.103000', '2022-11-12 20:46:42.770000', NULL, NULL),
(2, 'Public', 'Default role given to unauthenticated user.', 'public', '2022-10-13 22:58:15.107000', '2022-11-12 20:46:47.350000', NULL, NULL),
(3, 'Lender', 'User that want to be hired and sells his skills', 'lender', '2022-10-21 00:09:37.103000', '2022-11-12 20:46:28.004000', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `up_users`
--

CREATE TABLE `up_users` (
  `id` int(10) UNSIGNED NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `provider` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `reset_password_token` varchar(255) DEFAULT NULL,
  `confirmation_token` varchar(255) DEFAULT NULL,
  `confirmed` tinyint(1) DEFAULT NULL,
  `blocked` tinyint(1) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `created_by_id` int(10) UNSIGNED DEFAULT NULL,
  `updated_by_id` int(10) UNSIGNED DEFAULT NULL,
  `phone` bigint(20) DEFAULT NULL,
  `is_lender` tinyint(1) DEFAULT NULL,
  `aboutme` longtext,
  `birth` date DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `up_users`
--

INSERT INTO `up_users` (`id`, `username`, `email`, `provider`, `password`, `reset_password_token`, `confirmation_token`, `confirmed`, `blocked`, `created_at`, `updated_at`, `created_by_id`, `updated_by_id`, `phone`, `is_lender`, `aboutme`, `birth`, `name`, `slug`, `first_name`, `last_name`) VALUES
(55, 'santiago.avilez@est.fi.uncoma.edu.ar', 'santiago.avilez@est.fi.uncoma.edu.ar', 'local', '$2a$10$ldpzroeOpOLdawcaI05X3OpiMH2lBv1g9G1QDHUcyIqDfkrGd6/ei', NULL, NULL, 1, 0, '2022-10-29 15:51:04.819000', '2022-11-15 12:20:28.657000', NULL, 1, 1112112111, 1, 'holaaaa', '2022-10-14', 'santiago avilez', 'santiago-avilez-2', 'Santiago', 'Avilez '),
(56, 'test@test.com', 'test@test.com', 'local', '$2a$10$iODG9G8lZMxaP2go/NDwMekuMiQA4kF6I5eXVyzcnqDl42GoIA4wu', NULL, NULL, 1, 0, '2022-10-31 20:27:41.250000', '2022-11-10 21:50:16.391000', NULL, 1, 2984648765, 1, 'pruebaasasd', '2022-11-08', 'santiago avilez', 'santiago-avilez', 'santiago', 'avilez'),
(57, 'pruba@pr.com', 'pruba@pr.com', 'local', '$2a$10$UJABQcYzcLk7ILOWiXq3wOPPA0Gwc.ydOqOltR6ajfb25OaHPBVH2', NULL, NULL, 1, 0, '2022-11-01 15:59:05.433000', '2022-11-13 21:15:21.949000', NULL, 1, NULL, NULL, 'Soy un programador full stack, actualmente cursando último año en la tecnicatura web', NULL, 'prueba prueba', 'prueba-prueba', 'prueba ', 'prueba '),
(58, 'prueba2@prueba.com', 'prueba2@prueba.com', 'local', '$2a$10$Sa9x6WJZCUCIMXmv5r2QrOszjecJIAVVRwW3HpJYPtHyEMxAKhddW', NULL, NULL, 1, 0, '2022-11-01 16:06:54.879000', '2022-11-13 21:16:18.614000', NULL, 1, NULL, NULL, NULL, NULL, 'prueba2 prueba2', 'p-r', 'prueba2', 'prueba2'),
(59, 'peur@123.com', 'peur@123.com', 'local', '$2a$10$Wu9k/4X2tzmzBYHVvEBmseLfexiPHq.WeSO7jqZ/MjGu9XXYcpzJq', NULL, NULL, 1, 0, '2022-11-01 16:24:42.548000', '2022-11-14 20:58:05.564000', NULL, 1, 5492984645441, NULL, 'Soy una diseñadora', NULL, 'prueba 3', 'prueba-1', 'prueba 3', 'prueba 3'),
(60, 'prub21a@pr.com', 'prub21a@pr.com', 'local', '$2a$10$972FVemMn6m1mijJG/IczeXBKkQPEKXfB9y.6akXW0E/l4IGEwGcy', NULL, NULL, 1, 0, '2022-11-01 17:03:46.280000', '2022-11-01 17:03:46.280000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(61, 'test.qs@test.com', 'test.qs@test.com', 'local', '$2a$10$I55Po2ACE66.YQScZX6NR.qg0Z97SCm1RsFMU5Kf1re6inB6ZLL/.', NULL, NULL, 1, 0, '2022-11-01 17:04:57.397000', '2022-11-01 17:04:57.397000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(62, 'testasdas.qs@test.com', 'testasdas.qs@test.com', 'local', '$2a$10$pfxCIXLODFMswaSGUK3op.T//sTDJtTURfSh8CymCvv96kShnCQpu', NULL, NULL, 1, 0, '2022-11-01 17:12:07.871000', '2022-11-01 17:12:07.871000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(63, 'teasdst@test.com', 'teasdst@test.com', 'local', '$2a$10$.J/tPPo/ek0Ha1B.NlXJfO6yk3YgYpk487eJ23C3E.m5OZuTTpY1m', NULL, NULL, 1, 0, '2022-11-01 17:16:40.476000', '2022-11-01 17:17:01.414000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(64, 'tesasdasdt@test.com', 'tesasdasdt@test.com', 'local', '$2a$10$YKX5AS/6lTdlkgxJzp1Rce2QYcBXax0OyByv8L.32d86KseMeIHVa', NULL, NULL, 1, 0, '2022-11-01 17:22:13.431000', '2022-11-01 17:22:13.431000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(65, 'tessadasdt@test.com', 'tessadasdt@test.com', 'local', '$2a$10$YrSB2QmnZrrxvHKlIoi1ZOWHbwxYLCnX.CvkxR7.8Vks9hMNH4WES', NULL, NULL, 1, 0, '2022-11-01 17:25:44.663000', '2022-11-01 17:26:39.043000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(66, 'testasdad1@test.com', 'testasdad1@test.com', 'local', '$2a$10$J/RDjZBXpRnZa.MntnHFheRDQV7rgEqDVBxMTO9gszsFOLYhpvNKW', NULL, NULL, 1, 0, '2022-11-01 17:32:51.701000', '2022-11-01 17:32:51.701000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(67, 'testaa8@test.com', 'testaa8@test.com', 'local', '$2a$10$ujV5Z..V.VDF482O10UKsOtpoFA/GbIko2D9k4Nz3Ou6G5edFppjq', NULL, NULL, 1, 0, '2022-11-01 17:33:50.606000', '2022-11-01 17:34:21.128000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(68, 'a@gas.com', 'a@gas.com', 'local', '$2a$10$NLJnqOMHlu.mDAqtlS0iWegHe1lX4pTtZpbwNfat5sTJqr9ZV0HIG', NULL, NULL, 1, 0, '2022-11-01 17:37:08.384000', '2022-11-01 17:40:23.616000', NULL, NULL, 5492984645441, 1, 'hola soy un desarrollador web', '2022-10-30', NULL, NULL, NULL, NULL),
(69, 'prueba1@prueba.com', 'prueba1@prueba.com', 'local', '$2a$10$NhFwWc6gPsCtDBSyvMS9Pek.GtNig/tnSrxzPtRArS.258qZNhpIG', NULL, NULL, 1, 0, '2022-11-01 18:53:40.401000', '2022-11-01 18:54:16.246000', NULL, NULL, 5492984645441, 1, 'hola soy un desarrollador web full stack', '2022-10-30', NULL, NULL, NULL, NULL),
(70, 'prueba12@gmail.com', 'prueba12@gmail.com', 'local', '$2a$10$iD1KQrFLzwyAn6BtLqF54OB5Gnw9FxaFHaH/5K6NmGf7vlbDNDRNW', NULL, NULL, 1, 0, '2022-11-01 19:10:12.729000', '2022-11-13 21:20:45.359000', NULL, 1, 5492984645441, 1, 'hola soy un desarrollador web full stack\nactualizado', '2022-10-30', 'prueba 12', 'prue-1', 'prueba 12', 'prueba 12'),
(71, 'test121@test.com', 'test121@test.com', 'local', '$2a$10$KHCBxlAEEqLvLgJwRRKPCeTwEQy21ESCliRzvDQxd2pb68qYtXNoO', NULL, NULL, 1, 0, '2022-11-01 19:15:23.386000', '2022-11-01 19:15:48.799000', NULL, NULL, 5492984645441, 1, 'hola soy un desarrollador web', '2022-11-04', NULL, NULL, NULL, NULL),
(73, 'rpr@as.aa', 'rpr@as.aa', 'local', '$2a$10$O8x0b54SbXXWT9DUQcM5duN6C3Cclbn/Hv62TIUo.UOVTc6lEbALO', NULL, NULL, 1, 0, '2022-11-05 17:04:45.000000', '2022-11-13 21:21:06.982000', NULL, 1, 5492984645441, 1, 'hola soy un desarrollador web', '2022-11-02', 'administrador', 'administrador', 'administrador', 'administrador'),
(74, 'pruebaasdas1@a.com', 'pruebaasdas1@a.com', 'local', '$2a$10$3qjv6/j1hlO6Wh1rZJ9Eeu.BhKMadGNqg7jaShAdkjoZQNBI9xvfe', NULL, NULL, 1, 0, '2022-11-07 23:14:39.254000', '2022-11-07 23:17:09.404000', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(75, 'asdasdqasda@asda.com', 'asdasdqasda@asda.com', 'local', '$2a$10$MT8xM2pK6zxYJ2.8UWHh5uXgNKfSI1XN2QKhB1XOM0yAo8krL9QR6', NULL, NULL, 1, 0, '2022-11-07 23:19:03.454000', '2022-11-13 21:21:20.292000', NULL, 1, NULL, NULL, NULL, NULL, 'test3', 'test3', 'test3', 'test3'),
(76, 'tesqasd@asad.casd', 'tesqasd@asad.casd', 'local', '$2a$10$T4.KI/usPeZje2oOk6/JZ..r0TAmI4yF89ZXPRzymlvxfPW/7YFK.', NULL, NULL, 1, 0, '2022-11-09 12:39:20.688000', '2022-11-09 12:41:14.985000', NULL, NULL, 5492984645441, 0, 'hola soy un desarrollador web', '2022-11-11', NULL, NULL, NULL, NULL),
(77, 'test@asdasd.cmo', 'test@asdasd.cmo', 'local', '$2a$10$5NT/Ol0y61llWc0OexVK6u1g9oPwbuwp5brvc1/DtVOw3T1Nw4qV2', NULL, NULL, 1, 0, '2022-11-09 12:42:29.683000', '2022-11-13 21:21:33.432000', NULL, 1, 5492984645441, 1, 'hola soy un desarrollador web full stack', '2022-11-18', 'javier monsalve', 'javier-monsalve', 'javier ', 'monsalve'),
(78, 'test@asdasasdasd.com', 'test@asdasasdasd.com', 'local', '$2a$10$r4now./nRq.Tp/ZGEEFCdeeE0uggvXUnuQSO8GGBQJYCexl.mC4LW', NULL, NULL, 1, 0, '2022-11-09 14:41:56.226000', '2022-11-09 14:44:51.652000', NULL, NULL, 5492984645441, 0, 'hola soy un desarrollador web', '2022-11-02', NULL, NULL, NULL, NULL),
(79, 'teasd1asd1asdst@test.com', 'teasd1asd1asdst@test.com', 'local', '$2a$10$3Ehdmgw/iXHtu15O6eBOt.UWEboIMt05j0Y2SPNcXAhazDlavEeOS', NULL, NULL, 1, 0, '2022-11-09 14:55:14.765000', '2022-11-13 21:21:53.240000', NULL, 1, 1111111111111111, 1, 'hola soy un desarrollador web', '2022-11-03', 'Melina Nazarena Batalla', 'melina-nazarena-batalla', 'Melina ', 'Nazarena Batalla'),
(80, 'teasdasdast@test.com', 'teasdasdast@test.com', 'local', '$2a$10$CY/BAUJ2caT0ix6NJK657uXME8OAuH8iFm2TWuajToYlFtBHRy88W', NULL, NULL, 1, 0, '2022-11-09 18:04:56.027000', '2022-11-09 18:05:10.875000', NULL, NULL, 5492984645441, 0, 'hola soy un desarrollador web', '2022-11-01', NULL, NULL, NULL, NULL),
(81, 'asdasdad@asdsad.com', 'asdasdad@asdsad.com', 'local', '$2a$10$fiKjRnmuojO7eAseGu.ED.7X1uTKTDXpS1fotLHRGD7QNUOYn8phC', NULL, NULL, 1, 0, '2022-11-09 18:46:53.864000', '2022-11-09 18:46:53.864000', NULL, NULL, NULL, NULL, NULL, NULL, 'Santiago Ariza', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `up_users_categories_links`
--

CREATE TABLE `up_users_categories_links` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `category_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `up_users_categories_links`
--

INSERT INTO `up_users_categories_links` (`id`, `user_id`, `category_id`) VALUES
(295, 68, 1),
(299, 69, 5),
(300, 69, 5),
(301, 69, 5),
(316, 71, 2),
(362, 56, 2),
(618, 57, 3),
(619, 57, 2),
(620, 58, 4),
(624, 70, 4),
(625, 70, 5),
(626, 70, 3),
(627, 73, 2),
(628, 77, 2),
(629, 79, 1),
(638, 59, 3),
(639, 59, 2),
(640, 59, 5),
(649, 55, 5),
(650, 55, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `up_users_lender_links`
--

CREATE TABLE `up_users_lender_links` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `lender_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `up_users_localidad_links`
--

CREATE TABLE `up_users_localidad_links` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `city_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `up_users_localidad_links`
--

INSERT INTO `up_users_localidad_links` (`id`, `user_id`, `city_id`) VALUES
(6, 68, 62),
(7, 69, 73),
(32, 56, 81),
(93, 57, 78),
(94, 58, 76),
(96, 70, 62),
(97, 73, 73),
(98, 77, 76),
(99, 79, 76),
(103, 59, 78),
(108, 55, 82);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `up_users_provincia_links`
--

CREATE TABLE `up_users_provincia_links` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `province_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `up_users_provincia_links`
--

INSERT INTO `up_users_provincia_links` (`id`, `user_id`, `province_id`) VALUES
(20, 68, 4),
(21, 69, 4),
(23, 71, 10),
(50, 56, 20),
(111, 57, 4),
(112, 58, 13),
(114, 70, 4),
(115, 73, 4),
(116, 77, 13),
(117, 79, 13),
(121, 59, 4),
(126, 55, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `up_users_role_links`
--

CREATE TABLE `up_users_role_links` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `role_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `up_users_role_links`
--

INSERT INTO `up_users_role_links` (`id`, `user_id`, `role_id`) VALUES
(75, 60, 1),
(76, 61, 1),
(77, 62, 1),
(78, 63, 1),
(79, 64, 1),
(80, 65, 1),
(81, 66, 1),
(82, 67, 1),
(83, 68, 1),
(84, 69, 1),
(87, 71, 1),
(105, 74, 1),
(108, 76, 1),
(111, 78, 1),
(121, 80, 1),
(122, 81, 1),
(126, 56, 3),
(141, 57, 3),
(142, 58, 3),
(144, 70, 3),
(145, 73, 3),
(146, 75, 3),
(147, 77, 3),
(148, 79, 3),
(149, 55, 3),
(150, 59, 3);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `admin_permissions`
--
ALTER TABLE `admin_permissions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `admin_permissions_created_by_id_fk` (`created_by_id`),
  ADD KEY `admin_permissions_updated_by_id_fk` (`updated_by_id`);

--
-- Indices de la tabla `admin_permissions_role_links`
--
ALTER TABLE `admin_permissions_role_links`
  ADD PRIMARY KEY (`id`),
  ADD KEY `admin_permissions_role_links_fk` (`permission_id`),
  ADD KEY `admin_permissions_role_links_inv_fk` (`role_id`);

--
-- Indices de la tabla `admin_roles`
--
ALTER TABLE `admin_roles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `admin_roles_created_by_id_fk` (`created_by_id`),
  ADD KEY `admin_roles_updated_by_id_fk` (`updated_by_id`);

--
-- Indices de la tabla `admin_users`
--
ALTER TABLE `admin_users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `admin_users_created_by_id_fk` (`created_by_id`),
  ADD KEY `admin_users_updated_by_id_fk` (`updated_by_id`);

--
-- Indices de la tabla `admin_users_roles_links`
--
ALTER TABLE `admin_users_roles_links`
  ADD PRIMARY KEY (`id`),
  ADD KEY `admin_users_roles_links_fk` (`user_id`),
  ADD KEY `admin_users_roles_links_inv_fk` (`role_id`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `categories_slug_unique` (`slug`),
  ADD KEY `categories_created_by_id_fk` (`created_by_id`),
  ADD KEY `categories_updated_by_id_fk` (`updated_by_id`);

--
-- Indices de la tabla `categories_city_links`
--
ALTER TABLE `categories_city_links`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categories_city_links_fk` (`category_id`),
  ADD KEY `categories_city_links_inv_fk` (`city_id`);

--
-- Indices de la tabla `categories_lender_links`
--
ALTER TABLE `categories_lender_links`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categories_lender_links_fk` (`category_id`),
  ADD KEY `categories_lender_links_inv_fk` (`lender_id`);

--
-- Indices de la tabla `categories_provinces_links`
--
ALTER TABLE `categories_provinces_links`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categories_provinces_links_fk` (`category_id`),
  ADD KEY `categories_provinces_links_inv_fk` (`province_id`);

--
-- Indices de la tabla `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cities_identificador_unique` (`identificador`),
  ADD KEY `cities_created_by_id_fk` (`created_by_id`),
  ADD KEY `cities_updated_by_id_fk` (`updated_by_id`);

--
-- Indices de la tabla `cities_province_links`
--
ALTER TABLE `cities_province_links`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cities_province_links_fk` (`city_id`),
  ADD KEY `cities_province_links_inv_fk` (`province_id`);

--
-- Indices de la tabla `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`id`),
  ADD KEY `upload_files_folder_path_index` (`folder_path`),
  ADD KEY `files_created_by_id_fk` (`created_by_id`),
  ADD KEY `files_updated_by_id_fk` (`updated_by_id`);

--
-- Indices de la tabla `files_folder_links`
--
ALTER TABLE `files_folder_links`
  ADD PRIMARY KEY (`id`),
  ADD KEY `files_folder_links_fk` (`file_id`),
  ADD KEY `files_folder_links_inv_fk` (`folder_id`);

--
-- Indices de la tabla `files_related_morphs`
--
ALTER TABLE `files_related_morphs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `files_related_morphs_fk` (`file_id`);

--
-- Indices de la tabla `i18n_locale`
--
ALTER TABLE `i18n_locale`
  ADD PRIMARY KEY (`id`),
  ADD KEY `i18n_locale_created_by_id_fk` (`created_by_id`),
  ADD KEY `i18n_locale_updated_by_id_fk` (`updated_by_id`);

--
-- Indices de la tabla `lenders`
--
ALTER TABLE `lenders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `lenders_created_by_id_fk` (`created_by_id`),
  ADD KEY `lenders_updated_by_id_fk` (`updated_by_id`);

--
-- Indices de la tabla `lenders_service_links`
--
ALTER TABLE `lenders_service_links`
  ADD PRIMARY KEY (`id`),
  ADD KEY `lenders_service_links_fk` (`lender_id`),
  ADD KEY `lenders_service_links_inv_fk` (`service_id`);

--
-- Indices de la tabla `provinces`
--
ALTER TABLE `provinces`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `provinces_identificador_unique` (`identificador`),
  ADD UNIQUE KEY `provinces_slug_unique` (`slug`),
  ADD KEY `provinces_created_by_id_fk` (`created_by_id`),
  ADD KEY `provinces_updated_by_id_fk` (`updated_by_id`);

--
-- Indices de la tabla `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reviews_created_by_id_fk` (`created_by_id`),
  ADD KEY `reviews_updated_by_id_fk` (`updated_by_id`);

--
-- Indices de la tabla `reviews_lender_links`
--
ALTER TABLE `reviews_lender_links`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reviews_lender_links_fk` (`review_id`),
  ADD KEY `reviews_lender_links_inv_fk` (`lender_id`);

--
-- Indices de la tabla `reviews_service_links`
--
ALTER TABLE `reviews_service_links`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reviews_service_links_fk` (`review_id`),
  ADD KEY `reviews_service_links_inv_fk` (`service_id`);

--
-- Indices de la tabla `reviews_users_review_creator_links`
--
ALTER TABLE `reviews_users_review_creator_links`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reviews_users_review_creator_links_fk` (`review_id`),
  ADD KEY `reviews_users_review_creator_links_inv_fk` (`user_id`);

--
-- Indices de la tabla `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`),
  ADD KEY `services_created_by_id_fk` (`created_by_id`),
  ADD KEY `services_updated_by_id_fk` (`updated_by_id`);

--
-- Indices de la tabla `services_category_links`
--
ALTER TABLE `services_category_links`
  ADD PRIMARY KEY (`id`),
  ADD KEY `services_category_links_fk` (`service_id`),
  ADD KEY `services_category_links_inv_fk` (`category_id`);

--
-- Indices de la tabla `services_lender_links`
--
ALTER TABLE `services_lender_links`
  ADD PRIMARY KEY (`id`),
  ADD KEY `services_lender_links_fk` (`service_id`),
  ADD KEY `services_lender_links_inv_fk` (`lender_id`);

--
-- Indices de la tabla `services_review_links`
--
ALTER TABLE `services_review_links`
  ADD PRIMARY KEY (`id`),
  ADD KEY `services_review_links_fk` (`service_id`),
  ADD KEY `services_review_links_inv_fk` (`review_id`);

--
-- Indices de la tabla `services_users_recruiter_links`
--
ALTER TABLE `services_users_recruiter_links`
  ADD PRIMARY KEY (`id`),
  ADD KEY `services_users_recruiter_links_fk` (`service_id`),
  ADD KEY `services_users_recruiter_links_inv_fk` (`user_id`);

--
-- Indices de la tabla `strapi_api_tokens`
--
ALTER TABLE `strapi_api_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `strapi_api_tokens_created_by_id_fk` (`created_by_id`),
  ADD KEY `strapi_api_tokens_updated_by_id_fk` (`updated_by_id`);

--
-- Indices de la tabla `strapi_api_token_permissions`
--
ALTER TABLE `strapi_api_token_permissions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `strapi_api_token_permissions_created_by_id_fk` (`created_by_id`),
  ADD KEY `strapi_api_token_permissions_updated_by_id_fk` (`updated_by_id`);

--
-- Indices de la tabla `strapi_api_token_permissions_token_links`
--
ALTER TABLE `strapi_api_token_permissions_token_links`
  ADD PRIMARY KEY (`id`),
  ADD KEY `strapi_api_token_permissions_token_links_fk` (`api_token_permission_id`),
  ADD KEY `strapi_api_token_permissions_token_links_inv_fk` (`api_token_id`);

--
-- Indices de la tabla `strapi_core_store_settings`
--
ALTER TABLE `strapi_core_store_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `strapi_database_schema`
--
ALTER TABLE `strapi_database_schema`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `strapi_migrations`
--
ALTER TABLE `strapi_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `strapi_webhooks`
--
ALTER TABLE `strapi_webhooks`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `upload_folders`
--
ALTER TABLE `upload_folders`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `upload_folders_path_id_index` (`path_id`),
  ADD UNIQUE KEY `upload_folders_path_index` (`path`),
  ADD KEY `upload_folders_created_by_id_fk` (`created_by_id`),
  ADD KEY `upload_folders_updated_by_id_fk` (`updated_by_id`);

--
-- Indices de la tabla `upload_folders_parent_links`
--
ALTER TABLE `upload_folders_parent_links`
  ADD PRIMARY KEY (`id`),
  ADD KEY `upload_folders_parent_links_fk` (`folder_id`),
  ADD KEY `upload_folders_parent_links_inv_fk` (`inv_folder_id`);

--
-- Indices de la tabla `up_permissions`
--
ALTER TABLE `up_permissions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `up_permissions_created_by_id_fk` (`created_by_id`),
  ADD KEY `up_permissions_updated_by_id_fk` (`updated_by_id`);

--
-- Indices de la tabla `up_permissions_role_links`
--
ALTER TABLE `up_permissions_role_links`
  ADD PRIMARY KEY (`id`),
  ADD KEY `up_permissions_role_links_fk` (`permission_id`),
  ADD KEY `up_permissions_role_links_inv_fk` (`role_id`);

--
-- Indices de la tabla `up_roles`
--
ALTER TABLE `up_roles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `up_roles_created_by_id_fk` (`created_by_id`),
  ADD KEY `up_roles_updated_by_id_fk` (`updated_by_id`);

--
-- Indices de la tabla `up_users`
--
ALTER TABLE `up_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `up_users_slug_unique` (`slug`),
  ADD KEY `up_users_created_by_id_fk` (`created_by_id`),
  ADD KEY `up_users_updated_by_id_fk` (`updated_by_id`);

--
-- Indices de la tabla `up_users_categories_links`
--
ALTER TABLE `up_users_categories_links`
  ADD PRIMARY KEY (`id`),
  ADD KEY `up_users_categories_links_fk` (`user_id`),
  ADD KEY `up_users_categories_links_inv_fk` (`category_id`);

--
-- Indices de la tabla `up_users_lender_links`
--
ALTER TABLE `up_users_lender_links`
  ADD PRIMARY KEY (`id`),
  ADD KEY `up_users_lender_links_fk` (`user_id`),
  ADD KEY `up_users_lender_links_inv_fk` (`lender_id`);

--
-- Indices de la tabla `up_users_localidad_links`
--
ALTER TABLE `up_users_localidad_links`
  ADD PRIMARY KEY (`id`),
  ADD KEY `up_users_localidad_links_fk` (`user_id`),
  ADD KEY `up_users_localidad_links_inv_fk` (`city_id`);

--
-- Indices de la tabla `up_users_provincia_links`
--
ALTER TABLE `up_users_provincia_links`
  ADD PRIMARY KEY (`id`),
  ADD KEY `up_users_provincia_links_fk` (`user_id`),
  ADD KEY `up_users_provincia_links_inv_fk` (`province_id`);

--
-- Indices de la tabla `up_users_role_links`
--
ALTER TABLE `up_users_role_links`
  ADD PRIMARY KEY (`id`),
  ADD KEY `up_users_role_links_fk` (`user_id`),
  ADD KEY `up_users_role_links_inv_fk` (`role_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `admin_permissions`
--
ALTER TABLE `admin_permissions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=298;

--
-- AUTO_INCREMENT de la tabla `admin_permissions_role_links`
--
ALTER TABLE `admin_permissions_role_links`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=298;

--
-- AUTO_INCREMENT de la tabla `admin_roles`
--
ALTER TABLE `admin_roles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `admin_users`
--
ALTER TABLE `admin_users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `admin_users_roles_links`
--
ALTER TABLE `admin_users_roles_links`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `categories_city_links`
--
ALTER TABLE `categories_city_links`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categories_lender_links`
--
ALTER TABLE `categories_lender_links`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categories_provinces_links`
--
ALTER TABLE `categories_provinces_links`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `cities`
--
ALTER TABLE `cities`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- AUTO_INCREMENT de la tabla `cities_province_links`
--
ALTER TABLE `cities_province_links`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `files`
--
ALTER TABLE `files`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT de la tabla `files_folder_links`
--
ALTER TABLE `files_folder_links`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT de la tabla `files_related_morphs`
--
ALTER TABLE `files_related_morphs`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `i18n_locale`
--
ALTER TABLE `i18n_locale`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `lenders`
--
ALTER TABLE `lenders`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `lenders_service_links`
--
ALTER TABLE `lenders_service_links`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `provinces`
--
ALTER TABLE `provinces`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `reviews_lender_links`
--
ALTER TABLE `reviews_lender_links`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `reviews_service_links`
--
ALTER TABLE `reviews_service_links`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `reviews_users_review_creator_links`
--
ALTER TABLE `reviews_users_review_creator_links`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `services`
--
ALTER TABLE `services`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `services_category_links`
--
ALTER TABLE `services_category_links`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `services_lender_links`
--
ALTER TABLE `services_lender_links`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `services_review_links`
--
ALTER TABLE `services_review_links`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `services_users_recruiter_links`
--
ALTER TABLE `services_users_recruiter_links`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `strapi_api_tokens`
--
ALTER TABLE `strapi_api_tokens`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `strapi_api_token_permissions`
--
ALTER TABLE `strapi_api_token_permissions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `strapi_api_token_permissions_token_links`
--
ALTER TABLE `strapi_api_token_permissions_token_links`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `strapi_core_store_settings`
--
ALTER TABLE `strapi_core_store_settings`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `strapi_database_schema`
--
ALTER TABLE `strapi_database_schema`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de la tabla `strapi_migrations`
--
ALTER TABLE `strapi_migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `strapi_webhooks`
--
ALTER TABLE `strapi_webhooks`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `upload_folders`
--
ALTER TABLE `upload_folders`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `upload_folders_parent_links`
--
ALTER TABLE `upload_folders_parent_links`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `up_permissions`
--
ALTER TABLE `up_permissions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=114;

--
-- AUTO_INCREMENT de la tabla `up_permissions_role_links`
--
ALTER TABLE `up_permissions_role_links`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=114;

--
-- AUTO_INCREMENT de la tabla `up_roles`
--
ALTER TABLE `up_roles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `up_users`
--
ALTER TABLE `up_users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT de la tabla `up_users_categories_links`
--
ALTER TABLE `up_users_categories_links`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=651;

--
-- AUTO_INCREMENT de la tabla `up_users_lender_links`
--
ALTER TABLE `up_users_lender_links`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `up_users_localidad_links`
--
ALTER TABLE `up_users_localidad_links`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=109;

--
-- AUTO_INCREMENT de la tabla `up_users_provincia_links`
--
ALTER TABLE `up_users_provincia_links`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=127;

--
-- AUTO_INCREMENT de la tabla `up_users_role_links`
--
ALTER TABLE `up_users_role_links`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=151;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `admin_permissions`
--
ALTER TABLE `admin_permissions`
  ADD CONSTRAINT `admin_permissions_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `admin_permissions_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL;

--
-- Filtros para la tabla `admin_permissions_role_links`
--
ALTER TABLE `admin_permissions_role_links`
  ADD CONSTRAINT `admin_permissions_role_links_fk` FOREIGN KEY (`permission_id`) REFERENCES `admin_permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `admin_permissions_role_links_inv_fk` FOREIGN KEY (`role_id`) REFERENCES `admin_roles` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `admin_roles`
--
ALTER TABLE `admin_roles`
  ADD CONSTRAINT `admin_roles_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `admin_roles_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL;

--
-- Filtros para la tabla `admin_users`
--
ALTER TABLE `admin_users`
  ADD CONSTRAINT `admin_users_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `admin_users_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL;

--
-- Filtros para la tabla `admin_users_roles_links`
--
ALTER TABLE `admin_users_roles_links`
  ADD CONSTRAINT `admin_users_roles_links_fk` FOREIGN KEY (`user_id`) REFERENCES `admin_users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `admin_users_roles_links_inv_fk` FOREIGN KEY (`role_id`) REFERENCES `admin_roles` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `categories`
--
ALTER TABLE `categories`
  ADD CONSTRAINT `categories_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `categories_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL;

--
-- Filtros para la tabla `categories_city_links`
--
ALTER TABLE `categories_city_links`
  ADD CONSTRAINT `categories_city_links_fk` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `categories_city_links_inv_fk` FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `categories_lender_links`
--
ALTER TABLE `categories_lender_links`
  ADD CONSTRAINT `categories_lender_links_fk` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `categories_lender_links_inv_fk` FOREIGN KEY (`lender_id`) REFERENCES `lenders` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `categories_provinces_links`
--
ALTER TABLE `categories_provinces_links`
  ADD CONSTRAINT `categories_provinces_links_fk` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `categories_provinces_links_inv_fk` FOREIGN KEY (`province_id`) REFERENCES `provinces` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `cities`
--
ALTER TABLE `cities`
  ADD CONSTRAINT `cities_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `cities_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL;

--
-- Filtros para la tabla `cities_province_links`
--
ALTER TABLE `cities_province_links`
  ADD CONSTRAINT `cities_province_links_fk` FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `cities_province_links_inv_fk` FOREIGN KEY (`province_id`) REFERENCES `provinces` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `files`
--
ALTER TABLE `files`
  ADD CONSTRAINT `files_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `files_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL;

--
-- Filtros para la tabla `files_folder_links`
--
ALTER TABLE `files_folder_links`
  ADD CONSTRAINT `files_folder_links_fk` FOREIGN KEY (`file_id`) REFERENCES `files` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `files_folder_links_inv_fk` FOREIGN KEY (`folder_id`) REFERENCES `upload_folders` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `files_related_morphs`
--
ALTER TABLE `files_related_morphs`
  ADD CONSTRAINT `files_related_morphs_fk` FOREIGN KEY (`file_id`) REFERENCES `files` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `i18n_locale`
--
ALTER TABLE `i18n_locale`
  ADD CONSTRAINT `i18n_locale_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `i18n_locale_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL;

--
-- Filtros para la tabla `lenders`
--
ALTER TABLE `lenders`
  ADD CONSTRAINT `lenders_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `lenders_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL;

--
-- Filtros para la tabla `lenders_service_links`
--
ALTER TABLE `lenders_service_links`
  ADD CONSTRAINT `lenders_service_links_fk` FOREIGN KEY (`lender_id`) REFERENCES `lenders` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `lenders_service_links_inv_fk` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `provinces`
--
ALTER TABLE `provinces`
  ADD CONSTRAINT `provinces_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `provinces_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL;

--
-- Filtros para la tabla `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `reviews_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL;

--
-- Filtros para la tabla `reviews_lender_links`
--
ALTER TABLE `reviews_lender_links`
  ADD CONSTRAINT `reviews_lender_links_fk` FOREIGN KEY (`review_id`) REFERENCES `reviews` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `reviews_lender_links_inv_fk` FOREIGN KEY (`lender_id`) REFERENCES `lenders` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `reviews_service_links`
--
ALTER TABLE `reviews_service_links`
  ADD CONSTRAINT `reviews_service_links_fk` FOREIGN KEY (`review_id`) REFERENCES `reviews` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `reviews_service_links_inv_fk` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `reviews_users_review_creator_links`
--
ALTER TABLE `reviews_users_review_creator_links`
  ADD CONSTRAINT `reviews_users_review_creator_links_fk` FOREIGN KEY (`review_id`) REFERENCES `reviews` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `reviews_users_review_creator_links_inv_fk` FOREIGN KEY (`user_id`) REFERENCES `up_users` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `services`
--
ALTER TABLE `services`
  ADD CONSTRAINT `services_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `services_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL;

--
-- Filtros para la tabla `services_category_links`
--
ALTER TABLE `services_category_links`
  ADD CONSTRAINT `services_category_links_fk` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `services_category_links_inv_fk` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `services_lender_links`
--
ALTER TABLE `services_lender_links`
  ADD CONSTRAINT `services_lender_links_fk` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `services_lender_links_inv_fk` FOREIGN KEY (`lender_id`) REFERENCES `lenders` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `services_review_links`
--
ALTER TABLE `services_review_links`
  ADD CONSTRAINT `services_review_links_fk` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `services_review_links_inv_fk` FOREIGN KEY (`review_id`) REFERENCES `reviews` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `services_users_recruiter_links`
--
ALTER TABLE `services_users_recruiter_links`
  ADD CONSTRAINT `services_users_recruiter_links_fk` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `services_users_recruiter_links_inv_fk` FOREIGN KEY (`user_id`) REFERENCES `up_users` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `strapi_api_tokens`
--
ALTER TABLE `strapi_api_tokens`
  ADD CONSTRAINT `strapi_api_tokens_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `strapi_api_tokens_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL;

--
-- Filtros para la tabla `strapi_api_token_permissions`
--
ALTER TABLE `strapi_api_token_permissions`
  ADD CONSTRAINT `strapi_api_token_permissions_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `strapi_api_token_permissions_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL;

--
-- Filtros para la tabla `strapi_api_token_permissions_token_links`
--
ALTER TABLE `strapi_api_token_permissions_token_links`
  ADD CONSTRAINT `strapi_api_token_permissions_token_links_fk` FOREIGN KEY (`api_token_permission_id`) REFERENCES `strapi_api_token_permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `strapi_api_token_permissions_token_links_inv_fk` FOREIGN KEY (`api_token_id`) REFERENCES `strapi_api_tokens` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `upload_folders`
--
ALTER TABLE `upload_folders`
  ADD CONSTRAINT `upload_folders_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `upload_folders_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL;

--
-- Filtros para la tabla `upload_folders_parent_links`
--
ALTER TABLE `upload_folders_parent_links`
  ADD CONSTRAINT `upload_folders_parent_links_fk` FOREIGN KEY (`folder_id`) REFERENCES `upload_folders` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `upload_folders_parent_links_inv_fk` FOREIGN KEY (`inv_folder_id`) REFERENCES `upload_folders` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `up_permissions`
--
ALTER TABLE `up_permissions`
  ADD CONSTRAINT `up_permissions_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `up_permissions_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL;

--
-- Filtros para la tabla `up_permissions_role_links`
--
ALTER TABLE `up_permissions_role_links`
  ADD CONSTRAINT `up_permissions_role_links_fk` FOREIGN KEY (`permission_id`) REFERENCES `up_permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `up_permissions_role_links_inv_fk` FOREIGN KEY (`role_id`) REFERENCES `up_roles` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `up_roles`
--
ALTER TABLE `up_roles`
  ADD CONSTRAINT `up_roles_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `up_roles_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL;

--
-- Filtros para la tabla `up_users`
--
ALTER TABLE `up_users`
  ADD CONSTRAINT `up_users_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `up_users_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL;

--
-- Filtros para la tabla `up_users_categories_links`
--
ALTER TABLE `up_users_categories_links`
  ADD CONSTRAINT `up_users_categories_links_fk` FOREIGN KEY (`user_id`) REFERENCES `up_users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `up_users_categories_links_inv_fk` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `up_users_lender_links`
--
ALTER TABLE `up_users_lender_links`
  ADD CONSTRAINT `up_users_lender_links_fk` FOREIGN KEY (`user_id`) REFERENCES `up_users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `up_users_lender_links_inv_fk` FOREIGN KEY (`lender_id`) REFERENCES `lenders` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `up_users_localidad_links`
--
ALTER TABLE `up_users_localidad_links`
  ADD CONSTRAINT `up_users_localidad_links_fk` FOREIGN KEY (`user_id`) REFERENCES `up_users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `up_users_localidad_links_inv_fk` FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `up_users_provincia_links`
--
ALTER TABLE `up_users_provincia_links`
  ADD CONSTRAINT `up_users_provincia_links_fk` FOREIGN KEY (`user_id`) REFERENCES `up_users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `up_users_provincia_links_inv_fk` FOREIGN KEY (`province_id`) REFERENCES `provinces` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `up_users_role_links`
--
ALTER TABLE `up_users_role_links`
  ADD CONSTRAINT `up_users_role_links_fk` FOREIGN KEY (`user_id`) REFERENCES `up_users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `up_users_role_links_inv_fk` FOREIGN KEY (`role_id`) REFERENCES `up_roles` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
