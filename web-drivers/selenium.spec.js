import { Builder, By, until } from 'selenium-webdriver';

const waitingTime = 30000;
const google = 'https://www.google.com';

describe('Interaction with web page in chrome', () => {
	let driver;

	beforeEach(async () => {
		driver = await new Builder().forBrowser('chrome').build();
	});

	afterEach(async () => {
		await driver.quit()
	})

	test(
		'should open google page',
		async () => {
			await driver.get(google);
			const findSearchButtonRequest = By.name('btnK');

			const searchButton = await driver.wait(
				until.elementLocated(findSearchButtonRequest),
				waitingTime
			);

			const searchButtonText = await searchButton.getAttribute('value');

			expect(searchButtonText).toBe('Поиск в Google');
		},
		waitingTime
	);

	test('should get page source', async () => {
		await driver.get(google);
		const source = await driver.getPageSource();

		console.log({ source });

		expect(source.includes('Google')).toBe(true)
	});

	test.only('should make screenshots', async () => {
		await driver.get(google)
		const body = await driver.findElement(By.css('body'))
		const screenshot = await body.takeScreenshot()

		console.log({ screenshot })
	})
});
