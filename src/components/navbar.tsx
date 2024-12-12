import "./navbar.scss";

function Navbar() {
	return (
		<>
			<nav
				style={{
					position: "sticky",
					top: 0,
					padding: "0px 20px",
					margin: "0px",
					borderRadius: "6px",
					backgroundColor: "rgb(14, 17, 24, 0.9)",
					zIndex: "9",
				}}
			>
				<ul>
					<li>
						<a href="/epypage/">Home</a>
					</li>
					<li>
						<a href="/epypage/#/loadoutgen/">Loadout generator</a>
					</li>
				</ul>
				<ul>
					<li>
						<a href="https://github.com/nand0r0" target="blank">
							GitHub
						</a>
					</li>
					<li>
						<a href="https://react.dev/" target="blank">
							<img src={import.meta.env.BASE_URL + "/src/assets/React.svg"} className="rotate" alt="" />
						</a>
					</li>
				</ul>
			</nav>
			<hr />
		</>
	);
}

export default Navbar;
