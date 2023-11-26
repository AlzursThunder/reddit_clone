import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Menu.module.css";

const Menu: React.FC = () => {
	return (
		<div className={styles.container}>
			<nav className={styles.nav}>
				<div className={styles.logoContainer}>
					<Link href={"/"}>
						<Image
							src={"/logo/mobile/logo-mobile.png"}
							alt="logo"
							height={38}
							width={38}
							className={styles.mobileLogo}
							priority
						/>
						<Image
							src={"/logo/desktop/vercel.svg"}
							alt="logo"
							height={40}
							width={120}
							className={styles.desktopLogo}
							priority
						/>
					</Link>
				</div>
			</nav>
		</div>
	);
};

export default Menu;
