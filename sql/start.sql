-- MySQL dump 10.13  Distrib 8.0.22, for macos10.15 (x86_64)
--
-- Host: 127.0.0.1    Database: account
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `access_modules`
--

DROP TABLE IF EXISTS `access_modules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `access_modules` (
  `idaccess_modules` int NOT NULL,
  `module` varchar(255) DEFAULT NULL,
  `controller` varchar(255) DEFAULT NULL,
  `has_access` tinyint DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  `deleted_date` datetime DEFAULT NULL,
  `role_idrole` int NOT NULL,
  PRIMARY KEY (`idaccess_modules`),
  KEY `fk_access_modules_role1_idx` (`role_idrole`),
  CONSTRAINT `fk_access_modules_role1` FOREIGN KEY (`role_idrole`) REFERENCES `role` (`idrole`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `access_modules`
--

LOCK TABLES `access_modules` WRITE;
/*!40000 ALTER TABLE `access_modules` DISABLE KEYS */;
/*!40000 ALTER TABLE `access_modules` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `idlogin` int NOT NULL AUTO_INCREMENT,
  `page` varchar(255) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  `deleted_date` datetime DEFAULT NULL,
  `user_iduser` int NOT NULL,
  PRIMARY KEY (`idlogin`,`user_iduser`),
  KEY `fk_login_user_idx` (`user_iduser`),
  CONSTRAINT `fk_login_user` FOREIGN KEY (`user_iduser`) REFERENCES `user` (`iduser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `timestamp` bigint NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `idrole` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `deleted_date` datetime DEFAULT NULL,
  PRIMARY KEY (`idrole`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'invitado',NULL,NULL,NULL),(2,'administrator',NULL,NULL,NULL),(3,'doctor',NULL,NULL,NULL),(4,'secretary',NULL,NULL,NULL),(5,'professional1',NULL,NULL,NULL),(6,'professional2','2021-01-17 12:50:53','2021-01-17 12:50:53',NULL);
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `iduser` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `rut` int DEFAULT NULL,
  `phone` int DEFAULT NULL,
  `mail` varchar(255) DEFAULT NULL,
  `birth_date` datetime DEFAULT NULL,
  `is_active` tinyint DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `update_date` datetime DEFAULT NULL,
  `deleted_date` datetime DEFAULT NULL,
  PRIMARY KEY (`iduser`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Cristian','Nores',161409081,57386368,'cristian.nores@gmail.com','1986-06-19 00:00:00',1,'2021-01-15 23:56:22','2021-01-17 00:30:09','2021-01-17 00:30:09'),(2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2021-01-17 00:28:37','2021-01-17 00:28:37'),(3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2021-01-17 00:29:32','2021-01-17 00:29:32'),(4,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2021-01-17 00:29:48','2021-01-17 00:29:48'),(5,'Solange','Riquelme',160374802,2323232,'solange.riquelme@gmail.com','1985-07-03 20:00:00',1,NULL,'2021-01-17 00:46:24',NULL),(6,'Solange','Riquelme',160374802,2323232,'cristian.nores@gmail.com','1985-07-03 20:00:00',1,NULL,'2021-01-17 00:30:04','2021-01-17 00:30:04'),(7,'Solange','Riquelme',160374802,2323232,'cristian.nores@gmail.com','1985-07-03 20:00:00',1,NULL,'2021-01-17 00:30:06','2021-01-17 00:30:06'),(8,'Solange','Riquelme',160374802,2323232,'cristian.nores@gmail.com','1985-07-03 20:00:00',1,NULL,'2021-01-17 00:30:07','2021-01-17 00:30:07'),(9,'Solange','Riquelme',160374802,2323232,'cristian.nores@gmail.com','1985-07-03 20:00:00',1,NULL,'2021-01-17 00:30:08','2021-01-17 00:30:08'),(10,'Solange','Riquelme',160374802,2323232,'cristian.nores@gmail.com','1985-07-03 20:00:00',4,NULL,'2021-01-17 00:30:13','2021-01-17 00:30:13'),(11,'Solange','Riquelme',160374802,2323232,'cristian.nores@gmail.com','1985-07-03 20:00:00',1,NULL,'2021-01-17 00:30:15','2021-01-17 00:30:15'),(12,'Solange','Riquelme',160374802,2323232,'cristian.nores@gmail.com','1985-07-03 20:00:00',1,NULL,'2021-01-17 00:30:24','2021-01-17 00:30:24'),(13,'Cristian ','Nores',161409081,2323232,'cristian.nores@gmail.com','1985-07-03 20:00:00',1,NULL,'2021-01-17 00:40:33',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_has_role`
--

DROP TABLE IF EXISTS `user_has_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_has_role` (
  `user_iduser` int NOT NULL,
  `role_idrole` int NOT NULL,
  PRIMARY KEY (`user_iduser`,`role_idrole`),
  KEY `fk_user_has_role_role1_idx` (`role_idrole`),
  KEY `fk_user_has_role_user1_idx` (`user_iduser`),
  CONSTRAINT `fk_user_has_role_role1` FOREIGN KEY (`role_idrole`) REFERENCES `role` (`idrole`),
  CONSTRAINT `fk_user_has_role_user1` FOREIGN KEY (`user_iduser`) REFERENCES `user` (`iduser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_has_role`
--

LOCK TABLES `user_has_role` WRITE;
/*!40000 ALTER TABLE `user_has_role` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_has_role` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-24 23:55:00
