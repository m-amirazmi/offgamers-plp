export const Header = () => {
	return (
		<header className="header">
			<div className="container flex items-center justify-between">
				<div className="header-logo">
					<img src="/images/logo.png" alt="logo" />
				</div>
				<div className="header-right">
					<div className="header-switcher">
						<div className="header-switcher-lang">
							<div className="header-switcher-lang-flag">
								<img src="/images/flags/my.svg" alt="flag" />
							</div>
							<p>MALAYSIA (MELAYU)</p>
							<div className="header-switcher-lang-chevron">
								<img src="/images/icons/chevron-down.svg" alt="dropdown lang" />
							</div>
						</div>
						<div className="header-switcher-currency">
							<div className="header-switcher-currency-flag">
								<img src="/images/flags/my.svg" alt="flag" />
							</div>
							<p>MYR</p>
							<div className="header-switcher-currency-chevron">
								<img src="/images/icons/chevron-down.svg" alt="dropdown lang" />
							</div>
						</div>
					</div>
					<div className="header-cart">
						<div className="header-cart-icon">
							<img src="/images/icons/bag.svg" />
						</div>
						<div className="header-cart-counter">0</div>
					</div>
				</div>
			</div>
		</header>
	);
};
