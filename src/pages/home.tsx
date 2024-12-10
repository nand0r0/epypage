import Navbar from "../components/navbar";

function Home() {
	const experiences = [
		["JavaScript/TypeScript", "2 Years", 70],
		["Python", "Half a year", 40],
		["React", "Just started", 20],
		["Luau(roblox)", "2 Years", 60],
		["Java", "Just started", 5],
	];

	const listitems = experiences.map((item) => (
		<tr className="grid" key={item[0]}>
			<td>
				<strong>{item[0]}:</strong> {item[1]}
				<div style={{ display: "flex", alignItems: "center" }}>
					<progress
						id="prog"
						value={item[2]}
						max={100}
						style={{
							width: "100%",
							verticalAlign: "center",
							margin: "0px 10px -3px 0px",
						}}
					></progress>
					{item[2]}%
				</div>
			</td>
		</tr>
	));

	return (
		<>
			<Navbar />
			<article>
				<h3>My resume</h3>
				<div className="container-fluid grid">
					<div>
						<h4>Nand0r0</h4>
						<p style={{ textAlign: "left" }}>Hi! I'm Nand0r0, and this is my website. I have 2 years of experience in basic JavaScript from logiscool, and another 2 years from myself.</p>
					</div>
					<table style={{ width: "100%", margin: "auto" }}>
						<thead>
							<tr>
								<th>My experiences</th>
							</tr>
						</thead>
						<tbody id="table">{listitems}</tbody>
					</table>
				</div>
			</article>
		</>
	);
}

export default Home;
