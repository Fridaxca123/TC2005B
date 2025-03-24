-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 11-03-2025 a las 16:41:38
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `chewy`
--

--
-- Volcado de datos para la tabla `personajes`
--

INSERT INTO `personajes` (`id`, `nombre`, `created_at`) VALUES
(1, 'Cheewbaca', '2025-03-06 16:04:15'),
(2, 'Luke', '2025-03-06 16:06:29'),
(3, 'Han Solo', '2025-03-06 16:17:17'),
(4, 'Bobba Fett', '2025-03-06 16:22:48'),
(5, 'Leia', '2025-03-06 16:28:07'),
(6, 'Jar Jar Binks', '2025-03-10 16:41:21');

--
-- Volcado de datos para la tabla `privilegios`
--

INSERT INTO `privilegios` (`id`, `nombre`, `created_at`) VALUES
(1, 'ver personajes', '2025-03-11 15:37:31'),
(2, 'crear personajes', '2025-03-11 15:37:38');

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `nombre`, `created_at`) VALUES
(1, 'visitante', '2025-03-11 15:37:07'),
(2, 'admin', '2025-03-11 15:37:15');

--
-- Volcado de datos para la tabla `rol_privilegio`
--

INSERT INTO `rol_privilegio` (`rol_id`, `privilegio_id`, `created_at`) VALUES
(1, 1, '2025-03-11 15:37:52'),
(2, 1, '2025-03-11 15:37:58'),
(2, 2, '2025-03-11 15:38:05');

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `username`, `password`, `created_at`) VALUES
(1, 'jacob', 'omar123', '2025-03-10 16:01:16'),
(2, 'omar', '$2b$12$rx2ccR27dGYLWZTbJS0qRe/CTTACh2ycu8N9lP51VdLUDf9tEa93e', '2025-03-10 16:06:53'),
(4, 'rolon', '$2b$12$5/qDbbtzAoCYpoyukPWt4u312jgMNG8wP7e7ROjdIZ/Ym6uYRY5ai', '2025-03-10 16:08:10'),
(5, 'fermin', '$2b$12$er3t1GRVKxWQMMtoiX.Mz.mV3Y2ArknHxL.vfWj/Ptcvbmh7S91K.', '2025-03-10 16:40:25');

--
-- Volcado de datos para la tabla `usuario_rol`
--

INSERT INTO `usuario_rol` (`usuario_id`, `rol_id`, `created_at`) VALUES
(2, 1, '2025-03-11 15:38:32'),
(4, 1, '2025-03-11 15:38:40'),
(5, 1, '2025-03-11 15:38:59'),
(1, 2, '2025-03-11 15:38:23');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
