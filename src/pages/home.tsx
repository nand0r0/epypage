import Navbar from "../components/navbar";
import Experience from "../components/expElements";
import "./home.scss";

function Home() {
	const experiences: [string, string, number][] = [
		["JavaScript/TypeScript", "2 Years", 70],
		["Python", "Half a year", 40],
		["React", "Just started", 20],
		["Luau(roblox)", "2 Years", 60],
		["Java", "Just started", 5],
	];

	const listitems = experiences.map((item) => <Experience key={item[0]} name={item[0]} amt={item[1]} perc={item[2]} />);

	return (
		<>
			<Navbar />
			<article>
				<h3>My resume</h3>
				<div className="container-fluid grid">
					<div>
						<h4>Nand0r0</h4>
						<p style={{ textAlign: "left" }}>
							Hi! I'm Nand0r0, and this is my website. I have 2 years of experience in basic JavaScript from logiscool, and another 2 years from myself. Im curently in high school and wanting to learn
							a full-stack framework and java.
						</p>
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
