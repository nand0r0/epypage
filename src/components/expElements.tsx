import { useState } from "react";

interface Types {
	name: string;
	amt: string;
	perc: number;
}

function Experience({ name, amt, perc }: Types) {
	let [percentage, setPercentage] = useState(0);

	setTimeout(() => {
		setPercentage((prev) => perc + (perc - prev) / 10);
	}, 10);

	return (
		<tr className="grid">
			<td>
				<strong>{name}:</strong> {amt}
				<div style={{ display: "flex", alignItems: "center" }}>
					<progress
						id="prog"
						value={percentage}
						max={100}
						style={{
							width: "100%",
							verticalAlign: "center",
							margin: "0px 10px -3px 0px",
						}}
					></progress>
					{perc}%
				</div>
			</td>
		</tr>
	);
}

export default Experience;
