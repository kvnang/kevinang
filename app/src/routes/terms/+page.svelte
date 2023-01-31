<main>
	<section class="section section-m-t section-m-b">
		<div class="inner">
			<div class="prose content">
				<h1>Terms & Conditions</h1>
				<p>
					These are the terms and conditions of use of the KevinAng.com web site, its related
					websites, and its and their successor web sites (collectively referred to as the “Site”),
					which are owned and operated by Kevin Ang (which may be referred to in the Terms as “we”,
					“us”, KevinAng.com” or Kevin Ang”). By visiting the Site or by indicating during any
					purchase on the Site that you agree to these terms and conditions of use, you are agreeing
					to be legally bound by them and also by our Privacy Policy (collectively with these terms
					and conditions of use referred to as the “Terms” or the “Agreement”), and are also
					agreeing that while you use the Site or use anything that you purchase from the Site you
					will comply with all applicable laws and regulations.
				</p>
				<p>
					If you do not agree with the Terms, you are prohibited from using or accessing the Site.
					The services, materials, information, software, and content contained in or on or that may
					be purchased from the Site (collectively referred to herein as the “Services”) are
					protected by applicable law, including copyright and trademark law.
				</p>
				<p>
					By agreeing to the Terms, you agree to our use, collection and disclosure of your personal
					information as described in our Privacy Policy.
				</p>
				<h2>Purchases on the Site</h2>
				<p>
					You agree to pay for all Services that you access through the Site, and that we may charge
					your credit card or other permitted payment method through our payment processor for any
					Services accessed. The payment methods that we accept are described on the Site. You are
					responsible for the timely payment of all fees and for providing our payment processor
					with valid credit card or other permitted payment details for payment of all fees. All
					purchases on the Site are final, but if you are not satisfied with your purchase, you may
					contact us at the email address below to request a refund. Any refund requests must be
					received within 90 days of the purchase date. Refunds are given at our sole discretion.
				</p>
				<h2>Disclaimers</h2>
				<p>
					The Site and the Services are provided to you "as is" and “as available” basis. We make no
					warranties, expressed or implied, about the Site or the Services, and we disclaim all
					other warranties, including without limitation, implied warranties or conditions of
					merchantability, fitness for a particular purpose, availability, uninterrupted operation,
					title or non-infringement of intellectual property or other violation of third-party
					rights. Further, we do not warrant or make any representations concerning the accuracy,
					likely results, or reliability of the use of the Site or the Services, or otherwise
					relating to such Services or on any web sites linked to the Site.
				</p>
				<p>
					We do not represent or guarantee that the Site or the Services will be free from loss,
					corruption, attack, viruses, interference, hacking, or other security intrusion, and we
					disclaim any liability relating thereto.
				</p>
				<p>
					We shall use reasonable efforts to protect information submitted by you in connection with
					your use of the Site, but you acknowledge and agree that your submission of such
					information is at your sole risk, and we hereby disclaim any and all liability to you for
					any loss or liability relating to such information in any way.
				</p>
				<p>
					In no case shall we or our suppliers or licensors, and our respective directors, officers,
					employees, affiliates, agents, contractors, and principals, be liable for any direct,
					indirect, incidental, punitive, special, or consequential damages arising from your use of
					the Site or any of the Services or for any other claim related in any way to your use of
					the Site or the Services, including, but not limited to, any errors or omissions in any
					content, or any loss or damage of any kind incurred as a result of the use of any content
					(or product) posted, transmitted, or otherwise made available via the Site, even if
					advised of their possibility. In all cases, our maximum aggregate liability to you for any
					loss, damage or liability that you may suffer from using the Site or the Services is the
					purchase price of the Services you obtained from the Site from which such loss, damage or
					liability arose.
				</p>
				<h2>Termination</h2>
				<ul>
					<li>
						<strong>Termination by Us.</strong> If you fail, or we suspect that you have failed, to
						comply with any of the provisions of the terms, including but not limited to failure to
						make payment of fees due, violation of any license to the Services, or infringement or
						other violation of third parties' rights, we, at our sole discretion, without notice to
						you may:
						<ul>
							<li>
								terminate the Agreement including your licenses to the Services (or any part
								thereof) and your account on the Site; and/or
							</li>
							<li>terminate only such licenses and your account; and/or</li>
							<li>
								preclude access to the Services (or any part thereof) through the Site or to your
								account.
							</li>
						</ul>
					</li>
					<li>
						<strong>Termination of the Services Offered by the Site.</strong> We reserve the right to
						modify, suspend, or discontinue the Site (or any part or content thereof) at any time with
						or without notice to you, and we will not be liable to you or to any third party should we
						exercise such rights.
					</li>
				</ul>
				<p>Last updated on January 31, 2023</p>
			</div>
		</div>
	</section>
</main>

<style lang="scss">
	.inner {
		grid-column: narrow;
	}
	.prose {
		max-width: 48rem;
		margin: 0 auto;
	}
	.content {
		:global {
			strong {
				color: var(--color-h);
			}
			img {
				@include breakpoint($laptop-sm) {
					margin-left: -4rem;
					margin-right: -4rem;
					max-width: calc(100% + 8rem);
					width: calc(100% + 8rem);
				}
			}

			ol {
				counter-reset: item;

				> li {
					&::before {
						content: counter(item) '.';
						counter-increment: item;
					}

					ol {
						li::before {
							content: counter(item, lower-latin) '.';
						}
					}
				}
			}

			ul {
				> li {
					&::before {
						content: '•';
						color: var(--color-accent);
					}

					> ul {
						> li {
							&::before {
								content: '–';
								color: var(--color-accent);
							}
						}
					}
				}
			}

			ol,
			ul {
				list-style: none;
				margin-top: var(--p-break);
				margin-bottom: var(--p-break);

				&:first-child {
					margin-top: 0;
				}

				&:last-child {
					margin-bottom: 0;
				}

				> li {
					position: relative;
					padding-left: 1.5em;
					margin-bottom: var(--li-break);

					&::before {
						width: 1em;
						text-align: left;
						position: absolute;
						left: 0.25em;
					}

					&:last-of-type {
						margin-bottom: 0;
					}

					> ol,
					> ul {
						margin-top: var(--li-break);
					}
				}

				&.no-bullets {
					> li {
						padding-left: 0;

						&::before {
							content: none;
						}
					}
				}
			}

			a {
				&[target='_blank'] {
					@include external-link;
				}
			}
		}
	}
</style>
