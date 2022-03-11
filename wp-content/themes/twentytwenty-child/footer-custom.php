<?php get_template_part( 'template/footer-menu-widgets-custom' ); ?>

<footer id="site-footer" class="header-footer-group">

				<div class="section-inner">
					<div class="container container-footer">
						<div class="row">
							<div class="col-md">
								<div class="footer-credits">

									<p class="footer-copyright">
										
										<nav aria-label="<?php esc_attr_e( 'Social links', 'twentytwenty' ); ?>" class="footer-social-wrapper">
											<ul class="social-menu footer-social reset-list-style social-icons fill-children-current-color">
												<?php
												wp_nav_menu(
													array(
														'theme_location'  => 'social',
														'container'       => '',
														'container_class' => '',
														'items_wrap'      => '%3$s',
														'menu_id'         => '',
														'menu_class'      => '',
														'depth'           => 1,
														'link_before'     => '<span class="screen-reader-text">',
														'link_after'      => '</span>',
														'fallback_cb'     => '',
													)
												);
												?>
											</ul><!-- .footer-social -->
										</nav><!-- .footer-social-wrapper -->
										
									</p><!-- .footer-copyright -->

								</div><!-- .footer-credits -->
							</div>

							<div class="col-md">
								<p class="footer-paragraph footer-center">A product of SoloED</p>
							</div>

							<div class="col-md">
								<p class="footer-paragraph footer-right">© 2020 Lift Media. All rights reserved.</p>
							</div>
						</div>
					</div>

				</div><!-- .section-inner -->

			</footer><!-- #site-footer -->

		<?php wp_footer(); ?>

	</body>
</html>
