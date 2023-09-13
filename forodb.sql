-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-09-2023 a las 01:32:54
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `forodb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicaciones`
--

CREATE TABLE `publicaciones` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `detalle` text NOT NULL,
  `url_imagen` varchar(255) NOT NULL,
  `fecha_publicacion` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `publicaciones`
--

INSERT INTO `publicaciones` (`id`, `titulo`, `detalle`, `url_imagen`, `fecha_publicacion`) VALUES
(1, 'Ransomware', 'Es un malware que encripta los datos de los dispositivos electrónicos (PC, ETC)', 'https://latam.kaspersky.com/content/es-mx/images/repository/isc/2021/ransomware.jpg', '2023-08-21'),
(3, 'Naturaleza', 'Detalle Naturaleza', 'https://www.repsol.com/content/dam/repsol-corporate/es/sostenibilidad/naturaleza%20bosque%20y%20lago.jpg.transform/rp-rendition-md/image.jpg', '2023-09-11'),
(4, 'Troyano', 'Es un malware que se oculta en archivos que se hacen pasar por legítimos, toman el control del dispositivo.', 'https://concepto.de/wp-content/uploads/2018/10/virus-troyano1-e1539978315283.jpg', '2023-09-13'),
(5, 'Titulo Nuevo', 'Descripcion Nueva', 'https://www.tec-innova.mx/wp-content/uploads/2022/08/troyano.png', '2023-09-19'),
(6, 'Ultima Publicacion', 'Ultimo Detalle', 'https://www.tec-innova.mx/wp-content/uploads/2022/08/troyano.png', '2023-09-11');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `publicaciones`
--
ALTER TABLE `publicaciones`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `publicaciones`
--
ALTER TABLE `publicaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
