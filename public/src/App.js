function App() {
	return (
		<div>
			<section className="bg-emerald-900 text-emerald-200">
				<div className="container mx-auto py-20 grid grid-cols-4">
						<div className="col-span-3">
							<h1>Ciao, sono Stefano.</h1>
							<p>Sono un Full Stack Developer con esperienza, sempre pronto ad affacciarsi ed imparare nuove tecnologie.</p>
							<p>Fin da piccolo sono guidato dalla mia passione per l'informatica e per la tecnologia: a 8 anni ho studiato BASIC, a 12 Javascript.</p> 
							<p>Ho lavorato in piccole e grandi realtà, ma anche in proprio.</p>
						</div>
						<div>
							<div className="w-40 mx-auto"><img className="rounded-full" src="./stefano-di-pasquale.jpg" alt="Stefano Di Pasquale Full Stack Developer"/></div>
							<div className="flex space-x-1 justify-center items-center">
								<div>social</div>
								<div>social</div>
								<div>social</div>
							</div>
						</div>
				</div>
			</section>
			<section className="bg-black text-emerald-200">
				<div className="container mx-auto py-5 grid grid-cols-2">
					<div>
						<h2>Made with</h2>
					</div>
					<div className="flex space-x-1 justify-end items-center">
						<div><i className="text-4xl devicon-react-original"></i></div>
						<div><i className="text-4xl devicon-tailwindcss-plain"></i></div>
						<div><i className="text-4xl devicon-fedora-plain"></i></div>
					</div>
				</div>
			</section>
			<section className="bg-emerald-900 text-emerald-200">
				<div className="container mx-auto py-10">
					<h2>My experience</h2>
					<div className="flex space-x-1 justify-center items-center">
						<div className="bg-emerald-800 text-white rounded p-8">
							<h3>Aeronautica Militare</h3>
							<p>Aprile 2021</p>
							<p>Ho lavorato a diversi progetti in ambito geospaziale e meteo tra cui la produzione della nuova versione di MeteoAM, di WEPES (Weather Environment Prediction Editing System) e la messa in sicurezza di SICAM (Sistema Integrato Climatologico dell’Aeronautica Militare), dal Vulnerability Assestment all'effettiva lavorazione.</p>
						</div>
						<div className="bg-emerald-800 text-white rounded p-8">
							<h3>Aeronautica Militare</h3>
							<p>Aprile 2021</p>
							<p>Ho prodotto un portale web per NAV Portugal, dalla configurazione del server, allo sviluppo deella piattaforma e dei plugin richiesti dal cliente, alla stesura di un manuale d'uso per l'utente. Ho guidato il team di sviluppo come Team Leader. E stato un contratto a progetto con deadline di un mese.</p>
						</div>
					</div>
				</div>
			</section>
			<section className="bg-emerald-900 text-emerald-200">
				<div className="container mx-auto py-10">
					<h2>My skills</h2>
					<div className="flex space-x-1 justify-center items-center">
						<div className="bg-emerald-800 text-white rounded p-8 min-w-1/5">
							<div className="mb-1 text-base font-medium dark:text-white">Dark</div>
							<div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
								<div className="bg-gray-600 h-2.5 rounded-full dark:bg-gray-300 w-1/5"></div>
							</div>
						</div>
						<div className="bg-emerald-800 text-white rounded p-8 min-w-1/5">
							<div className="mb-1 text-base font-medium dark:text-white">Dark</div>
							<div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
								<div className="bg-gray-600 h-2.5 rounded-full dark:bg-gray-300 w-1/5"></div>
							</div>
						</div>
						<div className="bg-emerald-800 text-white rounded p-8 min-w-1/5">
							<div className="mb-1 text-base font-medium dark:text-white">Dark</div>
							<div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
								<div className="bg-gray-600 h-2.5 rounded-full dark:bg-gray-300 w-1/5"></div>
							</div>
						</div>
						<div className="bg-emerald-800 text-white rounded p-8 min-w-1/5">
							<div className="mb-1 text-base font-medium dark:text-white">Dark</div>
							<div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
								<div className="bg-gray-600 h-2.5 rounded-full dark:bg-gray-300 w-1/5"></div>
							</div>
						</div>
						<div className="bg-emerald-800 text-white rounded p-8 min-w-1/5">
							<div className="mb-1 text-base font-medium dark:text-white">Dark</div>
							<div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
								<div className="bg-gray-600 h-2.5 rounded-full dark:bg-gray-300 w-1/5"></div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="bg-emerald-900 text-emerald-200">
				<div className="container mx-auto py-10">
					<h2>Other</h2>
					<div className="flex space-x-1 justify-center items-center">
						<div className="bg-emerald-800 text-white rounded p-8">card</div>
						<div className="bg-emerald-800 text-white rounded p-8">card</div>
						<div className="bg-emerald-800 text-white rounded p-8">card</div>
					</div>
				</div>
			</section>
		</div>
	);
}
export default App;
