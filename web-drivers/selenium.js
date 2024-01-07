import { Builder, By, Key, until } from 'selenium-webdriver';

async function seleniumTest() {
	const driver = await new Builder().forBrowser('chrome').build();
	console.log({ driver });

	await driver.get('https://www.google.com');

	await driver.wait(function () {
		return driver
			.executeScript(`return document.readyState`)
			.then(function (readyState) {
				console.log({ readyState });
				return readyState === 'complete';
			});
	});

	const findSearchInputRequest = By.name('q');
	const searchInput = await driver.findElement(findSearchInputRequest);
	console.log({ searchInput });

	searchInput.sendKeys('hello', Key.ENTER);

	const findHeaderRequest = By.css('h3');
	const waitingTime = 50_000;
	const firstHeader = await driver.wait(
		until.elementLocated(findHeaderRequest),
		waitingTime
	);
	console.log({ firstHeader });

	const headerContent = await firstHeader.getAttribute('textContent');

	console.log({ headerContent });

	driver.quit();
}

seleniumTest();
