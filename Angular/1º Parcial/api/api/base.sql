-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-05-2019 a las 22:48:08
-- Versión del servidor: 10.1.31-MariaDB
-- Versión de PHP: 7.2.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `base`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tabla`
--

CREATE TABLE `tabla` (
  `campo1` varchar(200) COLLATE latin1_general_ci DEFAULT NULL,
  `campo2` varchar(200) COLLATE latin1_general_ci DEFAULT NULL,
  `campo3` varchar(200) COLLATE latin1_general_ci DEFAULT NULL,
  `id` bigint(20) UNSIGNED NOT NULL,
  `estado` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Volcado de datos para la tabla `tabla`
--

INSERT INTO `tabla` (`campo1`, `campo2`, `campo3`, `id`, `estado`) VALUES
('sdadsad111111111', 'sadsada', 'sadsadsad', 58, 1),
('fghgfhgf', 'ghfgh', 'fhgfhfghsadsad', 57, 1),
('sdfdsfdsf', 'sdfsdffsd', 'dsdsfdssdffsd', 56, 1),
('dfgfdg', 'fdgfdgdfg', 'dfgfdgdfgdsfsdf', 55, 0),
('gfhgfhfg', 'fghgfhgf', 'hgfhgfh', 54, 0),
('dsfdsf', 'fsdfsdfdsf', 'sdfdsfsdf', 53, 0),
('sdfsdfds122232332323221', 'dsfsdfsd', 'fsdsdfsddff', 51, 0),
('sdfsdfsdf', 'fsdfsdfsd', 'dfsdfdsfsfdf', 52, 0),
('dsadsadasdsadsadas', 'asdasdsad', 'asdsadasd', 50, 0),
('sadasd23213213', 'sadsad', 'sadsadas', 49, 0),
('sadsad', 'sadssd', 'sadsadas', 59, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tabla`
--
ALTER TABLE `tabla`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tabla`
--
ALTER TABLE `tabla`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
