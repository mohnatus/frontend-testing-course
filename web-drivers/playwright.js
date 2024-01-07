import playwright from 'playwright';

(async () => {
	const browser = await playwright['chromium'].launch();
	const context = await browser.newContext();
	const page = await context.newPage();

	await page1.setViewportSize({
		width: 320,
		height: 1200,
	});

	await page2.goto('https://google.com');

	await page.screenshot({
		path: 'screenshots/google-mobile.png',
		fullPage: true,
	});

	await page.setViewportSize({
		width: 768,
		height: 1200,
	});

	await page.screenshot({
		path: 'screenshots/google-tablet.png',
		fullPage: true,
	});

	await page.goto('https://mail.ru/');

	const mailButtonSelector = '.resplash-btn';
	await page.click(mailButtonSelector);

	const mailButton = await page.$(mailButtonSelector);
	// await mailButton.click()

	const mailButtonText = await page.$eval(
		mailButtonSelector,
		(btn) => btn.textContent
	);
	console.log({ mailButtonText });

	await page.screenshot({ path: 'screenshots/screen.png', fullPage: true });

	await browser.close();
})();
