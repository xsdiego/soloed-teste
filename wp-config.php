<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'soloed' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'asd!@#' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'yApId-T^`kU )R-n`v@K_9U@~P+k@-iy]rT-qS!wHL+91%.d^~h^*B^-Tv7pR#C-');
define('SECURE_AUTH_KEY',  ']gI-(N4$*UfY2qhN~?mZScx`RL:9-jK9p<N0ZHs])OPTHQ>EPZ;jv^wP-n%t|+Gq');
define('LOGGED_IN_KEY',    'P^V<WFKv|pj*]Q5|]LH:Iw}d-P9Z9H~5|Rj/X@-OPEvvVmQSb.{62`-a(Atn/xlU');
define('NONCE_KEY',        '-j>iHv5|gGV&efv,rZK@5,T+Y:s30l5w7/}Pc`pI4d&|p9b(|!=)0rvO-pw3%4mG');
define('AUTH_SALT',        'C|e<XV++UG>`338)$,P1F:q )LoBBQC[|=F|v>m(,t% iwg3hIA 0g@V$+>4F~)b');
define('SECURE_AUTH_SALT', ']tnu0HM[O[%9:G|R2dvd:$w>`mY6})1A!=y$tiR+iAt +^3?]CSrl|==i%>ykO6F');
define('LOGGED_IN_SALT',   '6@|/jilx5x*KpHd:?V%BR?e+nd;[Ar| fyjE|:Zi}7CX~K`x+ s}L%O[[bJ#KXfC');
define('NONCE_SALT',       'Oun|`p9bhbigy|+C=w]US)?#|!ial`HIu3l|L(E5TRuj:a@m|0B|0]SWL`hU|ima');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
