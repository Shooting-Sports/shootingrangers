<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'shootingrangers');

/** MySQL database username */
define('DB_USER', 'shooter-admin');

/** MySQL database password */
define('DB_PASSWORD','Kgdv6N%MzyH@');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'TVfATemEEp5p00EoPKyOUbTOzcIuuqZFkWYXNiUJ95zE78AN91vzyQwKDbYMvx67');
define('SECURE_AUTH_KEY',  'ufcjGI6YwakE85VNF81I6M0TOWCy87wy2YMpAF1XIA93kJhf3gnR0TOtfTTwOuJM');
define('LOGGED_IN_KEY',    'SsNmoa5m36RFXIU8gSlVyIWWuNXeshVXwZWlyEH1WHEnz8QMT4siRys3jnsBwlqM');
define('NONCE_KEY',        'bJ0Hhp407PiVJU5KvoMfjkg6uwiezt9qSZZNZ3oSL1cXHLR77FLT2zJ9Xcdtm8Ti');
define('AUTH_SALT',        'uilX3l3aOXiURvxpX3kSPV3AGXrli624O1vMmntn3Phgon3XRTZ6c52PvgbXUk4o');
define('SECURE_AUTH_SALT', '2xOawFNXx68u4lgT5awDiS7ZcQwAt87s3YVgJQVKBt2LAUmM6tNuqCiYShnhlmDz');
define('LOGGED_IN_SALT',   'FEEAbovLLVDfzVEbJtddFi7bIMqLsUJT3EJH14KNUXht14PAToWYN2t3B8zow0uO');
define('NONCE_SALT',       'q9ByHhPEumz4XqTtXHczKuFEm1IM4SA8iAGV1L0SxOIQUBmvTh84vTd4YWaHTLig');

/**
 * Other customizations.
 */
define('FS_METHOD','direct');define('FS_CHMOD_DIR',0755);define('FS_CHMOD_FILE',0644);
define('WP_TEMP_DIR',dirname(__FILE__).'/wp-content/uploads');

/**
 * Turn off automatic updates since these are managed upstream.
 */
define('AUTOMATIC_UPDATER_DISABLED', true);


/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* inicio multisite */
define('WP_ALLOW_MULTISITE', true);

define('MULTISITE', true);
define('SUBDOMAIN_INSTALL', true);
define('DOMAIN_CURRENT_SITE', 'www.shootingrangers.com');
define('PATH_CURRENT_SITE', '/');
define('SITE_ID_CURRENT_SITE', 1);
define('BLOG_ID_CURRENT_SITE', 1);

define('SUNRISE', 'on');


/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
