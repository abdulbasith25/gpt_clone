import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./main.css";
import { Context } from "../../context/Context";

const Main = () => {
	const {
		onSent,
		recentPrompt,
		showResults,
		loading,
		resultData,
		setInput,
		input,
	} = useContext(Context);

    const handleCardClick = (promptText) => {
		setInput(promptText);
	};

	return (
		<div className="main">
			<div className="nav">
				<p>Gemini</p>
				<img src={assets.user} alt="User" />
			</div>
			<div className="main-container">
				{!showResults ? (
					<>
						<div className="greet">
							<p>
								<span>Hello, Dev</span>
							</p>
							<p>How Can I Help You Today?</p>
						</div>
						<div className="cards">
							<div
								className="card"
								onClick={() =>
									handleCardClick("Suggest Some Place To Visit In India.")
								}
							>
								<p>Suggest Some Place To Visit In India.</p>
								<img src={assets.compass_icon} alt="Compass" />
							</div>
							<div
								className="card"
								onClick={() =>
									handleCardClick(
										"Explain the process of photosynthesis in simple terms"
									)
								}
							>
								<p>Explain the process of photosynthesis in simple terms</p>
								<img src={assets.message_icon} alt="Message" />
							</div>
							<div
								className="card"
								onClick={() =>
									handleCardClick("How do you create a responsive navbar using CSS and JavaScript?")
								}
							>
								<p>How do you create a responsive navbar using CSS and JavaScript?</p>
								<img src={assets.bulb_icon} alt="Idea" />
							</div>
							<div
								className="card"
								onClick={() => {
									handleCardClick(
										"What are some essential skills for becoming a front-end developer?"
									);
								}}
							>
								<p>What are some essential skills for becoming a front-end developer?</p>
								<img src={assets.code_icon} alt="Code" />
							</div>
						</div>
					</>
				) : (
					<div className="result">
						<div className="result-title">
							<img src={assets.user} alt="User" />
							<p>{recentPrompt}</p>
						</div>
						<div className="result-data">
							<img src={assets.gemini_icon} alt="Gemini" />
							{loading ? (
								<div className="loader">
									<hr />
									<hr />
									<hr />
								</div>
							) : (
								<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
							)}
						</div>
					</div>
				)}
			</div>

			<div className="main-bottom">
				<div className="search-box">
					<input
						onChange={(e) => setInput(e.target.value)}
						value={input}
						type="text"
						placeholder="Enter the Prompt Here"
					/>
					<div className="input-actions">
						<img src={assets.gallery_icon} alt="Gallery" />
						<img src={assets.mic_icon} alt="Microphone" />
						<img
							src={assets.send_icon}
							alt="Send"
							onClick={() => onSent()}
						/>
					</div>
				</div>
				<div className="bottom-info">
					<p>
						Gemini may display inaccurate info, including about people, so
						double-check its responses. Your privacy & Gemini Apps
					</p>
				</div>
			</div>
		</div>
	);
};

export default Main;