import Navbar from "../components/navbar";
import "./towergen.scss";
import { useEffect, useState } from "react";

//checkbox values
let CBvalues = new Map();

const options = [
	["Support", "Every tower that has support as its main purpose"],
	["Event", "Every event tower"],
	["Level", "Every level tower"],
	["Hardcore", "Every hardcore tower"],
];

//checkboxes
function listitems() {
	let obj = new Map();

	options.forEach((element) => {
		obj.set(element[0], true);
	});

	let [dataval, setdataval] = useState(obj);

	let Listitems = options.map((item) => (
		<label key={item[0]}>
			<input type="checkbox" name={item[0]} checked={dataval.get(item[0])} onChange={(e) => setdataval((map) => new Map(map.set(item[0], e.target.checked)))} />
			include <span data-tooltip={item[1]}> {item[0]}</span> towers
		</label>
	));
	CBvalues = dataval;
	return Listitems;
}

function Towers() {
	let Towerlist = new Map();
	//tower name, tower image, tower class
	let finalList: Map<string, [string, string]> = new Map();
	let [towersamt, settowersamt] = useState(5);

	function removeGolden(towerName: string) {
		if (towerName.includes("Golden")) {
			return towerName.replace("Golden ", "");
		}
		return towerName;
	}

	function convertFinalList() {
		let idxarray = [];
		for (let [towername, [towerimage, towerclass]] of finalList) {
			if (towerclass == "Golden") {
				towername = "Golden " + towername;
			}
			idxarray.push(
				<div key={towername} className={towerclass} onClick={() => clicked(removeGolden(towername))}>
					<p style={{ fontSize: "80%", userSelect: "none" }}>
						<strong>{towername}</strong>
					</p>
					<img draggable="false" src={import.meta.env.BASE_URL + `/src/assets/IMG/${towerimage}`} alt="" />
				</div>
			);
		}
		return idxarray;
	}

	for (let i = 0; i < 5; i++) {
		finalList.set(`empty ${i + 1}`, ["Empty.png", "empty"]);
	}

	let [towerElements, settowerelements] = useState(convertFinalList());

	useEffect(() => {
		fetch(import.meta.env.BASE_URL + "/src/assets/towers.json")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				Towerlist = new Map(Object.entries(data));
			});
	});

	function clicked(Tname: string) {
		let idxlist = [];

		function rand(range: number, obj: any) {
			if (obj) {
				if (obj instanceof Map) {
					let obList = Array.from(obj.keys());
					let random = Math.floor(Math.random() * range);
					//[tower name, tower image]
					return [Array.from(obj.keys())[random], obj.get(obList[random])];
				}
				return obj[Math.floor(Math.random() * range)];
			}
			return Math.floor(Math.random() * range);
		}

		function convertToMap(idx: [string, object]) {
			let className = idx[0];
			let newmap = new Map(Object.entries(idx[1]));
			return [className, newmap];
		}

		for (let i of Towerlist) {
			if (CBvalues.get(i[0]) || CBvalues.get(i[0]) == undefined) {
				idxlist.push(convertToMap(i));
			}
		}

		if (Tname != "") {
			console.log(Tname, finalList.get(Tname));

			let randclass: [string, Map<string, string>] = rand(idxlist.length, idxlist);

			//[tower name, tower image]
			let randtower: [string, string] = rand(randclass[1].size, randclass[1]);

			while (Array.from(finalList.keys()).includes(randtower[0])) {
				randclass = rand(idxlist.length, idxlist);
				randtower = rand(randclass[1].size, randclass[1]);
			}

			//finalList.set(Tname, [randtower[1], randclass[0]]);
			//settowerelements(convertFinalList());
			return;
		}

		finalList = new Map();

		for (let i = 0; i < towersamt; i++) {
			//[Tower class, Map([[Tower name, Tower image]])]
			let randclass: [string, Map<string, string>] = rand(idxlist.length, idxlist);

			//[tower name, tower image]
			let randtower: [string, string] = rand(randclass[1].size, randclass[1]);

			while (Array.from(finalList.keys()).includes(randtower[0])) {
				randclass = rand(idxlist.length, idxlist);
				randtower = rand(randclass[1].size, randclass[1]);
			}
			finalList.set(randtower[0], [randtower[1], randclass[0]]);
		}

		for (let i = 0; i < 5 - towersamt; i++) {
			finalList.set(`empty ${i + towersamt + 1}`, ["Empty.png", "empty"]);
		}

		settowerelements(convertFinalList());
	}

	return (
		<>
			<Navbar />
			<a href="https://www.roblox.com/games/3260590327" target="blank">
				<img src={import.meta.env.BASE_URL + "/src/assets/IMG/NewLogo.png"} alt="" className="mainImg" />
			</a>
			<br /> <br />
			<h1>Loadout generator</h1>
			<br /> <br />
			<details style={{ textAlign: "left" }}>
				<summary>What the hell is this?</summary>
				<p>This site is for a Roblox game called "Tower defense simulator". It generates random loadouts by a click of a button.</p>
			</details>
			<hr />
			<fieldset style={{ display: "flex", columnGap: "60px", flexWrap: "wrap" }}>{listitems()}</fieldset>
			<label style={{ textAlign: "left" }} id="slide">
				Amount of towers generated: {towersamt}
				<input type="range" min={1} max={5} value={towersamt} onChange={(e) => settowersamt(+e.target.value)} />
			</label>
			<button onClick={() => clicked("")} id="mainButton">
				Generate
			</button>
			<br />
			<br />
			<article className="container-fluid" id="towers">
				{towerElements}
			</article>
		</>
	);
}

export default Towers;
